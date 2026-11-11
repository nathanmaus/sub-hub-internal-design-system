import React from "react";

/** Label + hint + error wrapper shared by every form control. */
export function Field({ label, hint, error, required = false, htmlFor, children, style, ...rest }) {
  return (
    <div style={{ display: "grid", gap: 6, ...style }} {...rest}>
      {label ? (
        <label htmlFor={htmlFor} style={{ font: "var(--type-label)", color: "var(--text-strong)" }}>
          {label}
          {required ? <span style={{ color: "var(--red-600)", marginLeft: 3 }}>*</span> : null}
        </label>
      ) : null}
      {children}
      {error ? (
        <span style={{ font: "var(--type-body)", fontSize: 13, color: "var(--status-danger-text)" }}>{error}</span>
      ) : hint ? (
        <span style={{ font: "var(--type-body)", fontSize: 13, color: "var(--text-muted)" }}>{hint}</span>
      ) : null}
    </div>
  );
}
