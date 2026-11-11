# Toast

A transient message about something that already happened. It appears at the bottom of the screen, holds for seven seconds and leaves on its own.

## Toast or something else

Toast reports the result of an action the person took: saved, sent, failed, undone. It never asks a question, never holds the only copy of information the person needs, and never carries the only route to a destructive undo past its seven seconds. If the person must read it, it is a dialog. If it explains a field, it is a `Field` hint. If it introduces a feature, it is a `Tooltip` announcement.

## Tones

| Tone | Use | Icon |
| --- | --- | --- |
| `success` | The action completed. "Quote sent to the homeowner." | `check-circle-filled` |
| `danger` | The action failed and nothing was saved. | `close-cancel-circle` |
| `warning` | It completed, with a caveat worth naming. | `warning-fill` |
| `info` | A neutral fact. The default. | `info` |

Tone drives the surface, the text colour and the icon together, off the same `status-*` tokens `StatusPill` uses. `danger` gets `role="alert"` and `aria-live="assertive"`; the rest are polite.

## Geometry

The toast hugs its contents, centred on the viewport, capped at the viewport minus 32px. 16px of padding on the leading edge, 12px on the other three so the dismiss target sits flush. 12px between the icon, the message and the action. `radius-control`, a 1px `border-subtle` edge and `shadow-overlay`, same shell language as `Tooltip`. The message is 16/24 Inter regular.

## Placement

16px above the bottom of the viewport, or 16px above whatever UI is pinned to the bottom — pass that height as `bottomUI` on `ToastStack`. At 393px the toast still hugs its text; with the 16px gutters it goes near full width for anything longer than a few words.

## Stacking

`ToastStack` renders at most three, stacked upward with an 8px gap, newest nearest the bottom edge. Each runs its own seven-second timer, so the oldest normally leaves first. A fourth toast drops the oldest immediately. If you are firing four toasts, the work is reporting itself too loudly — summarise instead.

## Motion

The tooltip spring, over 8px instead of 32px: it rises into place on stiffness 380, damping 19, mass 1 while fading in over the first 150ms, holds seven seconds, then fades out over 200ms without moving. No scale. At this travel the spring reads as a soft landing, not a bounce, which is the point: a toast should not pull the eye the way an announcement does. Full values in `motion.md`. Reduced motion fades in place and still holds seven seconds.

The seven seconds start when the entrance lands, and pause while the pointer is over the toast or anything inside it holds focus. Without that pause, an `actionLabel` is unreachable for anyone who reads slowly.

## Rules

- One sentence, sentence case, past tense, naming what happened: "Quote sent." Not "Success!"
- A toast is never the only place a failure is reported. Danger toasts mirror an error the person can find again.
- The dismiss button is a 16px glyph in a 44px hit area. Do not shrink the target to match the glyph.
- Don't stack a toast over a bottom sheet or an open menu; hold it until that surface closes.

## The consumer provides

When to fire, the message text, the queue and its identity (so the same event does not toast twice), the action handler, and removal from its own list when `onDismiss` fires.
