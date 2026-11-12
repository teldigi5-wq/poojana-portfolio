/* Draggable ID-badge lanyard: pendulum + secondary spring, flip to a links side.
   Vertical touch still scrolls the page; reduced motion keeps it static (flip stays). */
export function mountLanyard(root) {
  const rig = root.querySelector('#lanyRig'), wrap = root.querySelector('#lanyWrap'), badge = root.querySelector('#lanyBadge');
  const flipEl = root.querySelector('#lanyFlip'), btn = root.querySelector('#lanyBtn'), back = root.querySelector('#lanyBack');
  if (!rig || !badge) return { destroy() {} };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  let th = reduce ? 0 : 0.42, om = 0, ph = 0, pom = 0;       // strap angle / badge lag (rad)
  let flipped = false, dragging = false, running = false, visible = true, last = 0, raf = 0;
  const W0 = 7.2, DAMP = 0.9;                                 // ω0² (gravity/length), damping
  const dragState = { x0: 0, y0: 0, t0: 0, moved: 0, prev: 0 };

  const paint = () => {
    rig.style.transform = `rotate(${th.toFixed(4)}rad)`;
    wrap.style.transform = `rotate(${ph.toFixed(4)}rad)`;
    root.style.setProperty('--sh', clamp(0.5 + th * 0.9 + ph * 0.6, 0, 1).toFixed(3));
  };
  const setFlip = (v) => {
    flipped = v; flipEl.classList.toggle('flipped', v); btn.setAttribute('aria-pressed', v); btn.textContent = v ? 'Flip back' : 'Flip badge';
    back.setAttribute('aria-hidden', !v); back.querySelectorAll('a').forEach(a => a.tabIndex = v ? 0 : -1);
    root.querySelector('.front').setAttribute('aria-hidden', v);
  };
  const anchor = () => { const r = rig.getBoundingClientRect(); const rr = root.getBoundingClientRect(); return { x: rr.left + rr.width / 2, y: rr.top + 10 }; };

  function step(now) {
    raf = 0; if (!running) return;
    const dt = clamp((now - last) / 1000 || 0.016, 0.001, 1 / 30); last = now;
    if (!dragging) {
      const a = -W0 * Math.sin(th) - DAMP * om;
      om += a * dt; th += om * dt;
      const pa = -70 * ph - 5.5 * pom - 0.85 * a;
      pom += pa * dt; ph = clamp(ph + pom * dt, -0.55, 0.55);
    } else {
      pom += (-70 * ph - 5.5 * pom) * dt; ph = clamp(ph + pom * dt, -0.55, 0.55);
    }
    paint();
    const settled = !dragging && Math.abs(th) < 0.0006 && Math.abs(om) < 0.004 && Math.abs(ph) < 0.0008 && Math.abs(pom) < 0.01;
    if (settled || !visible || document.hidden) { running = false; if (settled) { th = om = ph = pom = 0; paint(); } return; }
    raf = requestAnimationFrame(step);
  }
  const wake = () => { if (reduce || running) return; running = true; last = performance.now(); raf = requestAnimationFrame(step); };

  // drag
  badge.addEventListener('pointerdown', e => {
    if (e.button && e.button !== 0) return;
    if (e.target.closest('a')) return;
    dragState.x0 = e.clientX; dragState.y0 = e.clientY; dragState.t0 = performance.now(); dragState.moved = 0; dragState.prev = th;
    if (reduce) return;
    dragging = true; badge.setPointerCapture(e.pointerId); badge.classList.add('grab'); wake();
  });
  badge.addEventListener('pointermove', e => {
    if (!dragging) return;
    dragState.moved = Math.max(dragState.moved, Math.hypot(e.clientX - dragState.x0, e.clientY - dragState.y0));
    const a = anchor(); const target = clamp(Math.atan2(a.x - e.clientX, e.clientY - a.y) * -1, -1.0, 1.0);
    const prev = th; th += (target - th) * 0.35; om = (th - prev) / 0.016 * 0.55;
  });
  const end = e => {
    const wasTap = dragState.moved < 6 && performance.now() - dragState.t0 < 450;
    if (dragging) { dragging = false; badge.classList.remove('grab'); try { badge.releasePointerCapture(e.pointerId); } catch (_) {} wake(); }
    if (wasTap && !(e.target.closest && e.target.closest('a'))) setFlip(!flipped);
  };
  badge.addEventListener('pointerup', end); badge.addEventListener('pointercancel', e => { if (dragging) { dragging = false; badge.classList.remove('grab'); wake(); } });
  btn.addEventListener('click', () => setFlip(!flipped));
  root.addEventListener('keydown', e => { if (e.key === 'Escape' && flipped) { setFlip(false); btn.focus(); } });

  // scroll nudges the badge
  let lastY = scrollY;
  const onScroll = () => { const dy = scrollY - lastY; lastY = scrollY; if (!visible || reduce || Math.abs(dy) < 2) return; om += clamp(dy * 0.0016, -0.5, 0.5); wake(); };
  addEventListener('scroll', onScroll, { passive: true });
  const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) wake(); }, { threshold: 0.05 });
  io.observe(root);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) wake(); });
  setFlip(false); paint(); wake();
  return { destroy() { io.disconnect(); removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); } };
}
