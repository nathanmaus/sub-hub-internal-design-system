import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Card } from "./Card.jsx";
import { Sparkline } from "../charts/Sparkline.jsx";

export function StatCard({ label, value, delta, deltaDirection = "up", icon, footnote, trend, trendLabels, style, ...rest }) {
  const good = deltaDirection === "up";
  return (
    <Card padding="18px 20px" style={{ display: "grid", gap: 10, ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <span style={{ font: "var(--weight-semibold) var(--size-eyebrow, 12px)/1 var(--font-sans)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-subtle)" }}>{label}</span>
        {icon ? <Icon name={icon} size={17} color="var(--text-subtle)" /> : null}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span className="tabular" style={{ font: "var(--weight-bold) 30px/1.1 var(--font-mono)", color: "var(--text-strong)" }}>{value}</span>
        {delta ? (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 3, font: "var(--type-label)", fontSize: 13, color: good ? "var(--status-success-text)" : "var(--status-danger-text)" }}>
            <Icon color="currentColor" name={good ? "trending-up" : "trending-down"} size={14} />
            {delta}
          </span>
        ) : null}
      </div>
      {trend && trend.length > 1 ? <Sparkline data={trend} labels={trendLabels} height={32} ariaLabel={label + " trend"} /> : null}
      {footnote ? <span style={{ font: "var(--type-body)", fontSize: 13, color: "var(--text-muted)" }}>{footnote}</span> : null}
    </Card>
  );
}
