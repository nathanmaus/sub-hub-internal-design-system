# Card

The container every grouped block sits in. Four tones, one padding token, an optional interactive lift.

## Tones

`default` — white on the teal-100 page, the workhorse. `sunken` — `teal-025`, for a well **inside** another surface; never on the page ground, where it nearly disappears. `inverse` — `teal-950`, for technical and blueprint panels. `brand` — `sand-100`, for one highlighted item in a set.

## Rules

- Padding defaults to `card-pad` (24px). Step to 16px below 480px, and to `18px 20px` only for the dense StatCard. Keep every value on the 4px grid.
- `interactive` adds hover lift and `shadow-md`. Set it only when the whole card is a link — if the card holds its own buttons, the lift is a lie.
- An interactive card needs a real focusable element inside it, not just the hover. Wrap the title in the link and let the card follow.
- One brand card per set. Two competing highlights highlight nothing.
- Nest at most one level. A sunken card inside a default card is the limit.

## At 393px

Cards go full width at 16px gutters and stack. The grid above collapses at a 240px minimum column.

## The consumer provides

The content, the link or handler for an interactive card, and the heading level — Card renders no heading of its own.
