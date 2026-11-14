import { mountGlassNav } from './assets/trace/glass-nav.js?v=7677949e';
import { mountRefraction } from './assets/trace/glass-refract.js?v=f768b2e2';
import { mountShowcase } from './assets/trace/showcase.js?v=66dbfe5c';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;
const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

/* ---------- liquid glass nav ---------- */
const nav = $('#nav');
const glass = mountGlassNav(nav, { imgSrc: 'assets/trace/hero-scene-2k.webp', thickness: 20, activeSelector: '[aria-current="true"]' });
if (glass && mountRefraction(nav, { thickness: 20 })) glass.setSpecOnly(true);   // Chromium: bend the real page behind the bar

/* ---------- hero: dive into the terminal, driven by scroll ---------- */
const hero = $('#trace');
const heroCopy = $('#heroCopy');
const markers = $$('.marker').map(el => ({ el, iu: el.dataset.iu.split(',').map(Number) }));
const IMG_A = 1344 / 752;
const TERM = [0.5, 0.57];            // laptop screen, in image uv
let vw = innerWidth, vh = innerHeight, origin = [0.5, 0.57];
const toViewport = (iu) => {         // image uv -> viewport uv under "cover"
  const va = vw / vh;
  const s = va > IMG_A ? [1, IMG_A / va] : [va / IMG_A, 1];
  return [(iu[0] - 0.5) / s[0] + 0.5, (iu[1] - 0.5) / s[1] + 0.5];
};
const fitHero = () => {            // keep the headline clear of the laptop on any viewport shape
  root.style.setProperty('--hs', 1); root.classList.remove('tight');
  if (!heroCopy || vw < 721) return;
  const room = toViewport([0.5, 0.44])[1] * vh - 16;   // top edge of the laptop in the viewport
  const topPx = parseFloat(getComputedStyle(heroCopy).top);
  const need = () => heroCopy.getBoundingClientRect().height + topPx;
  const SLACK = 8, fitTo = () => { for (let i = 0; i < 3; i++) { const n = need(); if (n <= room + SLACK) return true; const cur = parseFloat(getComputedStyle(root).getPropertyValue('--hs')) || 1; root.style.setProperty('--hs', Math.max(0.5, cur * room / n).toFixed(3)); } return need() <= room + SLACK; };
  if (!fitTo() || parseFloat(getComputedStyle(root).getPropertyValue('--hs')) < 0.72) {   // too cramped: drop the subhead, refit
    root.classList.add('tight'); root.style.setProperty('--hs', 1); fitTo();
  }
};
const measure = () => { vw = innerWidth; vh = innerHeight; origin = toViewport(TERM); root.style.setProperty('--ox', origin[0] * 100 + '%'); root.style.setProperty('--oy', origin[1] * 100 + '%'); fitHero(); };
/* ID-badge lanyard (Three.js): loaded when the contact section is near */
const belt = $('#belt');
if (belt && 'IntersectionObserver' in window) {
  const bio = new IntersectionObserver(([en]) => {
    if (!en.isIntersecting) return; bio.disconnect();
    import('./assets/trace/belt.js?v=127a990e').then(m => m.mountBelt(belt, { portrait: 'assets/trace/card-portrait.webp' })).catch(() => {});
  }, { rootMargin: '500px' });
  bio.observe(belt);
}
/* hero polish: word-by-word headline, Colombo clock, pointer spotlight, magnetic buttons */
const h1 = $('#h1');
if (h1 && !h1.dataset.split) { h1.dataset.split = 1; h1.innerHTML = h1.textContent.trim().split(/\s+/).map((w, i) => `<span class="w"><span style="--i:${i}">${esc(w)}</span></span>`).join(' '); }
const clockEl = $('#clock');
const tick = () => { if (clockEl) clockEl.textContent = 'Colombo ' + new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Colombo', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()); };
tick(); setInterval(tick, 30000);
if (!reduce && matchMedia('(hover: hover)').matches) {
  let sx = 0, sy = 0, mxp = 0, myp = 0, sraf = 0;
  addEventListener('pointermove', e => { mxp = e.clientX; myp = e.clientY; if (!sraf) sraf = requestAnimationFrame(() => { sraf = 0; sx += (mxp - sx) * 0.9; sy += (myp - sy) * 0.9; root.style.setProperty('--mx', mxp + 'px'); root.style.setProperty('--my', myp + 'px'); }); }, { passive: true });
  $$('.mag').forEach(b => {
    b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${((e.clientX - r.left) / r.width - 0.5) * 10}px, ${((e.clientY - r.top) / r.height - 0.5) * 8}px)`; });
    b.addEventListener('pointerleave', () => { b.style.transform = ''; });
  });
}
const bootEl = $('#boot');
const MOBILE = matchMedia('(max-width: 699px)').matches;   // phones get their own static hero
let entered = !!location.hash || MOBILE;          // deep links skip the gate
const unlock = () => { entered = true; };
/* ---------- terminal sequence: plays by itself, then asks for Enter ---------- */
const enterBtn = $('#enter');
const BOOT = [
  ['$ ', 'cmd', './trace --target poojana-kaveesh', 14],
  ['> ', 'dim', 'resolving gateway ........... ', 0, 'ok'],
  ['> ', 'dim', 'negotiating TLS 1.3 ......... ', 0, 'ok'],
  ['> ', 'dim', 'bypassing rate limiter ...... ', 0, 'ok'],
  ['> ', 'bar', 'decrypting ', 0, 'portfolio.enc'],
  ['> ', 'dim', 'mounting file system ........ ', 0, 'ok'],
  ['< ', 'grant', 'ACCESS GRANTED  200 OK  42 ms', 0],
  ['', 'tree', '├─ projects/   BoundaryLab · Aetheris · Wayfarer'],
  ['', 'tree', '├─ lab/        live demos you can run'],
  ['', 'tree', '└─ contact/    open to internships'],
];
/* terminal sound + haptics (on by default, one tap to mute) */
const sndBtn = $('#snd');
let soundOn = true, actx = null;   // on by default; a stored '0' (visitor turned it off) wins
try { soundOn = localStorage.getItem('trace-sound') !== '0'; } catch (e) {}
/* browsers keep audio locked until a gesture: unlock on the first one so the default-on sound can play */
const unlockAudio = () => { if (soundOn) audio(); removeEventListener('pointerdown', unlockAudio, true); removeEventListener('keydown', unlockAudio, true); removeEventListener('touchstart', unlockAudio, true); };
addEventListener('pointerdown', unlockAudio, true); addEventListener('keydown', unlockAudio, true); addEventListener('touchstart', unlockAudio, true);
const audio = () => { if (!actx) { const AC = window.AudioContext || window.webkitAudioContext; if (AC) actx = new AC(); } if (actx && actx.state === 'suspended') actx.resume(); return actx; };
let lastTick = 0;
function sfx(kind) {
  if (!soundOn) return;
  const a = audio(); if (!a) return; const t = a.currentTime;
  const tone = (f, at, dur, vol, type = 'sine') => { const o = a.createOscillator(), g = a.createGain(); o.type = type; o.frequency.value = f; g.gain.setValueAtTime(0.0001, t + at); g.gain.exponentialRampToValueAtTime(vol, t + at + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + at + dur); o.connect(g).connect(a.destination); o.start(t + at); o.stop(t + at + dur + 0.05); };
  if (kind === 'key') { const n = performance.now(); if (n - lastTick < 28) return; lastTick = n; tone(1800 + Math.random() * 500, 0, 0.035, 0.035, 'square'); }
  else if (kind === 'blip') tone(660 + Math.random() * 240, 0, 0.06, 0.05, 'triangle');
  else if (kind === 'grant') { tone(523, 0, 0.35, 0.07); tone(784, 0.09, 0.45, 0.07); tone(1046, 0.18, 0.7, 0.06); }
  else if (kind === 'enter') { tone(880, 0, 0.12, 0.06, 'triangle'); tone(1320, 0.05, 0.18, 0.05, 'triangle'); }
}
const buzz = p => { if (soundOn && navigator.vibrate) try { navigator.vibrate(p); } catch (e) {} };
const paintSnd = () => { if (!sndBtn) return; sndBtn.setAttribute('aria-pressed', soundOn); sndBtn.textContent = soundOn ? 'sound on' : 'sound off'; sndBtn.setAttribute('aria-label', soundOn ? 'Turn terminal sound and haptics off' : 'Turn terminal sound and haptics on'); };
sndBtn && sndBtn.addEventListener('click', () => { soundOn = !soundOn; try { localStorage.setItem('trace-sound', soundOn ? '1' : '0'); } catch (e) {} if (soundOn) { audio(); sfx('enter'); } paintSnd(); });
paintSnd();
const SMALL = innerWidth < 700, NB = SMALL ? 10 : 20, TOUCH = matchMedia('(hover: none)').matches;
if (SMALL) { BOOT[8][2] = '├─ lab/        live demos'; BOOT[7][2] = '├─ projects/   3 projects'; BOOT[9][2] = '└─ contact/    open to work'; }
if (TOUCH && enterBtn) enterBtn.innerHTML = 'Tap to step into the stack';
const term = $('#term'), stat1 = $('#stat1'), stat2 = $('#stat2');
const setStat = (s, run) => { if (stat1) stat1.innerHTML = `<u></u>${s}`; term.classList.toggle('run', !!run); };
const sess = Array.from({ length: 4 }, () => '0123456789abcdef'[Math.random() * 16 | 0]).join('');
const GL = '▒▓░#@%&$01';
const scr = (s, p) => { const k = Math.floor(p * s.length); return s.slice(0, k) + [...s.slice(k)].map(ch => ch === '.' ? '.' : GL[Math.random() * GL.length | 0]).join(''); };
let bootRun = 0, bootDone = false;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const line = (pre, cls, txt, ok) => cls === 'tree' ? `<span class="tree">${esc(txt).replace(/(projects\/|lab\/|contact\/)/, '<em>$1</em>')}</span>` : `<i>${esc(pre.trim())}</i> ${cls === 'grant' ? `<span class="grant">${esc(txt)}</span>` : cls === 'dim' ? `<span class="dim">${esc(txt)}</span>${ok ? `<b class="ok">${ok}</b>` : ''}` : esc(txt)}`;
function bootStatic() {
  bootEl.innerHTML = BOOT.map(([p, c, t, , ok]) => c === 'bar' ? line(p, 'dim', t) + `<span class="scr">${ok}</span> <span class="bar">[${'█'.repeat(NB)}] 100%</span>` : line(p, c, t, ok)).join('\n');
  term.classList.add('granted'); setStat('session open', false); if (stat2) stat2.textContent = `session ${sess} · 42 ms`;
  showEnter(true);
}
function showEnter(on) { if (!enterBtn) return; enterBtn.classList.toggle('on', on); enterBtn.tabIndex = on ? 0 : -1; }
async function playBoot() {
  const id = ++bootRun; bootDone = false; showEnter(false);
  term.classList.remove('granted'); setStat('connecting', true); if (stat2) stat2.textContent = `session ${sess}`;
  const out = []; const draw = () => { if (id === bootRun) bootEl.innerHTML = out.join('\n') + (out.length ? '\n' : '') + '<span class="caret"></span>'; };
  const STAT = { 2: 'resolving', 3: 'handshake', 4: 'bypassing', 5: 'decrypting', 6: 'mounting' };
  let k = 0;
  for (const [p, c, t, d, ok] of BOOT) {
    if (id !== bootRun) return;
    k++; if (STAT[k]) setStat(STAT[k], true);
    if (c === 'cmd') {
      for (let i = 1; i <= t.length; i++) {
        if (id !== bootRun) return;
        bootEl.innerHTML = `<i>$</i> ${esc(t.slice(0, i))}<span class="caret"></span>`; sfx('key');
        await sleep(d + Math.random() * 22);
      }
      out.push(line(p, c, t)); draw(); await sleep(240);
    } else if (c === 'bar') {
      for (let n = 0; n <= NB; n++) {
        if (id !== bootRun) return;
        const bar = '█'.repeat(n) + '░'.repeat(NB - n);
        bootEl.innerHTML = out.join('\n') + '\n' + line(p, 'dim', t) + `<span class="scr">${scr(ok, n / NB)}</span> <span class="bar">[${bar}] ${String(Math.round(n * 100 / NB)).padStart(3)}%</span><span class="caret"></span>`;
        if (stat2) stat2.textContent = `session ${sess} · ${Math.round(n * 100 / NB)}%`; if (n % 2 === 0) sfx('blip');
        await sleep(30 + Math.random() * 40);
      }
      out.push(line(p, 'dim', t) + `<span class="scr">${ok}</span> <span class="bar">[${'█'.repeat(NB)}] 100%</span>`); draw(); await sleep(280);
    } else if (c === 'grant') {
      draw(); await sleep(320);
      out.push(line(p, c, t)); draw();
      sfx('grant'); buzz([18, 40, 26]); term.classList.add('granted'); setStat('session open', false); if (stat2) stat2.textContent = `session ${sess} · 42 ms`;
      await sleep(380);
    } else if (c === 'tree') {
      out.push(line(p, c, t)); draw(); await sleep(170);
    } else {
      draw(); await sleep(130 + Math.random() * 120);
      out.push(line(p, c, t, ok)); draw(); await sleep(110);
    }
  }
  if (id !== bootRun) return;
  bootEl.innerHTML = out.join('\n') + '\n<i>$</i> <span class="caret"></span>';
  bootDone = true; showEnter(true);
}
function bootSync(boot) {
  const live = boot > 0.5; term.classList.toggle('live', live); if (sndBtn) sndBtn.tabIndex = live ? 0 : -1;
  if (boot > 0.35 && !bootRun) { reduce ? (bootRun = 1, bootStatic()) : playBoot(); }
  else if (boot < 0.02 && bootRun) { bootRun = 0; bootDone = false; showEnter(false); bootEl.innerHTML = ''; term.classList.remove('granted', 'run'); setStat('idle', false); }
}
/* faint falling code behind the terminal, only runs while the dark layer is showing */
const rain = $('#rain'); const rctx = rain && rain.getContext('2d');
let rainOn = false, cols = [], rw = 0, rh = 0;
const RG = '0123456789abcdef{}[]<>/=;:·'.split('');
function rainSize() { if (!rain) return; rw = rain.width = Math.ceil(innerWidth / 2); rh = rain.height = Math.ceil(innerHeight / 2); cols = Array.from({ length: Math.ceil(rw / 11) }, () => ({ y: Math.random() * rh, v: 0.6 + Math.random() * 1.6 })); }
function rainTick() {
  if (!rainOn) return;
  rctx.fillStyle = 'rgba(7,11,22,.16)'; rctx.fillRect(0, 0, rw, rh);
  rctx.font = '10px monospace';
  cols.forEach((c, i) => { rctx.fillStyle = Math.random() < 0.06 ? 'rgba(200,255,238,.9)' : 'rgba(124,240,200,.55)'; rctx.fillText(RG[Math.random() * RG.length | 0], i * 11, c.y); c.y += c.v * 5; if (c.y > rh && Math.random() > 0.975) c.y = 0; else if (c.y > rh + 80) c.y = 0; });
  requestAnimationFrame(rainTick);
}
function rainSync(dark) {
  if (!rain || reduce) return;
  const want = dark > 0.05;
  if (want && !rainOn) { rainSize(); rainOn = true; requestAnimationFrame(rainTick); }
  else if (!want && rainOn) { rainOn = false; rctx.clearRect(0, 0, rw, rh); }
}
addEventListener('resize', () => { if (rainOn) rainSize(); });
function enterStack() {
  if (!bootDone && !reduce) { bootRun++; bootStatic(); bootDone = true; return; }
  entered = true; sfx('enter'); buzz(12);
  const g = $('#gateway'); if (g) g.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}
enterBtn && enterBtn.addEventListener('click', enterStack);
document.addEventListener('click', e => { if (e.target.closest && e.target.closest('a[href^="#"]')) unlock(); }, true);
addEventListener('hashchange', unlock);
addEventListener('keydown', e => {
  if (e.key !== 'Enter' || e.repeat || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
  if (!enterBtn.classList.contains('on') && !(bootRun && !bootDone)) return;
  const a = document.activeElement; if (a && a !== document.body && a !== enterBtn && /^(A|BUTTON|INPUT|TEXTAREA|SELECT|SUMMARY)$/.test(a.tagName)) return;
  e.preventDefault(); enterStack();
});

/* scroll-scrubbed push-in video (progressive: still + CSS zoom remain the fallback) */
/* looping live scene: plays on its own at the top, freezes on the first scroll, then the scrubbed dive takes over */
const loop = $('#loop');
const saveData = !!(navigator.connection && (navigator.connection.saveData || /(^|-)2g$/.test(navigator.connection.effectiveType || '')));
let loopOn = false, loopK = 0;
if (loop && !reduce && !saveData && !MOBILE) {
  const markOn = () => { loopOn = true; loop.classList.add('on'); };
  if (loop.getAttribute('src')) { if (!loop.paused && loop.readyState > 2) markOn(); else loop.addEventListener('playing', markOn, { once: true }); }   // already started by the inline script in index.html
  else { loop.addEventListener('playing', markOn, { once: true }); loop.src = innerWidth < 1100 ? 'assets/trace/hero-loop-up-720.mp4' : 'assets/trace/hero-loop-up.mp4'; loop.play().catch(() => {}); }
}
const vid = $('#pushin');
const VEND = [0.49, 0.5];               // laptop screen centre in the last video frame (image uv)
let vidReady = false, vidDur = 0;
const lite = reduce || innerWidth < 700 || (navigator.connection && (navigator.connection.saveData || /(^|-)2g$/.test(navigator.connection.effectiveType || '')));
if (vid && !lite) {
  vid.src = 'assets/trace/hero-pushin-v2.mp4';
  vid.addEventListener('loadeddata', () => { vidDur = vid.duration || 5; vidReady = true; root.classList.add('has-video'); frame(); }, { once: true });
  vid.addEventListener('error', () => { vidReady = false; root.classList.remove('has-video'); vid.style.opacity = 0; });
  vid.load();
}

const A_END = 0.5, B_END = 0.72;   // dive | dark hold (terminal plays) | exit
let ys = scrollY, easing = false;   // eased scroll position: the hero follows the scroll smoothly instead of in steps
function frame() {
  if (root.classList.contains('past-intro')) { lightFrame(); return; }   // the intro is out of the page: skip the dive maths
  let y = scrollY;
  const span = Math.max(hero.offsetHeight - vh, 1);
  const lockY = span * 0.56;             // inside the dark hold
  if (!reduce) {
    if (!entered && y > lockY) { scrollTo({ top: lockY, behavior: 'instant' }); y = lockY; }
  }
  if (reduce || Math.abs(y - ys) > vh * 1.5) ys = y;          // reduced motion and big jumps (back to top) don't ease
  else { ys += (y - ys) * 0.16; if (Math.abs(y - ys) < 0.4) ys = y; }
  if (ys !== y && !easing) { easing = true; requestAnimationFrame(() => { easing = false; frame(); }); }
  const tr = clamp(ys / span);
  const t = tr <= A_END ? tr / A_END * 0.72 : tr <= B_END ? 0.72 + (tr - A_END) / (B_END - A_END) * 0.06 : 0.78 + (tr - B_END) / (1 - B_END) * 0.22;
  if (loopOn) {                                   // live at the very top; frozen the moment scrolling starts
    if (y > 4 && !loop.paused) loop.pause();
    else if (y <= 4 && loop.paused && !document.hidden) loop.play().catch(() => {});
    if (!vidReady) loop.style.opacity = 1 - clamp(y / 90);   // no scrub video: hand back to the still + CSS zoom
    else {   // the loop and the push-in were framed slightly differently: ease the loop onto the push-in's first frame while they cross-fade, so there is no double laptop
      const k = clamp(ys / 10);   // aligned within the first few px, well before the push-in is visible
      if (k !== loopK) { loopK = k; loop.style.transform = k ? `translate(${(-0.94 * k).toFixed(3)}%, ${(-3.33 * k).toFixed(3)}%) scale(${(1 - 0.02 * k).toFixed(4)})` : ''; }
    }
  }
  let z = 1, dark = 0, veil, boot = 0;
  if (reduce) { veil = clamp(y / (vh * 0.8)) * 0.86; }
  else {
    const e = x => x * x * (3 - 2 * x);
    z = t < 0.7 ? 1 + 2.7 * e(t / 0.7) : 1 + 2.7 * (1 - e((t - 0.7) / 0.3));
    dark = Math.pow(smooth(0.52, 0.70, t), 2.6) * (1 - smooth(0.81, 0.865, t));   // snaps in/out: no long half-dark grey fog
    boot = smooth(0.62, 0.74, t) * (1 - smooth(0.78, 0.83, t));
    veil = smooth(0.74, 0.84, t) * 0.86;
  }
  let zEff = z;
  if (vidReady) {
    const p = smooth(0, 0.5, t) * (t <= 0.7 ? 1 : 1 - smooth(0.7, 1, t));
    const extra = 1 + 0.9 * (t <= 0.5 ? 0 : smooth(0.5, 0.7, t)) * (t <= 0.7 ? 1 : 1 - smooth(0.7, 1, t));
    const target = p * vidDur * 0.999;
    if (Math.abs(vid.currentTime - target) > 0.02 && !vid.seeking) vid.currentTime = target;
    const vo = toViewport(VEND);
    vid.style.transformOrigin = (vo[0] * 100) + '% ' + (vo[1] * 100) + '%';
    vid.style.transform = `scale(${extra.toFixed(4)})`;
    vid.style.opacity = (t < 0.85 ? 1 : 1 - smooth(0.85, 0.98, t)) * (loopOn ? clamp(ys / 48) : 1);
    zEff = (1 + 1.25 * smooth(0, 0.5, t)) * extra;
    if (t > 0.7) zEff = 1 + (zEff - 1) * (1 - smooth(0.7, 1, t));
  }
  root.style.setProperty('--spot', reduce ? 0 : (0.9 * (1 - smooth(0, 0.35, t))).toFixed(3));
  root.style.setProperty('--z', z.toFixed(4)); root.style.setProperty('--veil', veil.toFixed(3));
  root.style.setProperty('--dark', dark.toFixed(3)); root.style.setProperty('--boot', boot.toFixed(3));
  bootSync(boot); rainSync(dark);
  const onDark = dark > 0.45; root.style.setProperty('--navink', onDark ? '#eef2ff' : '#0e1116'); root.style.setProperty('--navkbd', onDark ? '#a9bbff' : '#1f3fd0');
  const fade = 1 - smooth(0, 0.22, t);
  heroCopy.style.opacity = fade; heroCopy.style.transform = `translateY(${(-t * 60).toFixed(1)}px) scale(${(1 - t * 0.04).toFixed(3)})`;
  const hint = $('#hint'); hint.style.opacity = 1 - smooth(0, 0.12, t); hint.style.pointerEvents = t > 0.12 ? 'none' : 'auto';
  const mk = 1 - smooth(0, 0.14, t);
  for (const m of markers) {
    const vp = toViewport(m.iu);
    const px = (origin[0] + (vp[0] - origin[0]) * zEff) * vw, py = (origin[1] + (vp[1] - origin[1]) * zEff) * vh;
    m.el.style.left = px + 'px'; m.el.style.top = py + 'px'; m.el.style.opacity = mk; m.el.style.pointerEvents = mk < 0.2 ? 'none' : 'auto';
    m.el.tabIndex = mk < 0.2 ? -1 : 0;
  }
  if (glass) {
    glass.setBackdrop({ zoom: zEff, ox: origin[0], oy: origin[1], veil, dark });
    glass.setMode(reduce ? 1 : 1 - smooth(span * 0.92, span + vh * 0.5, y));
  }
  sampleTone();
  $('#progress').style.transform = `scaleX(${clamp(y / Math.max(document.documentElement.scrollHeight - vh, 1)).toFixed(4)})`;
  $('#rail').classList.toggle('on', y > span * 0.9 && innerWidth >= 1100);
}
/* cheap per-frame work once you are past the intro: progress bar, rail, throttled tone sampling */
let lfT = 0, lfGlass = false;
const progEl = $('#progress'), railEl = $('#rail');
function lightFrame() {
  const y = scrollY, vh = innerHeight;
  progEl.style.transform = `scaleX(${clamp(y / Math.max(document.documentElement.scrollHeight - vh, 1)).toFixed(4)})`;
  railEl.classList.toggle('on', innerWidth >= 1100);
  if (!lfGlass && glass) { lfGlass = true; glass.setMode(0); }
  const now = performance.now();
  if (now - lfT > 110) { lfT = now; sampleTone(); }
}
/* adaptive tone: look at what sits under the bar and switch to light-on-dark when needed */
let tone = '';
function sampleTone() {
  const r = nav.getBoundingClientRect(); const y = r.top + r.height / 2;
  let dark = 0;
  for (const x of [r.left + r.width * 0.15, r.left + r.width * 0.5, r.left + r.width * 0.85]) {
    const el = document.elementsFromPoint(x, y).find(e => !e.closest('#nav, .badge, .talk, .rail, .marker, .hint'));
    const t = el && el.closest('[data-tone]');
    if (t && t.dataset.tone === 'dark') dark++;
  }
  const next = dark >= 2 || root.style.getPropertyValue('--dark') > 0.45 ? 'dark' : '';
  if (next !== tone) { tone = next; nav.classList.toggle('tone-dark', !!tone); root.classList.toggle('ui-dark', !!tone); glass && glass.setBackdrop({ adaptT: tone ? 1 : 0 }); }
}
let ticking = false;
const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; frame(); }); } };
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', () => { measure(); frame(); });
measure(); frame();

/* hero depth: the labels and the headline drift against the pointer while you are at the top; no layer of the videos is touched */
if (!reduce && !MOBILE && matchMedia('(pointer: fine)').matches) {
  let tx = 0, ty = 0, cx = 0, cy = 0, run = false;
  addEventListener('pointermove', e => { tx = (e.clientX / innerWidth - 0.5) * 2; ty = (e.clientY / innerHeight - 0.5) * 2; if (!run) { run = true; requestAnimationFrame(par); } }, { passive: true });
  function par() {
    const top = scrollY < 6 && !root.classList.contains('past-intro'), gx = top ? tx : 0, gy = top ? ty : 0;
    cx += (gx - cx) * 0.08; cy += (gy - cy) * 0.08;
    if (Math.abs(gx - cx) < 0.002 && Math.abs(gy - cy) < 0.002) { cx = gx; cy = gy; run = false; }
    markers.forEach((m, i) => { const d = 10 + (i % 3) * 5; m.el.style.translate = `${(cx * d).toFixed(1)}px ${(cy * d * 0.7).toFixed(1)}px`; });
    heroCopy.style.translate = `${(-cx * 6).toFixed(1)}px ${(-cy * 4).toFixed(1)}px`;
    if (run) requestAnimationFrame(par);
  }
}

/* tool ribbon: pause button, and it only runs while on screen */
try {
  const rb = document.getElementById('ribbon'), rp = document.getElementById('rbPause');
  if (rb && rp) {
    rp.addEventListener('click', () => { const on = rb.classList.toggle('paused'); rp.setAttribute('aria-pressed', String(on)); rp.textContent = on ? '▶' : '❚❚'; rp.setAttribute('aria-label', on ? 'Play the tool ribbon' : 'Pause the tool ribbon'); });
    if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => rb.classList.toggle('off', !en.isIntersecting)).observe(rb);
  }
    if (rb && !reduce && rb.animate) {   // the ribbon speeds up with scroll velocity, then eases back
      const track = document.getElementById('rbTrack'); let lastY = scrollY, rate = 1, vis = true;
      new IntersectionObserver(([en]) => { vis = en.isIntersecting; }).observe(rb);
      const tick = () => { const y = scrollY, v = Math.abs(y - lastY); lastY = y; if (vis) { const target = 1 + Math.min(v * 0.12, 5); rate += (target - rate) * 0.08; const an = track.getAnimations()[0]; if (an) an.playbackRate = rate; } requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }
} catch (err) { console.warn('ribbon', err); }
/* cards: a soft light follows the pointer */
$$('.sv').forEach(c => c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px'); }, { passive: true }));

/* ---------- section tracking: nav, rail ---------- */
const sections = ['trace', 'gateway', 'intro', 'services', 'work', 'toolkit', 'lab', 'about', 'contact', 'connect'].map(id => $('#' + id)).filter(Boolean);
const navMap = { trace: 'trace', gateway: 'trace', services: 'services', work: 'work', toolkit: 'work', lab: 'lab', intro: 'trace', about: 'about', contact: 'about', connect: 'contact' };
const railMap = { trace: 0, gateway: 1, services: 2, work: 2, toolkit: 3, lab: 3, intro: 1, about: 4, contact: 4, connect: 4 };
let current = '';
function setActive(id) {
  if (id === current) return; current = id;
  let want = navMap[id];
  const shown = k => { const a = $('#nav a[data-s="' + k + '"]'); return !!(a && a.getClientRects().length); };
  if (!shown(want)) want = want === 'services' ? 'work' : 'trace';   // the Services link is hidden on narrow screens: point the pill at the nearest visible link
  $$('#nav a').forEach(a => a.dataset.s === want ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'));
  const act = $('#nav a[aria-current="true"]'), sc = act && act.closest('nav');
  if (sc && sc.scrollWidth > sc.clientWidth + 1) sc.scrollTo({ left: Math.max(0, act.offsetLeft - 8), behavior: 'auto' });
  const r = railMap[id];
  $$('#rail a').forEach(a => { const i = +a.dataset.r; a.classList.toggle('act', i === r); a.classList.toggle('done', i < r); });
  $$('#rail .seg i').forEach((s, i) => { s.style.transform = `scaleY(${i < r ? 1 : 0})`; s.style.transition = 'transform .5s'; });
}
addEventListener('resize', () => { const c = current; current = ''; if (c) setActive(c); });
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => io.observe(s));
const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
/* phones: long lists start short, with one button to show the rest (everything stays in the HTML for no-JS and search) */
if (MOBILE) for (const [sel, keep, label] of [['.sv-grid', 3, 'Show all six'], ['.mp-grid', 2, 'Show all projects']]) {
  const ul = $(sel); if (!ul) continue;
  const items = [...ul.children]; if (items.length <= keep + 1) continue;
  items.slice(keep).forEach(li => { li.hidden = true; });
  const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'btn alt more-btn'; btn.textContent = label; btn.setAttribute('aria-expanded', 'false');
  btn.addEventListener('click', () => { items.forEach(li => { li.hidden = false; }); btn.remove(); });
  ul.after(btn);
  const reveal = id => { const el = id && document.getElementById(id); if (el && el.closest('[hidden]') && btn.isConnected) btn.click(); };
  addEventListener('hashchange', () => reveal(decodeURIComponent(location.hash.slice(1))));
  document.addEventListener('click', e => { const a = e.target.closest && e.target.closest('a[href^="#"]'); if (a) reveal(decodeURIComponent(a.getAttribute('href').slice(1))); }, true);
}
/* ---------- text motion: headings rise out of a mask, lede copy darkens as you read it ---------- */
if (!reduce) {
  $$('.blk h2.reveal').forEach(h => {
    const words = h.textContent.trim().split(/\s+/);
    h.classList.remove('reveal'); h.classList.add('split');
    h.setAttribute('aria-label', words.join(' '));
    h.innerHTML = words.map((w, i) => `<span class="w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`).join(' ');
  });
  const fine = !matchMedia('(pointer: coarse)').matches && innerWidth >= 700;   // word-by-word reading effect: pointer devices only, it repaints on every scroll frame
  const leads = (fine ? $$('.blk .lede') : []).filter(p => !p.children.length);
  if (leads.length && 'IntersectionObserver' in window) {   // one-shot reveal: words fade up in a short stagger when the paragraph enters, no per-scroll work
    const lio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('read'); lio.unobserve(e.target); } }), { rootMargin: '0px 0px -12% 0px' });
    leads.forEach(p => {
      const words = p.textContent.trim().split(/\s+/);
      p.innerHTML = words.map((w, i) => `<span class="lw" style="--d:${Math.min(i * 18, 520)}ms">${w}</span>`).join(' ');
      p.classList.add('scrub'); lio.observe(p);
    });
  }
}
$$('.reveal, .split').forEach(el => rv.observe(el));
setActive('trace');

