import { existsSync, readFileSync, statSync } from "node:fs";
import { extname } from "node:path";

const failures = [];
const fail = message => failures.push(message);
const required = [
  "index.html", "styles.css", "luxe.css", "app.js", "motion.js",
  "assets/liquid-navbar.js", "assets/liquid-navbar.css",
  "assets/hero-portrait.webp", "assets/hero-portrait-mobile.webp",
  "assets/Poojana_Kaveesh_ATS_2026.pdf", "README.md", "vercel.json",
  "staticwebapp.config.json",
  "source/portfolio-copper/components/ui/liquid-glass-navbar.tsx",
  "source/portfolio-copper/components/ui/liquid-glass-shaders.ts"
];
required.forEach(file => { if (!existsSync(file)) fail(`missing ${file}`); });

const html = readFileSync("index.html", "utf8");
const styles = `${readFileSync("styles.css", "utf8")}\n${readFileSync("luxe.css", "utf8")}\n${readFileSync("assets/liquid-navbar.css", "utf8")}`;
const app = readFileSync("app.js", "utf8");
const motion = readFileSync("motion.js", "utf8");
const navbar = readFileSync("source/portfolio-copper/components/ui/liquid-glass-navbar.tsx", "utf8");
const shader = readFileSync("source/portfolio-copper/components/ui/liquid-glass-shaders.ts", "utf8");
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
if (duplicateIds.length) fail(`duplicate IDs: ${duplicateIds.join(", ")}`);

for (const marker of [
  'class="skip-link"', 'name="viewport"', 'rel="canonical"', 'property="og:url"',
  'name="robots" content="index,follow', 'type="application/ld+json"', 'id="main"',
  'id="liquid-nav-root"', 'id="dimension"', 'id="work"', 'id="about"', 'id="contact"'
]) if (!html.includes(marker)) fail(`missing production/accessibility marker: ${marker}`);
if (/noindex|nofollow/i.test(html)) fail("production HTML must remain indexable");
if (!html.includes("https://poojana-portfolio.vercel.app/")) fail("missing production canonical URL");
if (!styles.includes("prefers-reduced-motion") || !navbar.includes("prefers-reduced-motion")) fail("missing reduced-motion fallback");
if (!navbar.includes("webglcontextlost") || !navbar.includes("IntersectionObserver") || !shader.includes("gl_FragColor")) fail("liquid navigation fallback or shader source missing");
if (!app.includes("showModal") || !motion.includes("ScrollTrigger")) fail("project dialogs or scroll storytelling missing");

for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)) {
  if (!/rel="[^"]*noopener/.test(tag[0])) fail(`external link missing noopener: ${tag[0]}`);
}
const refs = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(match => match[1]);
for (const ref of refs) {
  if (/^(https?:|mailto:|tel:|\/\/)/.test(ref)) continue;
  const path = ref.split("?")[0];
  if (path && path !== "/" && !existsSync(path)) fail(`missing local asset: ${path}`);
}
for (const ref of [...html.matchAll(/href="#([^"]+)"/g)].map(match => match[1])) {
  if (!ids.includes(ref)) fail(`missing fragment target: #${ref}`);
}

const budgets = {
  "index.html": 64 * 1024, "styles.css": 48 * 1024, "luxe.css": 48 * 1024,
  "app.js": 32 * 1024, "motion.js": 24 * 1024,
  "assets/liquid-navbar.js": 300 * 1024, "assets/liquid-navbar.css": 24 * 1024,
  "assets/hero-portrait.webp": 300 * 1024, "assets/hero-portrait-mobile.webp": 120 * 1024
};
for (const [file, budget] of Object.entries(budgets)) if (statSync(file).size > budget) fail(`${file} exceeds ${budget} bytes`);
for (const file of required.filter(path => [".js", ".css", ".html", ".json", ".tsx", ".ts"].includes(extname(path)))) {
  if (existsSync(file) && statSync(file).size === 0) fail(`${file} is empty`);
}

const vercel = JSON.parse(readFileSync("vercel.json", "utf8"));
const azure = JSON.parse(readFileSync("staticwebapp.config.json", "utf8"));
const headers = vercel.headers.find(rule => rule.source === "/(.*)")?.headers ?? [];
const value = key => headers.find(header => header.key === key)?.value;
if (value("Content-Security-Policy") !== azure.globalHeaders["Content-Security-Policy"]) fail("CSP differs between hosts");
for (const name of ["Cross-Origin-Opener-Policy", "Permissions-Policy", "Referrer-Policy", "X-Content-Type-Options", "X-Frame-Options"]) {
  if (!value(name) || value(name) !== azure.globalHeaders[name]) fail(`${name} missing or inconsistent`);
}
if (/https:\/\/cdn\.|unsafe-eval/i.test(value("Content-Security-Policy") ?? "")) fail("CSP permits an unnecessary CDN or eval");

if (failures.length) {
  failures.forEach(message => console.error(`QUALITY GATE FAILED: ${message}`));
  process.exit(1);
}
console.log(`Portfolio quality gate passed: ${ids.length} IDs, ${refs.length} asset/link references, ${Object.keys(budgets).length} budgets.`);
