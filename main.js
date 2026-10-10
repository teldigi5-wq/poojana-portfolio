/* Motion is optional; content and navigation remain available without it. */
(() => {
  const lite = navigator.connection?.saveData || navigator.deviceMemory <= 2;
  document.documentElement.classList.toggle('performance-lite', Boolean(lite));
  if (!window.gsap || !window.ScrollTrigger || lite) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.matchMedia().add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
    document.querySelectorAll('.case-visual, .about-system').forEach(element => {
      gsap.from(element, { y: 18, duration: .7, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true }, clearProps: 'transform' });
    });
  });
})();