/* ---------- shared rate limiter (console + lab) ---------- */
const CAP = 6, REFILL_MS = 1200;
const limiter = { tokens: CAP, last: performance.now(),
  refill() { const now = performance.now(); const add = (now - this.last) / REFILL_MS; if (add >= 1) { const n = Math.floor(add); this.tokens = Math.min(CAP, this.tokens + n); this.last += n * REFILL_MS; } if (this.tokens >= CAP) this.last = now; },
  take() { this.refill(); if (this.tokens >= 1) { this.tokens -= 1; return true; } return false; },
  retryMs() { return Math.max(0, Math.ceil(REFILL_MS - (performance.now() - this.last))); } };
const dotsEl = $('#dots');
dotsEl.innerHTML = Array.from({ length: CAP }, () => '<i></i>').join('');
const paintDots = () => { limiter.refill(); $$('i', dotsEl).forEach((d, i) => d.classList.toggle('on', i < limiter.tokens)); };
setInterval(paintDots, 250); paintDots();

/* ---------- 02 console ---------- */
const PROFILE = { name: 'Poojana Kaveesh', location: 'Sri Lanka (UTC+05:30)', education: 'BSc (Hons) Information Technology, SLIIT', focus: ['backend', 'AI', 'security'], status: 'open to engineering internships' };
const ENDPOINTS = [
  { label: '/engineer/poojana', path: '/api/v1/engineer/poojana', body: () => PROFILE },
  { label: '?include=projects', path: '/api/v1/engineer/poojana?include=projects', body: () => ({ ...PROFILE, projects: [
    { name: 'BoundaryLab', status: 'pre-release prototype', focus: 'authorization verification' },
    { name: 'Aetheris Platform', status: 'research, hardware validation pending', stack: ['Java', 'Spring', 'PostgreSQL', 'Redis', 'RabbitMQ'] },
    { name: 'Wayfarer', status: 'public planning app, no live booking' }] }) },
  { label: '?include=skills', path: '/api/v1/engineer/poojana?include=skills', body: () => ({ ...PROFILE, skills: { backend: ['Java', 'Spring', 'PostgreSQL', 'Redis', 'RabbitMQ'], practice: ['system design', 'authorization', 'tests', 'observability'] } }) },
  { label: '/contact', path: '/api/v1/engineer/poojana/contact', body: () => ({ email: 'teldigi5@gmail.com', github: 'github.com/teldigi5-wq', linkedin: 'linkedin.com/in/poojana-kaveesh-sellahewa-3048b8387' }) }
];
let ep = 0;
const epsEl = $('#eps');
epsEl.innerHTML = ENDPOINTS.map((e, i) => `<button class="ep" type="button" data-i="${i}" aria-pressed="${i === 0}">${esc(e.label)}</button>`).join('');
epsEl.addEventListener('click', e => { const b = e.target.closest('.ep'); if (!b) return; ep = +b.dataset.i; $$('.ep', epsEl).forEach(x => x.setAttribute('aria-pressed', x === b)); $('#path').textContent = ENDPOINTS[ep].path; });
const colorize = j => esc(JSON.stringify(j, null, 2)).replace(/(&quot;|")([^"\n]+?)(&quot;|")(:)/g, '<span class="k">"$2"</span>$4').replace(/: "([^"\n]*)"/g, ': <span class="s">"$1"</span>').replace(/: (\d+)/g, ': <span class="n">$1</span>').replace(/^(\s+)"([^"\n]*)"(,?)$/gm, '$1<span class="s">"$2"</span>$3');
function send() {
  const ok = limiter.take(); paintDots();
  const ms = 18 + Math.round(Math.random() * 40);
  const rem = Math.max(0, Math.floor(limiter.tokens));
  if (ok) {
    $('#hdrs').innerHTML = `<span class="hd-ok">status: 200 OK</span>\ntime: ${ms} ms\ncache: ${Math.random() > .5 ? 'HIT' : 'MISS'}\nx-ratelimit-limit: ${CAP}\nx-ratelimit-remaining: ${rem}\ncontent-type: application/json`;
    $('#body').innerHTML = colorize(ENDPOINTS[ep].body());
  } else {
    const r = limiter.retryMs();
    $('#hdrs').innerHTML = `<span class="hd-bad">status: 429 Too Many Requests</span>\ntime: ${ms} ms\nretry-after: ${(r / 1000).toFixed(1)} s\nx-ratelimit-limit: ${CAP}\nx-ratelimit-remaining: 0\ncontent-type: application/json`;
    $('#body').innerHTML = colorize({ error: 'rate_limited', message: 'Slow down. The bucket refills one token every 1.2 seconds.', retry_after_ms: r });
  }
}
$('#send').addEventListener('click', send);
$('#limitBtn').addEventListener('click', () => { const ok = limiter.take(); paintDots(); $('#limitMsg').textContent = ok ? `200 OK. ${Math.floor(limiter.tokens)} of ${CAP} tokens left.` : `429. Bucket empty, next token in ${(limiter.retryMs() / 1000).toFixed(1)} s.`; });

/* ---------- 03 projects: static cards in index.html, no script needed ---------- */

/* ---------- 04 query plan ---------- */
const swEl = $('#idxSw'), planBars = $('#planBars'), planMsg = $('#planMsg');
function paintPlan() {
  const idx = swEl.getAttribute('aria-checked') === 'true';
  const seq = 420, ix = 0.4, cur = idx ? ix : seq;
  const w = ms => Math.round((Math.log10(ms) + 1) / 4 * 100);
  planBars.innerHTML = `<div class="bar"><b>Seq Scan on orders<span>${seq} ms</span></b><div><i style="width:${w(seq)}%;background:${idx ? 'rgba(14,17,22,.18)' : 'var(--warn)'}"></i></div></div><div class="bar"><b>Index Scan on idx_orders_user_id<span>${ix} ms</span></b><div><i style="width:${idx ? w(ix) : 0}%;background:var(--ok)"></i></div></div>`;
  planMsg.textContent = idx ? 'With the index the planner jumps to the matching rows instead of reading all 1,000,000. Illustrative timings.' : 'Without an index the planner reads every row to find one user’s orders. Illustrative timings.';
}
swEl.addEventListener('click', () => { swEl.setAttribute('aria-checked', swEl.getAttribute('aria-checked') !== 'true'); paintPlan(); });
paintPlan();

/* ---------- 04 access decision ---------- */
const WHO = ['Owner', 'Teammate', 'Outsider'], OPS = ['Read', 'Write'];
let who = 1, op = 0;
const seg = (el, items, get, set) => { el.innerHTML = items.map((t, i) => `<button class="seg-btn" type="button" aria-pressed="${get() === i}" data-i="${i}">${t}</button>`).join(''); el.onclick = e => { const b = e.target.closest('.seg-btn'); if (!b) return; set(+b.dataset.i); $$('.seg-btn', el).forEach(x => x.setAttribute('aria-pressed', x === b)); paintAuth(); }; };
function paintAuth() {
  const w = WHO[who], o = OPS[op];
  const signed = true, sameWs = who !== 2, perm = who === 0 || (who === 1 && op === 0);
  const allow = signed && sameWs && perm;
  const line = (ok, name, why) => `<div>${ok ? '✓' : '✗'} ${name}: ${why}</div>`;
  $('#decision').className = 'decision ' + (allow ? 'ok' : 'bad');
  $('#decision').innerHTML = `${w.toLowerCase()} → ${o.toUpperCase()} /studio/alice/shared<br><b>${allow ? 'ALLOW ✓' : 'DENY ✗'}</b>` +
    line(signed, 'Sign-in', 'signed in') + line(sameWs, 'Workspace', sameWs ? 'same workspace' : 'different workspace') +
    line(perm, 'Permission', who === 0 ? 'owner can do everything' : who === 1 ? (op === 0 ? 'team may read shared files' : 'team may not write') : 'no grant');
}
seg($('#who'), WHO, () => who, v => who = v); seg($('#op'), OPS, () => op, v => op = v); paintAuth();

/* ---------- 05 copy email ---------- */

/* ---------- command palette ---------- */
const pal = $('#pal'), palIn = $('#palIn'), palList = $('#palList');
const ITEMS = [['Trace', '#trace', 'top hero home'], ['Gateway · live API', '#gateway', 'api console'], ['Services · what I can do', '#services', 'offer skills help'], ['Work · projects', '#work', 'boundarylab aetheris wayfarer'], ['Toolkit · tools I use', '#toolkit', 'stack languages skills'], ['Lab · playable demos', '#lab', 'rate limiter query access'], ['About', '#about', 'bio sliit'], ['Contact · hire me', '#contact', 'email hire'], ['Contact · send a message', '#connect', 'email hire message'], ['CV (PDF)', 'assets/Poojana_Kaveesh_ATS_2026.pdf', 'resume'], ['GitHub', 'https://github.com/teldigi5-wq', 'code'], ['LinkedIn', 'https://www.linkedin.com/in/poojana-kaveesh-sellahewa-3048b8387/', 'profile']];
let shown = [], pi = 0;
function paintPal() {
  const q = palIn.value.trim().toLowerCase();
  shown = ITEMS.filter(([l, , k]) => !q || (l + ' ' + k).toLowerCase().includes(q)); pi = 0;
  palList.innerHTML = shown.map(([l, h], i) => `<li><a href="${h}" ${h.startsWith('http') || h.endsWith('.pdf') ? 'target="_blank" rel="noopener"' : ''} aria-selected="${i === 0}">${l}<small>${h.startsWith('#') ? 'go' : '↗'}</small></a></li>`).join('') || '<li><a aria-selected="false">No match</a></li>';
}
const mark = () => $$('#palList a').forEach((a, i) => a.setAttribute('aria-selected', i === pi));
function openPal() { if (!pal.open) { pal.showModal(); palIn.value = ''; paintPal(); palIn.focus(); } }
$('#palOpen').addEventListener('click', openPal);
addEventListener('keydown', e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal.open ? pal.close() : openPal(); } });
palIn.addEventListener('input', paintPal);
palIn.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown') { e.preventDefault(); pi = Math.min(pi + 1, shown.length - 1); mark(); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); pi = Math.max(pi - 1, 0); mark(); }
  else if (e.key === 'Enter') { e.preventDefault(); $$('#palList a')[pi]?.click(); }
});
palList.addEventListener('click', e => { if (e.target.closest('a')) pal.close(); });
pal.addEventListener('click', e => { if (e.target === pal) pal.close(); });

