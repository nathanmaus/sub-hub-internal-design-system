const { Button, IconButton, Card, StatCard, StatusPill, DataTable, Tabs, Badge } = window.InternalDesignSystem;

const INVOICES = [
  { id: "INV-2041", customer: "Ridgeline Roofing", issued: "Mar 02", due: "Mar 16", amount: "$20,640", state: "paid", label: "Paid" },
  { id: "INV-2040", customer: "Ortiz Residence", issued: "Feb 27", due: "Mar 13", amount: "$9,470", state: "overdue", label: "Overdue 4d" },
  { id: "INV-2039", customer: "Calder Family Home", issued: "Feb 24", due: "Mar 10", amount: "$31,700", state: "pending", label: "Sent" },
  { id: "INV-2038", customer: "Bayview HVAC swap", issued: "Feb 20", due: "Mar 06", amount: "$6,075", state: "paid", label: "Paid" },
  { id: "INV-2037", customer: "Sunridge Duplex", issued: "Feb 18", due: "Mar 04", amount: "$44,305", state: "review", label: "Partial · 50%" },
];

function InvoicesScreen() {
  const [tab, setTab] = React.useState("all");
  const rows = tab === "all" ? INVOICES : INVOICES.filter((i) => i.state === (tab === "open" ? "pending" : "overdue"));
  return (
    <React.Fragment>
      <Topbar title="Invoices" module="Payments"
        actions={<React.Fragment>
          <Button size="sm" variant="secondary" icon="download">Export</Button>
          <Button size="sm" icon="plus">New invoice</Button>
        </React.Fragment>} />
      <PageBody>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          <StatCard label="Collected MTD" value="$186,420" delta="+14%" icon="circle-dollar-sign" footnote="9 invoices" />
          <StatCard label="Outstanding" value="$81,475" icon="hourglass" footnote="3 invoices open" />
          <StatCard label="Overdue" value="$9,470" delta="+1 invoice" deltaDirection="down" icon="alert-circle" />
          <StatCard label="Avg. days to pay" value="11.4" delta="-2.1" icon="clock" footnote="Rolling 90 days" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 18, alignItems: "start" }}>
          <div style={{ display: "grid", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
              <Tabs style={{ flex: 1 }} value={tab} onChange={setTab}
                tabs={[{ value: "all", label: "All", count: INVOICES.length }, { value: "open", label: "Open", count: 1 }, { value: "late", label: "Overdue", count: 1 }]} />
              <div style={{ paddingBottom: 10 }}><IconButton icon="filter" label="Filter" size="sm" variant="outline" /></div>
            </div>
            <DataTable rows={rows} columns={[
              { key: "id", label: "Invoice", mono: true, strong: true },
              { key: "customer", label: "Customer" },
              { key: "issued", label: "Issued", mono: true },
              { key: "due", label: "Due", mono: true },
              { key: "amount", label: "Amount", mono: true, align: "right" },
              { key: "state", label: "Status", render: (r) => <StatusPill state={r.state}>{r.label}</StatusPill> },
            ]} />
          </div>
          <Card tone="inverse" padding="20px" style={{ display: "grid", gap: 16 }}>
            <span className="eyebrow" style={{ color: "var(--teal-500)", letterSpacing: "var(--tracking-mono-label)" }}>Aging</span>
            {[["Current", "$31,700", "68%", "var(--sand-500)"], ["1–30 days", "$9,470", "20%", "var(--sand-400)"], ["31–60 days", "$5,600", "12%", "var(--sand-300)"]].map(([k, v, w, c]) => (
              <div key={k} style={{ display: "grid", gap: 7 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ font: "var(--type-body)", fontSize: 13.5, color: "var(--teal-300)" }}>{k}</span>
                  <span className="tabular" style={{ font: "var(--type-mono)", fontSize: 13, color: "var(--white)" }}>{v}</span>
                </div>
                <div style={{ height: 6, background: "rgba(255,255,255,0.10)", borderRadius: 999 }}>
                  <div style={{ width: w, height: "100%", background: c, borderRadius: 999 }} />
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border-inverse)", paddingTop: 14, display: "grid", gap: 8 }}>
              <Badge tone="ai-dark" uppercase>&#10022; AI collections</Badge>
              <span style={{ font: "var(--type-body)", fontSize: 13.5, color: "var(--teal-300)" }}>Two reminders queued for Ortiz Residence. Next send Friday 9:00.</span>
            </div>
          </Card>
        </div>
      </PageBody>
    </React.Fragment>
  );
}

Object.assign(window, { InvoicesScreen });
