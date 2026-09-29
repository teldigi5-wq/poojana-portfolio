# Poojana Kaveesh — Engineering Portfolio

[![Portfolio CI](https://github.com/teldigi5-wq/poojana-portfolio/actions/workflows/portfolio-ci.yml/badge.svg)](https://github.com/teldigi5-wq/poojana-portfolio/actions/workflows/portfolio-ci.yml)

A recruiter-focused software engineering portfolio with a dark navy / blue-violet visual identity, portrait-led introduction and evidence-focused case studies for software engineering opportunities.

**Live:** [Azure Static Web Apps](https://lively-grass-0934e5200.1.azurestaticapps.net/)

## Motion build — Stage 1

Stage 1 adds a progressive motion layer without replacing the existing content or responsive layout:

- Lenis smooth scrolling synchronized with GSAP ScrollTrigger on desktop.
- A percentage preloader with a full-screen wipe reveal.
- SplitText line reveals for “Built beyond the demo.”
- A pinned desktop hero that scrubs `hero-video.currentTime` as the page scrolls.
- Automatic reduced-motion and under-768px fallbacks.

`cinematic.css` and `cinematic.js` remain the dependable visual baseline. `styles.css` and `main.js` contain the Stage 1 enhancements, so the site still works if a motion CDN or video asset is unavailable.

## Selected work — Stage 2

Stage 2 turns the five project stories into a single pinned horizontal journey on desktop while preserving the existing vertical, touch-friendly layout below 900px:

- A chapter counter and progress rail track the active project.
- Project titles reveal through line masks; evidence rows and stack details stagger into view.
- Aetheris routes draw on scroll and a signal travels Dashboard → Gateway → Identity/User/Audit → AI Runtime.
- FloodGuard draws and travels through HC-SR04 → Arduino → ESP8266 → Firebase → WhatsApp.
- Averis evidence links, FinalForge interface details and AnyDL process steps receive lighter chapter-specific motion.
- Chapter videos lazy-load only on large screens and disappear cleanly when files are absent.

DrawSVG and MotionPath are progressive enhancements. `main.js` includes native SVG fallbacks so the diagrams still animate if either plugin is unavailable.

## Editorial finish — Stage 3

Stage 3 completes the lower half of the portfolio without changing its copy or links:

- Approach principles reveal row-by-row and gain restrained engineering-focused hover feedback.
- About uses subtle depth, capability staggering and a scroll-linked system panel.
- Contact receives a masked headline reveal and a more expressive primary action.
- Section labels count into place as they enter the viewport.
- Clip-path wipes connect Approach, About and Contact.
- A custom cursor and magnetic interaction layer run only on large fine-pointer devices.

All Stage 3 effects are created inside `gsap.matchMedia()`. They are omitted for reduced-motion preferences, touch input and screens below 900px; keyboard focus behavior remains native.

## Release hardening — Stage 4

The final stage prepares the complete motion portfolio for production:

- The opening loader completes in roughly one second and is skipped for repeat visits, reduced motion, Save-Data and very low-memory devices.
- Hero and chapter videos remain lazy and pause when the page is hidden.
- Mobile navigation traps focus while open and supports Escape dismissal.
- Architecture visuals expose useful accessible labels while decorative SVG/video layers stay hidden from assistive technology.
- Touch targets, forced-colors, print output and older overflow/clip-path implementations receive explicit fallbacks.
- `staticwebapp.config.json` supplies Azure security headers and video MIME types.
- `scripts/quality-gate.mjs` enforces required metadata, unique IDs, safe external links, source-size budgets and the 3 MB video limit.

## Higgsfield video files

Export the clips as both WebM and MP4, keep every file below 3 MB, and place them in `assets/video/`:

| Clip | Required filenames | Stage |
| --- | --- | --- |
| Hero portrait | `hero.webm`, `hero.mp4` | Loaded in Stage 1 |
| System loop | `loop-system.webm`, `loop-system.mp4` | Aetheris chapter background |
| FloodGuard | `floodguard.webm`, `floodguard.mp4` | FloodGuard chapter background |

The hero uses `assets/images/poojana-studio-preview.webp` as its poster. Replace that path in `index.html` if you export a dedicated poster frame.

### Motion timing controls

- Preloader duration: the timeline in `runPreloader()` inside `main.js`.
- Hero pin distance: `end: "+=115%"` inside `buildHeroScroll()`.
- Scroll smoothing: `duration: 1.08` inside `initialiseLenis()`.
- Title reveal: the timeline inside `revealHero()`.

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
- Local image assets with CDN-loaded motion libraries and a no-motion fallback if they are unavailable.

## Automated validation

Pushes to `main` and `feat/cinematic-portfolio-v1`, plus pull requests to `main`, run **Portfolio CI**. The workflow checks JavaScript syntax, the production quality gate, required site files, local `src`/`href` references and both hosting configuration files.

This keeps a static portfolio lightweight while still giving repository visitors visible evidence that core structure and assets are automatically checked.

## Deployment

Serve the repository root as a static website. `staticwebapp.config.json` configures Azure Static Web Apps, while `vercel.json` remains available for a Vercel deployment. `index.html`, `cinematic.css`, `styles.css`, `cinematic.js` and `main.js` form the primary implementation surface.

For a manual Azure Static Web Apps release from Cloud Shell, keep the deployment token in a secret environment variable and deploy the repository root:

```powershell
$secureToken = Read-Host "Azure Static Web Apps deployment token" -AsSecureString
$env:SWA_CLI_DEPLOYMENT_TOKEN = [System.Net.NetworkCredential]::new("", $secureToken).Password
npx --yes @azure/static-web-apps-cli deploy . --deployment-token $env:SWA_CLI_DEPLOYMENT_TOKEN --env production
Remove-Item Env:SWA_CLI_DEPLOYMENT_TOKEN
Remove-Variable secureToken
```

The homepage uses responsive portrait assets with a blur-up loading path and CSS masking/depth treatments. The high-resolution source remains available for future image refinements while smaller WebP variants reduce initial transfer cost.
