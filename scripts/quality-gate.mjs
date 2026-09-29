import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const fail = (message) => {
  console.error(`QUALITY GATE FAILED: ${message}`);
  process.exitCode = 1;
};

const required = [
  "index.html",
  "cinematic.css",
  "cinematic.js",
  "styles.css",
  "main.js",
  "staticwebapp.config.json"
];

required.forEach((file) => {
  if (!existsSync(file)) fail(`missing ${file}`);
});

const html = readFileSync("index.html", "utf8");
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicates.length) fail(`duplicate IDs: ${[...new Set(duplicates)].join(", ")}`);

const requiredMarkup = [
  'class="skip-link"',
  'name="viewport"',
  'rel="canonical"',
  'property="og:url"',
  'id="main"',
  'id="hero-video"',
  'prefers-reduced-motion'
];
requiredMarkup.forEach((token) => {
  const source = token === "prefers-reduced-motion" ? `${readFileSync("styles.css", "utf8")} ${readFileSync("main.js", "utf8")}` : html;
  if (!source.includes(token)) fail(`missing accessibility/performance marker: ${token}`);
});

for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)) {
  if (!/rel="[^"]*noopener/.test(tag[0])) fail(`external link missing noopener: ${tag[0]}`);
}

const budget = {
  "index.html": 64 * 1024,
  "styles.css": 64 * 1024,
  "main.js": 64 * 1024,
  "cinematic.css": 32 * 1024,
  "cinematic.js": 32 * 1024
};
Object.entries(budget).forEach(([file, bytes]) => {
  const size = statSync(file).size;
  if (size > bytes) fail(`${file} is ${size} bytes; budget is ${bytes}`);
});

const videoDir = "assets/video";
if (existsSync(videoDir)) {
  readdirSync(videoDir).forEach((name) => {
    if (![".mp4", ".webm"].includes(extname(name).toLowerCase())) return;
    const size = statSync(join(videoDir, name)).size;
    if (size > 3 * 1024 * 1024) fail(`${name} exceeds the 3 MB video budget`);
  });
}

JSON.parse(readFileSync("staticwebapp.config.json", "utf8"));
if (!process.exitCode) console.log("Portfolio quality gate passed.");
