import React from "react";

export function Card({ children, padding = "var(--card-pad)", tone = "default", interactive = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: { background: "var(--surface-card)", border: "1px solid var(--border-subtle)", color: "var(--text-body)" },
    sunken: { background: "var(--surface-sunken)", border: "1px solid var(--border-subtle)", color: "var(--text-body)" },
    inverse: { background: "var(--surface-inverse)", border: "1px solid var(--border-inverse)", color: "var(--teal-200)" },
    brand: { background: "var(--surface-brand-subtle)", border: "1px solid var(--sand-200)", color: "var(--sand-800)" },
  };
  const t = tones[tone] || tones.default;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: t.background, border: t.border, color: t.color, padding,
        borderRadius: "var(--radius-card)",
        boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: interactive && hover ? "translateY(-2px)" : "none",
        cursor: interactive ? "pointer" : "default",
        transition: "var(--transition-surface)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
