import React from "react";
import { Card } from "../data/Card.jsx";

/* Shared chart plumbing: the categorical order, tick maths, a width hook, and the tooltip, legend,
   table view and card every chart sits in. Charts are plain React + SVG with no chart library.
   Every size is on the 4px grid; every colour is a token. */

// Categorical identity, in fixed order. Never cycled: a 4th series and beyond fold into Other.
export const CHART_COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)"];
export const CHART_OTHER = "var(--chart-other)";
// Ordinal one-hue ramp for ranked stages (FunnelChart): stage 1 carries the most contrast.
export const CHART_SEQ = ["var(--chart-seq-1)", "var(--chart-seq-2)", "var(--chart-seq-3)", "var(--chart-seq-4)"];

export function seriesColor(s, i) {
  if (s && s.color) return s.color;
  return i < CHART_COLORS.length ? CHART_COLORS[i] : CHART_OTHER;
}

const defaultFormat = (v) => (v == null || isNaN(v) ? "–" : Number(v).toLocaleString());
export { defaultFormat as formatNumber };

export function formatCompact(v) {
  const a = Math.abs(v);
  if (a >= 1e9) return +(v / 1e9).toFixed(1) + "B";
  if (a >= 1e6) return +(v / 1e6).toFixed(1) + "M";
  if (a >= 1e3) return +(v / 1e3).toFixed(1) + "K";
  return String(+v.toFixed(2));
}

// Rounded axis: max snaps up to 1, 2, 2.5 or 5 × 10^n so gridlines land on readable numbers.
export function niceScale(maxValue, count = 4) {
  const max = Math.max(0, maxValue || 0);
  if (max === 0) return { max: 1, ticks: [0, 1] };
  const raw = max / count;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw);
  const top = Math.ceil(max / step) * step;
  const ticks = [];
  for (let t = 0; t <= top + step / 2; t += step) ticks.push(+t.toFixed(10));
  return { max: top, ticks };
}

export const snap4 = (n) => Math.ceil(n / 4) * 4;

export function useChartWidth(initial = 0) {
  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(initial);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const measure = () => setWidth(Math.round(el.getBoundingClientRect().width));
    measure();
    if (typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, width];
}

const label12 = "var(--weight-regular) 12px/16px var(--font-sans)";
export const axisText = { font: label12, fill: "var(--text-muted)", fontVariantNumeric: "tabular-nums" };

// Hover card. Positioned inside the chart's relative wrapper and kept inside its edges.
export function ChartTooltip({ x, y, containerWidth, title, rows = [] }) {
  if (x == null) return null;
  const W = 192;
  const left = Math.max(0, Math.min(x - W / 2, (containerWidth || W) - W));
  return (
    <div
      role="presentation"
      style={{
        position: "absolute", left, top: Math.max(0, y), width: W, transform: "translateY(-100%)",
        pointerEvents: "none", zIndex: 2, boxSizing: "border-box",
        background: "var(--surface-card)", border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-sm, 8px)", boxShadow: "var(--shadow-md)", padding: "8px 12px",
        display: "grid", gap: 4,
      }}
    >
      {title != null ? (
        <span style={{ font: "var(--weight-semibold) 12px/16px var(--font-sans)", color: "var(--text-strong)" }}>{title}</span>
      ) : null}
      {rows.map((r, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: 8, font: label12, color: "var(--text-body)" }}>
          {r.color ? <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: 2, background: r.color, flex: "none" }} /> : null}
          <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.label}</span>
          <span style={{ fontWeight: "var(--weight-semibold)", color: "var(--text-strong)", fontVariantNumeric: "tabular-nums" }}>{r.value}</span>
        </span>
      ))}
    </div>
  );
}

export function ChartLegend({ items = [], style }) {
  if (!items.length) return null;
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "4px 16px", ...style }}>
      {items.map((it) => (
        <li key={it.label} style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "var(--weight-medium) 12px/16px var(--font-sans)", color: "var(--text-body)" }}>
          <span aria-hidden="true" style={{ width: 12, height: it.line ? 2 : 12, borderRadius: it.line ? 1 : 4, background: it.color }} />
          {it.label}
        </li>
      ))}
    </ul>
  );
}

