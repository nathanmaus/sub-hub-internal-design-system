# Field

The label, hint and error wrapper every form control sits inside. Field owns the vertical rhythm of a form row; the control owns only itself.

## Anatomy

Label → control → hint **or** error, stacked on an 8px gap. Hint and error occupy the same slot: when an error is present the hint is replaced, never stacked below it, so a row never changes height twice.

## Rules

- Every control gets a Field, even when the label is visually hidden. A bare Input with a placeholder as its only label is not labelled.
- `htmlFor` must match the control's `id` or the label does not move focus.
- Required marks the label with a red asterisk. Mark the few optional fields instead when most of a form is required.
- Error text names the fix ("Pick a date after the permit approval"), not the failure ("Invalid date").
- Error text is `status-danger-text` on the page ground at 4.5:1. Colour never carries the error alone — the message does.

## At 393px

Fields go full width and stack. Two fields share a row only above 600px.

## The consumer provides

The label, hint and error strings, validation timing, and the `id` wiring.
