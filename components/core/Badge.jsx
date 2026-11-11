import React from "react";
import { Icon } from "./Icon.jsx";

const TONES = {
  neutral: { bg: "var(--surface-page)", fg: "var(--status-neutral-text)", border: "1px solid var(--border-subtle)" },
  brand: { bg: "var(--surface-brand-subtle)", fg: "var(--status-info-text)", border: "1px solid var(--sand-200)" },
  accent: { bg: "var(--surface-accent-subtle)", fg: "var(--sand-700)" },
  ai: { bg: "var(--surface-accent-subtle)", fg: "var(--sand-700)" },
  "ai-dark": { bg: "rgba(217,185,138,0.08)", fg: "var(--sand-400)", border: "1px solid rgba(217,185,138,0.45)" },
  inverse: { bg: "rgba(255,255,255,0.12)", fg: "var(--white)" },
};

export function Badge({ children, tone = "neutral", icon, uppercase = false, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: t.bg, color: t.fg, border: t.border || "none",
        font: uppercase ? "var(--type-eyebrow)" : "var(--weight-semibold) 13px/1 var(--font-sans)",
        letterSpacing: uppercase ? "var(--tracking-eyebrow)" : "-0.005em",
        textTransform: uppercase ? "uppercase" : "none",
        padding: "7px 13px", borderRadius: "var(--radius-pill)", whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {icon ? <Icon color="currentColor" name={icon} size={13} /> : null}
      {children}
    </span>
  );
}
