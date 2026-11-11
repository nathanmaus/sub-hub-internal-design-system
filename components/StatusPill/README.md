# StatusPill

Where a record sits in its lifecycle: `draft`, `review`, `pending`, `approved`, `paid`, `overdue`.

## Rules

- The six states are the whole vocabulary. A new state needs a design decision, not a new colour — adding one silently falls back to `draft`.
- Every pill carries a dot as well as a fill, so the state survives greyscale printing and the common forms of colour blindness. Keep `showDot` on unless the column is already labelled.
- `approved` and `paid` share green; `pending` shares the warning sand. That is intentional — a reader scans for "is this money settled", not for six distinct hues.
- Text is 14px semibold at 4.5:1 or better on its own fill in every state.
- Pills are read-only. A state the user can change is a Select, not a pill.

## The consumer provides

The state value and the visible label. The label is free text, so "Awaiting sign-off" can map to `pending` where the product's language differs.
