(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;
  const hero = document.querySelector(".hero");
  const heroFilm = document.getElementById("heroFilm");
  const heroVideo = document.getElementById("hero-video");
  const preloader = document.getElementById("motionPreloader");
  const preloaderCount = document.getElementById("preloaderCount");
  const preloaderTrack = document.getElementById("preloaderTrack");
  const motionCursor = document.getElementById("motionCursor");
  const motionCursorLabel = document.getElementById("motionCursorLabel");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const desktop = matchMedia("(min-width: 768px)");
  const wideWork = matchMedia("(min-width: 900px)");
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
  const hasGSAP = Boolean(window.gsap && window.ScrollTrigger);
  const performanceLite = Boolean(navigator.connection?.saveData || (navigator.deviceMemory && navigator.deviceMemory <= 2));
  let skipIntro = performanceLite;

  try {
    skipIntro ||= sessionStorage.getItem("pk-motion-seen") === "true";
  } catch {
    // Storage can be unavailable in privacy modes; the portfolio still works.
  }

  root.classList.toggle("performance-lite", performanceLite);

  let lenis = null;
  let heroScroll = null;
  let split = null;
  const chapterSplits = [];
  const stageThreeSplits = [];

  const finishPreloaderWithoutMotion = () => {
    body.classList.remove("motion-loading");
    body.removeAttribute("aria-busy");
    preloader?.classList.add("is-complete");
    try {
      sessionStorage.setItem("pk-motion-seen", "true");
    } catch {
      // Non-essential preference only.
    }
  };

  const runPreloader = () => {
    if (!preloader || reduceMotion.matches || !hasGSAP || skipIntro) {
      finishPreloaderWithoutMotion();
      return;
    }

    body.classList.add("motion-loading");
    body.setAttribute("aria-busy", "true");
    const progress = { value: 0 };
    const paint = () => {
      const value = Math.round(progress.value);
      preloaderCount.textContent = String(value).padStart(2, "0");
      preloaderTrack.style.transform = `scaleX(${value / 100})`;
    };

    window.gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        finishPreloaderWithoutMotion();
        window.ScrollTrigger.refresh();
      }
    })
      .to(progress, { value: 84, duration: .35, onUpdate: paint })
      .to(progress, { value: 100, duration: .15, onUpdate: paint })
      .to(".motion-preloader__mark", { y: -14, opacity: 0, duration: .2 }, "+=.03")
      .to(".motion-preloader p, .motion-preloader__track", { opacity: 0, duration: .16 }, "<")
      .to(".motion-preloader__wipe", { scaleY: 0, duration: .42, ease: "power4.inOut" }, "<+.02")
      .to(preloader, { autoAlpha: 0, duration: .05 });
  };

  const initialiseLenis = () => {
    if (!window.Lenis || reduceMotion.matches || !desktop.matches || !hasGSAP) return;

    lenis = new window.Lenis({
      duration: 1.08,
      smoothWheel: true,
      syncTouch: false,
      anchors: true
    });

    lenis.on("scroll", window.ScrollTrigger.update);
    window.gsap.ticker.add((time) => lenis?.raf(time * 1000));
    window.gsap.ticker.lagSmoothing(0);
  };

  const revealHero = () => {
    if (!hasGSAP || reduceMotion.matches) return;

    const title = document.getElementById("hero-title");
    let lines = title ? Array.from(title.children) : [];

    if (window.SplitText && title) {
      split = window.SplitText.create(title, {
        type: "lines",
        linesClass: "hero-split-line",
        mask: "lines",
        linesWrapperClass: "hero-split-mask"
      });
      lines = split.lines;
    }

    window.gsap.timeline({ delay: skipIntro ? .04 : .55, defaults: { ease: "power4.out" } })
      .from(lines, { yPercent: 115, opacity: 0, duration: 1.05, stagger: .11 })
      .from(".hero .overline, .hero-intro", { y: 22, opacity: 0, duration: .72, stagger: .08 }, "<+.18")
      .from(".hero-cta, .hero-foot", { y: 16, opacity: 0, duration: .62, stagger: .08 }, "<+.12");
  };

  const buildHeroScroll = () => {
    if (!hasGSAP || reduceMotion.matches || !desktop.matches || !heroVideo?.duration || heroScroll) return;

    heroScroll = window.gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=115%",
        pin: true,
        scrub: .45,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    heroScroll
      .to(heroVideo, { currentTime: Math.max(.01, heroVideo.duration - .05), ease: "none" }, 0)
      .to(".hero-copy", { yPercent: -12, opacity: .22, ease: "none" }, .55)
      .to(".hero-system", { scale: 1.06, opacity: .28, ease: "none" }, .3);
  };

  const loadHeroVideo = () => {
    if (!heroVideo || !heroFilm || reduceMotion.matches || !desktop.matches || performanceLite) return;

    heroVideo.querySelectorAll("source[data-src]").forEach((source) => {
      source.src = source.dataset.src;
      source.removeAttribute("data-src");
    });

    heroVideo.addEventListener("loadedmetadata", () => {
      if (!Number.isFinite(heroVideo.duration)) return;
      heroVideo.currentTime = .01;
      heroFilm.classList.add("is-ready");
      hero.classList.add("has-film");
      buildHeroScroll();
    }, { once: true });

    heroVideo.addEventListener("error", () => {
      heroFilm.classList.remove("is-ready");
      hero.classList.remove("has-film");
    }, { once: true });

    heroVideo.load();
  };

  const loadChapterVideos = () => {
    if (reduceMotion.matches || !wideWork.matches || performanceLite) return;

    const videos = [...document.querySelectorAll(".chapter-video")];
    if (!videos.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        video.dataset.inView = String(entry.isIntersecting);

        if (entry.isIntersecting) {
          if (!video.dataset.loaded) {
            video.querySelectorAll("source[data-src]").forEach((source) => {
              source.src = source.dataset.src;
              source.removeAttribute("data-src");
            });
            video.dataset.loaded = "true";
            video.load();
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: .18, rootMargin: "120px" });

    videos.forEach((video) => {
      video.addEventListener("canplay", () => video.classList.add("is-ready"), { once: true });
      video.addEventListener("error", () => video.classList.remove("is-ready"), { once: true });
      observer.observe(video);
    });

    document.addEventListener("visibilitychange", () => {
      videos.forEach((video) => {
        if (document.hidden) video.pause();
        else if (video.dataset.inView === "true") video.play().catch(() => {});
      });
    });
  };

  const prepareChapterTitle = (title) => {
    if (!title) return [];
    window.gsap.set(title, { autoAlpha: 1, y: 0 });

    if (!window.SplitText) return [title];
    const titleSplit = window.SplitText.create(title, {
      type: "lines",
      linesClass: "chapter-title-line",
      mask: "lines"
    });
    chapterSplits.push(titleSplit);
    return titleSplit.lines;
  };

  const animateArchitecture = (section, horizontalTween) => {
    const paths = [...section.querySelectorAll(".chapter-route")];
    const trigger = {
      trigger: section,
      containerAnimation: horizontalTween,
      start: "left 72%",
      toggleActions: "play none none reverse"
    };

    if (paths.length) {
      if (window.DrawSVGPlugin) {
        window.gsap.from(paths, { drawSVG: 0, duration: 1.35, stagger: .08, ease: "power2.out", scrollTrigger: trigger });
      } else {
        paths.forEach((path) => {
          const length = path.getTotalLength?.() || 700;
          window.gsap.fromTo(path,
            { strokeDasharray: length, strokeDashoffset: length },
            { strokeDashoffset: 0, duration: 1.35, ease: "power2.out", scrollTrigger: { ...trigger } }
          );
        });
      }
    }

    const traveller = section.querySelector(".route-traveller");
    const motionPath = section.querySelector("#aetherisMotionPath, #floodMotionPath");
    if (!traveller || !motionPath) return;

    const travelTween = window.MotionPathPlugin
      ? window.gsap.to(traveller, {
          duration: 4.2,
          repeat: -1,
          ease: "none",
          paused: true,
          motionPath: { path: motionPath, align: motionPath, alignOrigin: [.5, .5] }
        })
      : window.gsap.to(traveller, { x: () => motionPath.getTotalLength?.() || 560, duration: 4.2, repeat: -1, ease: "none", paused: true });

    window.ScrollTrigger.create({
      trigger: section,
      containerAnimation: horizontalTween,
      start: "left 65%",
      end: "right 35%",
      onToggle: (self) => travelTween.paused(!self.isActive)
    });
  };

  const buildSelectedWorkJourney = () => {
    if (!hasGSAP || reduceMotion.matches || !wideWork.matches) return;

    const journey = document.getElementById("workJourney");
    const track = document.getElementById("workTrack");
    const number = document.getElementById("workChapterNumber");
    const progress = document.getElementById("workChapterProgress");
    const chapters = track ? [...track.querySelectorAll("[data-project-index]")] : [];
    if (!journey || !track || chapters.length < 2) return;

    const distance = () => Math.max(0, track.scrollWidth - innerWidth);
    const horizontalTween = window.gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: journey,
        start: "top top",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: .65,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const activeIndex = Math.min(chapters.length - 1, Math.round(self.progress * (chapters.length - 1)));
          number.textContent = chapters[activeIndex].dataset.projectIndex;
          window.gsap.set(progress, { scaleX: .2 + self.progress * .8 });
          chapters.forEach((chapter, index) => chapter.classList.toggle("is-active", index === activeIndex));
        }
      }
    });

    chapters.forEach((chapter) => {
      const title = chapter.querySelector(".case-copy h2, .other-work h2");
      const titleLines = prepareChapterTitle(title);
      const intro = chapter.querySelectorAll(".case-index, .case-lead, .other-work .overline");
      const rows = chapter.querySelectorAll(".case-evidence > div, .other-copy > p, .other-copy li, .process-line span");
      const links = chapter.querySelectorAll(".case-links, .other-copy > a");
      const revealElements = chapter.querySelectorAll(".case-copy .reveal, .other-grid .reveal");

      window.gsap.set(revealElements, { autoAlpha: 1, y: 0 });
      window.gsap.timeline({
        scrollTrigger: {
          trigger: chapter,
          containerAnimation: horizontalTween,
          start: "left 78%",
          toggleActions: "play none none reverse"
        },
        defaults: { ease: "power3.out" }
      })
        .from(intro, { y: 20, opacity: 0, duration: .5, stagger: .05 })
        .from(titleLines, { yPercent: 112, opacity: 0, duration: .78, stagger: .08 }, "<+.08")
        .from(rows, { y: 24, opacity: 0, duration: .5, stagger: .055 }, "<+.18")
        .from(links, { y: 14, opacity: 0, duration: .42 }, "<+.08");

      animateArchitecture(chapter, horizontalTween);
    });
  };

  const initialiseCustomCursor = () => {
    if (!motionCursor || !motionCursorLabel || reduceMotion.matches || !wideWork.matches || !finePointer.matches || performanceLite) return;

    window.gsap.set(motionCursor, { xPercent: -50, yPercent: -50 });
    const moveX = window.gsap.quickTo(motionCursor, "x", { duration: .22, ease: "power3.out" });
    const moveY = window.gsap.quickTo(motionCursor, "y", { duration: .22, ease: "power3.out" });
    let cursorActivated = false;

    const deactivateCursor = () => {
      cursorActivated = false;
      root.classList.remove("has-custom-cursor");
      window.gsap.to(motionCursor, { autoAlpha: 0, duration: .12, overwrite: true });
    };

    addEventListener("pointermove", (event) => {
      // Keep the system cursor available until the replacement cursor is
      // positioned and visible. This prevents an invisible pointer on load.
      if (!cursorActivated) {
        window.gsap.set(motionCursor, { x: event.clientX, y: event.clientY, autoAlpha: 1 });
        root.classList.add("has-custom-cursor");
        cursorActivated = true;
        return;
      }

      moveX(event.clientX);
      moveY(event.clientY);
      window.gsap.to(motionCursor, { autoAlpha: 1, duration: .2, overwrite: true });
    }, { passive: true });

    document.documentElement.addEventListener("mouseleave", deactivateCursor);
    addEventListener("blur", deactivateCursor);

    const targets = [...document.querySelectorAll("a, button")];
    const magnetic = new Set(document.querySelectorAll(".action, .text-action, .header-contact, .header-cv, .case-links a, .about-actions a, .contact-row a"));

    targets.forEach((target) => {
      const href = target.getAttribute("href") || "";
      const label = href.startsWith("mailto:") ? "EMAIL" : target.tagName === "BUTTON" ? "MENU" : href.startsWith("#") ? "VIEW" : "OPEN";

      target.addEventListener("pointerenter", () => {
        motionCursorLabel.textContent = label;
        motionCursor.classList.add("is-interactive");
      });
      target.addEventListener("pointerleave", () => motionCursor.classList.remove("is-interactive"));

      if (!magnetic.has(target)) return;
      target.classList.add("magnetic-target");
      target.addEventListener("pointermove", (event) => {
        const rect = target.getBoundingClientRect();
        window.gsap.to(target, {
          x: (event.clientX - rect.left - rect.width / 2) * .16,
          y: (event.clientY - rect.top - rect.height / 2) * .16,
          duration: .35,
          ease: "power3.out",
          overwrite: true
        });
      }, { passive: true });
      target.addEventListener("pointerleave", () => {
        motionCursor.classList.remove("is-interactive");
        window.gsap.to(target, { x: 0, y: 0, duration: .65, ease: "elastic.out(1, .42)", overwrite: true });
      });
    });
  };

  const animateSectionNumbers = () => {
    document.querySelectorAll(".section-code").forEach((element) => {
      const match = element.textContent.trim().match(/^(\d+)\s*(\/.*)$/);
      if (!match) return;

      const target = Number(match[1]);
      const suffix = ` ${match[2]}`;
      const counter = { value: 0 };
      window.gsap.to(counter, {
        value: target,
        duration: .75,
        ease: "power2.out",
        scrollTrigger: { trigger: element, start: "top 88%", once: true },
        onUpdate: () => {
          element.textContent = `${String(Math.round(counter.value)).padStart(2, "0")}${suffix}`;
        }
      });
    });
  };

  const initialiseEditorialSections = () => {
    const media = window.gsap.matchMedia();

    media.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const sections = [...document.querySelectorAll("#approach, #about, #contact")];

      sections.forEach((section) => {
        const wipe = document.createElement("div");
        wipe.className = "section-transition-layer";
        wipe.setAttribute("aria-hidden", "true");
        section.prepend(wipe);

        window.gsap.fromTo(wipe,
          { clipPath: "inset(0 0 0% 0)" },
          {
            clipPath: "inset(0 0 100% 0)",
            ease: "none",
            scrollTrigger: { trigger: section, start: "top 92%", end: "top 42%", scrub: true }
          }
        );
      });

      const approachTitle = document.getElementById("approach-title");
      const contactTitle = document.getElementById("contact-title");
      [approachTitle, contactTitle].forEach((title) => {
        if (!title || !window.SplitText) return;
        window.gsap.set(title, { autoAlpha: 1, y: 0 });
        const titleSplit = window.SplitText.create(title, { type: "lines", linesClass: "editorial-line", mask: "lines" });
        stageThreeSplits.push(titleSplit);
        window.gsap.from(titleSplit.lines, {
          yPercent: 112,
          opacity: 0,
          duration: .9,
          stagger: .09,
          ease: "power4.out",
          scrollTrigger: { trigger: title, start: "top 82%" }
        });
      });

      document.querySelectorAll(".principles li").forEach((item, index) => {
        window.gsap.set(item, { autoAlpha: 1, y: 0 });
        window.gsap.from(item.children, {
          y: 26,
          opacity: 0,
          duration: .65,
          stagger: .055,
          delay: index * .035,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 88%" }
        });
      });

      const aboutSystem = document.querySelector(".about-system");
      const aboutReveals = document.querySelectorAll(".about-copy > .reveal");
      const contactRow = document.querySelector(".contact-row");
      window.gsap.set(aboutSystem, { autoAlpha: 1 });
      window.gsap.set(aboutReveals, { autoAlpha: 1, y: 0 });
      window.gsap.set(contactRow, { autoAlpha: 1, y: 0 });

      window.gsap.from(".profile-capabilities span", {
        x: -24,
        opacity: 0,
        duration: .72,
        stagger: .08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-system", start: "top 72%" }
      });

      window.gsap.to(".about-system", {
        yPercent: -5,
        rotateY: 2,
        ease: "none",
        scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: .7 }
      });

      window.gsap.from(aboutReveals, {
        y: 28,
        opacity: 0,
        duration: .7,
        stagger: .08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-copy", start: "top 76%" }
      });

      window.gsap.from(".contact-row > *", {
        y: 26,
        opacity: 0,
        duration: .7,
        stagger: .1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-row", start: "top 84%" }
      });

      animateSectionNumbers();
      initialiseCustomCursor();

      return () => {
        root.classList.remove("has-custom-cursor");
        document.querySelectorAll(".section-transition-layer").forEach((layer) => layer.remove());
      };
    });
  };

  const initialiseMotion = () => {
    if (!hasGSAP) {
      root.classList.add("motion-fallback");
      finishPreloaderWithoutMotion();
      return;
    }

    const plugins = [window.ScrollTrigger, window.SplitText, window.DrawSVGPlugin, window.MotionPathPlugin, window.Flip, window.Observer].filter(Boolean);
    window.gsap.registerPlugin(...plugins);
    runPreloader();
    initialiseLenis();
    revealHero();
    loadHeroVideo();
    loadChapterVideos();
    buildSelectedWorkJourney();
    initialiseEditorialSections();
  };

  // A hard timeout guarantees the page cannot remain covered if a CDN is interrupted.
  setTimeout(finishPreloaderWithoutMotion, 2200);
  initialiseMotion();

  reduceMotion.addEventListener?.("change", () => location.reload());
  desktop.addEventListener?.("change", () => location.reload());
  wideWork.addEventListener?.("change", () => location.reload());
  finePointer.addEventListener?.("change", () => location.reload());
})();
