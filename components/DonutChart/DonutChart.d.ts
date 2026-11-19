import * as React from "react";

/**
 * Parts of one whole: three named parts, then Other.
 *
 * @startingPoint section="Charts" subtitle="Share of a whole with legend" viewport="480x220"
 */
export interface DonutChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Largest first. Parts after the third fold into Other. */
  data: Array<{ label: string; value: number; color?: string }>;
  /** Diameter in px, a multiple of 4. Default 160. */
  size?: number;
  /** Ring thickness. Default 24. */
  thickness?: number;
  centerValue?: string;
  centerLabel?: string;
  valueFormat?: (v: number) => string;
  otherLabel?: string;
  legend?: boolean;
  ariaLabel?: string;
}
export declare function DonutChart(props: DonutChartProps): JSX.Element;
