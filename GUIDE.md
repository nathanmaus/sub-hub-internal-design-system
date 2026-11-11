# Internal Design System

SubHub's internal design system: the same components, icon library, spacing and rules as the SubHub Design System, with its own colour palette and headline face. Built for tools and surfaces used inside the company. Where this guide describes the SubHub product or brand voice, the same rules apply here unless a section says otherwise.

---

## 1 · Company & product context

SubcontractorHub sells one platform to installation contractors — not service-dispatch shops. The through-line in every surface is the job lifecycle: **Quote → Sell → Build → Pay**, with **Learn** at the end of the rail.

**Modules** (each priced separately, publicly listed):

| Module | What it does | Listed price |
| --- | --- | --- |
| **EasyQuote** | AI quoting. Address + utility in, designed system out, with financing embedded. | $2,500/mo + $35/opportunity |
| **Sales Velocity** | Pipeline CRM, automated follow-ups, rep workspaces, proposals. | $500/mo |
| **Project Management** | Crew scheduling, trade-specific milestone templates, real-time job status. | $500/mo |
| **Ambassador** | Referral program with automatic commission payouts. | $500/mo |

Cross-cutting facts that shape copy and UI: three trades in one login (solar tracks design → PTO, roofing tracks material delivery → final inspection, HVAC tracks permit → commissioning); embedded financing from **GoodLeap, Sungage, LightReach and Arcadia**; the **30% federal ITC** in every solar number; English and Spanish; Zapier integrations (Zoho, HubSpot, Salesforce, Keap); 500+ contractor teams.

**Surfaces represented here:** the operator app (`ui_kits/platform/`) and the marketing site (`ui_kits/marketing/`).

### Sources used

- **Attached codebase:** `SubcontractorHub Design System/SubcontractorHub-Design-System.html` — a single self-contained bundled design-system overview page. Everything in `tokens/`, `assets/` and `components/` is lifted verbatim from it: the token values, the three logo PNGs, the original font subsets (since replaced by Fraunces + Inter), and all 15 component implementations. That file internally credits an **"Engineering Header source"** for the brand anchors and the three banner directions — that source was *not* provided, so anything it would have settled is flagged in §6.
- **Public web:** subcontractorhub.com (home, sales-velocity, solar-estimating-software, contractor-scheduling-software, blog comparisons) for product names, module pricing, lender list, trade workflows and voice samples.
- **Not provided:** product screenshots, product source code, a Figma file, slide templates, photography, or the site's Lottie animations. Nothing here was reconstructed from memory of the real product UI.

---

## 2 · Content fundamentals

**The vibe:** plainspoken trade, technical when it earns it. Written by people who worked in the industry, for people still in it. Short declaratives. Outcome first, mechanism second.

**Casing.** Sentence case for body and UI labels. Title Case only in the marketing hero triad — "Win the Job. Run the Project. Get Paid." Mono eyebrows and data labels are ALL CAPS with `.16em` tracking. Never all-caps a sentence.

**Person.** Talk about the reader's team as *your* — "your team quotes in minutes", "your crews". First person plural only in brand/engineering voice — "We build the applications that power the future of SubHub." Never "I".

**Sentence shape.** Three-beat rhythm is the house pattern: "Win the Job. Run the Job. Get Paid." · "Quote, projects, payments." · "No re-entry, no dropped handoffs, no delayed installations." Em-dashes for the consequence clause — "all from one login."

**Numbers are the argument.** Prices, kW, days, percentages, counts — always specific, always mono, always tabular. "$41,280.00" not "about forty thousand". "19 days" not "faster". "600+ installations a month" not "high volume".

**Trade vocabulary is not jargon — use it.** PTO, ITC, nameplate DC, pitch 6:12, squares, tonnage, tear-off, interconnection, commissioning, adder, sq. Status labels say what an ops person would say: "Awaiting permit", "Day 2 of 3", "Financing pending" — not "Stage 3".

