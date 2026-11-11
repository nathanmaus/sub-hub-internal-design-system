import React from "react";

const STATES = {
  approved: { bg: "var(--status-success-bg)", fg: "var(--status-success-text)", dot: "var(--green-600)" },
  paid: { bg: "var(--status-success-bg)", fg: "var(--status-success-text)", dot: "var(--green-600)" },
  pending: { bg: "var(--status-warning-bg)", fg: "var(--status-warning-text)", dot: "var(--yellow-600)" },
  overdue: { bg: "var(--status-danger-bg)", fg: "var(--status-danger-text)", dot: "var(--red-600)" },
  review: { bg: "var(--status-info-bg)", fg: "var(--status-info-text)", dot: "var(--teal-500)" },
  draft: { bg: "var(--status-neutral-bg)", fg: "var(--status-neutral-text)", dot: "var(--teal-400)" },
};

export function StatusPill({ state = "draft", children, showDot = true, style, ...rest }) {
  const s = STATES[state] || STATES.draft;
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 7, background: s.bg, color: s.fg,
        font: "var(--type-label)", padding: "6px 12px", borderRadius: "var(--radius-pill)", whiteSpace: "nowrap", ...style,
      }}
      {...rest}
    >
      {showDot ? <span style={{ width: 7, height: 7, borderRadius: "50%", background: s.dot }} /> : null}
      {children}
    </span>
  );
}
