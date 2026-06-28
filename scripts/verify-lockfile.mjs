import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load as loadYaml } from 'js-yaml';

const scriptsDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptsDirectory, '..');
const packageJson = JSON.parse(await readFile(path.join(repositoryRoot, 'package.json'), 'utf8'));
const workspace = loadYaml(await readFile(path.join(repositoryRoot, 'pnpm-workspace.yaml'), 'utf8'));
const lockfileText = await readFile(path.join(repositoryRoot, 'pnpm-lock.yaml'), 'utf8');
const lockfile = loadYaml(lockfileText);
const exactVersion = /^(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?$/;
const errors = [];

for (const section of ['dependencies', 'devDependencies', 'optionalDependencies']) {
  for (const [name, version] of Object.entries(packageJson[section] ?? {})) {
    if (!exactVersion.test(version)) {
      errors.push(`${section}.${name} must use an exact version, found ${version}`);
    }
  }
}

for (const [name, version] of Object.entries(workspace.overrides ?? {})) {
  if (!exactVersion.test(String(version))) {
    errors.push(`pnpm-workspace.yaml overrides.${name} must use an exact version, found ${version}`);
  }
}

if (workspace.minimumReleaseAge !== 10080) {
  errors.push('pnpm-workspace.yaml minimumReleaseAge must remain seven days (10080 minutes)');
}

if (workspace.trustPolicy !== 'no-downgrade') {
  errors.push('pnpm-workspace.yaml trustPolicy must remain no-downgrade');
}

if (workspace.blockExoticSubdeps !== true) {
  errors.push('pnpm-workspace.yaml blockExoticSubdeps must remain enabled');
}

if (workspace.strictDepBuilds !== true) {
  errors.push('pnpm-workspace.yaml strictDepBuilds must remain enabled');
}

if (
  workspace.patchedDependencies?.['@astrojs/react@6.0.1'] !==
  'patches/@astrojs__react@6.0.1.patch'
) {
  errors.push('the reviewed @astrojs/react@6.0.1 compatibility patch must remain configured');
}

const serializedLockfile = JSON.stringify(lockfile);
const deniedLocators = [
  '@asyncapi/parser@3.4.1',
  '@asyncapi/parser@3.4.2',
  'github:asyncapi/cli#2efa4dff59bc3d3cecdf897ccf178f99b115d63d',
];

for (const locator of deniedLocators) {
  if (serializedLockfile.includes(locator)) {
    errors.push(`lockfile contains denied dependency locator ${locator}`);
  }
}

if (/(?:git\+ssh|git\+http|github:|gitlab:|bitbucket:)/i.test(serializedLockfile)) {
  errors.push('lockfile contains a Git-hosted dependency; registry-only transitive dependencies are required');
}

if (!lockfile?.lockfileVersion || !lockfile?.packages) {
  errors.push('pnpm lockfile is missing expected lockfileVersion/packages data');
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log('Dependency manifests use exact versions and the lockfile passed the denylist checks.');
