import React from "react";
import { formatNumber, useChartWidth, ChartTooltip } from "./ChartKit.jsx";

// A word-sized trend: the line in the de-emphasis grey, the latest point accented.
export function Sparkline({
  data = [], labels, height = 32, valueFormat = formatNumber, color = "var(--chart-other)",
  accent = "var(--chart-1)", ariaLabel, style, ...rest
}) {
  const [ref, width] = useChartWidth();
  const [active, setActive] = React.useState(null);
  const vals = data.map((v) => +v || 0);
  const n = vals.length;
  const min = Math.min(...vals), max = Math.max(...vals);
  const pad = 6; // room for the 8px end marker and its 2px ring
  const x = (i) => pad + (n > 1 ? (i / (n - 1)) * (width - pad * 2) : (width - pad * 2) / 2);
  const y = (v) => pad + (max === min ? (height - pad * 2) / 2 : (1 - (v - min) / (max - min)) * (height - pad * 2));
  const d = vals.map((v, i) => (i ? "L" : "M") + x(i).toFixed(1) + "," + y(v).toFixed(1)).join("");
  const focus = active != null ? active : n - 1;
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setActive(Math.max(0, Math.min(n - 1, Math.round(((e.clientX - r.left - pad) / Math.max(1, width - pad * 2)) * (n - 1)))));
  };
  const name = (i) => (labels && labels[i] != null ? labels[i] : null);
  return (
    <div ref={ref} style={{ position: "relative", width: "100%", height, minWidth: 0, ...style }} {...rest}>
      {width > 0 && n ? (
        <svg width={width} height={height} role="img" style={{ display: "block", overflow: "visible", touchAction: "pan-y" }}
          aria-label={ariaLabel || "Trend from " + valueFormat(vals[0]) + " to " + valueFormat(vals[n - 1])}
          onPointerMove={onMove} onPointerLeave={() => setActive(null)}>
          <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx={x(focus)} cy={y(vals[focus])} r="5" fill={accent} stroke="var(--surface-card)" strokeWidth="2" />
        </svg>
      ) : null}
      {active != null ? (
        <ChartTooltip x={x(active)} y={y(vals[active]) - 12} containerWidth={width} title={name(active)}
          rows={[{ label: name(active) == null ? "Value" : "", value: valueFormat(vals[active]) }]} />
      ) : null}
    </div>
  );
}
