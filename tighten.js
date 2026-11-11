/* Tighten — shorter Work section.
   Each project's "Behind the interface" timeline starts collapsed behind a clear
   "Read the case study" control. Without JavaScript everything stays expanded. */
(() => {
  document.querySelectorAll('.case-notes').forEach((notes, index) => {
    const timeline = notes.querySelector('.case-timeline');
    const intro = notes.querySelector('.case-notes-intro');
    if (!timeline || !intro) return;
    const steps = timeline.querySelectorAll(':scope > li').length;
    const id = timeline.id || `case-timeline-${index + 1}`;
    timeline.id = id;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'case-toggle';
    button.setAttribute('aria-controls', id);
    const label = open => `${open ? 'Hide' : 'Read'} the case study <span>${steps} steps</span><i aria-hidden="true">${open ? '−' : '+'}</i>`;

    const set = open => {
      button.setAttribute('aria-expanded', String(open));
      button.innerHTML = label(open);
      timeline.hidden = !open;
      notes.classList.toggle('is-collapsed', !open);
    };
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      set(open);
      // Pinned and scroll-linked sections below need fresh measurements.
      window.ScrollTrigger?.refresh?.();
      if (!open) notes.scrollIntoView({ block: 'nearest' });
    });
    intro.append(button);
    set(false);
  });
})();
