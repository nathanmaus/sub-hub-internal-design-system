const { Button, Badge, Card, Field, Input, Select, Switch, HeroBanner, Icon, DataTable, StatusPill, Tabs } = window.InternalDesignSystem;

function EasyQuotePage({ setView }) {
  const [tab, setTab] = React.useState("solar");
  return (
    <React.Fragment>
      <HeroBanner width={1440} height={460} variant="amber"
        eyebrow="EasyQuote"
        title="Quote."
        subtitle="AI-generated solar, roofing and HVAC estimates with financing embedded — before you leave the driveway."
        assetPath="../../assets/"
        style={{ width: "100%" }} />

      <Band tone="card" pad="72px 32px">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          <div style={{ display: "grid", gap: 22 }}>
            <Kicker eyebrow="How it works" title="Address in. Designed system out." blurb="Customers enter their address and utility details; the algorithm designs a system and suggests panels based on their real electricity consumption." />
            <div style={{ display: "grid", gap: 14 }}>
              {[
                ["map-pin", "Address + utility", "Pulls usage and rate schedule."],
                ["sparkles", "AI system design", "Module count, layout, production estimate."],
                ["wallet", "Financing inline", "GoodLeap, Sungage, LightReach and Arcadia."],
                ["file-check", "Signed proposal", "Auto-creates the installation project."],
              ].map(([icon, t, d]) => (
                <div key={t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ width: 34, height: 34, flex: "0 0 auto", borderRadius: "var(--radius-control)", background: "var(--surface-brand-subtle)", color: "var(--sand-700)", display: "grid", placeItems: "center" }}><Icon name={icon} size={17} /></span>
                  <span style={{ display: "grid", gap: 3 }}>
                    <span style={{ font: "var(--type-label)", fontSize: 15.5, color: "var(--text-strong)" }}>{t}</span>
                    <span style={{ font: "var(--type-body)", fontSize: 14.5, color: "var(--text-muted)" }}>{d}</span>
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <Button iconTrailing="arrow-right">Book a Demo</Button>
              <Button variant="secondary" onClick={() => setView("pricing")}>See pricing</Button>
            </div>
          </div>

          <Card padding="0" style={{ overflow: "hidden" }}>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: 12 }}>
              <Badge tone="ai" uppercase>&#10022; AI-powered</Badge>
              <span className="eyebrow" style={{ marginLeft: "auto", color: "var(--text-subtle)", letterSpacing: "var(--tracking-mono-label)" }}>Instant estimate</span>
            </div>
            <div style={{ padding: 20, display: "grid", gap: 16 }}>
              <Tabs value={tab} onChange={setTab} tabs={[{ value: "solar", label: "Solar" }, { value: "roofing", label: "Roofing" }, { value: "hvac", label: "HVAC" }]} />
              {tab === "solar" ? (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <Field label="Service address" htmlFor="e1" style={{ gridColumn: "1 / -1" }}><Input id="e1" icon="map-pin" defaultValue="1408 Calder Ave, Bakersfield CA" /></Field>
                  <Field label="Monthly bill" htmlFor="e2"><Input id="e2" defaultValue="284" suffix="USD" /></Field>
                  <Field label="Utility" htmlFor="e3"><Select id="e3" options={["PG&E", "SCE", "SDG&E"]} /></Field>
                </div>
              ) : tab === "roofing" ? (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <Field label="Service address" htmlFor="r1" style={{ gridColumn: "1 / -1" }}><Input id="r1" icon="map-pin" defaultValue="88 Whitlock Rd, Bakersfield CA" /></Field>
                  <Field label="Squares" htmlFor="r2"><Input id="r2" defaultValue="32" suffix="sq" /></Field>
                  <Field label="Material" htmlFor="r3"><Select id="r3" options={["Architectural shingle", "Standing seam", "Tile"]} /></Field>
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <Field label="Service address" htmlFor="h1" style={{ gridColumn: "1 / -1" }}><Input id="h1" icon="map-pin" defaultValue="12 Bayview Ct, Bakersfield CA" /></Field>
                  <Field label="Tonnage" htmlFor="h2"><Input id="h2" defaultValue="4" suffix="ton" /></Field>
                  <Field label="System" htmlFor="h3"><Select id="h3" options={["Heat pump", "Split system", "Package unit"]} /></Field>
                </div>
              )}
              <Switch label="Show monthly payment options to the homeowner" defaultChecked />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, paddingTop: 4 }}>
                {[["System", tab === "solar" ? "11.2 kW" : tab === "roofing" ? "32 sq" : "4 ton"], ["Contract", tab === "solar" ? "$46,830" : tab === "roofing" ? "$21,400" : "$12,150"], ["From", tab === "solar" ? "$186/mo" : tab === "roofing" ? "$142/mo" : "$98/mo"]].map(([k, v]) => (
                  <div key={k} style={{ display: "grid", gap: 5, padding: "12px 14px", background: "var(--surface-sunken)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                    <span className="eyebrow" style={{ color: "var(--text-subtle)", letterSpacing: "var(--tracking-mono-label)" }}>{k}</span>
                    <span className="tabular" style={{ font: "var(--weight-semibold) 18px/1 var(--font-mono)", color: "var(--text-strong)" }}>{v}</span>
                  </div>
                ))}
              </div>
              <Button fullWidth size="lg" icon="send">Send proposal</Button>
            </div>
          </Card>
        </div>
      </Band>

      <Band pad="72px 32px">
        <Kicker eyebrow="Financing" title="Four lenders, quoted inside the estimate." />
        <DataTable rows={[
          { id: 1, lender: "GoodLeap", product: "Loan · 25yr", rate: "4.99%", monthly: "$186/mo", state: "approved", label: "Instant decision" },
          { id: 2, lender: "Sungage", product: "Loan · 20yr", rate: "5.49%", monthly: "$204/mo", state: "approved", label: "Instant decision" },
          { id: 3, lender: "LightReach", product: "PPA · $0 down", rate: "—", monthly: "$142/mo", state: "review", label: "Same-day" },
          { id: 4, lender: "Arcadia", product: "Community solar", rate: "—", monthly: "$96/mo", state: "pending", label: "Market dependent" },
        ]} columns={[
          { key: "lender", label: "Lender", strong: true },
          { key: "product", label: "Product" },
          { key: "rate", label: "Rate", mono: true, align: "right" },
          { key: "monthly", label: "Monthly", mono: true, align: "right" },
          { key: "state", label: "Approval", render: (r) => <StatusPill state={r.state}>{r.label}</StatusPill> },
        ]} />
      </Band>
    </React.Fragment>
  );
}

Object.assign(window, { EasyQuotePage });
