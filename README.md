# Poojana Kaveesh — Engineering Portfolio

[![Portfolio CI](https://github.com/teldigi5-wq/poojana-portfolio/actions/workflows/portfolio-ci.yml/badge.svg)](https://github.com/teldigi5-wq/poojana-portfolio/actions/workflows/portfolio-ci.yml)

A recruiter-focused software engineering portfolio with a dark navy / blue-violet visual identity, portrait-led introduction and evidence-focused case studies for software engineering opportunities.

**Live:** [poojana-portfolio.vercel.app](https://poojana-portfolio.vercel.app/)

## Portfolio focus

- Backend and platform engineering
- AI-enabled systems with explicit engineering boundaries
- Cloud-native and distributed-system foundations
- IoT / connected-system integration
- Public project evidence, architecture reasoning and CI signals

The site currently presents selected engineering work including Aetheris Platform, FloodGuard and AnyDL Pro Ultra, together with SLIIT education, engineering approach, technology toolkit and the existing PDF CV.

Project descriptions are based on public repository documentation. Development status and limitations are stated explicitly; illustrations describe architecture rather than pretending to be live product data. No invented testimonials, experience totals or employer affiliations.

## Run locally

No package installation or build step is required:

```sh
python -m http.server 8080
```

Open `http://localhost:8080`.

## Interaction and accessibility

- Dark-first visual system with responsive desktop, tablet and mobile layouts.
- Native expandable case studies with working deep links.
- Keyboard-accessible command palette (`Ctrl/Cmd + K`), search, arrow navigation and Escape.
- Mobile navigation with Escape dismissal.
- Desktop pointer effects such as magnetic controls, card tilt and ambient light are restricted to fine-pointer devices.
- Layered 3D hero depth and animated engineering visuals are progressively enhanced.
- Viewport-based content reveals run once and preserve the complete page without JavaScript.
- `prefers-reduced-motion` is respected for motion-sensitive users.
- A single persistent CV link, matching desktop/mobile navigation, full-card case-study accordions and visible keyboard navigation.
- Person structured data, verified social-image dimensions, Vercel Web Analytics and a portfolio-matched 404 page.
- Core content, CV and navigation remain available without JavaScript.
- Local image assets and no runtime third-party JavaScript dependencies.

## Automated validation

Every push and pull request to `main` runs **Portfolio CI**. The workflow checks JavaScript syntax, verifies the required site files are present, validates local `src`/`href` references from `index.html`, and confirms `vercel.json` is valid JSON.

This keeps a static portfolio lightweight while still giving repository visitors visible evidence that core structure and assets are automatically checked.

## Deployment

Serve the repository root as a static website. The existing `vercel.json` preserves clean URLs and PDF/image headers. `index.html`, `studio.css` and `script.js` form the primary implementation surface.

The homepage uses responsive portrait assets with a blur-up loading path and CSS masking/depth treatments. The high-resolution source remains available for future image refinements while smaller WebP variants reduce initial transfer cost.
