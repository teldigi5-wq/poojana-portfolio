/* Stage 5: lightweight interactive portrait with optional cinematic clip. */
(() => {
  const hero = document.querySelector('.hero');
  const portrait = hero?.querySelector('.hero-portrait');
  const portraitImage = portrait?.querySelector('img');
  if (!hero || !portrait || !portraitImage) return;
  const fine = matchMedia('(hover:hover) and (pointer:fine)');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const wide = matchMedia('(min-width:900px)');
  const enabled = () => fine.matches && wide.matches && !motion.matches && !document.documentElement.classList.contains('performance-lite') && !document.hidden;
  let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
  function animate() {
    raf = 0;
    x += (tx - x) * .12;
    y += (ty - y) * .12;
    portrait.style.setProperty('--portrait-move-x', x.toFixed(2) + 'px');
    portrait.style.setProperty('--portrait-move-y', y.toFixed(2) + 'px');
    if (Math.abs(tx - x) > .1 || Math.abs(ty - y) > .1) raf = requestAnimationFrame(animate);
  }
  function reset() {
    tx = 0; ty = 0;
    if (!raf) raf = requestAnimationFrame(animate);
  }
  hero.addEventListener('pointermove', (e) => {
    if (!enabled() || e.pointerType !== 'mouse') return;
    const b = hero.getBoundingClientRect();
    tx = Math.max(-7, Math.min(7, ((e.clientX - b.left) / b.width - .5) * 14));
    ty = Math.max(-5, Math.min(5, ((e.clientY - b.top) / b.height - .5) * 10));
    if (!raf) raf = requestAnimationFrame(animate);
  }, {passive:true});
  hero.addEventListener('pointerleave', reset);
  window.addEventListener('blur', reset);
  motion.addEventListener?.('change', reset);
  fine.addEventListener?.('change', reset);
  wide.addEventListener?.('change', reset);
  // Only play an actual head-turn clip if one has been explicitly supplied.
  // Keeping the photographic portrait as fallback prevents uncanny synthetic rotation.
  const source = hero.dataset.headTurnVideo;
  if (!source || !/^assets\/video\/[\w./-]+\.(mp4|webm)$/.test(source)) return;
  if (!enabled() || navigator.connection?.saveData) return;
  const clip = document.createElement('video');
  clip.className = 'hero-head-turn';
  clip.muted = true; clip.playsInline = true; clip.preload = 'none';
  clip.setAttribute('aria-hidden', 'true');
  clip.src = source;
  portrait.appendChild(clip);
  clip.addEventListener('loadeddata', () => {
    portrait.classList.add('has-head-turn');
    clip.play().catch(() => portrait.classList.remove('has-head-turn'));
  }, {once:true});
  const finish = () => {
    portrait.classList.remove('has-head-turn');
    clip.remove();
  };
  clip.addEventListener('ended', finish, {once:true});
  clip.addEventListener('error', finish, {once:true});
  clip.load();
})();
