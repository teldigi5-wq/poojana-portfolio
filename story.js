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
      if (near && !inside[i]) { inside[i] = true; if (r.top > -vh * 0.8) strike(beat); }
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
  /* --- the strike: a clip of Zeus hurling his thunderbolt plays over the page; on the flash the chapter opens --- */
  const FLASH = 2.8;                     // seconds into the clip where the bolt lands
  const clip = document.createElement('video');
  clip.className = 'story-zeus';
  clip.muted = true; clip.playsInline = true; clip.preload = 'none'; clip.setAttribute('aria-hidden', 'true');
  clip.innerHTML = '<source src="assets/story/zeus.webm" type="video/webm"><source src="assets/story/zeus.mp4" type="video/mp4">';
  document.body.append(clip);
  let loaded = false; let current2 = null; let flashed = false; let lastStrike = 0; let shakeUntil = 0;
  const warm = () => { if (!loaded) { loaded = true; clip.preload = 'auto'; clip.load(); } };
  const flash = () => {
    if (flashed || !current2) return;
    flashed = true;
    const beat = current2; const stick = beat.querySelector('.sb-stick');
    beat.classList.remove('is-struck'); void beat.offsetWidth; beat.classList.add('is-struck');
    shakeUntil = performance.now() + 450;
    const shake = () => {
      const left = shakeUntil - performance.now();
      stick.style.transform = left > 0 ? `translate(${(Math.random() - 0.5) * 12 * left / 450}px,${(Math.random() - 0.5) * 12 * left / 450}px)` : '';
      if (left > 0) requestAnimationFrame(shake);
    };
    shake();
  };
  clip.addEventListener('timeupdate', () => { if (clip.currentTime >= FLASH) flash(); });
  clip.addEventListener('ended', () => { clip.classList.remove('is-on'); flash(); });
  const strike = beat => {
    const now = performance.now();
    if (now - lastStrike < 4200 || !loaded) return;
    lastStrike = now;
    current2 = beat; flashed = false;
    clip.currentTime = 0;
    clip.classList.add('is-on');
    clip.play().catch(() => { clip.classList.remove('is-on'); current2 = beat; flash(); });
    setTimeout(() => clip.classList.remove('is-on'), 3900);
  };
  const inside = beats.map(() => false);

  const firstBeat = beats[0];
  new IntersectionObserver(([e]) => { if (e.isIntersecting) warm(); }, { rootMargin: '2500px 0px' }).observe(firstBeat);
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener('scroll', request, { passive: true });
  addEventListener('resize', request);
  addEventListener('load', request);
  update();
})();
