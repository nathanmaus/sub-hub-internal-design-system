# Tooltip

A small surface that points at the element it explains. One variant so far: **announcement**.

## Announcement

An unprompted tooltip that introduces something new — a feature, a setting, a change — and points at where it lives. Title, one or two sentences of body, and up to two actions: a primary that does the thing ("Let's try it") and a secondary that defers it ("Not now").

- Show it once per person per announcement, and never more than one on screen.
- The title says what's new in a few words; the body says what changes and that it's reversible when it is.
- Point the arrow at the control that holds the feature, so the person learns where to find it again.

## Geometry

320px wide (capped at the viewport minus 32px), 24px padding, white card with a 1px `border-subtle` edge, `radius-card` and `shadow-overlay`. A 16px arrow sits on the edge facing the trigger; `arrowAlign` and `arrowOffset` place it. Title 20/24 Inter semibold, body 16/24, 8px between them, 16px above the actions, 12px between buttons. Actions are standard `Button`s at the default 44px height.

## Motion

The tooltip spring (see the Motion section): it starts 32px back toward its trigger at 92% size and springs into place — stiffness 380, damping 19, mass 1, settling in about 450ms with a ~5.5px overshoot — while fading in over the first 150ms. It grows from the arrow tip. An announcement waits 600ms after the page loads (`delay`); use `delay={0}` when the person triggered it. Closing is a 150ms fade. Reduced motion: appears in place. `loop` replays it for design review only.

Springs and bounces are reserved for this component and the ones the Motion section names — today, Tooltip and Toast, which share this spring. Don't borrow this entrance for any other surface.

## Layering

Render it beneath the container its trigger lives in (the top bar, a toolbar) so it emerges from behind that edge rather than over it.

## The consumer provides

Positioning against the trigger, when to show it and the once-only rule, the action handlers, and focus: move focus to the tooltip when it appears and back to the trigger when it closes. Escape calls `onDismiss`.
