---
name: Poojana Kaveesh · Trace
description: One request, followed through the stack, on porcelain light with ink type and a single cobalt path.
colors:
  trace-cobalt: "#2b4bff"
  cobalt-wash: "#e9edff"
  ink: "#0e1116"
  night-ink: "#0b1020"
  body-slate: "#2a3652"
  muted-slate: "#4b5568"
  label-slate: "#5b6a86"
  porcelain-sky: "#dfe8fb"
  porcelain-white: "#ffffff"
  verified-green: "#0fa37f"
  verified-wash: "#e3f6f0"
  verified-deep: "#134d3e"
  refusal-red: "#e5484d"
  refusal-wash: "#fdecec"
  refusal-deep: "#8a1f24"
  instrument-bar: "#151b2b"
  instrument-text: "#c9d1e6"
  instrument-muted: "#7f8aa3"
  terminal-mint: "#7cf0c8"
  syntax-key: "#8fb0ff"
  syntax-number: "#ffc27a"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', Inter, system-ui, 'Segoe UI', sans-serif"
    fontSize: "clamp(38px, 5.6vw, 78px)"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.045em"
  statement:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', Inter, system-ui, 'Segoe UI', sans-serif"
    fontSize: "clamp(48px, 9vw, 112px)"
    fontWeight: 650
    lineHeight: 0.92
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', Inter, system-ui, 'Segoe UI', sans-serif"
    fontSize: "clamp(34px, 5vw, 60px)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', Inter, system-ui, 'Segoe UI', sans-serif"
    fontSize: "34px"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title-sm:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', Inter, system-ui, 'Segoe UI', sans-serif"
    fontSize: "19px"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', Inter, system-ui, 'Segoe UI', sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', Inter, system-ui, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', Inter, system-ui, 'Segoe UI', sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1
  machine:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.7
rounded:
  key: "6px"
  tag: "8px"
  control: "10px"
  inset: "16px"
  row: "20px"
  console: "24px"
  panel: "28px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "30px"
  section: "clamp(80px, 12vh, 140px)"
  container: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.porcelain-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "46px"
  button-secondary:
    backgroundColor: "{colors.porcelain-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "46px"
  button-accent:
    backgroundColor: "{colors.trace-cobalt}"
    textColor: "{colors.porcelain-white}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "46px"
  button-send:
    backgroundColor: "{colors.trace-cobalt}"
    textColor: "{colors.porcelain-white}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "36px"
  eyebrow:
    backgroundColor: "{colors.cobalt-wash}"
    textColor: "{colors.trace-cobalt}"
    rounded: "{rounded.pill}"
    padding: "7px 12px"
  chip:
    backgroundColor: "{colors.porcelain-white}"
    textColor: "{colors.muted-slate}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  chip-verified:
    backgroundColor: "{colors.verified-wash}"
    textColor: "{colors.verified-green}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  chip-refused:
    backgroundColor: "{colors.refusal-wash}"
    textColor: "{colors.refusal-red}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  project-row-selected:
    backgroundColor: "{colors.cobalt-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.row}"
    padding: "18px"
  instrument-console:
    backgroundColor: "{colors.night-ink}"
    textColor: "{colors.instrument-text}"
    typography: "{typography.machine}"
    rounded: "{rounded.console}"
  glass-nav:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 8px"
---

# Design System: Poojana Kaveesh · Trace

## Overview

**Creative North Star: "The Request Trace"**

The page is the path of a single request: Client → Gateway → Services → Data → Response. Every section is one span on that path, numbered and labelled, and every span can be inspected. The visitor isn't browsing a gallery. They are following one call, watching it get routed, rate-limited, resolved and answered. Visual decisions serve legibility of that path first: where you are, what happened, and what proves it.

The world is porcelain light. A pale sky-blue ground sits behind near-black ink type, with one cobalt colour for the path itself. It feels calm and Apple-precise rather than "hacker". Darkness is reserved for instruments: the terminal, the API console, the JSON response and the crew belt are night-ink insets where real machine output lives. Glass is for chrome only, meaning the nav, badge, talk button and command palette that float over the scene. Reading surfaces stay quiet, with hairline borders, faint shadows and generous measure. Motion explains the trace (the rising headline, the progress bar, the rail filling, the push-in into the terminal) and switches off cleanly under reduced motion.

