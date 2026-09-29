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
  };

  const menuFocusables = () => [...mobileNav.querySelectorAll("a[href], button:not([disabled])")];

  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
    document.body.classList.toggle("menu-open", !open);
    if (!open) requestAnimationFrame(() => menuFocusables()[0]?.focus());
  });

  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
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
    progress.style.width = `${Math.min(100, (y / max) * 100)}%`;

    if (!reducedMotion.matches && innerWidth > 820) {
      document.querySelectorAll(".case").forEach((section) => {
        const rect = section.getBoundingClientRect();
        const span = Math.max(1, rect.height - innerHeight);
        const amount = Math.max(0, Math.min(1, -rect.top / span));
        section.style.setProperty("--case-progress", amount.toFixed(3));
      });
    }
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

  const canvas = document.getElementById("signalCanvas");
  const context = canvas?.getContext("2d", { alpha: true });
  let frame = 0;
  let particles = [];
  let canvasActive = true;

  const buildParticles = () => {
    if (!canvas || !context) return;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = innerWidth < 700 ? 12 : 26;
    particles = Array.from({ length: count }, (_, index) => ({
      x: rect.width * (.48 + Math.random() * .5),
      y: Math.random() * rect.height,
      r: index % 7 === 0 ? 1.5 : .7,
      speed: .05 + Math.random() * .11,
      phase: Math.random() * Math.PI * 2
    }));
  };

  const drawSignals = (time = 0) => {
    if (!context || reducedMotion.matches || !canvasActive || document.hidden) return;
    const rect = canvas.getBoundingClientRect();
    context.clearRect(0, 0, rect.width, rect.height);
    for (const point of particles) {
      point.y -= point.speed;
      if (point.y < -4) point.y = rect.height + 4;
      const alpha = .18 + Math.sin(time * .00035 + point.phase) * .12;
      context.beginPath();
      context.fillStyle = `rgba(137, 185, 220, ${Math.max(.04, alpha)})`;
      context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
      context.fill();
    }
    frame = requestAnimationFrame(drawSignals);
  };

  if (canvas && context && !reducedMotion.matches) {
    buildParticles();
    drawSignals();
    addEventListener("resize", buildParticles, { passive: true });
    const heroObserver = new IntersectionObserver(([entry]) => {
      canvasActive = entry.isIntersecting;
      if (canvasActive && !document.hidden) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(drawSignals);
      }
    });
    heroObserver.observe(document.querySelector(".hero"));
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(frame);
    else if (canvasActive && !reducedMotion.matches) frame = requestAnimationFrame(drawSignals);
  });

  if (finePointer.matches && !reducedMotion.matches) {
    const hero = document.querySelector(".hero");
    hero.addEventListener("pointermove", (event) => {
      const x = (event.clientX / innerWidth - .5) * 10;
      const y = (event.clientY / innerHeight - .5) * 7;
      root.style.setProperty("--pointer-x", `${x}px`);
      root.style.setProperty("--pointer-y", `${y}px`);
      const system = hero.querySelector(".hero-system");
      if (system) system.style.transform = `translate3d(${x * .28}px, ${y * .2}px, 0)`;
      const portrait = hero.querySelector(".hero-portrait");
      if (portrait) portrait.style.transform = `translate3d(${x * .16}px, ${y * .12}px, 0)`;
    }, { passive: true });
  }
})();
