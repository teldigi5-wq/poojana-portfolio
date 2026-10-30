import { build } from 'esbuild';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { gzipSync } from 'node:zlib';

process.chdir(fileURLToPath(new URL('..', import.meta.url)));
// Browser fixtures are local-only and must never enter a deploy artifact.
rmSync('dist/__qa', {recursive:true, force:true});
const result = await build({
  entryPoints: ['src/navbar.tsx'],
  outfile: 'dist/assets/liquid-navbar.js',
  bundle: true, minify: true, format: 'iife', platform: 'browser',
  target: ['es2022'], jsx: 'automatic', tsconfig: 'tsconfig.json',
  define: {'process.env.NODE_ENV': '"production"'},
  legalComments: 'external', metafile: true,
});
const css = spawnSync(process.execPath, [
  'node_modules/@tailwindcss/cli/dist/index.mjs',
  '-i', 'styles/globals.css', '-o', 'dist/assets/liquid-navbar.css', '--minify'
], {stdio:'inherit'});
if (css.status !== 0) process.exit(css.status || 1);
const sizes = Object.fromEntries(['js','css'].map(ext => {
  const path = `dist/assets/liquid-navbar.${ext}`;
  const data = readFileSync(path);
  return [path, {bytes: data.length, gzip: gzipSync(data).length}];
}));
writeFileSync('build-report.json', JSON.stringify({assets:sizes, inputs:Object.keys(result.metafile.inputs)},null,2)+'\n');
console.log(JSON.stringify(sizes));
