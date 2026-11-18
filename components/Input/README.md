# Input

A single-line text control, 44px tall, with an optional leading icon and a trailing suffix.

## States

Resting (`border-default`) → focus (`border-brand` plus the `ring-focus` shadow) → invalid (`red-600` border) → disabled (`teal-100` fill). Focus and invalid can be true at once; invalid keeps the red border and still shows the ring.

## Rules

- 44px is the field height and the minimum touch target. Do not shrink it for a dense table — use an inline edit pattern instead.
- The leading icon is `text-subtle` at 17px and is decorative; it never replaces the label.
- The suffix carries units and counters (`USD`, `kWh`, a character count) in tabular figures so it does not jitter as the value changes.
- A placeholder is a hint about format, never the label.
- `invalid` only styles the border. The message lives in the Field, and the control needs `aria-invalid` and `aria-describedby` pointing at it.

## At 393px

Full width, 16px side gutters. Keep the font at 15px or larger — iOS zooms the viewport on focus below 16px, and 15px plus the 44px height is the tested floor.

## The consumer provides

Value, change handler, `type`, `id`, autocomplete hints and validation.
