import React from "react";

export function DataTable({ columns = [], rows = [], dense = false, style, ...rest }) {
  const padY = dense ? 10 : 14;
  return (
    <div style={{ overflow: "hidden", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-card)", background: "var(--surface-card)", boxShadow: "var(--shadow-sm)", ...style }} {...rest}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "var(--surface-sunken)" }}>
            {columns.map((c) => (
              <th
                key={c.key}
                style={{
                  textAlign: c.align || "left", padding: "11px 18px",
                  font: "var(--weight-semibold) var(--text-eyebrow)/1 var(--font-sans)",
                  letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase",
                  color: "var(--text-subtle)", borderBottom: "1px solid var(--border-subtle)",
                  width: c.width,
                }}
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.id || i} style={{ borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--border-subtle)" }}>
              {columns.map((c) => (
                <td
                  key={c.key}
                  className={c.mono ? "tabular" : undefined}
                  style={{
                    padding: `${padY}px 18px`, textAlign: c.align || "left",
                    font: c.mono ? "var(--type-mono)" : "var(--type-body)",
                    fontSize: dense ? 14 : 15,
                    color: c.strong ? "var(--text-strong)" : "var(--text-body)",
                    fontWeight: c.strong ? "var(--weight-semibold)" : undefined,
                    verticalAlign: "middle",
                  }}
                >
                  {c.render ? c.render(r) : r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
