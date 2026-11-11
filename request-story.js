/* Request story — the whole page reads as one request travelling through a system.
   A slim rail on the left edge carries a glowing packet that follows your scroll
   through each "layer" and resolves as 200 OK at Contact. Mouse/visual enhancement
   only: the rail is aria-hidden and the normal navigation stays the accessible route. */
(() => {
  if (!('IntersectionObserver' in window)) return;

  const STOPS = [
    { id: 'home', code: 'REQ', label: 'Request received' },
    { id: 'dimension', code: 'L7', label: 'Layers' },
    { id: 'boundary-card', code: 'AUTH', label: 'Authorization' },
    { id: 'aetheris-card', code: 'QUEUE', label: 'Services & queue' },
    { id: 'wayfarer-card', code: 'CLIENT', label: 'Product surface' },
    { id: 'about', code: 'WHOAMI', label: 'The engineer' },
    { id: 'contact', code: '200', label: 'OK — let’s talk' }
  ].map(stop => ({ ...stop, el: document.getElementById(stop.id) })).filter(stop => stop.el);
  if (STOPS.length < 3) return;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches ||
    new URLSearchParams(location.search).get('motion') === 'off';

  const rail = document.createElement('div');
  rail.className = 'request-rail';
  rail.setAttribute('aria-hidden', 'true');
  rail.innerHTML = '<span class="rr-track"><span class="rr-fill"></span></span><span class="rr-packet"><i></i></span>';
  const markers = STOPS.map(stop => {
    const marker = document.createElement('a');
    marker.className = 'rr-stop';
    marker.href = `#${stop.id}`;
    marker.tabIndex = -1;
    marker.innerHTML = `<b></b><span><em>${stop.code}</em>${stop.label}</span>`;
    rail.append(marker);
    return marker;
  });
  document.body.append(rail);
  document.documentElement.classList.add('rs-ready');

  const fill = rail.querySelector('.rr-fill');
  const packet = rail.querySelector('.rr-packet');
  const okChip = document.querySelector('.contact-ok');

  let positions = [];
  const measure = () => {
    const docHeight = document.documentElement.scrollHeight - innerHeight;
    positions = STOPS.map(stop => {
      const top = stop.el.getBoundingClientRect().top + scrollY;
      return Math.min(1, Math.max(0, (top - innerHeight * 0.35) / Math.max(1, docHeight)));
    });
    positions[0] = 0;
    positions[positions.length - 1] = Math.min(1, positions[positions.length - 1]);
    markers.forEach((marker, i) => { marker.style.setProperty('--at', positions[i]); });
  };

  let shown = 0;
  let target = 0;
  let frame = 0;
  let complete = false;

  const paint = () => {
    frame = 0;
    shown = reduce ? target : shown + (target - shown) * 0.16;
    if (Math.abs(target - shown) < 0.0005) shown = target;
    rail.style.setProperty('--progress', shown.toFixed(4));

    let active = 0;
    positions.forEach((at, i) => { if (shown + 0.002 >= at) active = i; });
    markers.forEach((marker, i) => {
      marker.classList.toggle('is-passed', i < active);
      marker.classList.toggle('is-active', i === active);
    });
    const done = active === STOPS.length - 1;
    if (done !== complete) {
      complete = done;
      rail.classList.toggle('is-complete', done);
      okChip?.classList.toggle('is-visible', done);
    }
    if (shown !== target) frame = requestAnimationFrame(paint);
  };

  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    target = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    if (!frame) frame = requestAnimationFrame(paint);
  };

  // A section counts as reached once its top crosses ~35% of the viewport.
  // Recalculate when layout shifts (images, React islands, pinned sections).
  const relayout = () => { measure(); update(); };
  new ResizeObserver(relayout).observe(document.body);
  addEventListener('resize', relayout, { passive: true });
  addEventListener('scroll', update, { passive: true });
  addEventListener('load', relayout);

  // Show the rail once the visitor has left the hero.
  const hero = document.getElementById('home');
  if (hero) new IntersectionObserver(([entry]) => {
    rail.classList.toggle('is-visible', !entry.isIntersecting || entry.intersectionRatio < 0.6);
  }, { threshold: [0, 0.6] }).observe(hero);
  else rail.classList.add('is-visible');

  // If the contact chip is reached without the rail (small screens), reveal it on view.
  if (okChip) new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && getComputedStyle(rail).display === 'none') okChip.classList.add('is-visible');
  }, { threshold: 0.6 }).observe(okChip);

  relayout();
})();
