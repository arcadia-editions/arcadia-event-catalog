import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptsDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptsDirectory, '..');
const generatedContent = path.join(repositoryRoot, 'event-catalog-content');
const siteOverlay = path.join(repositoryRoot, 'site');
const stagingDirectory = path.join(repositoryRoot, '.eventcatalog-build', 'catalog');

if (!stagingDirectory.startsWith(`${repositoryRoot}${path.sep}`)) {
  throw new Error(`Refusing to prepare an unsafe staging path: ${stagingDirectory}`);
}

await rm(stagingDirectory, { recursive: true, force: true });
await mkdir(stagingDirectory, { recursive: true });

for (const entry of await readdir(generatedContent, { withFileTypes: true })) {
  if (entry.name === '.gitkeep') continue;
  await cp(path.join(generatedContent, entry.name), path.join(stagingDirectory, entry.name), {
    recursive: true,
  });
}

await cp(siteOverlay, stagingDirectory, { recursive: true });
await writeFile(
  path.join(stagingDirectory, 'package.json'),
  `${JSON.stringify(
    {
      name: 'arcadia-event-catalog-build-overlay',
      version: '0.0.0',
      private: true,
      type: 'module',
    },
    null,
    2,
  )}\n`,
  'utf8',
);

console.log(stagingDirectory);
