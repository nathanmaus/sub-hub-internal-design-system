import * as React from "react";

/**
 * A word-sized trend line with the latest point accented.
 *
 * @startingPoint section="Charts" subtitle="Inline trend" viewport="320x80"
 */
export interface SparklineProps extends React.HTMLAttributes<HTMLDivElement> {
  data: number[];
  /** Names for each point, shown on hover (e.g. month names). */
  labels?: string[];
  /** Default 32. */
  height?: number;
  valueFormat?: (v: number) => string;
  /** Line colour. Default chart-other. */
  color?: string;
  /** Latest-point colour. Default chart-1. */
  accent?: string;
  ariaLabel?: string;
}
export declare function Sparkline(props: SparklineProps): JSX.Element;
