const { Button, IconButton, Badge, StatusPill, Card, Tabs, Icon, DataTable } = window.InternalDesignSystem;

const COLUMNS = [
  { stage: "Site survey", tone: "var(--chart-5)", jobs: [
    { name: "Alvarez Residence", meta: "Solar · 6.4 kW", crew: "Crew A", state: "pending", label: "Scheduled Tue" },
    { name: "Whitlock Re-roof", meta: "Roofing · 32 sq", crew: "Crew C", state: "draft", label: "Unassigned" },
  ] },
  { stage: "Design", tone: "var(--chart-3)", jobs: [
    { name: "Calder Family Home", meta: "Solar · 11.2 kW", crew: "Design", state: "review", label: "In review" },
  ] },
  { stage: "Permit", tone: "var(--chart-1)", jobs: [
    { name: "Bayview HVAC swap", meta: "HVAC · 4 ton", crew: "Ops", state: "pending", label: "City of Bayview" },
    { name: "Sunridge Duplex", meta: "Re-roof + solar", crew: "Ops", state: "overdue", label: "18 days out" },
  ] },
  { stage: "Install", tone: "var(--chart-2)", jobs: [
    { name: "Ridgeline Roofing", meta: "Solar · 8.4 kW", crew: "Crew B", state: "approved", label: "Day 2 of 3" },
  ] },
  { stage: "PTO", tone: "var(--chart-4)", jobs: [
    { name: "Ortiz Residence", meta: "Roof replacement", crew: "—", state: "paid", label: "Closed out" },
  ] },
];

function JobCard({ job }) {
  return (
    <Card interactive padding="13px 14px" style={{ display: "grid", gap: 9 }}>
      <span style={{ font: "var(--weight-semibold) 14.5px/1.25 var(--font-sans)", color: "var(--text-strong)" }}>{job.name}</span>
      <span className="eyebrow" style={{ color: "var(--text-subtle)", letterSpacing: "var(--tracking-mono-label)" }}>{job.meta}</span>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <StatusPill state={job.state} style={{ fontSize: 12.5, padding: "5px 10px" }}>{job.label}</StatusPill>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, font: "var(--type-mono)", fontSize: 11.5, color: "var(--text-muted)" }}>
          <Icon name="users" size={13} />{job.crew}
        </span>
      </div>
    </Card>
  );
}

function ProjectsScreen() {
  const [tab, setTab] = React.useState("board");
  return (
    <React.Fragment>
      <Topbar title="Projects" module="Project Management" actions={<Button size="sm" icon="plus">New project</Button>} />
      <PageBody>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
          <Tabs style={{ flex: 1 }} value={tab} onChange={setTab}
            tabs={[{ value: "board", label: "Board", count: 7 }, { value: "schedule", label: "Schedule" }, { value: "crews", label: "Crews", count: 4 }]} />
          <div style={{ display: "flex", gap: 8, paddingBottom: 10 }}>
            <Badge tone="neutral" icon="solar">Solar</Badge>
            <Badge tone="neutral" icon="home">Roofing</Badge>
            <Badge tone="neutral" icon="wind">HVAC</Badge>
          </div>
        </div>

        {tab === "board" ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, alignItems: "start" }}>
            {COLUMNS.map((c) => (
              <div key={c.stage} style={{ display: "grid", gap: 10, alignContent: "start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, paddingBottom: 9, borderBottom: "2px solid " + c.tone }}>
                  <span className="eyebrow" style={{ color: "var(--text-strong)", letterSpacing: "var(--tracking-mono-label)" }}>{c.stage}</span>
                  <span className="tabular" style={{ marginLeft: "auto", font: "var(--type-mono)", fontSize: 11.5, color: "var(--text-subtle)" }}>{c.jobs.length}</span>
                </div>
                {c.jobs.map((j) => <JobCard key={j.name} job={j} />)}
              </div>
            ))}
          </div>
        ) : tab === "schedule" ? (
          <Card padding="20px" style={{ display: "grid", gap: 16 }}>
            <SectionHead label="Week of Mar 10" />
            <div style={{ display: "grid", gap: 10 }}>
              {[
                ["Ridgeline Roofing", "Crew B · install", 1, 3, "var(--chart-1)"],
                ["Alvarez Residence", "Crew A · site survey", 2, 1, "var(--chart-5)"],
                ["Bayview HVAC swap", "Ops · inspection", 4, 1, "var(--chart-2)"],
                ["Sunridge Duplex", "Crew C · tear-off", 3, 2, "var(--chart-3)"],
              ].map(([name, meta, start, span, color]) => (
                <div key={name} style={{ display: "grid", gridTemplateColumns: "190px 1fr", gap: 14, alignItems: "center" }}>
                  <span style={{ display: "grid", gap: 2 }}>
                    <span style={{ font: "var(--type-label)", color: "var(--text-strong)" }}>{name}</span>
                    <span className="eyebrow" style={{ color: "var(--text-subtle)", letterSpacing: "var(--tracking-mono-label)" }}>{meta}</span>
                  </span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6, background: "var(--surface-sunken)", borderRadius: "var(--radius-sm)", padding: 4 }}>
                    <div style={{ gridColumn: start + " / span " + span, height: 26, background: color, borderRadius: "var(--radius-xs)" }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "190px 1fr", gap: 14 }}>
              <span />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6, padding: "0 4px" }}>
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => <span key={d} className="eyebrow" style={{ color: "var(--text-subtle)", letterSpacing: "var(--tracking-mono-label)", textAlign: "center" }}>{d}</span>)}
              </div>
            </div>
          </Card>
        ) : (
          <DataTable rows={[
            { id: 1, crew: "Crew A", lead: "Marcus Lee", trade: "Solar", jobs: "3", util: "82%" },
            { id: 2, crew: "Crew B", lead: "Tasha Bell", trade: "Solar", jobs: "2", util: "96%" },
            { id: 3, crew: "Crew C", lead: "Dev Patel", trade: "Roofing", jobs: "4", util: "74%" },
            { id: 4, crew: "Ops", lead: "Renee Cruz", trade: "Permits", jobs: "7", util: "61%" },
          ]} columns={[
            { key: "crew", label: "Crew", strong: true },
            { key: "lead", label: "Lead" },
            { key: "trade", label: "Trade" },
            { key: "jobs", label: "Active jobs", mono: true, align: "right" },
            { key: "util", label: "Utilization", mono: true, align: "right" },
          ]} />
        )}
      </PageBody>
    </React.Fragment>
  );
}

Object.assign(window, { ProjectsScreen });
