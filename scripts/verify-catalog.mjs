import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load as loadYaml } from 'js-yaml';
import { verifyCatalog } from './lib/verify-catalog.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentDirectory = path.join(repositoryRoot, 'event-catalog-content');
const structureOnly = process.argv.includes('--structure-only');
const manifestUrl = process.env.ARCHITECTURE_URL
  ?? 'https://raw.githubusercontent.com/arcadia-editions/arcadia-editions-architecture/main/zenwave-architecture.yml';

let manifest;
if (!structureOnly) {
  if (!manifestUrl.startsWith('https://')) {
    console.error(`ARCHITECTURE_URL must use HTTPS: ${manifestUrl}`);
    process.exit(2);
  }
  const response = await fetch(manifestUrl);
  if (!response.ok) {
    console.error(`Could not fetch the architecture manifest (${response.status}): ${manifestUrl}`);
    process.exit(1);
  }
  manifest = loadYaml(await response.text());
}

const errors = await verifyCatalog({ contentDirectory, manifest });
if (errors.length > 0) {
  console.error(`Generated catalog verification failed (${errors.length}):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
console.log(`Generated catalog verified${structureOnly ? ' (structure only)' : ' against the architecture manifest'}.`);
