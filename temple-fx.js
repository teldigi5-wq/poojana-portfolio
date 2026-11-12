/* Temple FX. Cursor with contextual labels, magnetic controls, gold dust that reacts to scrolling,
   and a pointer spotlight on the project stages. Desktop pointers only; skipped for reduced motion. */
(() => {
  const fine = matchMedia('(pointer:fine)').matches && matchMedia('(min-width:901px)').matches;
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (calm) return;
  const root = document.documentElement;

  /* --- gold dust: a few motes drift upward and streak with scroll speed --- */
  const canvas = document.createElement('canvas');
  canvas.className = 'fx-dust';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let W = 0; let H = 0; let dpr = 1;
  const motes = [];
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 1.5);
    W = canvas.width = Math.floor(innerWidth * dpr);
    H = canvas.height = Math.floor(innerHeight * dpr);
  };
  resize();
  addEventListener('resize', resize);
  const count = fine ? 16 : 8;
  for (let i = 0; i < count; i++) motes.push({ x: Math.random(), y: Math.random(), z: 0.3 + Math.random() * 0.9, s: Math.random() * 6.28 });
  let lastY = scrollY; let vel = 0; let mx = 0.5; let my = 0.5; let running = true;
  addEventListener('pointermove', e => { mx = e.clientX / innerWidth; my = e.clientY / innerHeight; }, { passive: true });
  document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) requestAnimationFrame(tick); });
  function tick(now) {
    if (!running) return;
    const dy = scrollY - lastY; lastY = scrollY;
    vel += (dy - vel) * 0.12;
    ctx.clearRect(0, 0, W, H);
    for (const m of motes) {
      m.s += 0.01;
      m.y -= (0.00028 * m.z) + vel * 0.00045 * m.z;
      m.x += Math.sin(m.s) * 0.00035 + (mx - 0.5) * 0.00012 * m.z;
      if (m.y < -0.02) { m.y = 1.02; m.x = Math.random(); }
      if (m.y > 1.02) m.y = -0.02;
      const px = m.x * W; const py = m.y * H;
      const r = (0.9 + m.z * 1.6) * dpr;
      const streak = Math.min(Math.abs(vel) * 1.6, 26) * dpr * m.z;
      const g = ctx.createRadialGradient(px, py, 0, px, py, r * 3.2);
      g.addColorStop(0, `rgba(241,201,148,${0.55 * m.z})`);
      g.addColorStop(1, 'rgba(241,201,148,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(px, py, r * 3.2, r * 3.2 + streak, 0, 0, 6.283);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  if (!fine) return;

  /* --- cursor --- */
  const ring = document.createElement('div'); ring.className = 'fx-cursor'; ring.innerHTML = '<span></span>';
  const dot = document.createElement('div'); dot.className = 'fx-dot';
  ring.setAttribute('aria-hidden', 'true'); dot.setAttribute('aria-hidden', 'true');
  document.body.append(ring, dot);
  let x = innerWidth / 2; let y = innerHeight / 2; let rx = x; let ry = y; let shown = false;
  addEventListener('pointermove', e => {
    x = e.clientX; y = e.clientY;
    if (!shown) { shown = true; rx = x; ry = y; root.classList.add('fx-on'); }
  }, { passive: true });
  root.addEventListener('pointerleave', () => { root.classList.remove('fx-on'); shown = false; });
  addEventListener('pointerdown', () => ring.classList.add('is-down'));
  addEventListener('pointerup', () => ring.classList.remove('is-down'));
  document.addEventListener('pointerover', e => {
    ring.classList.toggle('is-link', !!e.target.closest?.('a,button,[role=button],label,select'));
  });
  (function follow() {
    rx += (x - rx) * 0.2; ry += (y - ry) * 0.2;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    dot.style.transform = `translate(${x}px,${y}px)`;
    requestAnimationFrame(follow);
  })();

  /* --- project stages: a gold spotlight follows the pointer --- */
  document.querySelectorAll('.project-stage').forEach(stage => {
    stage.addEventListener('pointermove', e => {
      const r = stage.getBoundingClientRect();
      stage.style.setProperty('--mx', `${e.clientX - r.left}px`);
      stage.style.setProperty('--my', `${e.clientY - r.top}px`);
      stage.classList.add('is-lit');
    });
    stage.addEventListener('pointerleave', () => stage.classList.remove('is-lit'));
  });
})();
