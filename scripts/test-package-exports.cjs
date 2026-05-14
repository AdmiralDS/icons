/* eslint-disable @typescript-eslint/no-require-imports */

const { execFileSync } = require('child_process');
const { mkdtempSync, rmSync } = require('fs');
const { tmpdir } = require('os');
const { join, resolve } = require('path');

const packageRoot = resolve(__dirname, '..');
const tempDir = mkdtempSync(join(tmpdir(), 'admiral-icons-package-exports-'));

const run = (command, args, options = {}) =>
  execFileSync(command, args, {
    cwd: tempDir,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    ...options,
  }).trim();

try {
  const tarballName = execFileSync('npm', ['pack', '--silent', '--pack-destination', tempDir], {
    cwd: packageRoot,
    encoding: 'utf8',
  }).trim();
  const tarballPath = join(tempDir, tarballName);

  run('npm', ['init', '-y']);
  run('npm', ['install', '--silent', tarballPath]);

  const cjsResult = run('node', [
    '-e',
    [
      "const icons = require('@admiral-ds/icons');",
      "if (Object.keys(icons).length === 0) throw new Error('CJS import has no exports');",
      "if (typeof icons.SystemSearchOutline !== 'function') throw new Error('CJS import cannot access SystemSearchOutline');",
      'console.log(`cjs ${Object.keys(icons).length}`);',
    ].join(' '),
  ]);

  const esmResult = run('node', [
    '--input-type=module',
    '-e',
    [
      "import * as icons from '@admiral-ds/icons';",
      "if (Object.keys(icons).length === 0) throw new Error('ESM import has no exports');",
      "if (typeof icons.SystemSearchOutline !== 'function') throw new Error('ESM import cannot access SystemSearchOutline');",
      'console.log(`esm ${Object.keys(icons).length}`);',
    ].join(' '),
  ]);

  console.log(cjsResult);
  console.log(esmResult);
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}
