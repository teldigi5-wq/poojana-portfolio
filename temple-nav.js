/* Temple navigation: tracks the section in view, slides a bronze pip behind the
   active link, and shows hero chapter progress as three ticks under Home. */
(() => {
  const nav = document.querySelector('.temple-nav');
  if (!nav) return;
  const items = [...nav.querySelectorAll('.tn-item')];
    const byKey = Object.fromEntries(items.map(a => [a.dataset.nav, a]));
  const ticks = [...nav.querySelectorAll('.tn-ticks b')];
  // Sections in page order and which link each one belongs to.
  const map = [['#home', 'home'], ['.intro', 'home'], ['#toolkit', 'dimension'], ['#dimension', 'dimension'],
    ['#work', 'work'], ['#about', 'about'], ['#approach', 'approach'], ['#contact', 'contact']]
    .map(([sel, key]) => [document.querySelector(sel), key]).filter(([el]) => el && el.offsetHeight > 0);

  let current = '';
  const place = key => {
    // The active mark is pure CSS (aria-current); nothing to position.
  };
  const setCurrent = key => {
    if (key === current) return;
    current = key;
    items.forEach(a => a.dataset.nav === key ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'));
    document.documentElement.classList.toggle('is-in-hero', key === 'home');
    place(key);
  };
  const update = () => {
    const line = innerHeight * 0.55;
    let key = 'home';
    for (const [el, k] of map) if (el.getBoundingClientRect().top <= line) key = k;
    // Past the end of the page the last section always wins.
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) key = 'contact';
    setCurrent(key);
  };
  // After the first screen the bar folds into the medallion; clicking it opens the full bar again.
  const header = document.getElementById('header');
  const medal = nav.querySelector('.tn-medal');
  const root = document.documentElement;
  const desktop = matchMedia('(min-width: 901px)');
  let compact = false, open = false, openedAt = 0;
  const sync = () => {
    header?.classList.toggle('is-nav-compact', compact);
    header?.classList.toggle('is-nav-open', open);
    root.classList.toggle('nav-compact', compact);
    if (compact) {
      medal.setAttribute('aria-expanded', String(open));
      medal.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    } else {
      medal.removeAttribute('aria-expanded');
      medal.setAttribute('aria-label', 'Poojana Kaveesh, back to the top');
    }
  };
  const setOpen = value => { open = value; openedAt = scrollY; sync(); };
  const autoHide = () => {
    if (!desktop.matches) { if (compact || open) { compact = open = false; sync(); } return; }
    const y = scrollY;
    if (!compact && y > 160) { compact = true; open = false; sync(); }
    else if (compact && y < 90) { compact = open = false; sync(); }
    else if (compact && open && Math.abs(y - openedAt) > 220) setOpen(false);   // scrolled away: fold again
  };
  medal.addEventListener('click', event => { if (compact) { event.preventDefault(); setOpen(!open); } });
  nav.querySelectorAll('.tn-item').forEach(a => a.addEventListener('click', () => { if (compact) setOpen(false); }));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && compact && open) { setOpen(false); medal.focus(); } });
  document.addEventListener('pointerdown', event => { if (compact && open && !event.target.closest('.temple-nav')) setOpen(false); });
  desktop.addEventListener?.('change', autoHide);
  let raf = 0;
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); autoHide(); }); };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => { const k = current; current = ''; setCurrent(k); update(); });
  if (document.fonts?.ready) document.fonts.ready.then(() => { const k = current; current = ''; setCurrent(k); });
  // The hero script reports which chapter is showing.
  document.addEventListener('temple:chapter', e => {
    const n = e.detail?.index ?? -1;
    ticks.forEach((t, i) => t.classList.toggle('on', i <= n));
  });
  update();
})();
