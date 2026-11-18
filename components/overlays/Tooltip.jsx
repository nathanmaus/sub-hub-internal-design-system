import React from "react";
import { Button } from "../core/Button.jsx";

/* ---- body (bundled as-is) ---- */
/**
 * Tooltip — a small surface that points at the element it explains.
 * Variant "announcement": an unprompted tooltip that introduces something new,
 * with a title, a line of body copy and up to two actions. It enters on the
 * system's tooltip spring (stiffness 380, damping 19, mass 1; see motion.md).
 */
/* The tooltip spring (stiffness 380, damping 19, mass 1) sampled at 41 points over 450ms.
   Baked into keyframes rather than a linear() easing so it plays in every browser. */
const TOOLTIP_SPRING = [0, 0.022, 0.085, 0.176, 0.281, 0.396, 0.520, 0.641, 0.750, 0.849, 0.938, 1.013, 1.070, 1.115, 1.145, 1.164, 1.172, 1.171, 1.162, 1.148, 1.131, 1.112, 1.091, 1.069, 1.050, 1.032, 1.016, 1.002, 0.991, 0.983, 0.977, 0.973, 0.971, 0.970, 0.971, 0.973, 0.976, 0.980, 0.983, 0.987, 1];
const TOOLTIP_OFFSET = 32;
const TOOLTIP_SCALE_FROM = 0.92;
function tooltipSpringKeyframes(name, sign) {
  const last = TOOLTIP_SPRING.length - 1;
  return "@keyframes " + name + "{" + TOOLTIP_SPRING.map((p, i) =>
    (i * 100 / last).toFixed(2) + "%{transform:translateY(" + (sign * TOOLTIP_OFFSET * (1 - p)).toFixed(2) + "px) scale(" + (TOOLTIP_SCALE_FROM + (1 - TOOLTIP_SCALE_FROM) * p).toFixed(4) + ")}"
  ).join("") + "}";
}
const TOOLTIP_CSS = [
  tooltipSpringKeyframes("shds-tip-from-above", -1),
  tooltipSpringKeyframes("shds-tip-from-below", 1),
  "@keyframes shds-tip-fade{from{opacity:0}to{opacity:1}}",
  "@keyframes shds-tip-out{from{opacity:1}to{opacity:0}}",
  "@media (prefers-reduced-motion: reduce){.shds-tooltip{animation:none !important}}"
].join("\n");

function Tooltip({
  variant = "announcement", title, body, children,
  primaryLabel, secondaryLabel, onPrimary, onSecondary, onDismiss,
  placement = "bottom", arrowAlign = "end", arrowOffset = 104,
  delay = 600, animate = true, loop = false, width = 320, style, ...rest
}) {
  const titleId = React.useId ? React.useId() : "shds-tip-title";
  const [cycle, setCycle] = React.useState(0);
  const [closing, setClosing] = React.useState(false);
  React.useEffect(() => {
    if (!loop) return undefined;
    let t2;
    const t1 = setTimeout(() => {
      setClosing(true);
      t2 = setTimeout(() => { setClosing(false); setCycle((c) => c + 1); }, 400);
    }, delay + 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [loop, cycle, delay]);

  const below = placement !== "top";
  const arrowX = arrowAlign === "start" ? arrowOffset + "px" : arrowAlign === "center" ? "50%" : "calc(100% - " + arrowOffset + "px)";
  const move = below ? "shds-tip-from-above" : "shds-tip-from-below";
  const animation = closing
    ? "shds-tip-out 150ms cubic-bezier(.4,0,1,1) forwards"
    : animate
      ? move + " 450ms linear " + delay + "ms both, shds-tip-fade 150ms linear " + delay + "ms both"
      : "none";
  const w = typeof width === "number" ? width + "px" : width;

  const arrowStyle = {
    position: "absolute", width: 16, height: 16, background: "var(--surface-card)",
    left: arrowX, marginLeft: -8, transform: "rotate(45deg)",
    ...(below
      ? { top: -9, borderLeft: "1px solid var(--border-subtle)", borderTop: "1px solid var(--border-subtle)", borderRadius: "4px 0 0 0" }
      : { bottom: -9, borderRight: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", borderRadius: "0 0 4px 0" })
  };

  return React.createElement("div", {
    key: cycle, role: "dialog", "aria-labelledby": titleId, "data-variant": variant, className: "shds-tooltip",
    onKeyDown: (e) => { if (e.key === "Escape" && onDismiss) onDismiss(); },
    style: {
      position: "relative", width: "min(" + w + ", calc(100vw - 32px))", boxSizing: "border-box",
      background: "var(--surface-card)", border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-overlay)", padding: 24,
      transformOrigin: arrowX + (below ? " 0" : " 100%"), animation, ...style
    },
    ...rest
  },
    React.createElement("style", null, TOOLTIP_CSS),
    React.createElement("span", { "aria-hidden": "true", style: arrowStyle }),
    React.createElement("div", { id: titleId, style: { font: "var(--weight-semibold) 20px/24px var(--font-sans)", color: "var(--text-strong)", letterSpacing: "var(--tracking-heading)" } }, title),
    (body || children) ? React.createElement("p", { style: { margin: "8px 0 0", font: "var(--weight-regular) 16px/24px var(--font-sans)", color: "var(--text-body)" } }, body || children) : null,
    (primaryLabel || secondaryLabel) ? React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 } },
      primaryLabel ? React.createElement(Button, { variant: "primary", onClick: onPrimary }, primaryLabel) : null,
      secondaryLabel ? React.createElement(Button, { variant: "secondary", onClick: onSecondary || onDismiss }, secondaryLabel) : null
    ) : null
  );
}
/* ---- end body ---- */

export { Tooltip };
