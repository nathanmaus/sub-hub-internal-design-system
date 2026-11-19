# Scrollbar

An overlay scroll thumb for the page and every scrolling element. It is not a component you place: `bundle.js` installs it when it loads.

## Behaviour

- Invisible until something scrolls. It appears instantly when scrolling starts.
- Stays while scrolling continues. Once scrolling has stopped for 2000ms it fades out over 500ms.
- Thumb only, no track. 8px thick, fully rounded, 4px from the edge of the scroller, at least 32px long. Colour is `scrollbar-thumb`.
- Drawn on a fixed layer above the page, and the native scrollbars are hidden, so it never takes layout space and nothing shifts when it appears.
- Works vertically and horizontally. While it is visible it can be dragged.

## Rules

- Keep the browser's own scrollbar on an element by adding `data-native-scrollbar` to it.
- After content changes size without a scroll (an accordion opens while the thumb is showing), call `Scrollbars.refresh()`.
- The native scrollbars are hidden only while the script runs, so a page that loads only the stylesheet keeps normal scrollbars.
