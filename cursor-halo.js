/* Dependency-free cursor halo. The native OS cursor is always kept visible. */
(() => {
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const forced = matchMedia('(forced-colors: active)');
  if (!fine.matches || reduced.matches || forced.matches) return;
  const halo = document.createElement('div');
  halo.className = 'cursor-halo';
  halo.setAttribute('aria-hidden', 'true');
  document.body.appendChild(halo);
  let x = -100, y = -100, targetX = -100, targetY = -100, frame = 0, active = false;
  const show = (visible) => {
    active = visible;
    halo.classList.toggle('cursor-halo--visible', visible);
    if (visible && !frame) frame = requestAnimationFrame(tick);
  };
  function tick() {
    frame = 0;
    if (!active) return;
    x += (targetX - x) * .28;
    y += (targetY - y) * .28;
    halo.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0) translate(-50%,-50%)';
    if (Math.abs(targetX - x) > .08 || Math.abs(targetY - y) > .08) {
      frame = requestAnimationFrame(tick);
    }
  }
  window.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse' || !fine.matches || reduced.matches || forced.matches) { show(false); return; }
    targetX = event.clientX; targetY = event.clientY;
    if (!active) {
      x = targetX; y = targetY;
      halo.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0) translate(-50%,-50%)';
    }
    show(true);
    halo.classList.toggle('cursor-halo--hover', !!event.target.closest('a, button, [role="button"], summary, select'));
    if (!frame) frame = requestAnimationFrame(tick);
  }, { passive: true });
  document.addEventListener('pointerout', (e) => { if (!e.relatedTarget) show(false); });
  window.addEventListener('blur', () => show(false));
  document.addEventListener('visibilitychange', () => { if (document.hidden) show(false); });
  const disable = () => show(false);
  for (const query of [fine, reduced, forced]) query.addEventListener?.('change', disable);
})();
