import { build } from 'esbuild';
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
process.chdir(fileURLToPath(new URL('..', import.meta.url)));
mkdirSync('dist/__qa',{recursive:true});
await build({entryPoints:['tests/browser/navbar-fixture.tsx'],outfile:'dist/__qa/fixture.js',bundle:true,format:'iife',platform:'browser',target:'es2022',jsx:'automatic',tsconfig:'tsconfig.json',define:{'process.env.NODE_ENV':'"development"'}});
writeFileSync('dist/__qa/index.html','<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Navbar QA</title><link rel="stylesheet" href="../assets/liquid-navbar.css"><div id="fixture"></div><script src="fixture.js"></script></html>');
writeFileSync('dist/__qa/responsive.html',`<!doctype html><html lang="en"><meta charset="utf-8"><title>Responsive QA</title><style>body{margin:16px;background:#ccc;font:14px Arial}.frames{display:flex;align-items:flex-start;gap:20px;flex-wrap:wrap}iframe{border:0;display:block;background:#111}h2{font-size:16px}</style><div class="frames"><div><h2>390 × 844</h2><iframe id="phone" title="Phone" src="/" width="390" height="844"></iframe></div><div><h2>320 × 740</h2><iframe id="small" title="Small phone" src="/" width="320" height="740"></iframe></div><div><h2>768 × 1024</h2><iframe id="tablet" title="Tablet" src="/" width="768" height="1024"></iframe></div><div><h2>844 × 390</h2><iframe id="landscape" title="Landscape" src="/" width="844" height="390"></iframe></div><div><h2>No JavaScript: 390 × 844</h2><iframe id="nojs" title="No JavaScript" sandbox="allow-same-origin" src="/" width="390" height="844"></iframe></div></div></html>`);
console.log('Local fixtures: /__qa/ and /__qa/responsive.html');
