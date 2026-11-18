import React from "react";
import { LOGO_SRC } from "./logo-data";

const SRC = {
  light: "logo-light.svg",
  dark: "logo-dark.svg",
  sand: "logo-on-amber.svg",
  amber: "logo-on-amber.svg",
};

/** The SubHub lockup in this system's teal and sand. Never recolored, redrawn or stretched. */
export function Logo({ variant = "dark", height = 24, assetPath, style, ...rest }) {
  /* Offline bundles may inline a hidden <img data-logo="…"> per lockup; prefer its resolved src. */
  const preload = typeof document !== "undefined" ? document.querySelector('img[data-logo="' + variant + '"]') : null;
  /* Embedded by scripts/build-assets.mjs. Pass assetPath only to load the files from a folder instead. */
  const src = (preload && preload.src) || (assetPath ? assetPath + (SRC[variant] || SRC.dark) : LOGO_SRC[variant] || LOGO_SRC.dark);
  return (
    <img
      src={src}
      alt="SubHub"
      style={{ height, width: "auto", display: "block", ...style }}
      {...rest}
    />
  );
}
