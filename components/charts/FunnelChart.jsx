import React from "react";
import { CHART_SEQ, formatNumber, ChartTooltip, useChartWidth } from "./ChartKit.jsx";

// Ranked stages, each a share of the first. One hue, darkest (most contrast) at the top stage.
export function FunnelChart({ stages = [], valueFormat = formatNumber, showConversion = true, ariaLabel, style, ...rest }) {
  const [ref, width] = useChartWidth();
  const [active, setActive] = React.useState(null);
  const first = +(stages[0] && stages[0].value) || 1;
  const max = Math.max(1, ...stages.map((s) => +s.value || 0));
  const pct = (a, b) => (b ? Math.round((a / b) * 100) + "%" : "–");
  const ROW = 48; // 20px label line + 4px gap + 24px bar
  const GAP = 12;
  return (
    <div ref={ref} role="list" aria-label={ariaLabel || "Funnel: " + stages.map((s) => s.label + " " + valueFormat(s.value)).join(", ")}
      style={{ position: "relative", display: "grid", gap: GAP, minWidth: 0, ...style }} {...rest}
      onPointerLeave={() => setActive(null)}>
      {stages.map((s, i) => {
        const prev = i ? +stages[i - 1].value || 0 : null;
        const w = Math.max(2, ((+s.value || 0) / max) * 100);
        return (
          <div key={s.label} role="listitem" tabIndex={0} onFocus={() => setActive(i)} onBlur={() => setActive(null)}
            onPointerEnter={() => setActive(i)} style={{ display: "grid", gap: 4, outline: "none", minHeight: ROW }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, font: "var(--weight-regular) 14px/20px var(--font-sans)" }}>
              <span style={{ color: "var(--text-body)", flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.label}</span>
              <span style={{ color: "var(--text-strong)", fontWeight: "var(--weight-semibold)", fontVariantNumeric: "tabular-nums" }}>{valueFormat(s.value)}</span>
              {showConversion && i ? (
                <span style={{ width: 48, textAlign: "right", font: "var(--weight-regular) 12px/16px var(--font-sans)", color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }}>{pct(+s.value || 0, prev)}</span>
              ) : showConversion ? <span style={{ width: 48 }} /> : null}
            </div>
            <div style={{ height: 24, background: "var(--surface-sunken)", borderRadius: 4 }}>
              <div style={{
                width: w + "%", height: "100%", borderRadius: "0 4px 4px 0", background: s.color || CHART_SEQ[Math.min(i, CHART_SEQ.length - 1)],
                opacity: active == null || active === i ? 1 : 0.4, transition: "opacity var(--duration-fast, 150ms) var(--ease-standard, ease)",
              }} />
            </div>
          </div>
        );
      })}
      {active != null && stages[active] ? (
        <ChartTooltip x={Math.min(width - 96, Math.max(96, ((+stages[active].value || 0) / max) * width / 2))} y={active * (ROW + GAP) - 4} containerWidth={width}
          title={stages[active].label}
          rows={[
            { label: "Count", value: valueFormat(stages[active].value) },
            ...(active ? [{ label: "Of previous stage", value: pct(+stages[active].value || 0, +stages[active - 1].value || 0) }] : []),
            ...(active ? [{ label: "Of " + stages[0].label, value: pct(+stages[active].value || 0, first) }] : []),
          ]} />
      ) : null}
    </div>
  );
}
