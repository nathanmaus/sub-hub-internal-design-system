import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Select({ options = [], placeholder, disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div
      style={{
        display: "flex", alignItems: "center", height: "var(--field-height)", padding: "0 12px 0 14px",
        background: disabled ? "var(--surface-page)" : "var(--surface-card)",
        border: `1px solid ${focus ? "var(--border-brand)" : "var(--border-default)"}`,
        borderRadius: "var(--radius-control)", boxShadow: focus ? "var(--ring-focus)" : "none",
        transition: "var(--transition-control)", ...style,
      }}
    >
      <select
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          flex: 1, appearance: "none", border: "none", outline: "none", background: "transparent",
          font: "var(--type-body)", fontSize: 15, color: "var(--text-strong)", cursor: disabled ? "not-allowed" : "pointer",
        }}
        {...rest}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((o) => {
          const value = typeof o === "string" ? o : o.value;
          const label = typeof o === "string" ? o : o.label;
          return <option key={value} value={value}>{label}</option>;
        })}
      </select>
      <Icon name="chevron-down" size={17} color="var(--text-subtle)" />
    </div>
  );
}
