# FunnelChart

Ranked stages from first contact to signed: how many made it through each step.

## Anatomy

One row per stage: name, count and the share of the previous stage on a 20px line, then a 24px bar scaled to the largest stage on a sunken track, square at the start and 4px rounded at the end. 12px between rows.

## Colour

An ordinal one-hue ramp (`chart-seq-1` to `chart-seq-4`): teal-900 down to teal-300 (light) and teal-050 to teal-400 (dark). The first stage carries the most contrast and later stages fade, so order reads without a legend. A fifth stage and beyond reuse step 4.

## Interaction

Hover or focus a stage to dim the others and show its count, its share of the previous stage and its share of the first.

## Rules

- Stages are in process order and each one is a subset of the one before.
- Labels sit above the bars, so long stage names still fit at 393px.
