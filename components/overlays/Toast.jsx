import React from "react";
import { Icon } from "../core/Icon.jsx";
import { IconButton } from "../core/IconButton.jsx";

/* ---- body (bundled as-is) ---- */
/**
 * Toast — a transient message that slides up from the bottom of the viewport,
 * holds for seven seconds and fades away. It enters on the system's tooltip
 * spring (stiffness 380, damping 19, mass 1; see motion.md) over 8px of travel,
 * which reads as a soft landing rather than a bounce.
 *
 * ToastStack positions up to three of them, bottom centre, newest nearest the edge.
 */
/* The tooltip spring sampled at 41 points over 450ms. Baked into keyframes rather than
   a linear() easing so it plays in every browser. Same curve as Tooltip, 8px of travel. */
const TOAST_SPRING = [0, 0.022, 0.085, 0.176, 0.281, 0.396, 0.520, 0.641, 0.750, 0.849, 0.938, 1.013, 1.070, 1.115, 1.145, 1.164, 1.172, 1.171, 1.162, 1.148, 1.131, 1.112, 1.091, 1.069, 1.050, 1.032, 1.016, 1.002, 0.991, 0.983, 0.977, 0.973, 0.971, 0.970, 0.971, 0.973, 0.976, 0.980, 0.983, 0.987, 1];
const TOAST_OFFSET = 8;
const TOAST_DURATION = 7000;
const TOAST_SPRING_MS = 450;
const TOAST_FADE_IN_MS = 150;
const TOAST_EXIT_MS = 200;
const TOAST_INSET = 16;
const TOAST_MAX = 3;

const TOAST_CSS = [
  "@keyframes shds-toast-move{" + TOAST_SPRING.map((p, i) =>
    (i * 100 / (TOAST_SPRING.length - 1)).toFixed(2) + "%{transform:translateY(" + (TOAST_OFFSET * (1 - p)).toFixed(2) + "px)}"
  ).join("") + "}",
  "@keyframes shds-toast-fade{from{opacity:0}to{opacity:1}}",
  "@keyframes shds-toast-out{from{opacity:1}to{opacity:0}}",
  "@media (prefers-reduced-motion: reduce){.shds-toast{animation:shds-toast-fade " + TOAST_FADE_IN_MS + "ms linear both !important}}"
].join("\n");

const TONES = {
  success: { bg: "var(--status-success-bg)", fg: "var(--status-success-text)", icon: "check-circle-filled" },
  danger: { bg: "var(--status-danger-bg)", fg: "var(--status-danger-text)", icon: "close-cancel-circle" },
  warning: { bg: "var(--status-warning-bg)", fg: "var(--status-warning-text)", icon: "warning-fill" },
  info: { bg: "var(--status-info-bg)", fg: "var(--status-info-text)", icon: "info" }
};

function Toast({
  tone = "info", children, message, icon, showIcon = true,
  actionLabel, onAction, onDismiss, duration = TOAST_DURATION,
  animate = true, paused = false, style, ...rest
}) {
  const t = TONES[tone] || TONES.info;
  const [leaving, setLeaving] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const held = paused || hover;

  /* The hold is wall time, not an animation: it starts once the entrance has landed
     and stops while the pointer is over the toast, so an action stays reachable. */
  React.useEffect(() => {
    if (!onDismiss || held || duration == null || duration === Infinity) return undefined;
    const t1 = setTimeout(() => setLeaving(true), (animate ? TOAST_SPRING_MS : 0) + duration);
    return () => clearTimeout(t1);
  }, [onDismiss, held, duration, animate]);

  React.useEffect(() => {
    if (!leaving || !onDismiss) return undefined;
    const t2 = setTimeout(onDismiss, TOAST_EXIT_MS);
    return () => clearTimeout(t2);
  }, [leaving, onDismiss]);

  const animation = leaving
    ? "shds-toast-out " + TOAST_EXIT_MS + "ms var(--ease-standard) forwards"
    : animate
      ? "shds-toast-move " + TOAST_SPRING_MS + "ms linear both, shds-toast-fade " + TOAST_FADE_IN_MS + "ms linear both"
      : "none";

  return React.createElement("div", {
    className: "shds-toast", role: tone === "danger" ? "alert" : "status",
    "aria-live": tone === "danger" ? "assertive" : "polite", "data-tone": tone,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    onFocusCapture: () => setHover(true), onBlurCapture: () => setHover(false),
    style: {
      display: "inline-flex", alignItems: "center", gap: 12, boxSizing: "border-box",
      maxWidth: "calc(100vw - " + (TOAST_INSET * 2) + "px)", padding: "12px 12px 12px 16px",
      background: t.bg, color: t.fg, border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-control)", boxShadow: "var(--shadow-overlay)",
      pointerEvents: "auto", animation, ...style
    },
    ...rest
  },
    React.createElement("style", null, TOAST_CSS),
    showIcon ? React.createElement(Icon, { color: "currentColor", name: icon || t.icon, size: 20, "aria-hidden": "true", style: { flex: "0 0 auto" } }) : null,
    React.createElement("span", {
      style: { font: "var(--weight-regular) 16px/24px var(--font-sans)", minWidth: 0 }
    }, message || children),
    actionLabel ? React.createElement("button", {
      type: "button", onClick: onAction,
      style: {
        flex: "0 0 auto", minHeight: 44, padding: "0 8px", border: 0, background: "none",
        font: "var(--weight-semibold) 16px/24px var(--font-sans)", color: "inherit",
        textDecoration: "underline", cursor: "pointer", borderRadius: "var(--radius-control)"
      }
    }, actionLabel) : null,
    onDismiss ? React.createElement(IconButton, {
      icon: "close-cancel", variant: "quiet", size: "sm", label: "Dismiss",
      onClick: () => setLeaving(true),
      /* 16px glyph, 44px hit area: the visible mark is small, the target is not. */
      style: { flex: "0 0 auto", width: 44, height: 44, color: "inherit" }
    }) : null
  );
}

/** Positions toasts bottom centre, newest nearest the edge. Renders at most three. */
function ToastStack({ children, bottomUI = 0, style, ...rest }) {
  const shown = React.Children.toArray(children).slice(-TOAST_MAX);
  return React.createElement("div", {
    "aria-live": "polite",
    style: {
      position: "fixed", left: 0, right: 0, bottom: TOAST_INSET + bottomUI,
      display: "flex", flexDirection: "column-reverse", alignItems: "center", gap: 8,
      padding: "0 " + TOAST_INSET + "px", pointerEvents: "none", zIndex: 60, ...style
    },
    ...rest
  }, shown);
}
/* ---- end body ---- */

export { Toast, ToastStack };
