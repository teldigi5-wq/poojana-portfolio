/* One on-demand spotlight. No autoplay, canvas, pointer replacement or scroll timeline. */
(() => {
  'use strict';
  const hero = document.querySelector('.editorial-hero');
  const reveal = hero?.querySelector('.editorial-hero__reveal');
  if (!hero || !reveal) return;

  const mask = 'radial-gradient(closest-side, #000 62%, transparent 100%)';
  if (!window.CSS?.supports('mask-image', mask) && !window.CSS?.supports('-webkit-mask-image', mask)) return;
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const forced = matchMedia('(forced-colors: active)');
  const enabled = () => fine.matches && !reduced.matches && !forced.matches && !document.hidden;
  let frame = 0;
  let active = false;
  let x = 0, y = 0, targetX = 0, targetY = 0;

  const paint = () => {
    const position = `${x - 55}px ${y - 70}px`;
    reveal.style.maskPosition = position;
    reveal.style.webkitMaskPosition = position;
  };
  const reset = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    active = false;
    reveal.style.opacity = '0';
  };
  function tick() {
    frame = 0;
    if (!active || !enabled()) { reset(); return; }
    x += (targetX - x) * .22;
    y += (targetY - y) * .22;
    const settled = Math.abs(targetX - x) < .3 && Math.abs(targetY - y) < .3;
    if (settled) { x = targetX; y = targetY; }
    paint();
    if (!settled) frame = requestAnimationFrame(tick);
  }
  const move = event => {
    if (!enabled() || !reveal.complete || !reveal.naturalWidth) { reset(); return; }
    const rect = hero.getBoundingClientRect();
    targetX = event.clientX - rect.left;
    targetY = event.clientY - rect.top;
    if (!active) {
      x = targetX;
      y = targetY;
      active = true;
      paint();
      reveal.style.opacity = '1';
      return;
    }
    if (!frame) frame = requestAnimationFrame(tick);
  };
  const hideForKeyboard = event => { if (event.key === 'Tab') reset(); };
  hero.addEventListener('mousemove', move, { passive: true });
  hero.addEventListener('mouseleave', reset);
  reveal.addEventListener('error', reset);
  window.addEventListener('blur', reset);
  window.addEventListener('resize', reset, { passive: true });
  // A stationary cursor must not leave a misplaced oval behind after scrolling.
  window.addEventListener('scroll', reset, { passive: true });
  window.addEventListener('pagehide', reset);
  document.addEventListener('visibilitychange', reset);
  document.addEventListener('keydown', hideForKeyboard);
  for (const query of [fine, reduced, forced]) query.addEventListener('change', reset);
})();
