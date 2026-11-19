import * as React from "react";

/** A static label pill — product names, categories and the AI marker. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** ai / ai-dark carry the ✦ AI marker; inverse is for dark grounds. */
  tone?: "neutral" | "brand" | "accent" | "ai" | "ai-dark" | "inverse";
  /** SubHub Icon Library name, rendered at 12px before the label. */
  icon?: string;
  /** Switch to the uppercase eyebrow treatment: Inter Medium 12px, 0.16em tracking. */
  uppercase?: boolean;
}
export declare function Badge(props: BadgeProps): JSX.Element;
