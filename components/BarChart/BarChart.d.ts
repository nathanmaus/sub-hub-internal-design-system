import * as React from "react";

export interface ChartSeries { key: string; label: string; /** Override the categorical order. Rarely needed. */ color?: string; }
/**
 * Vertical bars for comparing amounts across categories.
 *
 * @startingPoint section="Charts" subtitle="Grouped bars with hover values" viewport="600x320"
 */
export interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** One object per category: { label, [series.key]: number }. */
  data: Array<{ label: string; [key: string]: any }>;
  /** One to three series. */
  series: ChartSeries[];
  /** Plot height in px, a multiple of 4. Default 240. */
  height?: number;
  /** Tooltip values. Default toLocaleString. */
  valueFormat?: (v: number) => string;
  /** Axis ticks. Default compact (1.2K, 3M). */
  tickFormat?: (v: number) => string;
  /** Default: shown for two or more series. */
  legend?: boolean;
  ariaLabel?: string;
}
export declare function BarChart(props: BarChartProps): JSX.Element;
