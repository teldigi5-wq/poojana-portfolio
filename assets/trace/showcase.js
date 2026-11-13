/* Work showcase: horizontal project cards + a "trace waterfall" rail with a playhead.
   Progressive enhancement: the vertical project list in the HTML stays the no-JS version and the dialog's source. */
const STAGES = ['Research', 'Prototype', 'Public'];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const ARROW = '<svg viewBox="0 0 44 12" aria-hidden="true"><path class="dash" d="M1 6h30" /><path d="M31 1.5 38 6l-7 4.5" /></svg>';
const FX = {
  aetheris: '',
  wayfarer: '<svg class="hc-route" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true"><path d="M6 52C22 14 40 58 58 30S82 8 94 12"/></svg>',
  boundarylab: ''
};

export function mountShowcase(host, list) {
  const items = [...list.querySelectorAll(':scope > li > article.pj')].map(el => {
    const stage = parseInt(el.querySelector('.pj-stage').style.getPropertyValue('--stage'), 10) || 0;
    return { el, art: el.dataset.art, proof: el.dataset.proof || '', name: el.querySelector('h3').textContent.trim(), tag: el.querySelector('.pj-tag').textContent.trim(), stage };
  });
  if (!items.length) return;

  host.innerHTML = `<div class="hc-stick">
    <div class="hc-track" id="hcTrack">${items.map((p, i) => `
      <button class="hc-card" type="button" data-i="${i}" data-art="${esc(p.art)}" aria-haspopup="dialog" aria-label="${esc(p.name)}, ${STAGES[p.stage]} stage. Open the details.">
        <span class="hc-art"><img src="assets/trace/card-${esc(p.art)}.webp" alt="" width="1168" height="880" decoding="async">${FX[p.art] || ''}<span class="hc-chip">${STAGES[p.stage]} stage</span></span>
        <span class="hc-title">${esc(p.name)}</span>
        <span class="hc-tag">${esc(p.tag)}</span>
        <span class="hc-proof">${esc(p.proof)}</span>
        <span class="hc-probe"><span>Open the trace</span>${ARROW}</span>
      </button>`).join('')}
    </div>
    <div class="hc-rail" id="hcRail" style="--p:0">
      <ol>${items.map((p, i) => `<li><button class="hc-row" type="button" data-i="${i}"><span class="hc-rn">${esc(p.name)}</span><span class="hc-bar" aria-hidden="true"><i style="--w:${(p.stage + 1) / 3}"></i></span><span class="hc-rs">${STAGES[p.stage]}</span></button></li>`).join('')}</ol>
      <p class="hc-cap" id="hcCap">Drag or scroll sideways. Open a card for the evidence.</p>
      <span class="hc-play" aria-hidden="true"><b id="hcN">1/${items.length}</b></span>
    </div></div>`;
  document.documentElement.classList.add('has-showcase');

  const track = host.querySelector('#hcTrack'), rail = host.querySelector('#hcRail'), cards = [...track.children], rows = [...rail.querySelectorAll('.hc-row')], nEl = host.querySelector('#hcN'), cap = host.querySelector('#hcCap');
  const edge = () => {          // full-bleed track whose first card lines up with the page column
    const w = list.closest('.wrap'), left = w ? w.getBoundingClientRect().left : 24;
    track.style.marginLeft = (-left) + 'px'; track.style.width = document.documentElement.clientWidth + 'px';
    track.style.setProperty('--edge', Math.max(24, left) + 'px');
  };
  edge(); addEventListener('resize', edge);

  /* desktop: the section pins and vertical scroll moves the cards sideways; touch devices scroll the track natively */
  const pinned = !reduce && matchMedia('(min-width: 900px) and (hover: hover) and (pointer: fine)').matches;
  let max = 0, top = 0, tx = 0;
  const measure = () => {
    if (pinned) {
      const last = cards[cards.length - 1], tail = Math.max(24, (track.clientWidth - last.offsetWidth) / 2);   // room for the last card to reach the centre
      track.style.setProperty('--tail', tail + 'px');
      const right = last.getBoundingClientRect().right - track.getBoundingClientRect().left + tx;           // clip does not count end padding, so measure by hand
      max = Math.max(0, right + tail - track.clientWidth);
      host.style.height = `calc(100vh + ${max}px)`; top = host.getBoundingClientRect().top + scrollY;
    } else max = Math.max(0, track.scrollWidth - track.clientWidth);
  };
  /* the cards ride an eased value (translate), not the raw scroll offset: wheel notches glide instead of stepping */
  let tgt = 0, raf = 0, last = 0, setP = () => {};
  const paint = () => { track.style.setProperty('--tx', tx.toFixed(2)); setP(max > 0 ? tx / max : 0, tx); };
  const step = t => {
    const dt = Math.min(64, t - (last || t)); last = t;
    tx += (tgt - tx) * (1 - Math.exp(-dt / 120));
    if (Math.abs(tgt - tx) < 0.25) { tx = tgt; raf = 0; last = 0; } else raf = requestAnimationFrame(step);
    paint();
  };
  const pinScroll = jump => {
    tgt = max > 0 ? Math.min(1, Math.max(0, (scrollY - top) / max)) * max : 0;
    if (jump) { tx = tgt; paint(); } else if (!raf) raf = requestAnimationFrame(step);
  };
  if (pinned) {
    host.classList.add('hc-pin'); document.documentElement.classList.add('hc-pinned');
    cap.textContent = 'Keep scrolling to move through the projects. Open a card for the evidence.';
    measure(); addEventListener('load', () => { measure(); pinScroll(true); });
    addEventListener('resize', () => { measure(); pinScroll(true); });
    track.addEventListener('scroll', () => { if (track.scrollLeft) track.scrollLeft = 0; }, { passive: true });   // focus must not move the clipped track
    let pr = 0; addEventListener('scroll', () => { if (!pr) pr = requestAnimationFrame(() => { pr = 0; pinScroll(); }); }, { passive: true });
  }
  const leftFor = c => Math.min(max, Math.max(0, (pinned ? c.getBoundingClientRect().left - track.getBoundingClientRect().left + tx : c.offsetLeft) - (track.clientWidth - c.offsetWidth) / 2));

  /* playhead: follows the scroll position of the track, marks the current span */
  let cur = -1, ticking = false, touched = false;
  const show = (p, px) => {
    rail.style.setProperty('--p', p.toFixed(4));
    const i = Math.round(p * (items.length - 1));
    if (i !== cur) { cur = i; rows.forEach((r, k) => { if (k === i) r.setAttribute('aria-current', 'true'); else r.removeAttribute('aria-current'); }); nEl.textContent = (i + 1) + '/' + items.length; }
    if (!touched && px > 12) { touched = true; cap.classList.add('quiet'); }
  };
  setP = show;
  const sync = () => {
    ticking = false; if (pinned) return;
    const max = track.scrollWidth - track.clientWidth;
    show(max > 0 ? Math.min(1, Math.max(0, track.scrollLeft / max)) : 0, track.scrollLeft);
  };
  track.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(sync); } }, { passive: true });
  if (pinned) pinScroll(true); else sync();
  const goTo = i => { if (pinned) { measure(); scrollTo({ top: top + leftFor(cards[i]), behavior: 'smooth' }); } else cards[i].scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', inline: 'center', block: 'nearest' }); };
  if (pinned) cards.forEach((c, i) => c.addEventListener('focus', () => { if (c.matches(':focus-visible')) { measure(); scrollTo({ top: top + leftFor(c), behavior: 'auto' }); } }));
  rows.forEach(r => r.addEventListener('click', () => goTo(+r.dataset.i)));

  /* mouse drag-to-scroll (touch and trackpads scroll natively) */
  let drag = null, moved = 0;
  track.addEventListener('pointerdown', e => { if (pinned || e.pointerType !== 'mouse' || e.button) return; drag = { x: e.clientX, left: track.scrollLeft }; moved = 0; });
  addEventListener('pointermove', e => { if (!drag) return; const dx = e.clientX - drag.x; moved = Math.max(moved, Math.abs(dx)); if (moved > 6) { track.classList.add('drag'); track.scrollLeft = drag.left - dx; } });
  addEventListener('pointerup', () => { if (!drag) return; drag = null; track.classList.remove('drag'); });
  track.addEventListener('click', e => { if (moved > 6) { e.stopPropagation(); e.preventDefault(); moved = 0; } }, true);

  /* pointer parallax on the artwork, in-view gating for the idle motions */
  if (!reduce) {
    cards.forEach(c => {
      c.addEventListener('pointermove', e => { if (e.pointerType === 'touch') return; const r = c.getBoundingClientRect(); c.style.setProperty('--px', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3)); c.style.setProperty('--py', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3)); });
      c.addEventListener('pointerleave', () => { c.style.setProperty('--px', 0); c.style.setProperty('--py', 0); });
    });
    const io = new IntersectionObserver(es => es.forEach(en => en.target.classList.toggle('vis', en.isIntersecting)), { threshold: .35 });
    cards.forEach(c => io.observe(c));
    const once = new IntersectionObserver(es => { if (es[0].isIntersecting) { track.classList.add('in'); once.disconnect(); } }, { threshold: .2 });
    once.observe(track);
  } else track.classList.add('in');

  /* keyboard: left/right moves between cards */
  track.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const i = cards.indexOf(document.activeElement); if (i < 0) return;
    const n = Math.min(cards.length - 1, Math.max(0, i + (e.key === 'ArrowRight' ? 1 : -1))); e.preventDefault(); cards[n].focus();
  });

  /* inspect dialog: built from the same article the no-JS page shows */
  const dlg = document.createElement('dialog');
  dlg.className = 'pj-dialog';
  dlg.innerHTML = '<button class="pj-x" type="button" aria-label="Close project details"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13"/></svg></button><div class="pj-dbody"></div>';
  document.body.appendChild(dlg);
  const body = dlg.querySelector('.pj-dbody'); let opener = null;
  const open = i => {
    const p = items[i], clone = p.el.cloneNode(true);
    clone.removeAttribute('aria-labelledby'); clone.classList.remove('reveal', 'in');
    clone.querySelectorAll('[id]').forEach(n => n.removeAttribute('id')); clone.querySelectorAll('[aria-labelledby]').forEach(n => n.removeAttribute('aria-labelledby'));
    body.innerHTML = `<div class="pj-dart" data-art="${esc(p.art)}"><img src="assets/trace/card-${esc(p.art)}.webp" alt="" width="1168" height="880" decoding="async"></div>`;
    body.appendChild(clone);
    dlg.setAttribute('aria-label', p.name + ' details');
    opener = cards[i];
    const r = opener.getBoundingClientRect();
    dlg.style.setProperty('--ox', ((r.left + r.width / 2) / innerWidth * 100).toFixed(1) + '%');
    dlg.style.setProperty('--oy', ((r.top + r.height / 2) / innerHeight * 100).toFixed(1) + '%');
    document.documentElement.classList.add('dlg-open');
    dlg.showModal(); dlg.scrollTop = 0; dlg.querySelector('.pj-x').focus({ preventScroll: true });
  };
  cards.forEach(c => c.addEventListener('click', () => open(+c.dataset.i)));
  const close = () => { if (dlg.open) dlg.close(); };
  dlg.querySelector('.pj-x').addEventListener('click', close);
  dlg.addEventListener('click', e => { if (e.target === dlg) close(); });
  dlg.addEventListener('close', () => { document.documentElement.classList.remove('dlg-open'); if (opener) opener.focus({ preventScroll: true }); });
}
