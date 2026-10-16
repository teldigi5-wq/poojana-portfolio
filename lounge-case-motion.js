/* One finite case-study reveal. Existing local GSAP, not another animation dependency.
 * Content is visible by default; no scroll hijack, custom cursor, or perpetual loop. */
(() => {
  'use strict';
  const section = document.getElementById('lounge-concept');
  if (!section) return;
  const skip = matchMedia('(prefers-reduced-motion: reduce)').matches ||
    matchMedia('(forced-colors: active)').matches ||
    matchMedia('(max-width: 767px)').matches ||
    navigator.connection?.saveData || navigator.deviceMemory <= 2;
  if (skip || !window.gsap || !window.ScrollTrigger) return;
  const gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);
  const elements = [
    section.querySelector('.venue-showcase__eyebrow'),
    section.querySelector('.venue-showcase__heading'),
    section.querySelector('.venue-showcase__lead'),
    section.querySelector('.venue-showcase__facts'),
    section.querySelector('.venue-showcase__actions'),
    section.querySelector('.venue-showcase__composition')
  ].filter(Boolean);
  if (!elements.length) return;
  gsap.from(elements,{
    opacity:0,y:22,duration:.82,stagger:.08,ease:'power2.out',
    clearProps:'opacity,transform',
    scrollTrigger:{trigger:section,start:'top 86%',once:true}
  });
})();
