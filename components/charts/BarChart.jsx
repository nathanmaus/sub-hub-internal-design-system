import React from "react";
import {
  seriesColor, formatNumber, formatCompact, useChartWidth, cartesianLayout, GridAndYAxis, XLabels,
  ChartTooltip, ChartLegend, useActiveIndex,
} from "./ChartKit.jsx";

// A bar with a 4px rounded data end and a square baseline.
function barPath(x, y, w, h) {
  if (h <= 0) return "";
  const r = Math.min(4, w / 2, h);
  return `M${x},${y + h}V${y + r}Q${x},${y} ${x + r},${y}H${x + w - r}Q${x + w},${y} ${x + w},${y + r}V${y + h}Z`;
}

export function BarChart({
  data = [], series = [], height = 240, valueFormat = formatNumber, tickFormat = formatCompact,
  legend, ariaLabel, style, ...rest
}) {
  const [ref, width] = useChartWidth();
  const { active, setActive, keyProps } = useActiveIndex(data.length);
  const L = cartesianLayout({ width, height, data, series, tickFormat });
  const n = Math.max(1, data.length);
  const band = L.plotW / n;
  const ns = Math.max(1, series.length);
  const gap = 2; // surface gap between bars in a group
  const barW = Math.max(4, Math.min(24, (band * 0.64 - gap * (ns - 1)) / ns));
  const groupW = barW * ns + gap * (ns - 1);
  const xAt = (i) => L.m.left + band * i + band / 2;
  const showLegend = legend != null ? legend : series.length > 1;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const i = Math.floor((e.clientX - r.left - L.m.left) / band);
    setActive(i >= 0 && i < data.length ? i : null);
  };
  const tip = active != null && data[active] ? {
    x: xAt(active), y: L.y(Math.max(...series.map((s) => +data[active][s.key] || 0))) - 8,
    title: data[active].label,
    rows: series.map((s, si) => ({ label: s.label, color: seriesColor(s, si), value: valueFormat(data[active][s.key]) })),
  } : null;

  return (
    <div style={{ display: "grid", gap: 12, minWidth: 0, ...style }} {...rest}>
      {showLegend ? <ChartLegend items={series.map((s, i) => ({ label: s.label, color: seriesColor(s, i) }))} /> : null}
      <div ref={ref} style={{ position: "relative", width: "100%", height }}>
        {width > 0 ? (
          <svg
            width={width} height={height} role="img" {...keyProps}
            aria-label={ariaLabel || "Bar chart: " + series.map((s) => s.label).join(", ") + " by " + data.map((d) => d.label).join(", ")}
            onPointerMove={onMove} onPointerLeave={() => setActive(null)}
            style={{ display: "block", outline: "none", touchAction: "pan-y" }}
          >
            <GridAndYAxis L={L} width={width} />
            {active != null ? (
              <rect x={L.m.left + band * active} y={L.m.top} width={band} height={L.plotH} fill="var(--surface-hover, var(--surface-sunken))" opacity="0.6" />
            ) : null}
            {data.map((d, i) => series.map((s, si) => {
              const x = xAt(i) - groupW / 2 + si * (barW + gap);
              const y = L.y(d[s.key]);
              return <path key={i + "-" + s.key} d={barPath(x, y, barW, L.m.top + L.plotH - y)} fill={seriesColor(s, si)} />;
            }))}
            <XLabels labels={data.map((d) => d.label)} xAt={xAt} L={L} band={band} />
          </svg>
        ) : null}
        {tip ? <ChartTooltip {...tip} containerWidth={width} /> : null}
      </div>
    </div>
  );
}
