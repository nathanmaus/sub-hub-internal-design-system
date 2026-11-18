import * as React from "react";

/**
 * The brand's full-bleed section header, in the three supplied directions.
 * Designed at 1600x600 and scaled proportionally from the width you pass.
 *
 * @startingPoint section="Brand" subtitle="Full-bleed section header — blueprint, editorial, amber" viewport="1280x480"
 */
export interface HeroBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The one big display word or phrase. Set at ~132–150px at full scale. */
  title?: string;
  /** blueprint = mono technical caption · editorial/amber = body copy. */
  subtitle?: string;
  /** Uppercase mono kicker. In blueprint and amber it gets the ✦ AI marker chrome. */
  eyebrow?: string;
  /** blueprint = teal-950 + grid + isometric site · editorial = light + skew slabs · amber = sand ground + ink wedge */
  variant?: "blueprint" | "editorial" | "amber";
  /** Mono words along the bottom rule. blueprint only. */
  rail?: string[];
  /** Design width; everything scales from 1600. */
  width?: number;
  /** Design height; decoration scales from 600. */
  height?: number;
  /** Path to the assets folder, relative to the consuming page. */
  assetPath?: string;
  /** Replaces the built-in line art with your own absolutely-positioned node. */
  children?: React.ReactNode;
}
export declare function HeroBanner(props: HeroBannerProps): JSX.Element;
