# UI kit · SubcontractorHub platform

A click-through recreation of the SubHub operator app, assembled entirely from this design system's primitives and motifs.

Open `index.html`. Flow: **sign in → Pipeline → New quote → EasyQuote → Projects → Invoices.**

| File | Surface |
| --- | --- |
| `app.jsx` | Router state, sign-in screen, New-quote dialog, toast |
| `shell.jsx` | Dark sidebar (244px), white topbar (60px), page body, section rule |
| `screen-pipeline.jsx` | Sales Velocity: KPI row, skewed stage bars, AI next-best-actions, opportunity table |
| `screen-easyquote.jsx` | EasyQuote: system form + line items, blueprint proposal preview, financing table |
| `screen-projects.jsx` | Project Management: stage board, week schedule, crew table |
| `screen-invoices.jsx` | Payments: collections KPIs, invoice table, aging panel on an inverse card |
| `screen-placeholder.jsx` | Ambassador / Reports / Settings — deliberately blank, see below |

## Honesty notes

- **No product screenshots or product code were supplied** — only the design-system source (tokens, motifs, 15 primitives, three logo lockups). These screens are therefore faithful *compositions of the documented system*, not pixel recreations of shipped views. Treat layout as a proposal and the styling as canon.
- Module names, trade language and numbers come from SubcontractorHub's public marketing copy (EasyQuote, Sales Velocity, Project Management, Ambassador; GoodLeap / Sungage / LightReach financing; the 30% ITC).
- Ambassador, Reports and Settings render an explicit "not supplied" card rather than an invented layout.
- Interactive fakery only: no real data, routing or validation.
