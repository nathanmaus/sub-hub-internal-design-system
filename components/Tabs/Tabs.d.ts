import * as React from "react";

/** Underlined in-page tabs with optional mono counts. */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs?: Array<string | { value: string; label: string; count?: number }>;
  /** Controlled active value. Omit for uncontrolled. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}
export declare function Tabs(props: TabsProps): JSX.Element;
