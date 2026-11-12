/*
 * Ambient life for the hero scene. The picture is a still, so this adds what a still can't do
 * on its own: drifting cloud banks, rising steam, blinking server LEDs, a pulsing database,
 * a scanline on the laptop and glowing request packets travelling client -> server -> database.
 * Everything is placed in image-uv space and follows the same zoom as the scene, so it stays
 * attached to the objects during the scroll dive and fades out as the dive takes over.
 */
const TAU = Math.PI * 2;
const ROUTE = [[0.29, 0.655], [0.35, 0.661], [0.40, 0.667], [0.50, 0.672], [0.60, 0.667], [0.65, 0.656], [0.695, 0.628]];
const LEDS = [[0.275, 0.551, 0], [0.275, 0.581, 1.7], [0.275, 0.626, 3.1], [0.568, 0.4626, 0.6]];
const SCREEN = [0.405, 0.468, 0.574, 0.62];   // laptop screen, image uv

function seeded(n) { let s = n * 9301 + 49297; return () => ((s = (s * 9301 + 49297) % 233280) / 233280); }

export function mountLive(canvas, { place, reduce = false }) {
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx || reduce) return null;
  let W = 0, H = 0, dpr = 1, zoom = 1, alpha = 1, raf = 0, last = 0, T = 0, visible = true, px = 0.5, py = 0.5, tpx = 0.5, tpy = 0.5;
  const rnd = seeded(7);
  const clouds = Array.from({ length: 12 }, (_, i) => ({ u: rnd(), v: 0.62 + rnd() * 0.36, r: 0.12 + rnd() * 0.16, sp: 0.004 + rnd() * 0.009, a: 0.10 + rnd() * 0.10 }));
  const dust = Array.from({ length: 34 }, () => ({ u: rnd(), v: rnd(), r: 0.8 + rnd() * 2.2, sp: 0.012 + rnd() * 0.03, ph: rnd() * TAU, d: 0.3 + rnd() }));
  const steam = Array.from({ length: 7 }, (_, i) => ({ ph: i / 7, dx: (rnd() - 0.5) * 0.012 }));

  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 1.5); W = innerWidth; H = innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr); canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  };
  addEventListener('resize', () => { resize(); kick(); });
  addEventListener('pointermove', e => { tpx = e.clientX / innerWidth; tpy = e.clientY / innerHeight; }, { passive: true });

  const P = (u, v) => place([u, v], zoom);
  const glow = (x, y, r, rgb, a) => {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(${rgb},${a})`); g.addColorStop(0.4, `rgba(${rgb},${a * 0.35})`); g.addColorStop(1, `rgba(${rgb},0)`);
    ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2);
  };
  function along(s) {                       // point on the packet route, s in 0..1
    const n = ROUTE.length - 1, f = Math.min(Math.max(s, 0), 0.9999) * n, i = Math.floor(f), t = f - i;
    return [ROUTE[i][0] + (ROUTE[i + 1][0] - ROUTE[i][0]) * t, ROUTE[i][1] + (ROUTE[i + 1][1] - ROUTE[i][1]) * t];
  }

  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    if (alpha < 0.01) return;
    const k = Math.min(Math.max(zoom * W / 1440, 0.55), 1.7);
    ctx.globalAlpha = alpha;
    // sun breathing
    const sun = P(0.10, 0.395); ctx.globalCompositeOperation = 'lighter';
    glow(sun[0], sun[1], 150 * k, '255,214,160', 0.16 + 0.07 * Math.sin(T * 0.7));
    // cloud banks drifting
    ctx.globalCompositeOperation = 'source-over';
    for (const c of clouds) {
      const u = ((c.u + T * c.sp) % 1.3) - 0.15, p = P(u, c.v + Math.sin(T * 0.25 + c.u * 9) * 0.008);
      const g = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], c.r * W * zoom);
      g.addColorStop(0, `rgba(255,255,255,${c.a})`); g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.save(); ctx.translate(p[0], p[1]); ctx.scale(1, 0.34); ctx.translate(-p[0], -p[1]); ctx.fillStyle = g; ctx.fillRect(p[0] - c.r * W * zoom, p[1] - c.r * W * zoom, c.r * W * zoom * 2, c.r * W * zoom * 2); ctx.restore();
    }
    // steam from the cup
    for (const s of steam) {
      const f = (T * 0.22 + s.ph) % 1, p = P(0.205 + s.dx * 3 + Math.sin(T + s.ph * 6) * 0.004 * f, 0.64 - f * 0.085);
      const r = (6 + f * 20) * k, a = Math.sin(f * Math.PI) * 0.16;
      glow(p[0], p[1], r, '255,255,255', a);
    }
    // screen scanline
    ctx.globalCompositeOperation = 'lighter';
    const tl = P(SCREEN[0], SCREEN[1]), br = P(SCREEN[2], SCREEN[3]);
    ctx.save(); ctx.beginPath(); ctx.roundRect(tl[0], tl[1], br[0] - tl[0], br[1] - tl[1], 6 * k); ctx.clip();
    const sy = tl[1] + ((T * 0.35) % 1.25 - 0.1) * (br[1] - tl[1]);
    const lg = ctx.createLinearGradient(0, sy - 22 * k, 0, sy + 22 * k);
    lg.addColorStop(0, 'rgba(90,220,200,0)'); lg.addColorStop(0.5, 'rgba(110,235,215,0.20)'); lg.addColorStop(1, 'rgba(90,220,200,0)');
    ctx.fillStyle = lg; ctx.fillRect(tl[0], sy - 22 * k, br[0] - tl[0], 44 * k);
    ctx.restore();
    // database pulse rings
    const db = P(0.695, 0.585);
    glow(db[0], db[1], 70 * k, '90,170,255', 0.10 + 0.06 * Math.sin(T * 1.6));
    for (let i = 0; i < 2; i++) {
      const f = (T * 0.36 + i * 0.5) % 1;
      ctx.strokeStyle = `rgba(130,200,255,${(1 - f) * 0.42})`; ctx.lineWidth = 1.5 * k;
      ctx.beginPath(); ctx.ellipse(db[0], db[1] + 30 * k * f, (28 + 34 * f) * k, (9 + 11 * f) * k, 0, 0, TAU); ctx.stroke();
    }
    // LEDs
    for (const [u, v, ph] of LEDS) {
      const p = P(u, v), on = 0.5 + 0.5 * Math.sin(T * 3.1 + ph * 2.3), flick = Math.sin(T * 11 + ph * 5) > 0.82 ? 0.3 : 1;
      glow(p[0], p[1], 9 * k, ph === 0.6 ? '110,255,190' : '120,185,255', (0.25 + 0.6 * on) * flick);
    }
    // request packets
    for (let i = 0; i < 3; i++) {
      const s = (T * 0.16 + i / 3) % 1;
      for (let j = 0; j < 9; j++) {
        const q = along(Math.max(s - j * 0.012, 0)), p = P(q[0], q[1]);
        glow(p[0], p[1], (j === 0 ? 11 : 7 - j * 0.45) * k, j === 0 ? '215,240,255' : '120,190,255', j === 0 ? 0.85 : 0.30 - j * 0.03);
      }
    }
    // dust / bokeh, with depth parallax from the pointer
    px += (tpx - px) * 0.04; py += (tpy - py) * 0.04;
    for (const d of dust) {
      const u = (d.u + Math.sin(T * 0.2 + d.ph) * 0.01) % 1, v = ((d.v - T * d.sp) % 1 + 1) % 1;
      const x = u * W + (px - 0.5) * 36 * d.d, y = v * H * 0.92 + (py - 0.5) * 22 * d.d;
      glow(x, y, d.r * 4 * k * d.d, '255,246,225', (0.10 + 0.14 * Math.sin(T * 1.3 + d.ph) ** 2) * d.d);
    }
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
  }

  function tick(now) {
    raf = 0; const dt = Math.min((now - last) / 1000 || 0.016, 0.05); last = now; T += dt;
    draw();
    if (visible && !document.hidden && alpha > 0.01) raf = requestAnimationFrame(tick);
  }
  function kick() { if (!raf && visible && !document.hidden && alpha > 0.01) { last = performance.now(); raf = requestAnimationFrame(tick); } }
  document.addEventListener('visibilitychange', kick);
  resize(); kick();
  return {
    setView(z, a) { zoom = z; const was = alpha; alpha = a; canvas.style.visibility = a < 0.01 ? 'hidden' : 'visible'; if (a > 0.01 && was <= 0.01) kick(); else if (!raf) draw(); }
  };
}