/* back to the top, and the one-way scroll.
   Once you settle in the live API (or anything below), the dive and the terminal above it are taken out of the page,
   so there is nothing above to scroll into: no clamping, no fighting the scroll. Back to Trace puts them back. */
const toTop = document.getElementById('toTop');
if (toTop) {
  const gw = document.getElementById('gateway');
  let locked = false, idleT = 0;
  const gwTop = () => gw ? Math.round(gw.getBoundingClientRect().top + scrollY) : 0;
  const inGateway = () => !!gw && gw.getBoundingClientRect().top <= 1;
  const lock = () => { if (locked || !gw) return; const y0 = scrollY, f = gwTop(); locked = true; root.classList.add('past-intro'); scrollTo({ top: Math.max(0, y0 - f), behavior: 'instant' }); sync(); };
  const unlock = () => { if (!locked) return; locked = false; lfGlass = false; root.classList.remove('past-intro'); };
  const goTop = e => { e && e.preventDefault(); unlock(); scrollTo({ top: 0, behavior: 'instant' }); history.replaceState(null, '', location.pathname); sync(); };
  function sync() { toTop.classList.toggle('on', locked || scrollY >= gwTop() - 2); }
  toTop.addEventListener('click', goTop);
  document.addEventListener('click', e => { const a = e.target.closest && e.target.closest('a[href="#trace"]'); if (a) goTop(e); }, true);
  addEventListener('hashchange', () => { if (location.hash === '#trace') goTop(); });
  addEventListener('scroll', () => {
    sync();
    if (!locked && inGateway()) { clearTimeout(idleT); idleT = setTimeout(() => { if (!locked && inGateway()) lock(); }, 140); }
  }, { passive: true });
  if (inGateway()) lock(); else sync();
}

