// Stamps ?v=<content hash> on every reference to assets/trace/*.js|css so a changed file always gets a new URL.
// Run: node scripts/stamp-assets.mjs        (rewrites)   |   node scripts/stamp-assets.mjs --check  (exit 1 if stale)
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const FILES = ['index.html', 'trace.js'];
const RE = /(assets\/trace\/[A-Za-z0-9._-]+\.(?:js|css))(?:\?v=[0-9a-f]+)?/g;
const hash = p => createHash('sha1').update(readFileSync(p)).digest('hex').slice(0, 8);
const check = process.argv.includes('--check');
let stale = 0;
for (const f of FILES) {
  const src = readFileSync(f, 'utf8');
  const out = src.replace(RE, (m, p) => `${p}?v=${hash(p)}`);
  if (out !== src) { stale++; if (!check) writeFileSync(f, out); else console.error(`stale asset version in ${f}`); }
}
if (check && stale) process.exit(1);
console.log(check ? 'asset versions are current' : `stamped (${stale} file(s) changed)`);
