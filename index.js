import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ignoredDirs = new Set(['node_modules', '.git']);
const ignoredFiles = new Set(['index.js']);

async function discoverExerciseFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) {
        files.push(...await discoverExerciseFiles(fullPath));
      }
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.js') && !ignoredFiles.has(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function findRunnableExport(moduleExports) {
  if (typeof moduleExports.runDemo === 'function') {
    return moduleExports.runDemo;
  }

  if (typeof moduleExports.default === 'function') {
    return moduleExports.default;
  }

  const exportedFunctions = Object.entries(moduleExports)
    .filter(([, value]) => typeof value === 'function')
    .map(([name]) => name);

  if (exportedFunctions.length === 1) {
    return moduleExports[exportedFunctions[0]];
  }

  return null;
}

async function runPlayground() {
  console.log('=== DSA Playground ===');
  console.log('Running exercises from Node.js...');

  const files = (await discoverExerciseFiles(__dirname)).sort();

  if (files.length === 0) {
    console.log('No exercise files found.');
    return;
  }

  for (const filePath of files) {
    const relativePath = path.relative(__dirname, filePath).replaceAll(path.sep, '/');
    const moduleUrl = pathToFileURL(filePath).href;
    const moduleExports = await import(moduleUrl);
    const runnable = findRunnableExport(moduleExports);

    if (typeof runnable !== 'function') {
      console.log(`\nSkipping ${relativePath}: no runnable export found.`);
      continue;
    }

    console.log(`\n▶ ${relativePath}`);
    runnable();
  }

  console.log('\nAll exercises completed.');
}

runPlayground();
