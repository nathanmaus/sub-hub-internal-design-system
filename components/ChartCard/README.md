# ChartCard

The card every chart sits in: a title, an optional subtitle and headline value, and a Chart / Table switch that swaps the plot for the same numbers as a table.

## Anatomy

Card (20px padding, 16px gap) → header (16px semibold title, 14px subtitle, optional 24px mono headline value) with the switch on the right → the chart, or the table.

## Rules

- Pass `table` ({ columns, rows }) on every chart that matters. The table view is the accessible version of the chart and the only way to read exact values on a phone.
- The switch options are 32px pills inside 44px touch targets.
- One chart per card. Two measures on different scales are two cards, never a dual axis.
- `action` takes one extra control (a Select for the period, an IconButton for more). Page-wide filters belong in one row above all the cards, not in each card.

## At 393px

The header wraps: title first, switch below it. Charts fill the card width.
