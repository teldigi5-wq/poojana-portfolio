# Poojana Kaveesh — Engineering Portfolio

Live: https://poojana-portfolio.vercel.app/

Static HTML/CSS/JavaScript portfolio preserving the dark cinematic branding.

## Stage 3

- Native pointer plus a single understated, dependency-free follower on wide fine-pointer screens; keyboard, touch, forced-colors and reduced-motion fallbacks.
- Separate portrait and copy layout on phone/tablet; responsive WebP selection and correct portrait layering on desktop.
- Detailed Aetheris, Averis, FinalForge, FloodGuard and Wayfarer case studies based on their public README documentation. Architecture, trade-offs and maturity boundaries remain distinct from measured outcomes.
- Vertical project reading flow with sticky desktop architecture diagrams. Short GSAP entrance motion progressively enhances the layout. Removed horizontal pinning, artificial loading delay, magnetic link movement and requests for missing videos.
- Two GSAP scripts replace eight external motion scripts plus the Lenis stylesheet. Content is visible even if JavaScript or the CDN fails.
- Vercel canonical, social metadata, structured data and sitemap; affiliation describes current study rather than claiming graduation.
- Recruiter summary, visible email, clipboard feedback and explicit PDF view/download actions. Existing CV content is preserved.
- Mobile navigation focus trap, Escape dismissal, background inertness, visible focus and touch targets.

## Stage 4 motion direction

- Choreographed masked hero lines, portrait and supporting copy use a shared power3 easing and a finite entrance. Tab completes the entrance immediately for keyboard users.
- Vertical case studies retain their content and layout. Fine-pointer desktop diagrams progressively reveal architecture routes, source evidence, study continuity and telemetry through GSAP ScrollTrigger. No pinning or scroll interception.
- Touch and narrow layouts use short one-time entrances. Reduced motion, forced colors, save-data, low-memory and unavailable libraries keep static content and ordinary chapter navigation.
- Sticky project links indicate the current chapter through `aria-current`, and page progress uses a compositor transform. Only decorative arrows respond to pointer proximity; clickable targets and native cursor stay fixed.
- Perpetual particle, orbit, scanning and sonar loops are removed. GSAP 3.13.0 and ScrollTrigger are served locally in `assets/vendor`, with their original license notices, removing external CDN requests.
- The tablet media query includes fractional widths below 900px to avoid a narrow breakpoint gap. Case-study facts, SEO and CV remain unchanged.

## Verification

Run from the repository root:

```sh
node --check cinematic.js
node --check main.js
node --check cursor-halo.js
node --check script.js
node scripts/quality-gate.mjs
node scripts/motion-policy.test.mjs
node scripts/stage6-policy.test.mjs
```

## Stage 6 art direction

- Frosted architecture frames, restrained electric-blue reflections and editorial project typography add depth without WebGL or perpetual effects.
- The existing portrait stays intact in a stable `data-head-turn-slot` media container, ready for a supplied head-turn asset without layout shift.
- GSAP choreography now layers the hero system, portrait and type, then follows each project architecture as the factual case study enters view.
- Fine-pointer project diagrams use a subtle, requestAnimationFrame-driven depth response. Touch, reduced-motion, forced-colors, save-data and low-memory modes keep a static presentation.
- Case studies retain their source-backed content and gain denser evidence panels, clearer maturity boundaries and responsive one/two-column reading layouts.

GitHub CI additionally parses HTML references and validates both hosting configuration files. There is no application build step or runtime server; Vercel serves the static repository.

Motion preferences and low-bandwidth/low-memory modes disable nonessential effects. Animation failure cannot hide content. Case study facts are sourced from each linked project repository and do not imply that those systems were independently re-tested during this portfolio update.
