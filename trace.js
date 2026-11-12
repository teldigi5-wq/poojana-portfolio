import { mountGlassNav } from './assets/trace/glass-nav.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;
const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

/* ---------- liquid glass nav ---------- */
const nav = $('#nav');
const glass = mountGlassNav(nav, { imgSrc: 'assets/trace/hero-scene.webp', thickness: 20, activeSelector: '[aria-current="true"]' });

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
const measure = () => { vw = innerWidth; vh = innerHeight; origin = toViewport(TERM); root.style.setProperty('--ox', origin[0] * 100 + '%'); root.style.setProperty('--oy', origin[1] * 100 + '%'); };
const bootEl = $('#boot');
/* ---------- terminal sequence: plays by itself, then asks for Enter ---------- */
const enterBtn = $('#enter');
const BOOT = [
  ['$ ', 'cmd', './trace --target poojana-kaveesh', 38],
  ['> ', 'dim', 'resolving gateway ........... ', 0, 'ok'],
  ['> ', 'dim', 'negotiating TLS 1.3 ......... ', 0, 'ok'],
  ['> ', 'dim', 'bypassing rate limiter ...... ', 0, 'ok'],
  ['> ', 'bar', 'decrypting portfolio.enc  ', 0],
  ['> ', 'dim', 'mounting projects, lab, contact ... ', 0, 'ok'],
  ['< ', 'grant', 'ACCESS GRANTED  200 OK  42 ms', 0],
];
let bootRun = 0, bootDone = false;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const line = (pre, cls, txt, ok) => `<i>${esc(pre.trim())}</i> ${cls === 'grant' ? `<span class="grant">${esc(txt)}</span>` : cls === 'dim' ? `<span class="dim">${esc(txt)}</span>${ok ? `<b class="ok">${ok}</b>` : ''}` : esc(txt)}`;
function bootStatic() {
  bootEl.innerHTML = BOOT.map(([p, c, t, , ok]) => line(p, c, c === 'bar' ? t + '[██████████] 100%' : t, ok)).join('\n');
  showEnter(true);
}
function showEnter(on) { if (!enterBtn) return; enterBtn.classList.toggle('on', on); enterBtn.tabIndex = on ? 0 : -1; }
async function playBoot() {
  const id = ++bootRun; bootDone = false; showEnter(false);
  const out = []; const draw = (extra = '') => { if (id === bootRun) bootEl.innerHTML = out.join('\n') + extra + '<span class="caret"></span>'; };
  for (const [p, c, t, d, ok] of BOOT) {
    if (id !== bootRun) return;
    if (c === 'cmd') {
      for (let i = 1; i <= t.length; i++) {
        if (id !== bootRun) return;
        bootEl.innerHTML = `<i>$</i> ${esc(t.slice(0, i))}<span class="caret"></span>`;
        await sleep(d + Math.random() * 40);
      }
      out.push(line(p, c, t)); draw(); await sleep(380);
    } else if (c === 'bar') {
      for (let n = 0; n <= 20; n++) {
        if (id !== bootRun) return;
        const bar = '█'.repeat(n) + '░'.repeat(20 - n);
        bootEl.innerHTML = out.join('\n') + '\n' + line(p, 'dim', t) + `<span class="bar">[${bar}] ${String(n * 5).padStart(3)}%</span><span class="caret"></span>`;
        await sleep(55 + Math.random() * 70);
      }
      out.push(line(p, 'dim', t) + '<span class="bar">[' + '█'.repeat(20) + '] 100%</span>'); draw(); await sleep(260);
    } else {
      draw(); await sleep(c === 'grant' ? 300 : 240 + Math.random() * 220);
      out.push(line(p, c, t, ok)); draw(); await sleep(c === 'grant' ? 200 : 120);
    }
  }
  if (id !== bootRun) return;
  bootEl.innerHTML = out.join('\n') + '\n<i>$</i> <span class="caret"></span>';
  bootDone = true; showEnter(true);
}
function bootSync(boot) {
  if (boot > 0.35 && !bootRun) { reduce ? (bootRun = 1, bootStatic()) : playBoot(); }
  else if (boot < 0.02 && bootRun) { bootRun = 0; bootDone = false; showEnter(false); bootEl.innerHTML = ''; }
}
function enterStack() {
  if (!bootDone && !reduce) { bootRun++; bootStatic(); bootDone = true; return; }
  const g = $('#gateway'); if (g) g.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}
