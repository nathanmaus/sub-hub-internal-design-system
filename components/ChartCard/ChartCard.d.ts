import * as React from "react";

export interface ChartTableColumn { key: string; label: string; align?: "left" | "right"; format?: (value: any, row: any) => React.ReactNode; }
/**
 * The card every chart sits in, with a Chart / Table switch.
 *
 * @startingPoint section="Charts" subtitle="Chart in a card with a table view" viewport="600x400"
 */
export interface ChartCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  /** Pre-formatted headline number, set in mono. */
  value?: string;
  /** One extra control in the header. */
  action?: React.ReactNode;
  /** The same numbers as a table. Adds the Chart / Table switch. */
  table?: { columns: ChartTableColumn[]; rows: any[] };
  defaultView?: "chart" | "table";
  children?: React.ReactNode;
}
export declare function ChartCard(props: ChartCardProps): JSX.Element;
