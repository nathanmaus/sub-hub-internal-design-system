# LineChart

Lines for change over time: monthly revenue, close rate by week.

## Anatomy

2px lines with round joins on one y axis from zero, with a 1px recessive grid. The latest point of each series carries an 8px marker with a 2px surface ring. A single series gets a 10% area wash (`area` overrides). A legend with line swatches sits above when there are two or more series.

## Colour

Series take chart-1 teal, chart-2 clay, chart-3 violet, then chart-other grey, in that order and never cycled. A fourth series does not get a new hue: fold it into "Other" (`chart-other`), split the chart, or filter. Text (values, labels, legends) always uses text tokens, never a series colour. The palette was run through the colour-blind validator for both themes against the card surface.

## Interaction

A crosshair follows the pointer to the nearest point and the tooltip lists every series at that point. Arrow keys step through points when the chart has focus.

## Rules

- Time runs left to right with evenly spaced points. Irregular dates need real spacing, which this component does not do.
- Never put two different measures on one chart with two axes. Use two cards.
- Comparing to a prior period? Make the prior period the second series ("Last year"), not a different colour of the same line.
