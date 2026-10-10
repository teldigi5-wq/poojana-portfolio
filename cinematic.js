(() => {
  "use strict";

  const root = document.documentElement;
  const header = document.getElementById("siteHeader");
  const progress = document.getElementById("readingProgress");
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = matchMedia("(pointer: fine)");

  document.getElementById("year").textContent = String(new Date().getFullYear());

  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
    document.body.classList.remove("menu-open");
    document.getElementById('main').inert = false;
  };

  const menuFocusables = () => [...mobileNav.querySelectorAll("a[href], button:not([disabled])")];

  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
    document.body.classList.toggle("menu-open", !open);
    document.getElementById('main').inert = !open;
    if (!open) requestAnimationFrame(() => menuFocusables()[0]?.focus());
  });

  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    closeMenu();
    const destination = link.hash && document.querySelector(link.hash);
    if (destination) { destination.setAttribute('tabindex', '-1'); destination.focus({ preventScroll: true }); }
    else menuToggle.focus();
  }));
  matchMedia('(min-width: 1101px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
  document.getElementById('copyEmail')?.addEventListener('click', async () => {
    const status = document.getElementById('copyStatus');
    try { await navigator.clipboard.writeText('teldigi5@gmail.com'); status.textContent = 'Email copied.'; }
    catch { status.textContent = 'Copy unavailable. Select the email address above or open it to email me.'; }
  });
  addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !mobileNav.hidden) {
      closeMenu();
      menuToggle.focus();
    }
    if (event.key === "Tab" && !mobileNav.hidden) {
      const focusables = menuFocusables();
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  document.querySelectorAll(".reveal").forEach((element, index) => {
    if (element.closest(".hero")) element.style.transitionDelay = `${Math.min(index * 65, 260)}ms`;
    revealObserver.observe(element);
  });

  let ticking = false;
  const updateScrollState = () => {
    const y = scrollY;
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    header.classList.toggle("scrolled", y > 24);
    progress.style.transform = `scaleX(${Math.min(1, y / max)})`;

    ticking = false;
  };

  addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateScrollState);
    }
  }, { passive: true });
  addEventListener("resize", updateScrollState, { passive: true });
  updateScrollState();

})();
