# IconButton

A square button carrying an icon alone, for actions a label would crowd out: row overflow menus, toolbar tools, close and edit affordances.

## Variants and sizes

`quiet` (transparent until hover) for actions inside dense rows and tables. `outline` for toolbars where the target needs an edge. `solid` for a single prominent action, usually a floating add.

Boxes are 32 / 40 / 48px with 16 / 18 / 20px icons. **32px is below the 44px touch minimum** — use it only in pointer-first contexts such as a desktop table row, and step up to 48px for anything a thumb reaches at 393px.

## Rules

- `label` is required and becomes both `aria-label` and the tooltip. An icon button with no label is unusable on a screen reader.
- Never place two quiet icon buttons closer than `space-2`; at 32px they merge into one target.
- Destructive actions belong behind an overflow menu, not a bare trash icon in a row.

## The consumer provides

The handler, the tooltip copy, and any confirmation step for destructive actions.
