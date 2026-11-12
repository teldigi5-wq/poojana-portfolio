import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,statSync} from 'node:fs';

const read=p=>readFileSync(new URL(`../${p}`,import.meta.url),'utf8');
const html=read('index.html'),js=read('trace.js');

test('hero assets referenced by the trace page exist and stay light',()=>{
  for(const [p,max] of [['assets/trace/hero-scene.webp',120e3],['assets/trace/hero-pushin.mp4',3e6],['assets/trace/glass-nav.js',60e3]])
    assert.ok(statSync(new URL(`../${p}`,import.meta.url)).size<max,p);
});
test('push-in video is progressive enhancement with a still fallback',()=>{
  assert.match(html,/<video[^>]*id="pushin"[^>]*muted[^>]*playsinline[^>]*preload="none"/);
  assert.match(js,/reduce \|\| innerWidth < 700/);
  assert.match(js,/saveData/);
  assert.match(js,/addEventListener\('error'/);
  assert.match(read('trace.css'),/\.has-video \.scene/);
});
test('CSP allows same-origin media',()=>{
  assert.match(read('vercel.json'),/media-src 'self'/);
});

test('Trace is the homepage and the previous homepage stays reachable',()=>{
  const cfg=JSON.parse(read('vercel.json'));
  assert.ok(cfg.redirects.some(r=>r.source==='/trace'&&r.destination==='/'));
  assert.match(html,/id="trace"/);                                  // index.html is the Trace page
  assert.match(read('classic.html'),/Engineering with intent/);     // previous homepage kept at /classic
  assert.match(html,/rel="canonical" href="https:\/\/poojana-portfolio\.vercel\.app\/"/);
});

test('lanyard badge is lazy, accessible and light',()=>{
  assert.ok(statSync(new URL('../assets/trace/lanyard-portrait.webp',import.meta.url)).size<60e3);
  assert.ok(statSync(new URL('../assets/trace/lanyard.js',import.meta.url)).size<12e3);
  assert.match(html,/id="lanyBtn"[^>]*aria-pressed/);          // keyboard flip control
  assert.match(html,/class="lany-face back" aria-hidden="true"/);  // back links hidden until flipped
  assert.match(js,/import\('\.\/assets\/trace\/lanyard\.js'\)/);   // loaded on demand
  assert.match(read('assets/trace/lanyard.js'),/prefers-reduced-motion/);
});
