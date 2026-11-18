import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Input({ icon, suffix, invalid = false, disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const border = invalid ? "var(--red-600)" : focus ? "var(--border-brand)" : "var(--border-default)";
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: 9, height: "var(--field-height)",
        padding: "0 14px", background: disabled ? "var(--surface-page)" : "var(--surface-card)",
        border: `1px solid ${border}`, borderRadius: "var(--radius-control)",
        boxShadow: focus ? "var(--ring-focus)" : "none", transition: "var(--transition-control)", ...style,
      }}
    >
      {icon ? <Icon name={icon} size={17} color="var(--text-subtle)" /> : null}
      <input
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
          font: "var(--type-body)", fontSize: 15, color: "var(--text-strong)",
        }}
        {...rest}
      />
      {suffix ? (
        <span style={{ font: "var(--type-mono)", fontSize: 13, color: "var(--text-subtle)" }}>{suffix}</span>
      ) : null}
    </div>
  );
}
