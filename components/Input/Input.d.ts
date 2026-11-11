import * as React from "react";

/** Single-line text field, 44px tall, with optional leading icon and mono unit suffix. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Lucide slug shown at the left in subtle ink. */
  icon?: string;
  /** Unit or currency shown at the right in IBM Plex Mono — "kW", "USD", "%". */
  suffix?: string;
  invalid?: boolean;
  disabled?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
