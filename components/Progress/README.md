# Progress

Progress toward one target: revenue against quota, installs scheduled.

## Anatomy

`variant="bar"` (default): label and value on one line, an 8px track below with a fully rounded fill. `variant="ring"`: a 64px ring with an 8px stroke and the value in the middle, label beside it.

## Rules

- One value, one colour: the fill uses `track-fill`, falling back to chart-1, on `track-default`.
- `valueLabel` replaces the percentage with words that mean something ("$742K of $1M").
- It exposes `role="progressbar"` with its min, max and current value.
- Status (behind, at risk) is a StatusPill next to it, not a red fill.
