# Button

The one action control: five variants, three heights, optional leading or trailing icon.

## Variants

| Variant | Use |
| --- | --- |
| `primary` | The single most important action in a view. One per screen region. Sand fill with a teal label (`text-on-brand`), never white. |
| `secondary` | Companion actions beside a primary. Card fill, `border-default` edge. |
| `dark` | A strong action that should not be sand: teal ink fill with a light label (`text-on-ink`). |
| `accent` | AI actions. Same sand as primary in this system, with the same teal label. |
| `ghost` | Low-weight actions: Cancel, Back, inline links in a toolbar. |

## Type

Every variant's label is Inter (`font-sans`), semibold. Fraunces is for headlines only, not controls.

## Sizes and touch targets

`sm` is 34px and is pointer-only — never use it for a primary action on a phone. `md` (44px) is the default and the minimum touch target at 393px. `lg` (52px) is for hero and full-width mobile calls to action. Below 480px, give the primary action `fullWidth`.

## Rules

- Label with a verb and its object: "Create quote", not "Submit".
- Labels are sentence case. Capitalize the first word and any proper noun, nothing else: "Create quote", not "Create Quote". This holds at every size and variant, and in `IconButton`'s tooltip and `aria-label` too.
- Icons sit at 15 / 17 / 19px for `sm` / `md` / `lg` and are decorative — the label carries the meaning.
- The gap between an icon and the label is `space-1` (4px) at every size — leading or trailing. It was 7 / 9 / 10px before and is now on the 4px grid.
- Disabled uses `action-disabled-bg` with `action-disabled-text`. That pair is deliberately below 4.5:1 so it reads as unavailable; never use it for live text.
- Labels on fills come from two tokens, both fixed across themes. A sand fill takes `text-on-brand`
  (teal-900, 7.2:1); white on sand is 1.9:1 and unreadable. A teal ink fill takes `text-on-ink`
  (teal-050). `primary`, `accent` and `IconButton`'s `solid` use `text-on-brand`; `dark` uses
  `text-on-ink`. Never use `text-inverse` on a fill: it is for inverse surfaces and flips with the theme.
- Focus is the `ring-focus` shadow. Do not remove it.

## The consumer provides

The click handler, the disabled and loading state, and form submission. The component owns only appearance and press feedback.
