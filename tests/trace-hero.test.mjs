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

test('ID-badge lanyard (Three.js) is lazy, accessible and degrades gracefully',()=>{
  assert.ok(statSync(new URL('../assets/trace/belt.js',import.meta.url)).size<640e3);
  assert.ok(statSync(new URL('../assets/trace/lanyard-portrait.webp',import.meta.url)).size<60e3);
  assert.match(html,/id="belt"[^>]*role="group"/);                       // labelled group
  assert.match(html,/class="belt-static"/);                              // no-JS / no-WebGL content
  assert.doesNotMatch(read('source/trace-belt/belt.src.js'),/BoundaryLab|Aetheris|Wayfarer/); // only the personal lanyard
  assert.match(js,/import\('\.\/assets\/trace\/belt\.js\?v=\d+'\)/);          // loaded on demand
  const src=read('source/trace-belt/belt.src.js');
  assert.match(src,/prefers-reduced-motion/);                            // static frame for reduced motion
  assert.match(src,/function fallback/);                                 // DOM fallback without WebGL
  assert.match(read('trace.css'),/\.belt-canvas\{[^}]*touch-action:pan-y/); // vertical scroll stays native
});

test('hero loops live, freezes on scroll and respects reduced motion / data saver',()=>{
  const js=read('trace.js'), html=read('index.html'), css=read('trace.css');
  assert.match(html,/id="loop"[^>]*muted[^>]*loop[^>]*playsinline/);
  assert.match(js,/hero-loop\.mp4/);
  assert.match(js,/!reduce && !saveData/);                    // no autoplay for reduced motion / data saver
  assert.match(js,/loop\.pause\(\)/);                          // freezes when scrolling starts
  assert.match(js,/loop\.play\(\)/);                           // resumes at the top
  assert.match(css,/prefers-reduced-motion:reduce\)\{\.loop\{display:none\}/);
  for(const f of ['hero-loop.mp4','hero-loop-720.mp4']) assert.ok(statSync(new URL('../assets/trace/'+f,import.meta.url)).size<3e6,f);
});
