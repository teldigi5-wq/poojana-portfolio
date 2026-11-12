/* Story layer: each chapter interlude fades its heading in, lights its sentence word by word as you
   scroll, and updates the chapter marker. Plain scroll maths, no pinning. Reduced motion: static. */
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const beats = [...document.querySelectorAll('.story-beat')];
  if (!beats.length) return;
  document.documentElement.classList.add('story-on');
  const hud = document.getElementById('story-hud');
  const hudNum = hud?.querySelector('b');
  const hudTitle = hud?.querySelector('em');
  const hero = document.getElementById('home');
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const words = beats.map(b => [...b.querySelectorAll('.sw')]);
  const state = beats.map(() => ({ o: -1, p: -1 }));
  let current = '';
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = innerHeight;
    let chapter = null;
    beats.forEach((beat, i) => {
      const r = beat.getBoundingClientRect();
      const travel = Math.max(1, r.height - vh);
      const p = clamp(-r.top / travel);                       // 0 → 1 while the heading is stuck
      const enter = clamp((vh - r.top) / (vh * 0.55));       // approaching
      const leave = clamp((r.bottom - vh) / (vh * 0.3));     // leaving
      const o = Math.min(enter, leave);
      const s = state[i];
      if (Math.abs(o - s.o) > 0.004 || Math.abs(p - s.p) > 0.002) {
        s.o = o; s.p = p;
        beat.style.setProperty('--o', o.toFixed(3));
        beat.style.setProperty('--p', p.toFixed(3));
        const list = words[i];
        const lit = clamp((p - 0.12) / 0.62) * list.length;
        list.forEach((w, k) => w.style.setProperty('--w', (0.14 + 0.86 * clamp(lit - k)).toFixed(2)));
      }
      if (r.top < vh * 0.6) chapter = beat;
      const near = r.top < vh * 0.5 && r.bottom > vh * 0.35;
      if (near && !inside[i]) { inside[i] = true; if (r.top > -vh * 0.8) strike(beat, i % 2 === 0 ? 'bolt' : 'javelin'); }
      else if (!near && (r.top > vh * 0.95 || r.bottom < vh * 0.05)) inside[i] = false;
    });
    if (hud) {
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
      const key = chapter ? chapter.dataset.chapter : (heroBottom > 0 ? 'I' : '');
      if (key !== current) {
        current = key;
        hudNum.textContent = key || 'I';
        hudTitle.textContent = chapter ? chapter.dataset.title : 'The Threshold';
      }
      hud.classList.toggle('is-on', scrollY > innerHeight * 0.6);
    }
  };
  /* --- the strike: Zeus' thunderbolt for odd chapters, a Spartan javelin for even ones --- */
  const fx = document.createElement('canvas');
  fx.className = 'story-strike';
  fx.setAttribute('aria-hidden', 'true');
  document.body.append(fx);
  const g = fx.getContext('2d');
  let dprS = 1; let busy = 0; let lastStrike = 0;
  const sizeFx = () => { dprS = Math.min(devicePixelRatio || 1, 1.5); fx.width = innerWidth * dprS; fx.height = innerHeight * dprS; };
  sizeFx(); addEventListener('resize', sizeFx);
  const bolt = (x1, y1, x2, y2, spread, out, depth = 0) => {
    if (depth > 6 || Math.hypot(x2 - x1, y2 - y1) < 6) { out.push([x1, y1, x2, y2]); return; }
    const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * spread;
    const my = (y1 + y2) / 2 + (Math.random() - 0.5) * spread * 0.4;
    bolt(x1, y1, mx, my, spread / 1.9, out, depth + 1);
    bolt(mx, my, x2, y2, spread / 1.9, out, depth + 1);
    if (depth === 2 && Math.random() < 0.55) bolt(mx, my, mx + (Math.random() - 0.5) * 380, my + 140 + Math.random() * 160, spread / 1.4, out, depth + 3);
  };
  const strike = (beat, kind) => {
    const now = performance.now();
    if (now - lastStrike < 1800) return;
    lastStrike = now;
    cancelAnimationFrame(busy);
    const W = innerWidth; const H = innerHeight;
    const tx = W / 2; const ty = H * 0.5;
    const segs = [];
    if (kind === 'bolt') bolt(tx + (Math.random() - 0.5) * 360, -30, tx, ty, 300, segs);
    const stick = beat.querySelector('.sb-stick');
    beat.classList.remove('is-struck'); void beat.offsetWidth; beat.classList.add('is-struck');
    const t0 = now;
    const DUR = 1100;
    const frame = t => {
      const k = (t - t0) / DUR;
      g.setTransform(dprS, 0, 0, dprS, 0, 0);
      g.clearRect(0, 0, W, H);
      if (k >= 1) { stick.style.transform = ''; return; }
      let impact = kind === 'bolt' ? 0.06 : 0.34;
      if (kind === 'bolt') {
        const a = k < 0.07 ? 1 : k < 0.14 ? 0.25 : k < 0.22 ? 1 : Math.max(0, 1 - (k - 0.22) / 0.5);
        g.lineCap = 'round'; g.lineJoin = 'round';
        for (const [w, col, blur] of [[9, 'rgba(241,201,148,.35)', 40], [3.2, '#fff6e4', 18]]) {
          g.strokeStyle = col; g.lineWidth = w; g.shadowColor = '#f1c994'; g.shadowBlur = blur; g.globalAlpha = a;
          g.beginPath();
          for (const [x1, y1, x2, y2] of segs) { g.moveTo(x1, y1); g.lineTo(x2, y2); }
          g.stroke();
        }
      } else {
        // javelin: arcs in from the left, sticks at the centre
        const f = Math.min(1, k / impact);
        const e = 1 - Math.pow(1 - f, 3);
        const sx = -200; const sy = ty - 430;
        const px = sx + (tx - sx) * e;
        const py = sy + (ty - sy) * e;
        const ang = Math.atan2(ty - sy, tx - sx);
        const len = 190;
        g.save(); g.translate(px, py); g.rotate(ang);
        const trail = g.createLinearGradient(-len * 2.6, 0, 0, 0);
        trail.addColorStop(0, 'rgba(241,201,148,0)'); trail.addColorStop(1, 'rgba(241,201,148,.55)');
        g.globalAlpha = k < impact ? 1 : Math.max(0, 1 - (k - impact) / 0.55);
        g.fillStyle = trail; g.fillRect(-len * 2.6, -1.5, len * 2.6, 3);
        g.shadowColor = '#f1c994'; g.shadowBlur = 16;
        g.strokeStyle = '#e9d7b0'; g.lineWidth = 3.2; g.beginPath(); g.moveTo(-len, 0); g.lineTo(0, 0); g.stroke();
        g.fillStyle = '#fff6e4'; g.beginPath(); g.moveTo(26, 0); g.lineTo(-8, -7); g.lineTo(-8, 7); g.closePath(); g.fill();
        g.strokeStyle = '#a8793f'; g.lineWidth = 6; g.beginPath(); g.moveTo(-len * 0.45, 0); g.lineTo(-len * 0.3, 0); g.stroke();
        g.restore();
      }
      g.shadowBlur = 0; g.globalAlpha = 1;
      const since = (k - impact) / (1 - impact);
      if (since > 0) {
        const fl = Math.max(0, 0.5 * (1 - since / 0.22));
        if (fl > 0) { g.fillStyle = `rgba(255,240,215,${fl})`; g.fillRect(0, 0, W, H); }
        g.strokeStyle = `rgba(241,201,148,${Math.max(0, 0.9 * (1 - since))})`;
        g.lineWidth = 2 + 6 * (1 - since);
        g.beginPath(); g.arc(tx, ty, since * Math.min(W, H) * 0.75, 0, 6.283); g.stroke();
        const shake = Math.max(0, 1 - since * 3) * 10;
        stick.style.transform = shake > 0.2 ? `translate(${(Math.random() - 0.5) * shake}px,${(Math.random() - 0.5) * shake}px)` : '';
      }
      busy = requestAnimationFrame(frame);
    };
    busy = requestAnimationFrame(frame);
  };
  const inside = beats.map(() => false);

  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener('scroll', request, { passive: true });
  addEventListener('resize', request);
  addEventListener('load', request);
  update();
})();
