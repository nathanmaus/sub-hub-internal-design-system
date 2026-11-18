import React from "react";
import { ICON_SVG } from "./icon-data";

/**
 * A single glyph from the SubHub Icon Library, rendered as a CSS mask so it
 * takes its colour from `color` (default `var(--icon-default)`; pass
 * "currentColor" beside a label).
 *
 * Every icon is embedded in icon-data.js, generated from icons/*.svg by
 * `node scripts/build-assets.mjs`. Nothing is fetched at runtime, so the
 * component works in any project without copying an icons folder.
 *
 * NEVER hand-author an icon here, paste one in from another set, or let a model
 * draw one. An unknown name renders the `placeholder` glyph and logs a warning.
 * If you need an icon the library does not have, contact Nathan Maus
 * (nmaus@subcontractorhub.com) to have it drawn in the SubHub Icon Library in
 * Figma; the weekly sync brings it across and rebundles.
 */

/** Legacy Lucide slugs the system was first built on, mapped to library names. */
export const ICON_ALIAS = {
  "alert-circle": "warning",
  "bar-chart-3": "bar-chart",
  "bell": "notification-bell",
  "circle-dollar-sign": "billing",
  "circle-help": "question",
  "file-check": "shield-check",
  "file-text": "documents",
  "mail": "email",
  "map-pin": "pin",
  "send": "navigation-arrow",
  "settings": "settings-gear",
  "sparkles": "sparkle",
  "trending-down": "trend-down",
  "trending-up": "trend-up",
  "wind": "hvac-air",
};

const ICON_MISSING = "placeholder";
const warned = new Set();
const uriCache = {};
const dataUri = (key) =>
  uriCache[key] || (uriCache[key] = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(ICON_SVG[key]));

function iconUrl(name) {
  const key = ICON_SVG[name] ? name : ICON_ALIAS[name];
  if (key && ICON_SVG[key]) return dataUri(key);
  if (!warned.has(name)) {
    warned.add(name);
    console.warn(
      `[SubHub Icon] "${name}" is not in the SubHub Icon Library, so the placeholder ` +
      `glyph is showing. Do not draw a replacement and do not paste in an icon from ` +
      `another set. Contact Nathan Maus (nmaus@subcontractorhub.com) to have ` +
      `"${name}" drawn in Figma, and the weekly sync will bring it across.`
    );
  }
  return dataUri(ICON_MISSING);
}

export function Icon({ name, size = 18, color = "var(--icon-default)", style, ...rest }) {
  const url = `url("${iconUrl(name)}")`;
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: size,
        height: size,
        flex: "0 0 auto",
        backgroundColor: color,
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        ...style,
      }}
      {...rest}
    />
  );
}

/** Every icon name in the library. */
Icon.names = Object.keys(ICON_SVG);
