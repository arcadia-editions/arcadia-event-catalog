import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { load as loadYaml } from 'js-yaml';

const semver = /^(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?$/;

async function* currentIndexFiles(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === 'versioned') continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) yield* currentIndexFiles(fullPath);
    else if (entry.name === 'index.mdx') yield fullPath;
  }
}

function frontmatter(text) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  return match ? loadYaml(match[1]) : null;
}

/** Domains, subdomains and services declared by the architecture manifest, keyed by id. */
export function manifestResources(manifest) {
  const expected = new Map();
  const visit = (node, kind) => {
    for (const entry of Object.values(node ?? {})) {
      if (!entry?.id) continue;
      expected.set(entry.id, { kind, version: entry.version == null ? undefined : String(entry.version) });
      visit(entry.subdomains, 'subdomains');
      visit(entry.services, 'services');
    }
  };
  visit(manifest?.domains, 'domains');
  return expected;
}

/**
 * Checks the generated EventCatalog content. Returns a list of problems; empty means publishable.
 * With a manifest, the content must also match it (nothing missing, nothing left over, same service versions).
 */
export async function verifyCatalog({ contentDirectory, manifest }) {
  const errors = [];
  const found = new Map();
  const domainsDirectory = path.join(contentDirectory, 'domains');

  let files = [];
  try {
    for await (const file of currentIndexFiles(domainsDirectory)) files.push(file);
  } catch {
    return [`${domainsDirectory} does not exist or is unreadable`];
  }
  if (files.length === 0) return ['the generated catalog contains no resources'];

  for (const file of files) {
    const relative = path.relative(contentDirectory, file).split(path.sep).join('/');
    const data = frontmatter(await readFile(file, 'utf8'));
    if (!data) { errors.push(`${relative}: missing frontmatter`); continue; }
    for (const field of ['id', 'name']) {
      if (typeof data[field] !== 'string' || data[field].trim() === '') errors.push(`${relative}: missing ${field}`);
    }
    if (!semver.test(String(data.version ?? ''))) errors.push(`${relative}: invalid version '${data.version}'`);
    if (data.id) found.set(data.id, { version: String(data.version), file: relative });
  }

  if (!manifest) return errors;
  const expected = manifestResources(manifest);
  if (expected.size === 0) return [...errors, 'the architecture manifest declares no domains'];

  for (const [id, { kind, version }] of expected) {
    const resource = found.get(id);
    if (!resource) errors.push(`${kind} '${id}' is in the manifest but missing from the catalog`);
    else if (kind === 'services' && version && resource.version !== version) {
      errors.push(`service '${id}' is ${resource.version} in the catalog but ${version} in the manifest`);
    }
  }
  // Only domain, subdomain and service index files are compared; channels, events and entities are not.
  const structural = /^domains\/[^/]+\/(subdomains\/[^/]+\/(services\/[^/]+\/)?)?index\.mdx$/;
  for (const [id, { file }] of found) {
    if (structural.test(file) && !expected.has(id)) errors.push(`'${id}' (${file}) is in the catalog but not in the manifest`);
  }
  return errors;
}
