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
  // Hide the bar while reading downward, bring it back on the way up or near the top.
  const header = document.getElementById('header');
  let lastY = scrollY;
  const autoHide = () => {
    const y = scrollY, delta = y - lastY;
    if (Math.abs(delta) < 6) return;
    const hide = delta > 0 && y > 140;
    header?.classList.toggle('is-nav-hidden', hide);
    document.documentElement.classList.toggle('nav-hidden', hide);
    lastY = y;
  };
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