enterBtn && enterBtn.addEventListener('click', enterStack);
addEventListener('keydown', e => {
  if (e.key !== 'Enter' || e.repeat || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
  if (!enterBtn.classList.contains('on') && !(bootRun && !bootDone)) return;
  const a = document.activeElement; if (a && a !== document.body && a !== enterBtn && /^(A|BUTTON|INPUT|TEXTAREA|SELECT|SUMMARY)$/.test(a.tagName)) return;
  e.preventDefault(); enterStack();
});

/* scroll-scrubbed push-in video (progressive: still + CSS zoom remain the fallback) */
const vid = $('#pushin');
const VEND = [0.49, 0.43];            // laptop screen centre in the last video frame (image uv)
let vidReady = false, vidDur = 0;
const lite = reduce || innerWidth < 700 || (navigator.connection && (navigator.connection.saveData || /(^|-)2g$/.test(navigator.connection.effectiveType || '')));
if (vid && !lite) {
  vid.src = 'assets/trace/hero-pushin.mp4';
  vid.addEventListener('loadeddata', () => { vidDur = vid.duration || 5; vidReady = true; root.classList.add('has-video'); frame(); }, { once: true });
  vid.addEventListener('error', () => { vidReady = false; root.classList.remove('has-video'); vid.style.opacity = 0; });
  vid.load();
}

const A_END = 0.45, B_END = 0.8;   // dive | dark hold (terminal plays) | exit
function frame() {
  const y = scrollY;
  const span = Math.max(hero.offsetHeight - vh, 1);
  const tr = clamp(y / span);
  const t = tr <= A_END ? tr / A_END * 0.72 : tr <= B_END ? 0.72 + (tr - A_END) / (B_END - A_END) * 0.06 : 0.78 + (tr - B_END) / (1 - B_END) * 0.22;
  let z = 1, dark = 0, veil, boot = 0;
  if (reduce) { veil = clamp(y / (vh * 0.8)) * 0.86; }
  else {
    const e = x => x * x * (3 - 2 * x);
    z = t < 0.7 ? 1 + 2.7 * e(t / 0.7) : 1 + 2.7 * (1 - e((t - 0.7) / 0.3));
    dark = smooth(0.5, 0.72, t) * (1 - smooth(0.8, 1.0, t));
    boot = smooth(0.62, 0.74, t) * (1 - smooth(0.82, 0.92, t));
    veil = smooth(0.72, 1.0, t) * 0.86;
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
    vid.style.opacity = t < 0.85 ? 1 : 1 - smooth(0.85, 0.98, t);
    zEff = (1 + 1.25 * smooth(0, 0.5, t)) * extra;
    if (t > 0.7) zEff = 1 + (zEff - 1) * (1 - smooth(0.7, 1, t));
  }
  root.style.setProperty('--z', z.toFixed(4)); root.style.setProperty('--veil', veil.toFixed(3));
  root.style.setProperty('--dark', dark.toFixed(3)); root.style.setProperty('--boot', boot.toFixed(3));
  if (bootEl) bootEl.style.opacity = boot;
  bootSync(boot);
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
  if (next !== tone) { tone = next; nav.classList.toggle('tone-dark', !!tone); glass && glass.setBackdrop({ adaptT: tone ? 1 : 0 }); }
}
let ticking = false;
const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; frame(); }); } };
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', () => { measure(); frame(); });
measure(); frame();

/* ---------- section tracking: nav, rail ---------- */
const sections = ['trace', 'gateway', 'work', 'lab', 'about', 'contact'].map(id => $('#' + id)).filter(Boolean);
const navMap = { trace: 'trace', gateway: 'trace', work: 'work', lab: 'lab', about: 'about', contact: 'about' };
const railMap = { trace: 0, gateway: 1, work: 2, lab: 3, about: 4, contact: 4 };
let current = '';
function setActive(id) {
  if (id === current) return; current = id;
  $$('#nav a').forEach(a => a.dataset.s === navMap[id] ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'));
  const r = railMap[id];
  $$('#rail a').forEach(a => { const i = +a.dataset.r; a.classList.toggle('act', i === r); a.classList.toggle('done', i < r); });
  $$('#rail .seg i').forEach((s, i) => { s.style.transform = `scaleY(${i < r ? 1 : 0})`; s.style.transition = 'transform .5s'; });
}
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => io.observe(s));
const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
$$('.reveal').forEach(el => rv.observe(el));
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

