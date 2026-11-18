import React from "react";

export function Switch({ label, checked, defaultChecked, onChange, disabled = false, style, ...rest }) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked === undefined ? inner : checked;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    if (onChange) onChange(!on);
  };
  return (
    <label
      onClick={toggle}
      style={{ display: "inline-flex", alignItems: "center", gap: 11, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.55 : 1, ...style }}
      {...rest}
    >
      <span
        role="switch" aria-checked={on}
        style={{
          width: 42, height: 24, borderRadius: "var(--radius-pill)", padding: 3, flex: "0 0 auto",
          background: on ? "var(--action-primary)" : "var(--teal-300)",
          transition: "background-color var(--duration-base) var(--ease-standard)",
          display: "flex", justifyContent: on ? "flex-end" : "flex-start",
        }}
      >
        <span style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--white)", boxShadow: "var(--shadow-xs)", transition: "transform var(--duration-base) var(--ease-out)" }} />
      </span>
      {label ? <span style={{ font: "var(--type-body)", fontSize: 15, color: "var(--text-strong)" }}>{label}</span> : null}
    </label>
  );
}