**Say this**
- "We build the applications that power the future of SubHub."
- "Hard hats meet source control."
- "Send a quote in minutes, not days."
- "The close happens at the table, not in a follow-up email."
- "Every job on one board — tasks, crew, timeline, and customer updates in one place."

**Not this**
- "Leverage our end-to-end workflow orchestration suite."
- "Revolutionize your business with cutting-edge synergy."
- "Unlock powerful insights." (What insight? Name it.)

**Comparisons are honest.** The brand's own blog names competitors and concedes where they win ("For small teams just getting started, JobNimbus is an accessible entry point"). Keep that: never claim a capability that doesn't exist, and always append the caveat ("Confirm current pricing directly with each vendor").

**Emoji: never.** The one decorative glyph in the system is **✦ (U+2726)**, and it means *AI* — nothing else. No 🚀, no ✅, no ☀️.

**AI is stated as a mechanism, not a mood.** "Send AI-generated quotes in minutes" (what it does) rather than "AI-powered innovation". The ✦ marker labels the feature; the sentence explains the outcome.

---

## 3 · Visual foundations

### Color
Two families and nothing else. **Sand `#D9B98A`** is the brand: primary actions, links in dark mode, the accent and the AI marker. Primary and accent are deliberately the same colour. **Teal** runs from `#EAF3F1` to `#0A2427` and carries all text, borders and grounds; `#0F3438` is the page in dark mode and the strongest text in light. Borders in dark mode use the neutral `#545655`.

Sand always takes a **teal label**, never white: white on sand is 1.9:1 and unreadable. That is what `text-on-brand` is for. Teal teal fills (dark buttons) take a light label, `text-on-teal`.

Status colours (green, yellow, red) are functional and shared with SubHub. Info and neutral statuses use teal, since the palette has no sand.

Use sand sparingly, as SubHub uses sand: zero or a couple of sand moments per screen beyond the primary action.

### Type
Two faces. **Fraunces** for display and headings (hero to h2). **Inter** for everything else: body, buttons, UI labels, numbers, eyebrows. Buttons are Inter, not Fraunces; a serif on every control reads as decoration. Fraunces is a serif, so display type is tracked looser than a geometric sans would be: `-.02em` at hero, `-.015em` for display, `-.01em` at h1. Body is 16/1.45 at `-.005em`. The eyebrow stays: 12px Inter, uppercase, `.16em`.

### Layout
4px base grid. 1240px max container, 760px narrow measure. Marketing bands inset 32px on the page and pad 72–88px vertically; app pages pad 22–24px. Controls are 44px tall (34 dense, 52 hero). App chrome is fixed: 244px sidebar, 60px topbar, and the marketing header is sticky.

### Backgrounds & motifs
Grounds are **flat** — no soft gradients, no photo washes, no noise or paper texture. Four devices carry all decoration:

1. **Blueprint grid** — teal-950 with 50px fine rules + 250px major rules in translucent sand, plus one broad sand radial glow and one small sand one. The default hero and the dark technical panel.
2. **Skew slabs** — `-16°` skewed bars in the chart sequence, on faintly ruled paper. Charts, stage bars and editorial heroes.
3. **Node mesh** — thin sand linework between hollow nodes with exactly **one solid sand node**. The AI/stack metaphor.
4. **Diagonal hatch + teal wedge** — sand ground, `-16°` hatch, one skewed teal panel. The loud CTA band.

Illustration is **isometric line art** — the solar-array site drawing, the braced tower. Never stock photos, never 3D renders, never emoji. Radial glows exist *only* inside the blueprint motif; they are not a general gradient license.

### Cards & borders
A card is **white, 14px radius, 1px `--border-subtle` (teal-200), `--shadow-sm`** — border and shadow always together. Controls are 10px, panels 20px, pills 999px. Never a rounded card with a colored left border only. Borders are hairline (1px); `1.5px` exists only for a totals rule.

### Shadows
Cool-tinted, shallow, layered. `--shadow-sm` at rest, `--shadow-md` on an interactive card's hover, `--shadow-overlay` for dialogs. Nothing floats far off the page; there is no glow, no colored shadow. The only inner shadow is a 10%-white top inset for dark surfaces.

