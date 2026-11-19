import React from "react";
import {
  seriesColor, formatNumber, formatCompact, useChartWidth, cartesianLayout, GridAndYAxis, XLabels,
  ChartTooltip, ChartLegend, useActiveIndex,
} from "./ChartKit.jsx";

export function LineChart({
  data = [], series = [], height = 240, valueFormat = formatNumber, tickFormat = formatCompact,
  area, legend, ariaLabel, style, ...rest
}) {
  const [ref, width] = useChartWidth();
  const { active, setActive, keyProps } = useActiveIndex(data.length);
  const L = cartesianLayout({ width, height, data, series, tickFormat });
  const n = data.length;
  const inset = 8; // first and last points sit clear of the axis
  const step = n > 1 ? (L.plotW - inset * 2) / (n - 1) : 0;
  const xAt = (i) => L.m.left + inset + (n > 1 ? step * i : (L.plotW - inset * 2) / 2);
  const showArea = area != null ? area : series.length === 1;
  const showLegend = legend != null ? legend : series.length > 1;
  const baseY = L.m.top + L.plotH;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const i = Math.round((e.clientX - r.left - L.m.left - inset) / (step || 1));
    setActive(n ? Math.max(0, Math.min(n - 1, i)) : null);
  };
  const tip = active != null && data[active] ? {
    x: xAt(active), y: Math.min(...series.map((s) => L.y(data[active][s.key]))) - 12,
    title: data[active].label,
    rows: series.map((s, si) => ({ label: s.label, color: seriesColor(s, si), value: valueFormat(data[active][s.key]) })),
  } : null;

  return (
    <div style={{ display: "grid", gap: 12, minWidth: 0, ...style }} {...rest}>
      {showLegend ? <ChartLegend items={series.map((s, i) => ({ label: s.label, color: seriesColor(s, i), line: true }))} /> : null}
      <div ref={ref} style={{ position: "relative", width: "100%", height }}>
        {width > 0 ? (
          <svg
            width={width} height={height} role="img" {...keyProps}
            aria-label={ariaLabel || "Line chart: " + series.map((s) => s.label).join(", ") + ", " + (data[0] ? data[0].label : "") + " to " + (data[n - 1] ? data[n - 1].label : "")}
            onPointerMove={onMove} onPointerLeave={() => setActive(null)}
            style={{ display: "block", outline: "none", touchAction: "pan-y" }}
          >
            <GridAndYAxis L={L} width={width} />
            {series.map((s, si) => {
              const pts = data.map((d, i) => [xAt(i), L.y(d[s.key])]);
              const line = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join("");
              const color = seriesColor(s, si);
              return (
                <g key={s.key}>
                  {showArea && pts.length ? (
                    <path d={line + `L${pts[pts.length - 1][0]},${baseY}L${pts[0][0]},${baseY}Z`} fill={color} opacity="0.1" />
                  ) : null}
                  <path d={line} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                </g>
              );
            })}
            {active != null ? (
              <g aria-hidden="true">
                <line x1={Math.round(xAt(active)) + 0.5} x2={Math.round(xAt(active)) + 0.5} y1={L.m.top} y2={baseY} stroke="var(--border-default)" strokeWidth="1" />
                {series.map((s, si) => (
                  <circle key={s.key} cx={xAt(active)} cy={L.y(data[active][s.key])} r="5" fill={seriesColor(s, si)} stroke="var(--surface-card)" strokeWidth="2" />
                ))}
              </g>
            ) : (
              // At rest, mark only the latest point of each series.
              n ? series.map((s, si) => (
                <circle key={s.key} cx={xAt(n - 1)} cy={L.y(data[n - 1][s.key])} r="5" fill={seriesColor(s, si)} stroke="var(--surface-card)" strokeWidth="2" />
              )) : null
            )}
            <XLabels labels={data.map((d) => d.label)} xAt={xAt} L={L} band={n > 1 ? step : L.plotW} />
          </svg>
        ) : null}
        {tip ? <ChartTooltip {...tip} containerWidth={width} /> : null}
      </div>
    </div>
  );
}
