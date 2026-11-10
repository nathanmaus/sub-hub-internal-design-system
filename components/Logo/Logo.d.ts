import * as React from "react";

/** The SubHub lockup in teal and sand, as an SVG (PNG fallbacks beside it). Never redrawn or recolored. */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** dark = for light grounds · light = for dark grounds · sand = for sand-400 grounds ("amber" is a kept alias of sand) */
  variant?: "light" | "dark" | "sand" | "amber";
  /** Rendered height in px; width follows. Floor is ~16px for legibility. */
  height?: number;
  /** Path to the assets folder, relative to the consuming page. */
  assetPath?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
