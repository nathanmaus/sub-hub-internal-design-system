# Internal Design System

SubHub's internal design system: the SubHub components, icon library and rules, with its own palette (desaturated teal, near-black night greys and sand) and Fraunces headlines. **This repo is the source of truth for it.**

Owner: Nathan Maus (Principal UX Designer). Questions, missing icons, or anything that seems wrong: ask Nathan.

## Use it in a prototype

This repo is private, so prototypes copy the files rather than linking to them. `tokens.css` also loads the fonts (Fraunces and Inter). Copy these into your project, keeping the folder structure:

```
tokens.css
components/bundle.js
```

That is all. Every icon and the logo lockups are built into `bundle.js`, so there is no `icons/` or `assets/` folder to copy and nothing to point at.

Then load them:

```html
<link rel="stylesheet" href="tokens.css">

<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>

<div id="root"></div>
<script>
  const DS = window.InternalDesignSystem;
  const e = React.createElement;
  ReactDOM.createRoot(document.getElementById("root")).render(
    e(DS.Button, { variant: "primary", icon: "plus" }, "Create quote")
  );
</script>
```

Icons and logos are embedded in `bundle.js`. `DS.Icon.names` lists every icon name.

Dark mode: put `data-theme="dark"` on `<html>`. Nothing else changes.

Using only CSS? `tokens.css` on its own gives you every colour, spacing, radius, shadow and type token as a CSS variable, for example `var(--action-primary)` or `var(--space-4)`.

Open `index.html` in this repo for a live page built exactly this way.

## Access

The repo is private. Engineers are added as collaborators. AI agents (Claude, Grok and others) read it through their GitHub connection; point them at `AGENTS.md` first.

## What is here

| Path | What it is |
| --- | --- |
| `tokens.json` | Every token, both themes. The source the CSS is generated from. |
| `tokens.css` | The same tokens as CSS variables. Link this. |
| `components/bundle.js` | All components in one script. Exposes `window.InternalDesignSystem`. |
| `components/<Name>/` | Each component's README (how and when to use it), types (`.d.ts`) and a preview page. |
| `components/core`, `forms`, `data`, … | Component source. |
| `icons/` | The SubHub Icon Library, 272 icons as 24px SVGs exported from Figma. The source for the embedded copy in `bundle.js`; `icons/index.json` lists them. |
| `assets/` | Logo files. The source for the embedded copy in `bundle.js`. |
| `scripts/build-assets.mjs` | Embeds `icons/` and the logos into `bundle.js`. Run it after any icon or logo change. |
| `scripts/build-colour-tokens.mjs` | Rebuilds the colours in `tokens.css` from `tokens.json`. Run it after any colour change; add `--check` to only test. |
| `guidelines/` | Specimen cards for colour, type, spacing, radius, motion and motifs. |
| `GUIDE.md` | The long-form system guide: voice, visual foundations, iconography. Read this before designing. |
| `motion.md` | Motion specs for Tooltip, Toast and menus. |
| `ui_kits/` | Example marketing and platform screens built from the system. |
| `AGENTS.md` | Rules for AI tools building with this system. |

## The rules that are easiest to break

- **Icons come only from the SubHub Icon Library.** Never draw one, never paste one in from another set. If the icon you need is missing, use `placeholder` and ask Nathan to draw it in Figma.
- **Everything sits on a 4px grid**: spacing, radii, icon sizes, component sizes.
- **Smallest screen is 393px wide.** Touch targets are at least 44px.
- **Contrast**: 4.5:1 for primary and secondary text, 3:1 for tertiary labels.
- **Type uses the tokens**: `font: var(--type-h1)`, `var(--type-body)` and so on. Sizes are on the 4px grid (40, 28, 24, 20, 16, 14, 12); never type a size by hand.
- **Button labels are sentence case, in Inter Medium** at 12, 14 or 16px: "Create quote", not "Create Quote".
- **No em dashes in product copy.**
- **Sand fills take a dark teal label** (`text-on-brand`), never white. Teal ink fills take a light label (`text-on-ink`).
- **Fraunces is for headlines only.** Body, buttons, labels and data are Inter.

## Changing the system

Open a pull request. Token changes go in `tokens.json`; `tokens.css` is generated from it, so keep the two in step. New icons are drawn in the Figma icon library first and synced here, never added by hand. After any change to `icons/` or `assets/`, run `node scripts/build-assets.mjs` so `bundle.js` carries it.

## How this stays in sync

- **Figma icon library → this repo.** Icons are drawn in Figma and exported into `icons/`. Then run `node scripts/build-assets.mjs`, which embeds every icon and logo into `components/bundle.js` (plus `components/core/icon-data.js`, `components/brand/logo-data.js` and `icons/index.json`). `node scripts/build-assets.mjs --check` fails if the bundle is out of date. The weekly Figma sync rebundles the Claude design system the same way and sends the changed SVGs for this repo.
- **Icons are shared with the SubHub Design System.** They are drawn once in the SubHub Icon Library in Figma; sync new ones into both repos.
- **Components are forked from the SubHub Design System.** A fix to a component there usually applies here too.
