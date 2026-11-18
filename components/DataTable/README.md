# DataTable

A real `<table>` in a card shell: sunken header row, hairline rules, 4px-grid padding.

## Columns

Each column takes `key`, `label` and optionally `align`, `width`, `mono`, `strong` and a `render` function. `mono` switches the cell to tabular figures — set it on every numeric column or the digits will not line up. `strong` promotes the identifying column to `text-strong` semibold; use it once per table.

## Rules

- Numbers right-align, text left-aligns, and the header follows the cell. A right-aligned number under a left-aligned header reads as a mistake.
- Row padding is 16px, `dense` drops it to 12px. Both are on the grid; nothing between them.
- Header labels are 12px uppercase at 0.16em on `text-subtle`. That is below 4.5:1 at small sizes by design for a non-essential label — keep the information in the cells, never only in the header.
- Status belongs in a cell as a StatusPill, not as a tinted row. A coloured row background fails on print and is unreadable to anyone scanning the identifying column.
- `render` receives the whole row, so a cell can hold a pill, a link or an IconButton.

## At 393px

A four-column table does not fit 393px. Either let the wrapper scroll horizontally with the identifying column pinned, or swap the table for stacked Cards below 600px. Do not shrink the font to make it fit.

## The consumer provides

Rows with stable `id`s, column definitions, sorting, pagination and empty state. DataTable renders what it is given, in the order it is given.
