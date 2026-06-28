import { spawnSync } from 'node:child_process';
import { cpSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptsDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptsDirectory, '..');
const command = process.argv[2];
const commandArguments = process.argv.slice(3);
const allowedCommands = new Set(['build', 'dev', 'preview']);

if (!allowedCommands.has(command)) {
  throw new Error(`Expected one of ${[...allowedCommands].join(', ')}, received ${command ?? '(none)'}`);
}

const prepare = spawnSync(process.execPath, [path.join(scriptsDirectory, 'prepare-catalog.mjs')], {
  cwd: repositoryRoot,
  stdio: 'inherit',
});
if (prepare.status !== 0) process.exit(prepare.status ?? 1);

const projectDirectory = path.join(repositoryRoot, '.eventcatalog-build', 'catalog');
const eventCatalogBin = path.join(repositoryRoot, 'node_modules', '@eventcatalog', 'core', 'bin', 'eventcatalog.js');
const result = spawnSync(process.execPath, [eventCatalogBin, command, ...commandArguments], {
  cwd: repositoryRoot,
  env: {
    ...process.env,
    PROJECT_DIR: projectDirectory,
  },
  stdio: 'inherit',
});

if (result.status !== 0) process.exit(result.status ?? 1);

if (command === 'build') {
  const stagedOutput = path.join(projectDirectory, 'dist');
  const repositoryOutput = path.join(repositoryRoot, 'dist');
  if (!repositoryOutput.startsWith(`${repositoryRoot}${path.sep}`)) {
    throw new Error(`Refusing to replace an unsafe output path: ${repositoryOutput}`);
  }
  rmSync(repositoryOutput, { recursive: true, force: true });
  cpSync(stagedOutput, repositoryOutput, { recursive: true });
}
