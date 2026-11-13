// Builds the intro hologram (holo-src/holo.js, Three.js + custom shaders) into assets/trace/holo.js.
// Three.js is resolved from a local install (see THREE_PATH); the built file is committed. Run: node scripts/build-holo.mjs
import { build } from '/opt/npm-tools/node_modules/esbuild/lib/main.js';
import { resolve, join } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const THREE_PATH = process.env.THREE_PATH || '/home/claude/build-3d/node_modules';
await build({
  entryPoints: [join(root, 'holo-src/holo.js')], outfile: join(root, 'assets/trace/holo.js'),
  bundle: true, minify: true, format: 'esm', target: 'es2020', legalComments: 'none', nodePaths: [THREE_PATH],
});
console.log('holo.js built');
