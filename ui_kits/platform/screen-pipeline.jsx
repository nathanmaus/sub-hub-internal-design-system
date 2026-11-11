const { Button, IconButton, Badge, StatusPill, StatCard, DataTable, Tabs, Card } = window.InternalDesignSystem;

const OPPS = [
  { id: 1, customer: "Ridgeline Roofing", scope: "Solar · 8.4 kW", rep: "Jamie Ortiz", value: "$41,280", state: "approved", label: "Approved", bucket: "mine" },
  { id: 2, customer: "Ortiz Residence", scope: "Roof replacement", rep: "Dana Fields", value: "$18,940", state: "review", label: "In review", bucket: "all" },
  { id: 3, customer: "Bayview HVAC swap", scope: "HVAC · 4 ton", rep: "Jamie Ortiz", value: "$12,150", state: "pending", label: "Awaiting permit", bucket: "mine" },
  { id: 4, customer: "Calder Family Home", scope: "Solar · 11.2 kW + battery", rep: "Marcus Lee", value: "$63,400", state: "review", label: "Proposal sent", bucket: "all" },
  { id: 5, customer: "Sunridge Duplex", scope: "Re-roof + solar", rep: "Dana Fields", value: "$88,610", state: "pending", label: "Financing pending", bucket: "all" },
  { id: 6, customer: "Alvarez Residence", scope: "Solar · 6.4 kW", rep: "Jamie Ortiz", value: "$29,700", state: "draft", label: "Draft", bucket: "mine" },
];

const STAGES = [
  { label: "Lead", count: 24, value: "$412K", color: "var(--chart-5)" },
  { label: "Consult", count: 18, value: "$588K", color: "var(--chart-3)" },
  { label: "Proposal", count: 11, value: "$447K", color: "var(--chart-1)" },
  { label: "Financing", count: 6, value: "$196K", color: "var(--chart-2)" },
  { label: "Signed", count: 14, value: "$412K", color: "var(--chart-4)" },
];

function StageBar() {
  const max = 24;
  return (
    <Card padding="18px 20px">
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
        <span className="eyebrow" style={{ color: "var(--text-subtle)", letterSpacing: "var(--tracking-mono-label)" }}>Stages · this quarter</span>
        <span style={{ flex: 1, height: 1, background: "var(--border-subtle)" }} />
        <span className="tabular" style={{ font: "var(--type-mono)", fontSize: 13, color: "var(--text-muted)" }}>73 open · $2.05M</span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 20, height: 120 }}>
        {STAGES.map((s) => (
          <div key={s.label} style={{ flex: 1, display: "grid", gap: 8, justifyItems: "center", alignContent: "end" }}>
            <span className="tabular" style={{ font: "var(--weight-semibold) 15px/1 var(--font-mono)", color: "var(--text-strong)" }}>{s.value}</span>
            <div style={{ width: "100%", height: Math.round((s.count / max) * 74) + "px", background: s.color, transform: "skewX(-16deg)" }} />
            <span className="eyebrow" style={{ color: "var(--text-subtle)", letterSpacing: "var(--tracking-mono-label)" }}>{s.label} · {s.count}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function PipelineScreen({ onNewQuote }) {
  const [tab, setTab] = React.useState("all");
  const rows = tab === "all" ? OPPS : OPPS.filter((o) => o.bucket === "mine");
  return (
    <React.Fragment>
      <Topbar title="Pipeline" module="Sales Velocity" actions={<Button size="sm" icon="plus" onClick={onNewQuote}>New quote</Button>} />
      <PageBody>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          <StatCard label="Open pipeline" value="$2.05M" delta="+8%" icon="trending-up" footnote="73 opportunities" />
          <StatCard label="Signed this month" value="$412,800" delta="+12%" icon="circle-dollar-sign" footnote="14 contracts" />
          <StatCard label="Avg. close time" value="19 days" delta="-3 days" icon="clock" footnote="Solar, last 90 days" />
          <StatCard label="Overdue follow-ups" value="7" delta="+2" deltaDirection="down" icon="alert-circle" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 18, alignItems: "start" }}>
          <StageBar />
          <Card padding="18px 20px" style={{ display: "grid", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Badge tone="ai" uppercase>&#10022; AI-powered</Badge>
              <span className="eyebrow" style={{ color: "var(--text-subtle)", letterSpacing: "var(--tracking-mono-label)" }}>Next best actions</span>
            </div>
            {[
              ["Call the Calder job", "Proposal opened 4 times, no reply in 3 days."],
              ["Re-send Sunridge financing", "GoodLeap application expires Friday."],
              ["Quote the Alvarez adder", "Homeowner asked about a battery on Tuesday."],
            ].map(([t, d]) => (
              <div key={t} style={{ display: "grid", gap: 3, paddingBottom: 12, borderBottom: "1px solid var(--border-subtle)" }}>
                <span style={{ font: "var(--type-label)", color: "var(--text-strong)" }}>{t}</span>
                <span style={{ font: "var(--type-body)", fontSize: 13.5, color: "var(--text-muted)" }}>{d}</span>
              </div>
            ))}
          </Card>
        </div>
        <div style={{ display: "grid", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
            <Tabs style={{ flex: 1 }} value={tab} onChange={setTab}
              tabs={[{ value: "all", label: "All opportunities", count: OPPS.length }, { value: "mine", label: "Mine", count: OPPS.filter((o) => o.bucket === "mine").length }]} />
            <div style={{ display: "flex", gap: 8, paddingBottom: 10 }}>
              <IconButton icon="filter" label="Filter" size="sm" variant="outline" />
              <IconButton icon="download" label="Export" size="sm" variant="outline" />
            </div>
          </div>
          <DataTable rows={rows} columns={[
            { key: "customer", label: "Customer", strong: true },
            { key: "scope", label: "Scope" },
            { key: "rep", label: "Rep" },
            { key: "value", label: "Contract", mono: true, align: "right" },
            { key: "state", label: "Status", render: (r) => <StatusPill state={r.state}>{r.label}</StatusPill> },
          ]} />
        </div>
      </PageBody>
    </React.Fragment>
  );
}

Object.assign(window, { PipelineScreen });
