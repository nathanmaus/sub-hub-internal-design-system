# StatCard

One number with its label, an optional change and a line of context. The unit a dashboard is built from.

## Anatomy

Eyebrow label (12px, 0.16em tracking, `text-subtle`) → value (30px bold, tabular figures) → delta → footnote. Padding is `18px 20px`, tighter than a default Card, so a row of four fits a 1240px container.

## Rules

- The value is set in tabular figures so a refreshing number does not shift the layout.
- `deltaDirection` controls colour, not the arrow's meaning. A falling cost is good news — pass `up` for green when that is what the number means, and make the footnote say so.
- Green and red are reinforced by the arrow glyph, so the direction survives colour blindness and greyscale.
- The footnote carries the period or denominator. A number with no period is unreadable: "$482,100" means nothing without "across 38 open quotes".
- No delta is better than a meaningless one. Drop it for counts that have no comparison period.

## At 393px

One per row. Four stat cards stacked is fine; four squeezed into a 393px grid is not — the 30px value would have to shrink below its own scale step.

## The consumer provides

Formatted strings for value and delta, including currency and separators. StatCard does no number formatting.
