# Poojana Kaveesh — Engineering Portfolio

A static portfolio with a violet visual identity, a portrait-led introduction and evidence-focused case studies for software engineering opportunities.

## Content

- Aetheris Platform: identity, distributed services and deployment.
- FloodGuard: embedded-to-cloud integration and notification reliability.
- AnyDL Pro Ultra: native processes, typed IPC and desktop packaging.
- SLIIT education, engineering approach, technology toolkit and existing PDF CV.

Project descriptions are based on their public repository documentation. Development status and limitations are stated explicitly; illustrations describe architecture rather than pretend to be live product data. No invented testimonials, experience totals or employer affiliations.

## Run locally

No package installation or build step is required:

```sh
python -m http.server 8080
```

Open `http://localhost:8080`.

## Interaction and accessibility

- Native expandable case studies with working deep links.
- Keyboard-accessible command palette (`Ctrl/Cmd + K`), search, arrow navigation and Escape.
- Mobile navigation with Escape dismissal.
- Optional persistent light/dark theme; blocked storage does not break the page.
- Subtle pointer tilt, disabled for touch and reduced-motion preferences.
- Core content, CV and navigation available without JavaScript.
- Local image assets and no runtime third-party JavaScript dependencies.

## Deployment

Serve the repository root as a static website. The existing `vercel.json` preserves clean URLs and PDF/image headers. `index.html`, `styles.css` and `script.js` are the active implementation. Legacy `upgrade.css` and `cv.css` are retained but no longer loaded.

The previous `poojana-hero.webp` is invalid and is not used. The homepage uses the working `poojana-kaveesh-profile.webp` portrait.
