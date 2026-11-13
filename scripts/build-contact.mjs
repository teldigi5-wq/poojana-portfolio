// Builds the React + Tailwind + TypeScript contact section (contact-src/) into assets/trace/contact.js + contact.css.
// Offline-friendly: motion/lucide/radix are local shims with the same API (see contact-src/shims). Run: node scripts/build-contact.mjs
import { build } from '/opt/npm-tools/node_modules/esbuild/lib/main.js';
import { compile } from '/opt/npm-tools/node_modules/tailwindcss/dist/lib.mjs';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { createRequire } from 'node:module';

const root = resolve(import.meta.dirname, '..');
const src = join(root, 'contact-src');
const NM = '/opt/npm-tools/node_modules';

await build({
  entryPoints: [join(src, 'main.tsx')],
  outfile: join(root, 'assets/trace/contact.js'),
  bundle: true, minify: true, format: 'esm', target: 'es2020', jsx: 'automatic', legalComments: 'none',
  nodePaths: [NM],
  alias: {
    '@': src,
    d3: join(src, 'shims/d3.ts'),
    'motion/react': join(src, 'shims/motion.tsx'),
    'lucide-react': join(src, 'shims/lucide.tsx'),
    '@radix-ui/react-slot': join(src, 'shims/radix-slot.tsx'),
    '@radix-ui/react-separator': join(src, 'shims/radix-separator.tsx'),
  },
  define: { 'process.env.NODE_ENV': '"production"' },
});

// Tailwind v4: scan the sources for class candidates, compile, then un-layer so the utilities beat the site's element rules.
const files = [];
(function walk(d) { for (const n of readdirSync(d)) { const p = join(d, n); statSync(p).isDirectory() ? walk(p) : /\.(tsx|ts)$/.test(n) && files.push(p); } })(src);
const cand = new Set();
for (const f of files) for (const t of readFileSync(f, 'utf8').split(/[\s"'`{}()<>,;]+/)) if (t && t.length < 120) cand.add(t);
const css = readFileSync(join(src, 'styles.css'), 'utf8');
const compiler = await compile(css, {
  base: src,
  loadStylesheet: async (id, base) => {
    const p = id === 'tailwindcss' ? join(NM, 'tailwindcss/index.css') : id.startsWith('tailwindcss/') ? join(NM, 'tailwindcss', id.slice(12).replace(/^(.*?)(\.css)?$/, '$1.css')) : resolve(base, id);
    return { path: p, base: dirname(p), content: readFileSync(p, 'utf8') };
  },
});
let out = compiler.build([...cand]);
// drop @layer wrappers (keep the rules); lightningcss is not needed for this output
out = out.replace(/@layer\s+[\w\s,.-]+;\s*/g, '');
{ // unwrap "@layer name { ... }" blocks
  let r = '', i = 0;
  while (i < out.length) {
    const m = /@layer\s+[\w.-]+\s*\{/y; m.lastIndex = i;
    const hit = out.indexOf('@layer', i);
    if (hit < 0) { r += out.slice(i); break; }
    r += out.slice(i, hit);
    const open = out.indexOf('{', hit); let depth = 1, j = open + 1;
    while (depth && j < out.length) { const c = out[j++]; if (c === '{') depth++; else if (c === '}') depth--; }
    r += out.slice(open + 1, j - 1); i = j;
  }
  out = r;
}
writeFileSync(join(root, 'assets/trace/contact.css'), out.replace(/\n\s*\n/g, '\n'));
console.log('contact.js', readFileSync(join(root, 'assets/trace/contact.js')).length, 'bytes; contact.css', out.length, 'bytes');
