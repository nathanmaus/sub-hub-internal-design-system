import React from "react";

const SRC = {
  light: "logo-light.svg",
  dark: "logo-dark.svg",
  sand: "logo-on-amber.svg",
  amber: "logo-on-amber.svg",
};

/** The SubHub lockup in this system's teal and sand. Never recolored, redrawn or stretched. */
export function Logo({ variant = "dark", height = 24, assetPath = "../../assets/", style, ...rest }) {
  /* Offline bundles may inline a hidden <img data-logo="…"> per lockup; prefer its resolved src. */
  const preload = typeof document !== "undefined" ? document.querySelector('img[data-logo="' + variant + '"]') : null;
  const src = (preload && preload.src) || assetPath + (SRC[variant] || SRC.dark);
  return (
    <img
      src={src}
      alt="SubHub"
      style={{ height, width: "auto", display: "block", ...style }}
      {...rest}
    />
  );
}
