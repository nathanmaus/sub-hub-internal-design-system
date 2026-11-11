import * as React from "react";

/** A small surface that points at the element it explains. */
export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "announcement": unprompted, introduces something new, with a title, body and up to two actions. */
  variant?: "announcement";
  title: React.ReactNode;
  /** One or two sentences. Children work too. */
  body?: React.ReactNode;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
  /** Defaults to onDismiss. */
  onSecondary?: () => void;
  /** Called on Escape and by the secondary action when onSecondary is absent. */
  onDismiss?: () => void;
  /** Where the tooltip sits relative to its trigger. "bottom" puts the arrow on top. Default "bottom". */
  placement?: "bottom" | "top";
  /** Which edge the arrow is measured from. Default "end". */
  arrowAlign?: "start" | "center" | "end";
  /** Arrow centre's distance in px from that edge (ignored for "center"). Default 104. */
  arrowOffset?: number;
  /** Entrance delay in ms. 600 for an unprompted announcement; 0 when the person triggered it. Default 600. */
  delay?: number;
  /** Play the tooltip spring entrance. Default true. */
  animate?: boolean;
  /** Replay the entrance every ~4s. Design review and specimens only — never in product. */
  loop?: boolean;
  /** Width; capped at the viewport minus 32px. Default 320. */
  width?: number | string;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
