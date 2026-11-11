# Instructions for AI agents

You are building with SubHub's Internal Design System. Follow these rules exactly. When a rule and a request conflict, follow the rule and say so.

## Use what exists

1. Use the components in `components/bundle.js` (namespace `window.InternalDesignSystem`) before writing your own. Read `components/<Name>/README.md` before using a component.
2. Use tokens from `tokens.css` for every colour, space, radius, shadow and type style. Never hardcode a hex value or a pixel size that a token already covers.
3. Read `GUIDE.md` for voice, layout and visual rules before designing a screen.

## Icons

4. Every icon must come from `icons/` (the SubHub Icon Library). Use the `Icon` component with the icon's name; the full list is in `icons/index.json`. An icon beside a label takes `color="currentColor"` so it matches the text; a standalone icon uses the default, `var(--icon-default)`.
5. Never draw an icon, generate one, or take one from another set (Lucide, Heroicons, Material, Font Awesome, emoji or anything else), even if it looks close.
6. If the icon you need does not exist, use `placeholder` and tell the person to contact Nathan Maus to have it drawn in Figma. Do not substitute a similar-looking icon.

## Layout and accessibility

7. Everything is a multiple of 4px: spacing, radii, icon sizes, component sizes.
8. Design for 393px wide first. Touch targets are at least 44px; the visible control can be smaller if the hit area is 44px.
9. Text contrast is at least 4.5:1 for primary and secondary content, 3:1 for tertiary labels such as eyebrows.
10. Support both themes. Use semantic tokens (`text-strong`, `surface-card`, `action-primary`), not ramp colours, so `data-theme="dark"` works without extra code.
11. A label on a sand fill uses `text-on-brand` (dark teal, never white). A label on a teal ink fill uses `text-on-ink`. `text-inverse` is only for text on an inverse surface and flips in dark mode.
12. Fraunces (`--font-display`) is for headlines only. Everything else is Inter.

## Copy

13. Sentence case everywhere, including button labels: "Create quote".
14. No em dashes in product copy.
15. Sand is the brand colour. Beyond the primary action, zero or a couple of sand moments per screen.

## Motion

16. Springs and bounces belong only to the components that specify them (Tooltip, Toast). Everything else uses the duration curves in `motion.md`.

## Prototypes

17. Format text fields for their purpose: phone, card number, expiry, tax ID, postcode and so on.
18. Every dropdown shows a down caret icon (`chevron-down`).