// The table view: the same numbers as rows, for screen readers, print, and anyone who wants exact values.
export function ChartTable({ columns = [], rows = [], caption }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        {caption ? <caption style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={c.key} scope="col" style={{
                textAlign: c.align || (i === 0 ? "left" : "right"), padding: "8px 12px",
                font: "var(--weight-semibold) 12px/16px var(--font-sans)", letterSpacing: "var(--tracking-eyebrow)",
                textTransform: "uppercase", color: "var(--text-subtle)", borderBottom: "1px solid var(--border-subtle)",
              }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {columns.map((c, i) => (
                <td key={c.key} style={{
                  textAlign: c.align || (i === 0 ? "left" : "right"), padding: "8px 12px",
                  font: "var(--weight-regular) 14px/20px var(--font-sans)", fontVariantNumeric: "tabular-nums",
                  color: i === 0 ? "var(--text-body)" : "var(--text-strong)",
                  borderBottom: ri === rows.length - 1 ? "none" : "1px solid var(--border-subtle)",
                }}>{c.format ? c.format(r[c.key], r) : r[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Two-option switch between the chart and its table. Each option is a 44px touch target.
function ViewToggle({ view, onChange }) {
  const opt = (id, text) => {
    const on = view === id;
    return (
      <button
        type="button" aria-pressed={on} onClick={() => onChange(id)}
        style={{ appearance: "none", border: 0, background: "none", padding: 0, height: 44, cursor: "pointer", display: "inline-flex", alignItems: "center" }}
      >
        <span style={{
          display: "inline-flex", alignItems: "center", height: 32, padding: "0 12px", borderRadius: "var(--radius-sm, 8px)",
          font: "var(--weight-medium) 12px/16px var(--font-sans)",
          background: on ? "var(--surface-card)" : "transparent", color: on ? "var(--text-strong)" : "var(--text-muted)",
          boxShadow: on ? "var(--shadow-sm)" : "none",
        }}>{text}</span>
      </button>
    );
  };
  return (
    <div role="group" aria-label="Chart view" style={{ display: "inline-flex", alignItems: "center", gap: 0, padding: "0 4px", height: 44, borderRadius: "var(--radius-sm, 8px)", background: "var(--surface-sunken)", flex: "none" }}>
      {opt("chart", "Chart")}
      {opt("table", "Table")}
    </div>
  );
}

// The card a chart sits in: title, optional headline value, the Chart / Table switch, then the plot.
export function ChartCard({ title, subtitle, value, action, table, defaultView = "chart", children, style, ...rest }) {
  const [view, setView] = React.useState(defaultView);
  return (
    <Card padding="20px" style={{ display: "grid", gap: 16, minWidth: 0, ...style }} {...rest}>
      {title || action || table ? (
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div style={{ display: "grid", gap: 4, minWidth: 0 }}>
            {title ? <h3 style={{ margin: 0, font: "var(--weight-semibold) 16px/24px var(--font-sans)", color: "var(--text-strong)" }}>{title}</h3> : null}
            {subtitle ? <span style={{ font: "var(--weight-regular) 14px/20px var(--font-sans)", color: "var(--text-muted)" }}>{subtitle}</span> : null}
            {value ? <span style={{ font: "var(--weight-bold) 24px/32px var(--font-mono)", color: "var(--text-strong)", fontVariantNumeric: "tabular-nums" }}>{value}</span> : null}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {action}
            {table ? <ViewToggle view={view} onChange={setView} /> : null}
          </div>
        </div>
      ) : null}
      {table && view === "table" ? <ChartTable caption={title} {...table} /> : children}
    </Card>
  );
}

// Shared frame for the cartesian charts (BarChart, LineChart): one y axis from zero, recessive 1px grid.
export function cartesianLayout({ width, height, data, series, tickFormat = formatCompact }) {
  let maxV = 0;
  data.forEach((d) => series.forEach((s) => { maxV = Math.max(maxV, +d[s.key] || 0); }));
  const { max, ticks } = niceScale(maxV, 4);
  const tickLabels = ticks.map((t) => String(tickFormat(t)));
  const left = snap4(Math.ceil(Math.max(...tickLabels.map((t) => t.length)) * 7.5) + 12);
  const m = { top: 8, right: 8, bottom: 28, left };
  const plotW = Math.max(0, width - m.left - m.right);
  const plotH = Math.max(0, height - m.top - m.bottom);
  const y = (v) => m.top + plotH - (Math.max(0, +v || 0) / max) * plotH;
  return { m, plotW, plotH, y, ticks, tickLabels, max };
}

export function GridAndYAxis({ L, width }) {
  return (
    <g aria-hidden="true">
      {L.ticks.map((t, i) => (
        <g key={t}>
          <line x1={L.m.left} x2={width - L.m.right} y1={Math.round(L.y(t)) + 0.5} y2={Math.round(L.y(t)) + 0.5}
            stroke={i === 0 ? "var(--border-default)" : "var(--border-subtle)"} strokeWidth="1" />
          <text x={L.m.left - 8} y={L.y(t)} dy="4" textAnchor="end" style={axisText}>{L.tickLabels[i]}</text>
        </g>
      ))}
    </g>
  );
}

// Category labels under the plot, thinned so they never collide.
export function XLabels({ labels, xAt, L, band }) {
  const longest = Math.max(1, ...labels.map((l) => String(l).length)) * 7 + 8;
  const every = Math.max(1, Math.ceil(longest / Math.max(1, band)));
  return (
    <g aria-hidden="true">
      {labels.map((l, i) => (i % every === 0 ? (
        <text key={i} x={xAt(i)} y={L.m.top + L.plotH + 20} textAnchor="middle" style={axisText}>{l}</text>
      ) : null))}
    </g>
  );
}

// Arrow keys move the highlighted category, so the tooltip is reachable without a pointer.
export function useActiveIndex(count) {
  const [active, setActive] = React.useState(null);
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const d = e.key === "ArrowRight" ? 1 : -1;
      setActive((a) => (a == null ? (d > 0 ? 0 : count - 1) : Math.max(0, Math.min(count - 1, a + d))));
    } else if (e.key === "Escape") setActive(null);
  };
  return { active, setActive, keyProps: { tabIndex: 0, onKeyDown, onBlur: () => setActive(null) } };
}
