import * as React from "react";

/**
 * A single KPI: uppercase label, big mono tabular value, optional delta and footnote.
 *
 * @startingPoint section="Data" subtitle="KPI tiles with mono values and deltas" viewport="700x180"
 */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Rendered uppercase in the eyebrow treatment. */
  label: string;
  /** Pre-formatted — "$1.24M", "38", "6.4 kW". Set in mono, tabular. */
  value: string;
  /** Change indicator, e.g. "+8%". */
  delta?: string;
  /** Picks green + trending-up vs red + trending-down. */
  deltaDirection?: "up" | "down";
  /** Lucide slug shown top-right in subtle ink. */
  icon?: string;
  footnote?: string;
}
export declare function StatCard(props: StatCardProps): JSX.Element;
