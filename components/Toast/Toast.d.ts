import * as React from "react";

/** A transient message that slides up from the bottom of the viewport and fades away. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which status the message carries. Default "info". */
  tone?: "success" | "danger" | "warning" | "info";
  /** The message. Children work too. One sentence. */
  message?: React.ReactNode;
  /** Override the tone's leading icon. Must be a name from the SubHub Icon Library. */
  icon?: string;
  /** Show the leading icon. Default true. */
  showIcon?: boolean;
  /** An inline action, e.g. "Undo". Keep it to one word or two. */
  actionLabel?: string;
  onAction?: () => void;
  /** Called once the exit fade has finished. Omit it and the toast never leaves. */
  onDismiss?: () => void;
  /** Hold in ms, measured from the moment the entrance lands. Default 7000. */
  duration?: number;
  /** Play the spring entrance. Default true. */
  animate?: boolean;
  /** Hold the timer open from outside, e.g. while a menu inside the toast is open. */
  paused?: boolean;
}
export declare function Toast(props: ToastProps): JSX.Element;

/** Positions toasts bottom centre, newest nearest the edge. Renders at most three. */
export interface ToastStackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Height in px of any bottom-pinned UI the stack must clear. Default 0. */
  bottomUI?: number;
}
export declare function ToastStack(props: ToastStackProps): JSX.Element;
