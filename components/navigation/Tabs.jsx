import React from "react";

export function Tabs({ tabs = [], value, defaultValue, onChange, style, ...rest }) {
  const first = tabs.length ? (typeof tabs[0] === "string" ? tabs[0] : tabs[0].value) : "";
  const [inner, setInner] = React.useState(defaultValue || first);
  const active = value === undefined ? inner : value;
  const pick = (v) => { if (value === undefined) setInner(v); if (onChange) onChange(v); };
  return (
    <div style={{ display: "flex", gap: 26, borderBottom: "1px solid var(--border-subtle)", ...style }} {...rest}>
      {tabs.map((t) => {
        const v = typeof t === "string" ? t : t.value;
        const label = typeof t === "string" ? t : t.label;
        const count = typeof t === "string" ? undefined : t.count;
        const on = v === active;
        return (
          <button
            key={v} type="button" onClick={() => pick(v)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "0 0 12px",
              background: "none", border: "none", cursor: "pointer",
              font: "var(--weight-semibold) 15px/1 var(--font-sans)",
              color: on ? "var(--text-strong)" : "var(--text-muted)",
              boxShadow: on ? "inset 0 -2px 0 0 var(--action-primary)" : "none",
              transition: "var(--transition-control)",
            }}
          >
            {label}
            {count !== undefined ? (
              <span className="tabular" style={{ font: "var(--type-mono)", fontSize: 12, color: on ? "var(--status-info-text)" : "var(--text-subtle)", background: on ? "var(--surface-brand-subtle)" : "var(--surface-page)", padding: "2px 7px", borderRadius: "var(--radius-pill)" }}>{count}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
