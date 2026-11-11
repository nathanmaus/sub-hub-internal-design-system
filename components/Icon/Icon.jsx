/**
 * This file used to carry its own copy of the icon map. It had drifted badly:
 * 32 icons instead of 270, a duplicated `iconUrl`, and six aliases pointing at
 * stand-in glyphs that the library never contained — `hard-hat`, `hourglass`,
 * `kanban`, `layers`, `wallet` and `sun`. Those were retired from the canonical
 * map; this copy kept serving them.
 *
 * There is now one implementation and one generated map. Read them at:
 *   components/core/Icon.jsx        the component
 *   components/core/icon-blobs.js   the map, written by the weekly Figma sync
 *
 * Never reintroduce an icon map here. If you need an icon the library does not
 * have, contact Nathan Maus (nmaus@subcontractorhub.com) to have it drawn in the
 * SubHub Icon Library in Figma; the weekly sync brings it across. Do not draw a
 * replacement, and do not paste one in from another set.
 */
export { Icon } from "../core/Icon.jsx";
