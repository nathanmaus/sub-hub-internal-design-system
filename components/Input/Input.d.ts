import * as React from "react";

/** Single-line text field, 44px tall, with optional leading icon and mono unit suffix. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** SubHub Icon Library name, shown at the left in subtle ink. */
  icon?: string;
  /** Unit or currency shown at the right in tabular figures (font-mono, which is Inter) — "kW", "USD", "%". */
  suffix?: string;
  invalid?: boolean;
  disabled?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
