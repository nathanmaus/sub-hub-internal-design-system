import * as React from "react";

/** Job / quote / invoice state, with a colored dot. The label is yours to write. */
export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Drives the palette and the dot color, not the text. */
  state?: "approved" | "paid" | "pending" | "overdue" | "review" | "draft";
  children?: React.ReactNode;
  showDot?: boolean;
}
export declare function StatusPill(props: StatusPillProps): JSX.Element;
