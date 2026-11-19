# Dashboard template

A starting point for a reporting page, built only from system components: a page header with one period filter, four StatCards with trends, a LineChart and a BarChart side by side, a FunnelChart beside a DonutChart and two Progress bars, then a DataTable.

## Layout

- Filters live in one row in the page header and apply to every card. Cards do not carry their own date pickers.
- Grids use `repeat(auto-fit, minmax(min(100%, N), 1fr))`, so the page reflows from four columns to one at 393px with no horizontal scroll. 16px gaps between cards, 24px between sections.
- Lead with the numbers (StatCards), then trends, then breakdowns, then the detail table.

## Rules

- Every chart card has a table view.
- Keep it to the questions the page answers. A chart nobody acts on is decoration.
