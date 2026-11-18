import * as React from "react";

/** 42x24 toggle for instant-apply settings. Blue when on, ink-300 when off. */
export interface SwitchProps {
  label?: string;
  /** Controlled value. Omit for uncontrolled. */
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
