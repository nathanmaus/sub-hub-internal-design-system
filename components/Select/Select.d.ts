import * as React from "react";

/** Native select in the field skin, with a Lucide chevron. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Plain strings, or {value,label} pairs. */
  options?: Array<string | { value: string; label: string }>;
  /** Renders as a leading empty option. */
  placeholder?: string;
  disabled?: boolean;
}
export declare function Select(props: SelectProps): JSX.Element;
