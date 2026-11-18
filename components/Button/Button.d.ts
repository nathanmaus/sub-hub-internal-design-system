import * as React from "react";

/**
 * The system's action control. Sand is the default call to action. The accent is the same sand, kept
 * as a separate variant for AI actions.
 *
 * @startingPoint section="Core" subtitle="Action buttons in five brand variants and three sizes" viewport="700x320"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** primary = sand · secondary = card/outline · dark = teal ink · accent = sand · ghost = text-only */
  variant?: "primary" | "secondary" | "dark" | "accent" | "ghost";
  /** 34 / 44 / 52px control heights. */
  size?: "sm" | "md" | "lg";
  /** Lucide slug rendered before the label. */
  icon?: string;
  /** Lucide slug rendered after the label — use for "arrow-right" style forward motion. */
  iconTrailing?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;
