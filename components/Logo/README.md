# Logo

The SubHub lockup, recoloured for this system: the SubcontractorHub mark (two skewed slabs, shape unchanged) beside an Inter SemiBold "SubHub" wordmark with "Sub" and "Hub" in two tones. Three ground-specific files, each an SVG with a PNG fallback beside it (`assets/logo-*.svg`, `assets/logo-*.png`, 120px tall). Never redraw, recolour or stretch it.

## Which file

| Variant | File | Ground | Colours |
| --- | --- | --- | --- |
| `dark` | `logo-dark` | `surface-card`, `teal-025`, `teal-050`, `teal-100` — any light surface | Slab and "Sub" `teal-900`; slab and "Hub" `sand-600` |
| `light` | `logo-light` | `teal-800`, `teal-900`, `teal-950` — any dark surface | Slab `teal-300`; "Sub" `teal-050`; slab and "Hub" `sand-400` |
| `sand` (alias `amber`) | `logo-on-amber` | `sand-400` only | Slab `teal-700`; slab and wordmark `teal-900` |

`sand-600`, not `sand-400`, carries "Hub" on light grounds: `sand-400` on white is 1.9:1. The file is still called `logo-on-amber` so existing references keep working.

## Rules

- Set height, never width; the component keeps the ratio with `width: auto`.
- Minimum height is 16px in a banner rail and 24px in page chrome. Below 16px the wordmark closes up.
- Clear space on every side is at least the wordmark's cap height. In practice: no other element within 16px at the 24px size.
- Never place the lockup on a photograph, a gradient, or a ground outside the table above. If a surface is not on the list, put the logo on a solid plate.
- No effects of any kind — no shadow, outline, rotation, or single-colour knockout.
- `alt` is "SubHub". In a page that already says the name in a heading, pass `alt=""` instead so it is not read twice.

## The consumer provides

The variant for its ground, the height, and the `assetPath` when the lockup files are served from somewhere other than `../../assets/`.
