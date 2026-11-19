import React from "react";

// Progress toward one target: a bar (default) or a ring. One value, so one colour.
export function Progress({
  value = 0, max = 100, variant = "bar", label, valueLabel, size = 64, thickness, color, style, ...rest
}) {
  const p = Math.max(0, Math.min(1, (+value || 0) / (max || 1)));
  const shown = valueLabel != null ? valueLabel : Math.round(p * 100) + "%";
  const fill = color || "var(--track-fill, var(--chart-1))";
  const track = "var(--track-default, var(--border-subtle))";
  const aria = { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": max, "aria-valuenow": value, "aria-label": label, "aria-valuetext": String(shown) };

  if (variant === "ring") {
    const t = thickness || 8;
    const r = (size - t) / 2;
    const C = 2 * Math.PI * r;
    return (
      <div style={{ display: "inline-flex", alignItems: "center", gap: 12, ...style }} {...rest}>
        <div style={{ position: "relative", width: size, height: size, flex: "none" }} {...aria}>
          <svg width={size} height={size} aria-hidden="true" style={{ display: "block", transform: "rotate(-90deg)" }}>
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={t} />
            {p > 0 ? <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={fill} strokeWidth={t} strokeLinecap="round"
              strokeDasharray={`${C * p} ${C}`} /> : null}
          </svg>
          <span style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", font: "var(--weight-semibold) " + (size >= 80 ? "16px/24px" : "12px/16px") + " var(--font-sans)", color: "var(--text-strong)", fontVariantNumeric: "tabular-nums" }}>{shown}</span>
        </div>
        {label ? <span style={{ font: "var(--weight-regular) 14px/20px var(--font-sans)", color: "var(--text-body)" }}>{label}</span> : null}
      </div>
    );
  }

  const h = thickness || 8;
  return (
    <div style={{ display: "grid", gap: 8, minWidth: 0, ...style }} {...rest}>
      {label || shown ? (
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
          <span style={{ font: "var(--weight-regular) 14px/20px var(--font-sans)", color: "var(--text-body)" }}>{label}</span>
          <span style={{ font: "var(--weight-semibold) 14px/20px var(--font-sans)", color: "var(--text-strong)", fontVariantNumeric: "tabular-nums" }}>{shown}</span>
        </div>
      ) : null}
      <div {...aria} style={{ height: h, borderRadius: h / 2, background: track, overflow: "hidden" }}>
        <div style={{ width: p * 100 + "%", height: "100%", borderRadius: h / 2, background: fill }} />
      </div>
    </div>
  );
}
