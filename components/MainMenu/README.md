# MainMenu

The account menu that opens from the avatar in the top bar: the person's profile, workspace, appearance and sign-out in one panel. It is the main menu, not a dropdown menu — a dropdown chooses a value or an action for the thing it sits on; this holds the person's own settings.

## Rows

- **`feature`** — one highlighted row at the top, with a Switch, a short label, an optional `New` badge and one line of description. Use it to introduce an opt-in (the new interface toggle). One per menu; remove it once the feature is no longer new.
- **`value`** — a setting with its current value on the right and a chevron (`Theme · System`).
- **`link`** — icon and label; `sublabel` adds a quiet second line (`Sign out` / `as SubcontractorHub Demo`).
- **`divider`** — a hairline between groups. Group as: feature and appearance, then account and workspace links, then sign-out last.

## Geometry

400px wide (capped at the viewport minus 32px, so 361px at 393px), 8px inset, rows 48px tall with 16px side padding and a 12px icon gap, 24px icons, 4px between rows. White card, 1px `border-subtle`, `radius-card`, `shadow-overlay`. Hover fills a row with `surface-sunken`; focus shows `ring-focus`.

## Motion

The standard menu open (see the Motion section): the panel fades in, drops 8px and grows from 98% over 200ms on `--ease-menu`; rows follow 20ms apart, starting 60ms after the panel. Closing is a 150ms fade. No bounce. Reduced motion: appears instantly. `loop` replays it for design review only.

## Rules

- Anchor the panel's top-right corner 8px below the avatar, right-aligned to it.
- Labels are sentence case and name a place, not an action verb: "Your profile", "Billing", "Sign out".
- Sign-out is always last and always says whose session ends.
- Icon names come from the SubHub icon library; a name it doesn't have renders an empty 24px slot, so the label still aligns.

## The consumer provides

The rows and their handlers or links, the open/closed state and positioning, focus management (focus the first row on open, return focus to the avatar on close), and closing on Escape or an outside click.
