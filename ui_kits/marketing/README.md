# UI kit · SubcontractorHub marketing site

A click-through recreation of the public site, built from this design system's primitives, motifs and HeroBanner variants.

Open `index.html`. Nav switches between three pages: **Platform → EasyQuote → Pricing.**

| File | Surface |
| --- | --- |
| `site-chrome.jsx` | Sticky translucent header, teal footer, `Band` + `Kicker` section scaffolding |
| `page-home.jsx` | Blueprint hero, trust strip, module grid, dark EasyQuote feature band, stats, testimonials, sand CTA |
| `page-easyquote.jsx` | Sand hero, how-it-works list, live estimate card with trade tabs, lender table |
| `page-pricing.jsx` | Editorial hero, four module plans, "every plan includes" table |
| `site.jsx` | Page state + mount |

## Honesty notes

- No marketing-site code or Figma file was supplied. Layout is composed from the design system's documented motifs (the three HeroBanner directions, skew slabs, blueprint grid) — the *styling* is canon, the *page composition* is a proposal.
- Copy is drawn from SubcontractorHub's public site and blog: the platform positioning, module names, the four lenders, the 30% ITC framing, published module pricing, and quoted customer testimonials. Pricing carries a "confirm with the team" note.
- The site's real Lottie animations, imagery and photography weren't supplied — those slots are line-art motifs from the system instead. Send real assets and they should replace the motifs.
