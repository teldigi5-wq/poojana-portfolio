# Toolkit source inventory

Reviewed 2026-11-09 across both teldigi5-wq and IT26101524. 88 named technologies; direct frameworks, libraries, languages, configured infrastructure and project hardware are included. Transitive packages and roadmap-only technologies are excluded. This is evidence of use/configuration, not a proficiency score or a claim that every project is production-ready.

The educational repositories corroborate the primary projects; their duplicates are not counted again. Private mobile and BoundaryLab development manifests were inspected, but private source and paths are not published. Optional Wayfarer n8n/Groq/search integrations retain their beta labels. FloodGuard hardware is attributed to the student project and is not claimed as independently validated by this portfolio.

## Integration

The existing project already provides TypeScript, Tailwind v4 and shadcn aliases. Components belong in `source/portfolio-copper/components/ui` (`@/components/ui`); the main Tailwind entry is `styles/globals.css`. `integration-hero.tsx` and the supplied Radix Slot/CVA Button use this structure. Scoped carousel keyframes live in `styles/integration-hero.css` because the project builds with esbuild rather than Next.js styled-jsx.

The carousel repeats two exactly equal groups per row, including the trailing gap. CSS translates one group width forever in opposite directions. No hover/pointer listener pauses it. OS/site reduced motion, forced colors, hidden tabs and offscreen visibility are respected. The full catalog remains reachable with a keyboard and in the HTML fallback.

## Evidence index

