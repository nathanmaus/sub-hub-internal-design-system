# HeroBanner

The brand's section header, in three directions. Designed at 1600 × 600 and scaled by the `width` and `height` props — every inner measure is derived from that ratio, so the banner is never re-laid-out by hand.

## Directions

**`blueprint`** (default) — `teal-950` under a 50px minor and 250px major grid, a sand radial glow behind the isometric site drawing and a sand glow at the lower right. The technical voice: product, engineering, platform.

**`editorial`** — `teal-025` with two sand rules down the left edge, skewed slabs on the right and the AI node mesh. The calm voice: marketing sections, docs, pricing.

**`amber`** (the prop keeps its SubHub name; here it is a sand ground) — `sand-400` ground with a `teal-900` skewed field and the braced tower. The loud voice: one per campaign, never two on a page.

## Rules

- `title` is one or two words. The hero size is 132px scaled, so a sentence collapses into a wall.
- Type never scales below legibility: the title floors at 34px and the eyebrow at 10px however narrow the banner gets.
- The eyebrow is the sand-bordered AI-adjacent pill on blueprint, a plain sand eyebrow on editorial, and a teal chip on sand. Do not swap them.
- The `rail` is for 3–5 short uppercase labels. It is decoration, not navigation — never put links in it.
- `children` replaces the built-in artwork. Pass artwork, not text.
- The logo variant follows the ground automatically: `light` on blueprint, `dark` on editorial, `amber` on sand.
- Subtitle colour is `teal-400` on blueprint and `teal-700` on editorial, both above 4.5:1 on their grounds. The sand variant's subtitle is a fixed warm teal that clears 4.5:1 on sand-400 — do not substitute `text-body`.

## At 393px

Pass `width={393}` and a height around 280. The title lands near its 34px floor and the rail wraps to two lines. Below 480px, drop the rail entirely rather than letting it wrap three times.

## The consumer provides

Title, subtitle, eyebrow, rail labels, the chosen variant, and the measured width — the banner does not observe its own container.
