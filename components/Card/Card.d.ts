import * as React from "react";

/** The system's surface: 14px radius, hairline border, shallow cool shadow. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Any CSS padding. Defaults to var(--card-pad) = 24px. */
  padding?: string;
  tone?: "default" | "sunken" | "inverse" | "brand";
  /** Adds pointer cursor, -2px lift and shadow-md on hover. */
  interactive?: boolean;
}
export declare function Card(props: CardProps): JSX.Element;
