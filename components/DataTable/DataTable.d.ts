import * as React from "react";

export interface DataTableColumn {
  key: string;
  label: string;
  align?: "left" | "right" | "center";
  /** Set money, sizes and IDs in IBM Plex Mono, tabular. */
  mono?: boolean;
  /** Semibold ink-900 — use on the identifying column only. */
  strong?: boolean;
  width?: string | number;
  /** Return any node — StatusPill, Badge, a button cluster. */
  render?: (row: any) => React.ReactNode;
}

/**
 * The pipeline / invoice / project list surface.
 *
 * @startingPoint section="Data" subtitle="Pipeline table with mono money and status pills" viewport="700x260"
 */
export interface DataTableProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: DataTableColumn[];
  rows?: any[];
  /** 10px row padding and 14px text instead of 14/15. */
  dense?: boolean;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
