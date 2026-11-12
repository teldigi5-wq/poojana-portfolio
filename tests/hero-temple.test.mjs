// The Temple hero: the recruiter path (name, role, work, CV, contact) stays real HTML, the 3D
// layer stays decorative, and nothing reaches outside the site's own origin.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const hero = html.slice(html.indexOf('id="home"'), html.indexOf("</section>", html.indexOf('id="home"')));

test("hero keeps name, role and both actions as HTML", () => {
  assert.match(hero, /<h1 id="hero-title"[^>]*>[\s\S]*Poojana Kaveesh/);
  assert.match(hero, /Backend &amp; authorization security/);
  assert.match(hero, /href="#work"[^>]*>[\s\S]*View work/);
  assert.match(hero, /href="assets\/Poojana_Kaveesh_ATS_2026\.pdf" download/);
  assert.match(html, /href="#contact"/);
});

test("the portrait is unchanged and the visual layer is aria-hidden", () => {
  assert.match(hero, /<img src="assets\/hero-portrait\.webp" srcset="assets\/hero-portrait-mobile\.webp 1000w, assets\/hero-portrait\.webp 1672w"[^>]*alt="Poojana Kaveesh in a black jacket, lit with warm copper light" fetchpriority="high">/);
  assert.match(hero, /<div class="hero-visual" aria-hidden="true">/);
  assert.match(hero, /<ol class="hero-index" aria-hidden="true">/);
});

test("hero assets are local (CSP: no new hosts)", () => {
  for (const file of ["temple.css", "temple-hero.js", "source/worlds/temple.js"]) {
    const text = readFileSync(file, "utf8");
    assert.doesNotMatch(text, /https?:\/\/(?!www\.w3\.org\/2000\/svg)/, file);
    assert.doesNotMatch(text, /\beval\(|new Function\(/, file);
  }
});

test("reduced motion and motion=off are respected", () => {
  const js = readFileSync("temple-hero.js", "utf8");
  assert.match(js, /prefers-reduced-motion: reduce/);
  assert.match(js, /motion'\) === 'off'/);
  assert.match(readFileSync("temple.css", "utf8"), /prefers-reduced-motion:reduce/);
});
