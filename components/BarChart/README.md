# BarChart

Vertical bars for comparing amounts across a handful of categories: revenue by quarter, jobs by trade.

## Anatomy

One y axis from zero with four rounded ticks and a 1px recessive grid. Bars are at most 24px wide with a 4px rounded data end and a square baseline, 2px apart inside a group. Category labels thin themselves out so they never collide. A legend sits above when there are two or more series.

## Colour

Series take chart-1 teal, chart-2 clay, chart-3 violet, then chart-other grey, in that order and never cycled. A fourth series does not get a new hue: fold it into "Other" (`chart-other`), split the chart, or filter. Text (values, labels, legends) always uses text tokens, never a series colour. The palette was run through the colour-blind validator for both themes against the card surface.

## Interaction

Hovering a category shades its band and shows a tooltip with every series' value. The chart is focusable: arrow keys step through categories, Escape clears.

## Rules

- The y axis always starts at zero. Bars that start elsewhere lie about size.
- Up to about 12 categories. More than that, use a LineChart (for time) or sort and keep the top items.
- Use `valueFormat` for the tooltip (full values) and `tickFormat` for the axis (compact values like $400K).

## The consumer provides

`data` as `[{ label, <seriesKey>: number }]` and `series` as `[{ key, label }]`.
