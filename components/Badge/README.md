# Badge

A small pill that labels the thing it sits on — a category, a plan tier, an AI marker. Not a status: anything that changes as work moves through a pipeline is a **StatusPill**.

## Tones

`neutral` for categories · `brand` for plan and tier labels · `accent` for one highlight per view · `ai` and `ai-dark` for the AI marker on light and on teal · `inverse` for teal-950 panels.

## The AI marker

AI is sand on teal, or sand-tinted on light. It never gets a hue of its own — a purple or teal "AI" badge is off-brand. On dark, `ai-dark` adds a 45%% sand border so the badge reads at low fill opacity.

## Rules

- One or two words. A badge that wraps should be body text.
- `uppercase` switches to the 12px eyebrow style with 0.16em tracking — use it for taxonomy labels, not for names.
- `accent` and `ai` both sit on `sand-100` with `sand-700` text. Sand-500 text on white fails contrast; do not substitute it.
- At most one accent badge in a row, or the emphasis is spent.

## The consumer provides

The label text and the tone. Badges are never interactive — if it can be clicked or dismissed, it is a chip, not a badge.