/* ---------- 03 projects ---------- */
const PROJECTS = [
  { id: 'bl', name: 'BoundaryLab', tag: 'Local-first authorization verification', stage: 1, lede: 'Local-first authorization verification, independent of Aetheris Platform. Change the identity, resource or rule and follow the checks behind each decision.',
    kv: [['focus', 'Authorization engineering'], ['scope', 'Ownership · tenant isolation · evidence'], ['status', 'Pre-release prototype']],
    evi: 'The in-browser model on this site demonstrates the rules only. It does not validate BoundaryLab’s emulator or any live system.',
    links: [['Product overview ↗', 'https://boundarylab.vercel.app/']] },
  { id: 'ae', name: 'Aetheris Platform', tag: 'Backend services with explicit boundaries', stage: 0, lede: 'Backend services with explicit boundaries and an independently owned AI runtime, fronted by a single gateway.',
    kv: [['focus', 'Backend & distributed systems'], ['stack', 'Java · Spring · PostgreSQL · Redis · RabbitMQ'], ['status', 'Research · hardware validation pending']],
    evi: 'Verified in CI: 8 relay workers competed for 24 events and each was claimed once. That proves this controlled test, not an exactly-once guarantee. Not production-ready.',
    links: [['Architecture & source ↗', 'https://github.com/teldigi5-wq/aetheris-platform'], ['Inspect the CI run ↗', 'https://github.com/teldigi5-wq/aetheris-platform/actions/runs/42329287377']] },
  { id: 'wf', name: 'Wayfarer', tag: 'Discovery, planning and arrival', stage: 2, lede: 'Connecting discovery, planning and the first moments of arrival, and still useful without paid APIs.',
    kv: [['focus', 'Full-stack product development'], ['scope', 'Discovery · itineraries · local persistence'], ['status', 'Public planning experience · no live booking']],
    evi: 'Six rule-based planning assistants work with browser-local plans. Provider-based AI and live booking are disabled.',
    links: [['Try the live app ↗', 'https://wayfarer-world-travel.vercel.app/'], ['Source ↗', 'https://github.com/teldigi5-wq/wayfarer-world-travel']] }
];
const STAGES = ['Research', 'Prototype', 'Public'];
const listEl = $('#list'), detailEl = $('#detail');
let sel = 0;
listEl.innerHTML = PROJECTS.map((p, i) => `<button class="row" role="option" type="button" data-i="${i}" aria-selected="${i === 0}"><span><b>${p.name}</b><small>${p.tag}</small></span><span><span class="track"><i style="left:${p.stage * 33.3}%;width:33.4%"></i></span><span class="stages">${STAGES.map(s => `<span>${s}</span>`).join('')}</span></span></button>`).join('');
function showProject(i) {
  sel = i; const p = PROJECTS[i];
  $$('.row', listEl).forEach((r, k) => r.setAttribute('aria-selected', k === i));
  detailEl.innerHTML = `<span class="chip ac">0${i + 1} · ${STAGES[p.stage].toUpperCase()}</span><h3>${p.name}</h3><p>${p.lede}</p><dl class="kv">${p.kv.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl><div class="evi">${p.evi}</div><div class="links">${p.links.map(([t, u], n) => `<a class="btn ${n ? 'alt' : ''}" href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>`).join('')}</div>`;
}
listEl.addEventListener('click', e => { const r = e.target.closest('.row'); if (r) showProject(+r.dataset.i); });
listEl.addEventListener('keydown', e => { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); const n = (sel + (e.key === 'ArrowDown' ? 1 : -1) + PROJECTS.length) % PROJECTS.length; showProject(n); $$('.row', listEl)[n].focus(); } });
showProject(0);

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
$('#copyMail').addEventListener('click', async e => { try { await navigator.clipboard.writeText('teldigi5@gmail.com'); e.target.textContent = 'Copied ✓'; } catch { e.target.textContent = 'teldigi5@gmail.com'; } setTimeout(() => e.target.textContent = 'Copy email', 2200); });

/* ---------- command palette ---------- */
const pal = $('#pal'), palIn = $('#palIn'), palList = $('#palList');
const ITEMS = [['Trace', '#trace', 'top hero home'], ['Gateway · live API', '#gateway', 'api console'], ['Work · projects', '#work', 'boundarylab aetheris wayfarer'], ['Lab · playable demos', '#lab', 'rate limiter query access'], ['About', '#about', 'bio sliit'], ['Contact · hire me', '#contact', 'email hire'], ['CV (PDF)', 'assets/Poojana_Kaveesh_ATS_2026.pdf', 'resume'], ['GitHub', 'https://github.com/teldigi5-wq', 'code'], ['LinkedIn', 'https://www.linkedin.com/in/poojana-kaveesh-sellahewa-3048b8387/', 'profile']];
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
