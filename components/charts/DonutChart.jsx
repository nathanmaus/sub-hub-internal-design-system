import React from "react";
import { CHART_COLORS, CHART_OTHER, formatNumber, ChartTooltip } from "./ChartKit.jsx";

function arc(cx, cy, r0, r1, a0, a1) {
  const p = (r, a) => [cx + r * Math.sin(a), cy - r * Math.cos(a)];
  const large = a1 - a0 > Math.PI ? 1 : 0;
  const [x0, y0] = p(r1, a0), [x1, y1] = p(r1, a1), [x2, y2] = p(r0, a1), [x3, y3] = p(r0, a0);
  return `M${x0},${y0}A${r1},${r1} 0 ${large} 1 ${x1},${y1}L${x2},${y2}A${r0},${r0} 0 ${large} 0 ${x3},${y3}Z`;
}

// Parts of one whole. Three named parts at most, then the rest fold into "Other".
export function DonutChart({
  data = [], size = 160, thickness = 24, centerValue, centerLabel, valueFormat = formatNumber,
  otherLabel = "Other", legend = true, ariaLabel, style, ...rest
}) {
  const [active, setActive] = React.useState(null);
  const parts = React.useMemo(() => {
    const named = data.slice(0, 3).map((d, i) => ({ ...d, color: d.color || CHART_COLORS[i] }));
    const restSum = data.slice(3).reduce((a, d) => a + (+d.value || 0), 0);
    if (data.length > 3) named.push({ label: otherLabel, value: restSum, color: CHART_OTHER });
    return named;
  }, [data, otherLabel]);
  const total = parts.reduce((a, d) => a + (+d.value || 0), 0) || 1;
  const c = size / 2, r1 = c, r0 = c - thickness;
  let a = 0;
  const segs = parts.map((d) => {
    const sweep = ((+d.value || 0) / total) * Math.PI * 2;
    const s = { ...d, a0: a, a1: a + sweep, pct: (+d.value || 0) / total };
    a += sweep;
    return s;
  });
  const pct = (p) => Math.round(p * 100) + "%";
  const act = active != null ? segs[active] : null;
  const mid = act ? (act.a0 + act.a1) / 2 : 0;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24, minWidth: 0, ...style }} {...rest}>
      <div style={{ position: "relative", width: size, height: size, flex: "none" }}>
        <svg width={size} height={size} role="img" style={{ display: "block", overflow: "visible" }}
          aria-label={ariaLabel || segs.map((s) => s.label + " " + pct(s.pct)).join(", ")}
          onPointerLeave={() => setActive(null)}>
          <circle cx={c} cy={c} r={c - thickness / 2} fill="none" stroke="var(--track-default, var(--border-subtle))" strokeWidth={thickness} />
          {segs.map((s, i) => (s.pct > 0 ? (
            <path key={s.label} d={s.pct >= 0.9999 ? arc(c, c, r0, r1, 0, Math.PI * 2 - 0.0001) : arc(c, c, r0, r1, s.a0, s.a1)}
              fill={s.color} stroke="var(--surface-card)" strokeWidth="2" strokeLinejoin="round"
              opacity={active == null || active === i ? 1 : 0.4}
              onPointerEnter={() => setActive(i)} />
          ) : null))}
        </svg>
        {centerValue != null || centerLabel ? (
          <div style={{ position: "absolute", inset: thickness, display: "grid", placeContent: "center", textAlign: "center", gap: 0, pointerEvents: "none" }}>
            {centerValue != null ? <span style={{ font: "var(--weight-bold) 20px/28px var(--font-mono)", color: "var(--text-strong)", fontVariantNumeric: "tabular-nums" }}>{centerValue}</span> : null}
            {centerLabel ? <span style={{ font: "var(--weight-regular) 12px/16px var(--font-sans)", color: "var(--text-muted)" }}>{centerLabel}</span> : null}
          </div>
        ) : null}
        {act ? (
          <ChartTooltip x={c + Math.sin(mid) * (c - thickness / 2)} y={c - Math.cos(mid) * (c - thickness / 2) - 12} containerWidth={size}
            title={act.label} rows={[{ label: pct(act.pct) + " of total", value: valueFormat(act.value) }]} />
        ) : null}
      </div>
      {legend ? (
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8, flex: "1 1 160px", minWidth: 0 }}>
          {segs.map((s, i) => (
            <li key={s.label} onPointerEnter={() => setActive(i)} onPointerLeave={() => setActive(null)}
              style={{ display: "flex", alignItems: "center", gap: 8, font: "var(--weight-regular) 14px/20px var(--font-sans)", color: "var(--text-body)" }}>
              <span aria-hidden="true" style={{ width: 12, height: 12, borderRadius: 4, background: s.color, flex: "none" }} />
              <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.label}</span>
              <span style={{ color: "var(--text-strong)", fontWeight: "var(--weight-semibold)", fontVariantNumeric: "tabular-nums" }}>{valueFormat(s.value)}</span>
              <span style={{ width: 40, textAlign: "right", color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }}>{pct(s.pct)}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
