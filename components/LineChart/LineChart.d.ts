import * as React from "react";

export interface ChartSeries { key: string; label: string; color?: string; }
/**
 * Lines for change over time with a crosshair tooltip.
 *
 * @startingPoint section="Charts" subtitle="Trend lines with crosshair" viewport="600x320"
 */
export interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Array<{ label: string; [key: string]: any }>;
  series: ChartSeries[];
  height?: number;
  valueFormat?: (v: number) => string;
  tickFormat?: (v: number) => string;
  /** 10% area wash. Default: on for a single series. */
  area?: boolean;
  legend?: boolean;
  ariaLabel?: string;
}
export declare function LineChart(props: LineChartProps): JSX.Element;
