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
  /* --- a framed film plate in each chapter: Zeus hurls the thunderbolt once when the chapter comes into view --- */
  const plates = beats.map((beat, i) => {
    const fig = document.createElement('figure');
    fig.className = 'sb-plate';
    fig.setAttribute('aria-hidden', 'true');
    fig.innerHTML = '<video muted playsinline preload="none" poster="assets/story/zeus-poster.webp"><source src="assets/story/zeus.webm" type="video/webm"><source src="assets/story/zeus.mp4" type="video/mp4"></video><figcaption>PLATE ' + beat.dataset.chapter + ' · THE THROW</figcaption>';
    beat.querySelector('.sb-stick').append(fig);
    const video = fig.firstChild;
    video.addEventListener('ended', () => { video.currentTime = 2.0; });
    return { fig, video, played: false };
  });
  const playPlate = i => {
    const p = plates[i];
    if (p.played) return;
    p.played = true;
    p.video.preload = 'auto';
    p.video.currentTime = 0;
    p.video.play().catch(() => {});
  };
  const plateObserver = new IntersectionObserver(entries => entries.forEach(e => {
    const i = beats.indexOf(e.target);
    if (e.isIntersecting && e.intersectionRatio > 0.2) playPlate(i);
    else if (!e.isIntersecting) { plates[i].played = false; plates[i].video.pause(); }
  }), { threshold: [0, 0.2] });
  beats.forEach(b => plateObserver.observe(b));

  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener('scroll', request, { passive: true });
  addEventListener('resize', request);
  addEventListener('load', request);
  update();
})();
