import * as React from "react";

/**
 * Progress toward one target, as a bar or a ring.
 *
 * @startingPoint section="Charts" subtitle="Bar and ring progress" viewport="480x200"
 */
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  /** Default 100. */
  max?: number;
  variant?: "bar" | "ring";
  label?: string;
  /** Replaces the percentage, e.g. "$742K of $1M". */
  valueLabel?: string;
  /** Ring diameter. Default 64. */
  size?: number;
  /** Bar height or ring stroke. Default 8. */
  thickness?: number;
  color?: string;
}
export declare function Progress(props: ProgressProps): JSX.Element;
