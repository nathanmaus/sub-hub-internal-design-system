import * as React from "react";

/**
 * Ranked stages with the share kept at each step.
 *
 * @startingPoint section="Charts" subtitle="Pipeline funnel" viewport="480x340"
 */
export interface FunnelChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** In process order, largest first. */
  stages: Array<{ label: string; value: number; color?: string }>;
  valueFormat?: (v: number) => string;
  /** Share of the previous stage on each row. Default true. */
  showConversion?: boolean;
  ariaLabel?: string;
}
export declare function FunnelChart(props: FunnelChartProps): JSX.Element;
