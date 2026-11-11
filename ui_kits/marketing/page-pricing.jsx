const { Button, Badge, Card, Icon, HeroBanner, DataTable } = window.InternalDesignSystem;

const PLANS = [
  { name: "Sales Velocity", price: "$500", unit: "/month", line: "Pipeline CRM, automated follow-ups, rep workspaces.", features: ["Every lead in one place", "Rep leaderboards", "Proposal tool with financing", "Zapier + CRM sync"] },
  { name: "Project Management", price: "$500", unit: "/month", line: "Crew scheduling, milestones and real-time job status.", features: ["Trade-specific milestone templates", "In-house crews + subs", "Customer updates", "Milestone-triggered billing"], featured: true },
  { name: "Ambassador", price: "$500", unit: "/month", line: "Referral program with automatic commission payouts.", features: ["Referral tracking", "Automatic commissions", "Customer portal", "Payout reporting"] },
  { name: "EasyQuote", price: "$2,500", unit: "/month + $35 per opportunity", line: "AI quoting with embedded financing.", features: ["AI system design", "4 embedded lenders", "Branded proposals", "Auto-creates the project"] },
];

function PlanCard({ p }) {
  return (
    <Card padding="24px" style={{ display: "grid", gap: 18, alignContent: "start", borderColor: p.featured ? "var(--border-brand)" : undefined, boxShadow: p.featured ? "var(--shadow-md)" : undefined }}>
      <div style={{ display: "grid", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ font: "var(--type-h3)", color: "var(--text-strong)" }}>{p.name}</span>
          {p.featured ? <Badge tone="accent">Most picked</Badge> : null}
        </div>
        <span style={{ font: "var(--type-body)", fontSize: 14.5, color: "var(--text-muted)" }}>{p.line}</span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
        <span className="tabular" style={{ font: "var(--weight-bold) 38px/1 var(--font-mono)", color: "var(--text-strong)" }}>{p.price}</span>
        <span className="eyebrow" style={{ color: "var(--text-subtle)", letterSpacing: "var(--tracking-mono-label)" }}>{p.unit}</span>
      </div>
      <div style={{ display: "grid", gap: 9, borderTop: "1px solid var(--border-subtle)", paddingTop: 16 }}>
        {p.features.map((f) => (
          <span key={f} style={{ display: "flex", gap: 9, alignItems: "flex-start", font: "var(--type-body)", fontSize: 14.5, color: "var(--text-body)" }}>
            <Icon name="check" size={16} color="var(--sand-400)" style={{ marginTop: 3 }} />{f}
          </span>
        ))}
      </div>
      <Button fullWidth variant={p.featured ? "primary" : "secondary"}>Book a Demo</Button>
    </Card>
  );
}

function PricingPage() {
  return (
    <React.Fragment>
      <HeroBanner width={1440} height={440} variant="editorial"
        eyebrow="Modular pricing"
        title="Pricing."
        subtitle="Four modules, priced per month. Pay for what you run — start with one and add the rest as you grow."
        assetPath="../../assets/"
        style={{ width: "100%" }} />

      <Band tone="card" pad="72px 32px">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, alignItems: "start" }}>
          {PLANS.map((p) => <PlanCard key={p.name} p={p} />)}
        </div>
      </Band>

      <Band pad="72px 32px">
        <Kicker eyebrow="Every plan includes" title="One login, three trades." />
        <DataTable rows={[
          { id: 1, f: "Trade coverage", d: "Solar, roofing and HVAC in the same dashboard", inc: "All plans" },
          { id: 2, f: "Languages", d: "English and Spanish", inc: "All plans" },
          { id: 3, f: "Integrations", d: "Zapier — Zoho, HubSpot, Salesforce, Keap", inc: "All plans" },
          { id: 4, f: "Support", d: "Onboarding and a named account team", inc: "All plans" },
        ]} columns={[
          { key: "f", label: "Feature", strong: true },
          { key: "d", label: "Detail" },
          { key: "inc", label: "Included", mono: true, align: "right" },
        ]} />
        <p style={{ marginTop: 16, font: "var(--type-body)", fontSize: 13.5, color: "var(--text-subtle)" }}>Pricing shown reflects publicly listed rates. Confirm current pricing with the SubcontractorHub team.</p>
      </Band>
    </React.Fragment>
  );
}

Object.assign(window, { PricingPage });
