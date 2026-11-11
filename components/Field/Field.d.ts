import * as React from "react";

/** Label + hint/error wrapper. Every form control ships inside one. */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  /** Shown below the control when there is no error. */
  hint?: string;
  /** Replaces the hint and turns the message red. */
  error?: string;
  /** Appends a red asterisk to the label. */
  required?: boolean;
  /** Must match the control's id. */
  htmlFor?: string;
  children?: React.ReactNode;
}
export declare function Field(props: FieldProps): JSX.Element;
