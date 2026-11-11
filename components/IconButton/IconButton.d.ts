import * as React from "react";

/** A square, label-less action — toolbar and table-row affordances. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide slug. */
  icon: string;
  /** Required accessible name; also used as the tooltip. */
  label: string;
  /** 32 / 40 / 48px squares. */
  size?: "sm" | "md" | "lg";
  /** quiet = transparent until hover · outline = white + border · solid = blue */
  variant?: "quiet" | "outline" | "solid";
  disabled?: boolean;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
