# Sparkline

A word-sized trend: a 32px tall line that shows direction, not values. StatCard draws one when you pass `trend`.

## Anatomy

A 2px line in `chart-other` (the de-emphasis grey) with the latest point marked by an 8px dot in `chart-1` with a 2px surface ring. No axes, no grid.

## Interaction

Hover moves the dot to the nearest point and shows its value (and its label, from `labels`).

## Rules

- About 7 to 30 points. The y range fits the data, so a sparkline shows shape, never size: always pair it with the real number.
- Never colour the line green or red for "good" or "bad". The delta beside the number already says that.
