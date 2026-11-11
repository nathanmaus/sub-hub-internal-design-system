# Icon

A single glyph from the SubHub Icon Library. Next to a label it takes the label's colour; on its own
it uses the `icon-default` token.

The component renders the glyph as a CSS mask over `backgroundColor`. That is what makes
colour inheritance work: the SVG supplies the shape, the parent supplies the colour. The
files live in this artifact's own asset store, so no external CDN is involved.

## Colour

Two cases, one rule: **an icon with a label matches the label; an icon on its own uses `icon-default`.**

- **With a label** (inside a Button, Badge, Toast or menu row, or next to a line of text): the icon uses
  `currentColor`, so it is always the colour of the words beside it. Every component in this system
  already does this. In your own markup, pass `color="currentColor"`.
- **On its own** (a bare `<Icon>`, or an SVG file used directly): it falls back to `icon-default`,
  `teal-900` in light, `teal-050` in dark.

Pass any other token when a component calls for it, for example `text-subtle` for the leading icon in
an input.

## The rule

**Every icon this component can render was drawn in the SubHub Icon Library in Figma.**
Do not hand-author an icon, paste one in from another set, or let a model draw one — not
as a placeholder, not "just for the mockup". The library carries all 271 icons, so an
icon you need almost certainly exists; check `assets/Icons/README.md` for the name list.

If it genuinely doesn't exist, pass the name you want anyway. The component renders the
`placeholder` glyph and logs a console warning naming the missing icon. Then **contact
Nathan Maus (nmaus@subcontractorhub.com)** to have it drawn; the weekly sync brings it
across once it's in Figma. A visible placeholder is the correct, intended outcome — it is
a gap with a name on it, which is far safer than a hand-drawn stand-in that looks finished.

## Names

Pass a library name — `sparkle`, `email`, `trend-up`, `solar`, `trash`, `calendar`. The
component also accepts the legacy Lucide slugs the system was originally built on and maps
them across, so `sparkles`, `mail`, `trending-up` still resolve. Prefer the library name in
new work; the full map is in `assets/Icons/README.md`.

An unknown name never falls back to an external set and never renders nothing.

## Sizes

13px inside a Badge · 14px beside a delta · 15 / 17 / 19px inside `sm` / `md` / `lg`
Buttons · 17px as a field affix · 18px default · 20px for standalone marks. Keep icon size
within 2px of the text size it sits beside.

The library draws every icon at six sizes (16, 24, 32, 40, 48, 56); the system uses the
24px variant and scales it with CSS. Below about 16px the filled shapes start to close up —
proof anything smaller at true size before shipping it.

## Rules

- Icons are decorative. Every icon needs a text label nearby or an `aria-label` on its
  control; the component itself renders `aria-hidden`.
- Never recolour an icon away from its text. The one exception is the sand AI mark
  (`sparkle`) on an teal ground.
- Do not scale a 24px glyph past 32px — use the larger variant from the library instead.
- The graded `signal-1…4` and `wifi-1…3` glyphs are two-tone and collapse to a single
  silhouette through the mask. Don't use them to show a level until they're redrawn.

## The consumer provides

The icon name and, where the icon stands alone, the accessible label on the wrapping
control.

> Source of truth is the SubHub Icon Library Figma file. Icons are never edited here.
