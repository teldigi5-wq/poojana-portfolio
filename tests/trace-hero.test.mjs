import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,statSync} from 'node:fs';

const read=p=>readFileSync(new URL(`../${p}`,import.meta.url),'utf8');
const html=read('trace.html'),js=read('trace.js');

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

test('trace is served at / and the previous homepage stays reachable',()=>{
  const cfg=JSON.parse(read('vercel.json'));
  assert.deepEqual(cfg.rewrites,[{source:'/',destination:'/trace.html'},{source:'/classic',destination:'/index.html'}]);
  assert.match(html,/rel="canonical" href="https:\/\/poojana-portfolio\.vercel\.app\/"/);
});