This is a restrained, evidence-first system. It should never look like a template, a neon cyber theme, or a 3D showpiece. A 3D layer was tried and removed because it was too fancy and hard to read.

**Key Characteristics:**
- One numbered path (01 Client → 05 Response) organizes the whole page.
- Porcelain light by default. Night-ink panels appear only where machine output is shown.
- A single chromatic accent (Trace Cobalt) for the path, the selection and the primary action.
- Green and red only ever mean verified/allowed and refused/limited.
- Heavy, tightly tracked system sans for statements. Mono only for machine output.
- Pill geometry for anything you press. Large soft radii for containers.

## Colors

A cool porcelain-and-ink neutral field with one cobalt path, two semantic status hues, and a separate night palette that exists only inside instruments.

### Primary
- **Trace Cobalt** (#2b4bff): the colour of the request's path. It marks the active rail step, the progress bar, the selected project row (fill plus a 3px inset edge), the selected project's status line, the Send button, eyebrow labels and every focus ring.
- **Cobalt Wash** (#e9edff): the quiet field behind cobalt text, used for eyebrow pills, the selected project row and the selected palette item. It is never used as a section background.

### Neutral
- **Ink** (#0e1116): the base text colour, primary button fill, completed rail steps and progress tracks.
- **Night Ink** (#0b1020): headline colour on light ground, and the background of every instrument inset (console, JSON card).
- **Body Slate** (#2a3652): long-form paragraphs, ledes and project descriptions.
- **Muted Slate** (#4b5568): secondary copy, captions and demo descriptions.
- **Label Slate** (#5b6a86): definition-list keys, rail labels and stage captions.
- **Porcelain Sky** (#dfe8fb): the page ground behind the hero scene and content.
- **Porcelain White** (#ffffff): glass tints, toggle thumbs and selected segment buttons. Usually applied at partial opacity over the sky.

### Semantic
- **Verified Green** (#0fa37f), **Verified Wash** (#e3f6f0), **Verified Deep** (#134d3e): evidence, allowed decisions, the "open to internships" status dot and 200 responses. Deep is the text colour on the wash.
- **Refusal Red** (#e5484d), **Refusal Wash** (#fdecec), **Refusal Deep** (#8a1f24): denied access decisions and 429 rate-limit states only.

### Instrument (night insets only)
- **Instrument Bar** (#151b2b): console title and URL bars.
- **Instrument Text** (#c9d1e6): default machine output.
- **Instrument Muted** (#7f8aa3): comments, pane headings and footnotes inside instruments.
- **Terminal Mint** (#7cf0c8): success, strings, the caret and granted states inside instruments.
- **Syntax Key** (#8fb0ff) and **Syntax Number** (#ffc27a): JSON keys and numbers.

### Named Rules
**The One Path Rule.** Trace Cobalt is the only chromatic accent on light ground. If something is cobalt, it is on the path, selected, or the action to take. Nothing is cobalt for decoration.

**The Mint Stays Inside Rule.** Terminal Mint and the syntax colours appear only inside night-ink instruments. On porcelain, status uses Verified Green or Refusal Red.

**The Status Means Status Rule.** Green and red are reserved for real outcomes (verified, allowed, 200; denied, 429). Never use them for emphasis or branding.

## Typography

**Display / Body Font:** the system sans stack (-apple-system, SF Pro Display/Text, Inter, system-ui, Segoe UI). No webfont is loaded.
**Machine Font:** JetBrains Mono, falling back to ui-monospace, SFMono-Regular, Menlo or Consolas. JetBrains Mono is not self-hosted, so most visitors see their platform mono.

**Character:** a heavy (650), tightly tracked system sans gives statements the calm authority of a well-made OS. Mono is the voice of the machine and appears only where the machine is speaking.

### Hierarchy
- **Display** (650, clamp(38px→78px), line-height 1, −0.045em): the hero statement only. It is balanced, at most 17ch, and each word rises in on load.
- **Statement** (650, clamp(48px→112px), 0.92, −0.05em): the single closing line in Response ("200 OK. Your move.").
- **Headline** (650, clamp(34px→60px), 1.02, −0.04em): section titles. Balanced, at most 16ch, in Night Ink.
- **Title** (650, 34px, 1.1, −0.03em): the selected project's name in the Work detail. **Title Small** (650, 19px, 1.2) is used for Lab demo titles; the About title sits at 22px.
- **Lede** (400, 18px, 1.55): section introductions, at most 36em, in Body Slate.
- **Body** (400, 15–16px, 1.55–1.6): project detail, evidence and about copy, held to 60ch.
- **Label** (500, 13px sans): status lines, definition keys and other UI labels on reading surfaces.
- **Machine** (500, 12–13.5px mono, 1.7–1.85): terminal, API console, endpoints, headers and JSON.

### Named Rules
**The Machine Voice Rule.** Mono is reserved for machine output: the terminal, the API console, endpoint pills, response headers and JSON. Reading surfaces use sans labels. The current code still sets eyebrows, chips, the rail, the hero status pill, segment buttons and stage captions in mono. Move those to the sans Label style when a section is next touched; don't add new mono labels.

**The 12px Floor Rule.** No text is smaller than 12px anywhere, including terminal footers and rail labels.

## Layout

Content sits in a single wrapped column, min(1120px, 100% − 48px). From 1100px up, the column shifts right (left margin at least 150px) to clear the fixed progress rail. Sections are tall and unhurried, with clamp(80px, 12vh, 140px) of vertical padding. Each opens with a numbered eyebrow ("02 · GATEWAY"), a headline and a lede before any interactive surface.

The hero is a 240vh scroll runway with a sticky 100vh stage. The fixed scene image or video zooms in toward the terminal while the copy fades, then the page crosses into the dark terminal moment before content begins. Under reduced motion the hero collapses to 100vh.

Grids are content-shaped: Work is a 1.05fr / 1fr list-plus-detail pair, Lab is three equal columns, and Response is 1.25fr / 0.75fr. Breakpoints are observed at 980px (Lab stacks), 860px (Work and Response stack), 760px (console panes stack), 720px (hero markers, badge text and talk button hide) and 480px (nav compresses).

Spacing runs on a loose 8px-based rhythm: 8, 12, 16, 24 and 30px inside components, 18–28px between cards.

## Elevation & Depth

A hybrid system with one clear division. Frosted glass and lift belong to chrome that floats over the scene; reading surfaces are quiet. Floating chrome uses translucent white with a backdrop blur (14px) and saturation boost, a 1px white rim, and a soft blue-tinted shadow. Content panels (`.panel`) still carry a lighter glass, but the direction is quieter: the Work detail has already moved to a hairline border with a faint shadow. Instruments sit on night ink with deep, cool shadows that read as weight rather than glow.

### Shadow Vocabulary
- **Chrome float** (`box-shadow: 0 10px 30px rgba(32,56,140,.12)`): the nav, badge, talk button and hint pills.
- **Panel ambient** (`box-shadow: 0 24px 70px rgba(30,50,120,.12)`): glass content panels.
- **Reading quiet** (`box-shadow: 0 18px 50px rgba(30,50,120,.08)`): the Work detail and other evidence surfaces.
- **Instrument weight** (`box-shadow: 0 30px 80px rgba(15,25,70,.3)`): the API console and JSON card.
- **Palette lift** (`box-shadow: 0 40px 120px rgba(20,30,80,.35)`): the command palette dialog.
- **Button hover** (`box-shadow: 0 8px 22px rgba(14,17,22,.25)`): the primary button on hover, with a 1px rise.

### Named Rules
**The Glass Is Chrome Rule.** Backdrop blur is for things that float over the scene: the nav, badge, talk button, back-to-top button and command palette. Anything you read for more than a sentence sits on a quiet surface with a hairline border (rgba(14,17,22,.10)) and at most the Reading-quiet shadow.

**The Solid Fallback Rule.** Every glass surface has a solid replacement under `prefers-reduced-transparency` (#f4f7ff, or #10172a on dark) and a bordered high-contrast replacement under `prefers-contrast: more`.

## Shapes

Anything pressable is a pill (999px): buttons, chips, eyebrows, the nav, the badge, endpoint toggles and segment controls. Containers use large soft radii that step down as they nest: glass panel 28px, console and JSON 24px, project row 20px, inset blocks 16px, Send button 10px, tags 8px, keycaps 6px. Status is a small filled circle (8–10px) and never an icon. Evidence is marked by a 3px left rule in Verified Green, and selection by a 3px inset edge in Trace Cobalt. Progress is a rounded 14px track with an ink or cobalt fill.

## Components

Precise and quiet: pill shapes, instant press feedback, no flourish.

### Buttons
- **Shape:** full pill (999px), 46px tall, 0 22px padding, 600 15px sans.
- **Primary:** Ink fill with white text. The default "do this" button (CV, start a conversation).
- **Secondary:** 80% white with Ink text and a hairline border. The quieter companion link.
- **Accent:** Trace Cobalt fill. Used sparingly, when the action is the next step on the path.
- **Hover / Focus / Active:** hover lifts 1px with the Button hover shadow. Focus is a 2px Trace Cobalt outline offset 3px. Press scales to 0.97 in 90ms for instant feedback.
- **Send (instrument):** a 36px Trace Cobalt button with a 10px radius, used inside the console bar.

### Chips and Eyebrows
- **Eyebrow:** a Cobalt Wash pill with cobalt text that numbers each section ("03 · SERVICES").
- **Chip:** a translucent white pill in Muted Slate with a hairline border. The **verified** variant is Verified Wash with Verified Green text, and the **refused** variant is Refusal Wash with Refusal Red text. Both lose the border.

### Cards / Containers
- **Glass panel:** 28px radius, 74% white, 22px blur, white rim, Panel ambient shadow. Used for Lab demos, the project list and About.
- **Work detail:** quieter than a panel. Hairline border, Reading-quiet shadow and 30px padding (22px on phones). It shows the status line first, then Evidence and limits (a 3px green left rule with a green heading), then the facts list (a hairline-topped definition list with Label Slate keys), then links.

### Inputs and Toggles
- **Segment control:** a pill track at 7% ink. The selected segment becomes a white pill with a small shadow.
- **Switch:** a 44×26 track at 20% ink that turns Trace Cobalt when on, with a white 20px thumb.
- **Palette search:** a borderless 17px sans input with a hairline underline, inside the glass command palette.
- **Touch:** every control reaches 44px minimum height (and width where compact) under `pointer: coarse`.

### Navigation
- **Glass nav:** a 56px pill centred at the top, holding sans 14px links and a ⌘K keycap pill in cobalt. It switches to the `tone-dark` tint (light labels, deeper glass) when floating over night content. Chromium gets SVG-refraction glass, and other browsers get a frosted fallback.
- **Progress rail:** a fixed left column of five numbered steps joined by 2px segments. Done steps fill with Ink, the active step is Trace Cobalt with a 5px cobalt halo, and segments fill as you scroll.
- **Progress bar:** a 3px Trace Cobalt line at the very top, scaled with scroll.
- **Command palette:** a native `<dialog>` in palette glass, opened with ⌘K or Ctrl K.

### Instrument Console (signature)
A night-ink inset with a 24px radius and the Instrument weight shadow. The bar has a mint verb tag, the path and a cobalt Send button, with endpoint pills below. Two panes (headers, body) stack under 760px. A mono footnote states plainly that the console is simulated. This is the only place mint, syntax colours and dense mono live.

### Project Row (signature)
A two-column button (150px name, maturity track) with a 20px radius. When selected it gets a Cobalt Wash fill, a 3px cobalt inset edge and a cobalt track fill. The track shows how far each project has really travelled, never further.

## Do's and Don'ts

### Do:
- **Do** keep every section on the numbered path (01 Client → 05 Response), each opening with an eyebrow, headline and lede.
- **Do** use Trace Cobalt (#2b4bff) only for the path, the current selection, the primary next step and focus rings.
- **Do** put machine output (terminal, console, headers, JSON) in a night-ink inset with mono type, and keep everything else porcelain and sans.
- **Do** show evidence with the 3px Verified Green left rule and keep its copy at 15px, 60ch.
- **Do** give every glass surface its reduced-transparency and more-contrast solid fallbacks.
- **Do** meet 44px touch targets under `pointer: coarse` and keep all text at 12px or larger.
- **Do** give every animated element a reduced-motion state that shows the final frame.

### Don't:
- **Don't** add 3D scenes, orbitable models or tilt cards. They were tried and removed as too fancy and hard to read.
- **Don't** add a second chromatic accent, gradients on text, or neon glow on light ground.
- **Don't** use Terminal Mint or syntax colours outside night-ink instruments.
- **Don't** use green or red for anything but verified/allowed and refused/limited outcomes.
- **Don't** put reading content on heavy frosted glass. Glass is for floating chrome.
- **Don't** set new reading-surface labels in mono.
- **Don't** fill a maturity track, status label or evidence block beyond what has actually been verified.