| Technology | Project context | Evidence |
| --- | --- | --- |
| React | Portfolio · Aetheris · Averis | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| TypeScript | BoundaryLab · Portfolio | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| Java | Aetheris Platform | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| Spring Boot | Aetheris services | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| Python | Averis · Sentinel · Syntra | [Averis API](https://github.com/teldigi5-wq/averis-ai/blob/main/services/api/requirements.txt) |
| FastAPI | Averis · Sentinel · Syntra | [Averis API](https://github.com/teldigi5-wq/averis-ai/blob/main/services/api/requirements.txt) |
| Next.js | Averis · Sentinel · FloodGuard | [Averis web](https://github.com/teldigi5-wq/averis-ai/blob/main/apps/web/package.json) |
| PostgreSQL | Aetheris · Sentinel | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| Docker | Aetheris · Averis | [Aetheris infrastructure](https://github.com/teldigi5-wq/aetheris-platform/blob/main/docker-compose.yml) |
| Firebase | BoundaryLab · FinalForge · FloodGuard | [FinalForge](https://github.com/teldigi5-wq/finalforge/blob/main/firebase/package.json) |
| Flutter | FloodGuard · Socialflow | Private manifest/source inspected |
| Dart | FloodGuard · Socialflow | Private manifest/source inspected |
| GSAP | Portfolio · Averis · 999 Lounge | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| Three.js | FloodGuard · Averis | [FloodGuard web](https://github.com/teldigi5-wq/floodguard-website/blob/main/package.json) |
| Redis | Aetheris caching | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| RabbitMQ | Aetheris messaging | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| JavaScript | Wayfarer · FinalForge | [Wayfarer](https://github.com/teldigi5-wq/wayfarer-world-travel/blob/main/package.json) |
| Rust | Aetheris desktop | [Aetheris desktop](https://github.com/teldigi5-wq/aetheris-platform/blob/main/apps/syntra-desktop/src-tauri/Cargo.toml) |
| Kotlin | FloodGuard Android host | Private manifest/source inspected |
| HTML | Wayfarer · Portfolio | [Wayfarer](https://github.com/teldigi5-wq/wayfarer-world-travel/blob/main/package.json) |
| CSS | Portfolio · Wayfarer | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| SQL | Aetheris migrations | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| Bash | Build & verification scripts | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| PowerShell | Aetheris tooling | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| Tailwind CSS | Portfolio · FloodGuard | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| shadcn/ui | Portfolio component structure | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| Radix UI | Portfolio components | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| Lucide | Portfolio · Aetheris | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| Riverpod | FloodGuard mobile state | Private manifest/source inspected |
| Electron | AnyDL · TelegramAPEX | [AnyDL](https://github.com/teldigi5-wq/anydl-pro-ultra/blob/main/package.json) |
| Tauri | Aetheris desktop | [Aetheris desktop](https://github.com/teldigi5-wq/aetheris-platform/blob/main/apps/syntra-desktop/src-tauri/Cargo.toml) |
| ScrollTrigger | Portfolio scroll scenes | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| Lenis | Portfolio · Averis | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| Motion | FloodGuard · AnyDL | [FloodGuard web](https://github.com/teldigi5-wq/floodguard-website/blob/main/package.json) |
| React Three Fiber | FloodGuard web scenes | [FloodGuard web](https://github.com/teldigi5-wq/floodguard-website/blob/main/package.json) |
| Drei | FloodGuard scene helpers | [FloodGuard web](https://github.com/teldigi5-wq/floodguard-website/blob/main/package.json) |
| WebGL | Portfolio shader rendering | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| Node.js | BoundaryLab · FinalForge · Wayfarer | [Wayfarer](https://github.com/teldigi5-wq/wayfarer-world-travel/blob/main/package.json) |
| Spring Data JPA | Aetheris persistence | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| Flask | TelegramAPEX backend | [TelegramAPEX](https://github.com/teldigi5-wq/TelegramAPEX-repo/blob/main/requirements-electron-build.txt) |
| Express | WhatsApp service endpoints | [FloodGuard WhatsApp](https://github.com/teldigi5-wq/floodguard-whatsapp-bot/blob/main/README.md) |
| Uvicorn | Python API servers | [Averis API](https://github.com/teldigi5-wq/averis-ai/blob/main/services/api/requirements.txt) |
| Pydantic | Typed API validation | [Averis API](https://github.com/teldigi5-wq/averis-ai/blob/main/services/api/requirements.txt) |
| SQLAlchemy | Sentinel persistence | [Sentinel](https://github.com/teldigi5-wq/sentinel-security-platform/blob/main/backend/pyproject.toml) |
| OpenAPI | Aetheris API documentation | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| Spring Actuator | Aetheris service health | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| Firestore | BoundaryLab rule verification | Private manifest/source inspected |
| Realtime Database | FloodGuard telemetry | [FloodGuard WhatsApp](https://github.com/teldigi5-wq/floodguard-whatsapp-bot/blob/main/README.md) |
| Supabase | Averis web client | [Averis web](https://github.com/teldigi5-wq/averis-ai/blob/main/apps/web/package.json) |
| H2 | Aetheris test database | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| NumPy | Syntra quant research | [Syntra AI Runtime](https://github.com/teldigi5-wq/aetheris-ai-runtime/blob/main/aetheris-quant/requirements.txt) |
| pandas | Syntra data processing | [Syntra AI Runtime](https://github.com/teldigi5-wq/aetheris-ai-runtime/blob/main/aetheris-quant/requirements.txt) |
| Transformers.js | Averis browser inference | [Averis web](https://github.com/teldigi5-wq/averis-ai/blob/main/apps/web/package.json) |
| PyMuPDF | Averis document parsing | [Averis API](https://github.com/teldigi5-wq/averis-ai/blob/main/services/api/requirements.txt) |
| RapidFuzz | Averis text matching | [Averis API](https://github.com/teldigi5-wq/averis-ai/blob/main/services/api/requirements.txt) |
| python-docx | Averis document handling | [Averis API](https://github.com/teldigi5-wq/averis-ai/blob/main/services/api/requirements.txt) |
| n8n | Wayfarer optional workflow | [Wayfarer optional beta](https://github.com/teldigi5-wq/wayfarer-world-travel/blob/main/n8n/README.md) |
| Groq | Wayfarer optional AI beta | [Wayfarer optional beta](https://github.com/teldigi5-wq/wayfarer-world-travel/blob/main/n8n/README.md) |
| SerpApi | Wayfarer gated search adapter | [Wayfarer optional beta](https://github.com/teldigi5-wq/wayfarer-world-travel/blob/main/n8n/README.md) |
| Baileys | WhatsApp linked-device integration | [FloodGuard WhatsApp](https://github.com/teldigi5-wq/floodguard-whatsapp-bot/blob/main/README.md) |
| Telethon | TelegramAPEX client | [TelegramAPEX](https://github.com/teldigi5-wq/TelegramAPEX-repo/blob/main/requirements-electron-build.txt) |
| Arduino | FloodGuard student hardware | [FloodGuard WhatsApp](https://github.com/teldigi5-wq/floodguard-whatsapp-bot/blob/main/README.md) |
| ESP8266 | FloodGuard telemetry transport | [FloodGuard WhatsApp](https://github.com/teldigi5-wq/floodguard-whatsapp-bot/blob/main/README.md) |
| Docker Compose | Local service orchestration | [Aetheris infrastructure](https://github.com/teldigi5-wq/aetheris-platform/blob/main/docker-compose.yml) |
| NGINX | Aetheris dashboard container | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| Maven | Aetheris Java builds | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |
| Vite | Aetheris · AnyDL frontend | [AnyDL](https://github.com/teldigi5-wq/anydl-pro-ultra/blob/main/package.json) |
| esbuild | Portfolio production bundles | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| Git | Project source control | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| pnpm | Portfolio dependency lock | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| npm | Node.js project tooling | [Wayfarer](https://github.com/teldigi5-wq/wayfarer-world-travel/blob/main/package.json) |
| GitHub Actions | Project build & test workflows | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| Vercel | Portfolio · Wayfarer hosting | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| PM2 | FloodGuard service configuration | [FloodGuard WhatsApp](https://github.com/teldigi5-wq/floodguard-whatsapp-bot/blob/main/README.md) |
| pytest | Averis · Sentinel · Syntra | [Averis API](https://github.com/teldigi5-wq/averis-ai/blob/main/services/api/requirements.txt) |
| Node test runner | BoundaryLab · Portfolio · Wayfarer | [Portfolio](https://github.com/teldigi5-wq/poojana-portfolio/blob/main/source/portfolio-copper/package.json) |
| Flutter Test | Mobile project tests | Private manifest/source inspected |
| Firebase Emulators | BoundaryLab local rule tests | Private manifest/source inspected |
| Ajv | BoundaryLab schema validation | Private manifest/source inspected |
| Zod | FloodGuard input validation | [FloodGuard web](https://github.com/teldigi5-wq/floodguard-website/blob/main/package.json) |
| ESLint | Next.js project checks | [FloodGuard web](https://github.com/teldigi5-wq/floodguard-website/blob/main/package.json) |
| Prometheus | Aetheris metrics configuration | [Aetheris infrastructure](https://github.com/teldigi5-wq/aetheris-platform/blob/main/docker-compose.yml) |
| Grafana | Aetheris dashboards | [Aetheris infrastructure](https://github.com/teldigi5-wq/aetheris-platform/blob/main/docker-compose.yml) |
| Tempo | Aetheris trace configuration | [Aetheris infrastructure](https://github.com/teldigi5-wq/aetheris-platform/blob/main/docker-compose.yml) |
| Loki | Aetheris log configuration | [Aetheris infrastructure](https://github.com/teldigi5-wq/aetheris-platform/blob/main/docker-compose.yml) |
| Alloy | Aetheris telemetry collection | [Aetheris infrastructure](https://github.com/teldigi5-wq/aetheris-platform/blob/main/docker-compose.yml) |
| OpenTelemetry | Aetheris traces & metrics | [Aetheris infrastructure](https://github.com/teldigi5-wq/aetheris-platform/blob/main/docker-compose.yml) |
| Micrometer | Aetheris service instrumentation | [Aetheris Platform](https://github.com/teldigi5-wq/aetheris-platform/blob/main/user-service/pom.xml) |

Platform SQL, shell scripts, Docker/NGINX files, and Kotlin Android host files were additionally checked in repository trees. The portfolio source itself supplies GitHub Actions, shadcn, WebGL and Vercel evidence. No Kubernetes, Spline, Blender or other aspirational technology was added merely because it appeared in earlier design prompts.

Icons are self-hosted from Simple Icons 16.37.0. See `assets/tech/README.md` for provenance. Generic text monograms are used where a matching packaged mark is unavailable.
