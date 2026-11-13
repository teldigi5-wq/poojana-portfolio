import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,statSync} from 'node:fs';

const read=p=>readFileSync(new URL(`../${p}`,import.meta.url),'utf8');
const html=read('index.html'),js=read('trace.js');

test('hero assets referenced by the trace page exist and stay light',()=>{
  for(const [p,max] of [['assets/trace/hero-scene-2k.webp',150e3],['assets/trace/hero-pushin-v2.mp4',4.5e6],['assets/trace/glass-nav.js',60e3],['assets/trace/intro-hd.mp4',1.5e6],['assets/trace/intro-hd-poster.webp',60e3]])
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
  assert.ok(statSync(new URL('../assets/trace/card-portrait.webp',import.meta.url)).size<60e3);
  assert.match(html,/id="belt"[^>]*role="group"/);                       // labelled group
  assert.match(html,/class="belt-static"/);                              // no-JS / no-WebGL content
  assert.doesNotMatch(read('source/trace-belt/belt.src.js'),/BoundaryLab|Aetheris|Wayfarer/); // only the personal lanyard
  assert.match(js,/import\('\.\/assets\/trace\/belt\.js\?v=[0-9a-f]+'\)/);          // loaded on demand
  const src=read('source/trace-belt/belt.src.js');
  assert.match(src,/prefers-reduced-motion/);                            // static frame for reduced motion
  assert.match(src,/function fallback/);                                 // DOM fallback without WebGL
  assert.match(read('trace.css'),/\.belt-canvas\{[^}]*touch-action:pan-y/); // vertical scroll stays native
});

test('hero loops live, freezes on scroll and respects reduced motion / data saver',()=>{
  const js=read('trace.js'), html=read('index.html'), css=read('trace.css');
  assert.match(html,/id="loop"[^>]*muted[^>]*loop[^>]*playsinline/);
  assert.match(js,/hero-loop-up\.mp4/);
  assert.match(js,/!reduce && !saveData/);                    // no autoplay for reduced motion / data saver
  assert.match(js,/loop\.pause\(\)/);                          // freezes when scrolling starts
  assert.match(js,/loop\.play\(\)/);                           // resumes at the top
  assert.match(css,/prefers-reduced-motion:reduce\)\{\.loop\{display:none\}/);
  for(const f of ['hero-loop-up.mp4','hero-loop-up-720.mp4']) assert.ok(statSync(new URL('../assets/trace/'+f,import.meta.url)).size<3e6,f);
});

test('Work showcase: horizontal cards enhance the no-JS project list and open an accessible dialog',()=>{
  const js=read('trace.js'), html=read('index.html'), css=read('trace.css'), sc=read('assets/trace/showcase.js');
  assert.match(js,/showcase\.js\?v=\d+/);
  assert.match(html,/<ol class="pj-list">/);                                   // the vertical list stays as the no-JS version
  for(const a of ['aetheris','wayfarer','boundarylab']){
    assert.match(html,new RegExp('data-art="'+a+'"'));
    assert.ok(statSync(new URL('../assets/trace/card-'+a+'.webp',import.meta.url)).size<90e3,a);
  }
  assert.match(sc,/showModal\(\)/);                                            // native dialog: focus trap and Esc come for free
  assert.match(sc,/aria-haspopup="dialog"/);
  assert.match(sc,/opener\.focus/);                                           // focus returns to the card
  assert.match(sc,/matchMedia\('\(prefers-reduced-motion: reduce\)'\)/);
  assert.match(css,/html\.has-showcase \.pj-list\{display:none\}/);
  assert.match(css,/\.hc-card:focus-visible\{outline/);
  assert.match(css,/prefers-reduced-motion:reduce\)\{\.hc-card/);
  assert.ok(statSync(new URL('../assets/trace/showcase.js',import.meta.url)).size<12e3);
});

test('Also built section lists projects with external links that open safely', () => {
  const html = read('index.html');
  const sec = html.slice(html.indexOf('id="more"'), html.indexOf('id="lab"'));
  assert.ok(sec.includes('id="oss"'));
  assert.equal((sec.match(/<article class="mp /g) || []).length, 5);
  for (const m of sec.matchAll(/<a href="https:[^>]*>/g)) assert.match(m[0], /target="_blank" rel="noopener noreferrer"/);
});

test('intro clip section is labelled as AI-generated, muted and pausable',()=>{
  const h=readFileSync('index.html','utf8');
  const sec=h.slice(h.indexOf('id="intro"'),h.indexOf('id="contact"'));
  assert.match(sec,/generated with AI/i);
  assert.match(sec,/<video[^>]*\bmuted\b/);
  assert.match(sec,/id="clipBtn"/);
  assert.match(sec,/Nice to meet|<span style="--i:0">Nice<\/span>/);
  assert.match(sec,/poster="assets\/trace\/intro-hd-poster\.webp"/);
});

test('launch section: playable, with a keyboard path and a plain email fallback',()=>{
  const h=readFileSync('index.html','utf8');
  const sec=h.slice(h.indexOf('id="launch"'),h.indexOf('</main>'));
  assert.match(sec,/id="lpPkt"[^>]*role="button"[^>]*tabindex="0"/);
  assert.match(sec,/id="lpAuto"/);
  assert.match(sec,/href="mailto:teldigi5@gmail\.com"/);
  assert.match(sec,/aria-live="polite"/);
});
