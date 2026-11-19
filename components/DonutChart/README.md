# DonutChart

Parts of one whole, when the share matters more than the exact amount: lead sources, job mix.

## Anatomy

A 160px ring (24px thick, both props) with a 2px surface gap between segments. An optional value and label sit in the middle. The legend lists each part with its value and share and wraps below the ring on narrow screens.

## Colour

The first three parts take chart-1, chart-2 and chart-3. Everything after that folds into one "Other" segment in `chart-other`. Order your data largest first so the folded parts are the small ones.

## Interaction

Hovering a segment or its legend row dims the rest and shows the value and share.

## Rules

- Only for parts that add up to a meaningful whole. Comparing amounts across categories is a BarChart.
- Never more than four visible segments. If the parts are close in size, use a BarChart: people judge length better than angle.
- For progress toward one target, use Progress, not a two-part donut.
