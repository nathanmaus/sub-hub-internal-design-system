# Motion: tooltips, toasts and menus

Two entrance animations are standard across the platform, built into the `Tooltip` and `MainMenu` components. Use them as written; don't invent per-feature variants. Values sit on the 4px grid, and every value below has a token in `tokens/motion.css`.

Springs and bounces belong only to the components that specify them — today, the Tooltip and the Toast, which share one spring. Don't apply them to other surfaces; where else they're used will be defined as the system grows. Everything else follows the house motion rules in the README.

## Tooltip

A tooltip comes out from behind the element it points at, drops into place on a spring, overshoots slightly and settles. Noticeable, not playful.

| Property | Value | Token |
| --- | --- | --- |
| Motion type | Spring (not a duration curve) | |
| Stiffness · damping · mass | 380 · 19 · 1 | `--spring-tooltip` (sampled) |
| Settles in | ~450ms | `--duration-tooltip` |
| Start offset | 32px toward its anchor (up, for a tooltip below its trigger) | `--tooltip-offset` |
| Start scale | 92% | `--tooltip-scale-from` |
| Overshoot | ~5.5px past rest at ~185ms, then a sub-pixel settle | |
| Transform origin | The tip of the tooltip's arrow | |
| Opacity | 0 → 1, linear, over the first 150ms, separate from the spring | `--duration-tooltip-fade` |
| Layering | Beneath its trigger's container (the topbar, a toolbar), so it emerges from behind it | |
| Delay | 600ms after page load for an unprompted tooltip (an announcement); none when the person triggers it | |
| Exit | 150ms fade, no movement | `--duration-fast` |
| Reduced motion | Appears in place, no movement or scale | |

Enter the spring values directly in Figma's or ProtoPie's custom spring. CSS has no spring setting, so `--spring-tooltip` is the same spring sampled into a `linear()` easing, driving position and scale together:

```css
.tooltip {
  transform-origin: var(--arrow-x) 0; /* the arrow tip */
  animation:
    tooltip-move var(--duration-tooltip) var(--spring-tooltip) both,
    tooltip-fade var(--duration-tooltip-fade) linear both;
}
@keyframes tooltip-move {
  from { transform: translateY(calc(-1 * var(--tooltip-offset))) scale(var(--tooltip-scale-from)); }
  to   { transform: translateY(0) scale(1); }
}
@keyframes tooltip-fade { from { opacity: 0; } to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) { .tooltip { animation: none; } }
```

For a tooltip that opens above or beside its trigger, flip the offset direction; keep every other value.

## Toast

A toast slides up a short distance into its resting place on the tooltip spring, holds for seven
seconds, then fades out without moving. Same spring as the tooltip, a quarter of the travel.

| Property | Value | Token |
| --- | --- | --- |
| Resting position | 16px above the bottom of the viewport, or 16px above whatever UI is pinned to the bottom (a tab bar, an action bar, a sticky footer) | `--toast-inset` |
| Motion type | Spring, the tooltip's | `--spring-tooltip` (sampled) |
| Stiffness · damping · mass | 380 · 19 · 1 | |
| Settles in | ~450ms | `--duration-tooltip` |
| Start offset | 8px below its resting point | `--toast-offset` |
| Start scale | None. The toast does not scale; it only moves | |
| Overshoot | ~1.4px past rest at ~185ms, then a sub-pixel settle | |
| Opacity in | 0 → 1, linear, over the first 150ms, separate from the spring | `--duration-toast-fade` |
| Hold | 7s from the moment it lands | `--duration-toast` |
| Exit | 200ms fade, no movement | `--duration-toast-exit` |
| Reduced motion | Appears in place, holds 7s, fades out over 200ms | |

The spring is the tooltip's, unchanged, but its character is much quieter here: overshoot is a
proportion of travel, so 8px of movement overshoots by about 1.4px where the tooltip's 32px
overshoots by 5.5px. At this distance the spring reads as a soft landing rather than a bounce, and
most of the 450ms is the fade. That is the intended effect — a toast should not draw the eye the way
an announcement does.

```css
.toast {
  position: fixed;
  /* --toast-bottom-ui is the height of any bottom-pinned UI; 0 when there is none */
  bottom: calc(var(--toast-inset) + var(--toast-bottom-ui, 0px));
  animation:
    toast-move var(--duration-tooltip) var(--spring-tooltip) both,
    toast-fade var(--duration-toast-fade) linear both;
}
.toast[data-leaving] {
  animation: toast-out var(--duration-toast-exit) var(--ease-standard) both;
}
@keyframes toast-move {
  from { transform: translateY(var(--toast-offset)); }
  to   { transform: translateY(0); }
}
@keyframes toast-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes toast-out  { from { opacity: 1; } to { opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .toast { animation: toast-fade var(--duration-toast-fade) linear both; }
}
```

The seven-second hold is wall time the consumer owns, not a CSS animation: start it when the
entrance finishes, pause it while the pointer is over the toast or while it holds focus, and
restart it on leave. A toast carrying an action needs that pause or the action is unreachable for
anyone who reads slowly.


## Menu

The MainMenu (and any future menu) opens quickly and quietly: no bounce. The panel drops in, then its rows follow top to bottom.

| Property | Value | Token |
| --- | --- | --- |
| Panel duration | 200ms | `--duration-menu` |
| Curve | cubic-bezier(.2, 0, 0, 1) | `--ease-menu` |
| Panel start | Opacity 0, 8px toward its trigger, 98% scale | `--menu-offset`, `--menu-scale-from` |
| Transform origin | The corner nearest its trigger | |
| Rows | Each fades in and moves 4px over 200ms, same curve | `--menu-row-offset` |
| Row stagger | 20ms apart, first row 60ms after the panel starts | `--menu-row-stagger`, `--menu-row-delay` |
| Fully in | ~500ms for a 13-row menu; usable from the start | |
| Close | 150ms fade of the whole panel, no stagger, no movement | `--duration-menu-close` |
| Reduced motion | Appears instantly | |

```css
.menu {
  transform-origin: top right; /* nearest the trigger */
  animation: menu-in var(--duration-menu) var(--ease-menu) both;
}
.menu > * {
  animation: menu-row-in var(--duration-menu) var(--ease-menu) both;
  animation-delay: calc(var(--menu-row-delay) + var(--row-index) * var(--menu-row-stagger));
}
@keyframes menu-in {
  from { opacity: 0; transform: translateY(calc(-1 * var(--menu-offset))) scale(var(--menu-scale-from)); }
  to   { opacity: 1; transform: none; }
}
@keyframes menu-row-in {
  from { opacity: 0; transform: translateY(calc(-1 * var(--menu-row-offset))); }
  to   { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) { .menu, .menu > * { animation: none; } }
```