### Motion
Fast and mechanical. 90ms press · 150ms color/hover · 220ms surface and toggle · 380ms panels. Easing is `cubic-bezier(.2,0,.2,1)` almost everywhere, `cubic-bezier(.16,1,.3,1)` for things that settle. No long fades, no scroll-triggered reveals. **Springs and bounces belong only to the components that specify them** — today, the Tooltip's entrance (stiffness 380, damping 19, mass 1; `--spring-tooltip`). Don't reach for them anywhere else; where else they're used will be defined as the system grows. The MainMenu opens in 200ms on `--ease-menu` with rows staggered 20ms apart. Both entrances are specified in full in the Motion section (`motion.md`).

### Hover / press / focus
Hover = **one step darker** in the same family (sand-400 → sand-700), or a fill appearing on a quiet control. Never an opacity fade. Press = `scale(.985)` for 90ms. Focus = a 3px `--sand-200` ring, no outline. Disabled = teal-200 fill with teal-500 text, no shadow, no opacity trick. **Links hover to sand, not to a darker sand** — that's a brand signature.

### Transparency & blur
Rare and specific. `--blur-panel` (14px) is used on the sticky marketing header over an 86%-white ground, and dialogs sit on a `--scrim-inverse` (62% teal) scrim. On dark surfaces, secondary fills are `rgba(255,255,255,.05–.12)`. Nothing else is translucent — no frosted cards, no glass.

### Imagery color vibe
Deep teal grounds, sand highlights. Warm and calm rather than technical. When imagery is missing, use a flat teal panel, not a placeholder gradient.

### Dark
**Dark is this system's home theme**; the palette was defined dark-first and light mode is derived from it. Set `data-theme="dark"` on the root element.

**Primitives do not change between modes.** `teal-900` is `#0F3438` in both themes; only the semantic layer repoints.

