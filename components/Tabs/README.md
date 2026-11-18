# Tabs

Peer views of the same data set. Switching a tab never changes what the page is about — only which slice is shown.

## Tabs or navigation

Tabs for filters over one collection (Open / In review / Approved). Sidebar navigation for different objects. If switching would change the page title, it is navigation.

## Anatomy

15px semibold labels on a 24px gap, over a 1px `border-subtle` track. The active tab is `text-strong` with a 2px `action-primary` underline drawn as an inset shadow, so the tab row never shifts when selection moves.

## Counts

Optional, in tabular figures, `teal-100` when inactive and `sand-100` when active. Omit the count when it would be unknown or always zero — a persistent "0" reads as broken.

## Rules

- Colour is not the only active signal: weight and the underline carry it too.
- Two to six tabs. Beyond that use a Select, which is also what the row should become below 600px.
- Each tab needs `role="tab"` and `aria-selected`; the panel needs `role="tabpanel"` and `aria-labelledby`. Arrow keys move between tabs, Tab moves out of the row.

## At 393px

The row scrolls horizontally with the scrollbar hidden, active tab scrolled into view. Never wrap tabs onto a second line — the underline stops reading as one track.

## The consumer provides

The tab list, the selected value for a controlled row, the change handler, and the panel content and its ARIA wiring.