/* ---------- work showcase: horizontal cards + inspect dialog (the vertical list stays as the no-JS version) ---------- */
try { const hc = $('#hc'), pl = $('.pj-list'); if (hc && pl) mountShowcase(hc, pl); } catch (err) { console.warn('showcase', err); }

/* connect: a React + Tailwind island, loaded only when the section is near the viewport */
try {
  const root_ = document.getElementById('contactRoot');
  if (root_) {
    let started = false;
    const start = () => { if (started) return; started = true; import('./assets/trace/contact.js?v=d6a377d4').then(m => { root_.className = ''; root_.textContent = ''; m.mountContact(root_); }).catch(() => {}); };
    if ('IntersectionObserver' in window) { const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); start(); } }, { rootMargin: '900px 0px' }); io.observe(root_); }
    else start();
    addEventListener('hashchange', () => { if (location.hash === '#connect') start(); });
  }
} catch (err) { console.warn('connect', err); }

/* intro hologram: Three.js scene (assets/trace/holo.js?v=9ef63715) that projects the real intro video as a hologram and reveals it with scroll.
   Falls back to the plain video with native controls when WebGL is missing, motion is reduced, or the module fails to load. */
try {
  const sec = document.getElementById('intro'), clip = document.getElementById('clip');
  if (sec && clip) {
    const plain = () => { sec.classList.remove('holo-on'); clip.controls = true; };
    const cantGL = () => { try { const c = document.createElement('canvas'); return !(c.getContext('webgl2') || c.getContext('webgl')); } catch (_) { return true; } };
    const weak = () => { const n = navigator, c = n.connection || {}; return !!(c.saveData || /(^|-)2g$/.test(c.effectiveType || '') || (n.deviceMemory && n.deviceMemory <= 2) || (n.hardwareConcurrency && n.hardwareConcurrency <= 2)); };   // phones and laptops that would struggle get the plain video
    if (reduce || cantGL() || weak()) plain();
    else {
      let started = false;
      const start = () => {
        if (started) return; started = true;
        sec.classList.add('holo-on');
        import('./assets/trace/holo.js?v=9ef63715').then(m => { if (!m.mountHolo(sec)) plain(); }).catch(() => plain());
      };
      new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { o.disconnect(); start(); } }, { rootMargin: '1400px 0px' }).observe(sec);
    }
  }
} catch (err) { console.warn('holo', err); }