**Surfaces.** Dark: page `teal-900` (the board's Background), cards `teal-800` one step lighter so they separate, sunken wells `teal-950`. Light: page `teal-050`, cards white, sunken wells `teal-025`.

**Sand holds; its supporting cast moves.** `sand-400` is the primary fill in both themes with a `teal-900` label at 7.2:1. Links are `sand-400` in dark but `sand-700` in light, because `sand-400` on white is 1.9:1. Hover lightens to `sand-300` in both themes; pressed is `sand-500` in light and `sand-200` in dark.

**Contrast holds in both.** Every text pair meets 4.5:1, tertiary pairs meet 3:1. Disabled states and borders are deliberately lower.

---

## 4 · Iconography

**The SubHub Icon Library — the only source of icons in this system.** All 271 icons are drawn in the Figma file "SubHub Icon Library" and exported at 24px. This system shares the library with the SubHub Design System. No Lucide, no third-party set.

> ### The one rule
>
> **Never author, paste in, or generate an icon.** Not by hand, not from another icon set, not with an AI assistant — and not "just for the mockup", because mockups ship. Every glyph a user sees must be one somebody drew in the SubHub Icon Library.
>
> If you need an icon the library doesn't have, pass the name you want anyway: `<Icon>` renders the `placeholder` glyph and logs a console warning naming it. Then **contact Nathan Maus (nmaus@subcontractorhub.com)** to have it drawn in Figma. The weekly sync brings it across once it exists.
>
> A visible placeholder is the correct outcome, not a failure. It is a gap with a name on it. A hand-drawn stand-in is a gap that looks finished — those are the ones that reach production.

- **One primitive:** `<Icon name="hard-hat" />`. Because it renders as a mask over `backgroundColor`, it can take `currentColor`. Next to a label, it does, so the glyph matches its text; a standalone icon falls back to `icon-default` (`teal-900` in light, `teal-050` in dark). Never inline a hand-drawn SVG icon.
- **Names:** use the library name (`solar`, `trash`, `calendar`, `trend-up`). The legacy Lucide slugs the system was built on (`mail`, `map-pin`, `settings`, `sparkles`) still resolve through an alias map, and an alias never shadows a real library name. Full list and map: `assets/Icons/README.md`.
- **Sizes:** 13 inside a Badge · 15 in `sm` controls · 17–18 default · 19–20 in `lg`. Don't scale below 13px — the filled shapes close up — and don't scale a 24px glyph past 32px; take the larger variant from the library instead.
- **Known gaps:** `hard-hat`, `hourglass`, `kanban`, `layers` and `wallet` are not in the library yet and render the placeholder. They are drawing requests with Nathan. Do not alias them to a near-enough icon to make the placeholder go away — that is how the gap got hidden last time.
- **Unicode as icon:** exactly one — **✦ U+2726**, the AI marker, always sand. It is used as a character, not an icon component.
- **Emoji:** never, anywhere.
- **Illustration ≠ icon.** Larger line art (the isometric solar site, the braced tower, the node mesh) lives inside `HeroBanner` as inline SVG recreated from the supplied source. Don't draw new illustrations by hand; reuse those or leave the slot empty.

**Logos:** the SubHub lockup in this system's colours, as SVGs with PNG fallbacks in `assets/`: `logo-dark` (light grounds: `teal-900` and `sand-600`), `logo-light` (dark grounds: `teal-300`, `teal-050` and `sand-400`), `logo-on-amber` (on `sand-400`: `teal-700` and `teal-900`). The mark is the SubcontractorHub mark, shape unchanged; the wordmark reads "SubHub" in Inter SemiBold, "Sub" and "Hub" in two tones. On teal, use `logo-light`. **Never redraw, recolour, outline or rebuild it.**

---

## 5 · Index

| Path | What |
| --- | --- |
| `tokens.json` | Every token in both themes. The source the CSS is generated from. |
| `tokens.css` | The tokens as CSS variables, plus fonts, weights and motion. The one stylesheet a page needs. |
| `tokens/base.css` | Element defaults: body type, headings, links, focus ring. |
| `components/bundle.js` | All components in one script, exposed as `window.InternalDesignSystem`. |
| `components/<Name>/` | Each component's guidelines (`README.md`), types (`.d.ts`) and preview. |
| `components/core`, `forms`, `data`, `navigation`, `overlays`, `brand` | Component source. |
| `icons/` | The SubHub Icon Library, one SVG per icon; `icons/index.json` lists them. |
| `guidelines/` | Specimen cards for colour, type, spacing, radius, motion and motifs. |
| `motion.md` | Motion specs for Tooltip, Toast and menus. |

**Components:** Icon, Button, IconButton, Badge, StatusPill · Field, Input, Select, Switch · Card, StatCard, DataTable · Tabs, MainMenu · Tooltip, Toast · Logo, HeroBanner.

Not built yet (flag it rather than inventing one): Checkbox, Radio, Textarea, Dialog, Dropdown menu, Pagination, Breadcrumb, Sidebar nav, Avatar, Progress, Skeleton.

---

## 6 · Open questions & flags

1. **Logo recoloured, not redrawn.** The SubHub lockup uses the SubcontractorHub mark unchanged in shape, recoloured to teal and sand, with an Inter SemiBold "SubHub" wordmark. The original wordmark face was not labelled; Inter SemiBold was the closest match. Confirm it with whoever owns the brand files.
2. **The palette was defined dark-first.** Light mode, the in-between ramp steps and the lifted dark card (`teal-800`) were derived, not supplied. Review them against real screens.
3. **Status colours are shared with SubHub.** Green, yellow and red are functional, not part of this palette. Info and neutral use teal.
4. **Five icons are missing from the library.** `hard-hat`, `hourglass`, `kanban`, `layers` and `wallet` render the `placeholder` glyph until they are drawn in Figma.
5. **HeroBanner's artwork and motifs come from SubHub.** They are recoloured to teal and sand but were designed for SubHub's brand.
6. **Missing primitives**: see §5.
