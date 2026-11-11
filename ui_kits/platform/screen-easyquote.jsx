const { Button, Badge, Card, Field, Input, Select, Switch, StatusPill, Icon, DataTable } = window.InternalDesignSystem;

const FINANCING = [
  { id: "gl", lender: "GoodLeap", product: "25yr · 4.99%", monthly: "$186/mo", state: "approved", label: "Approved" },
  { id: "sg", lender: "Sungage", product: "20yr · 5.49%", monthly: "$204/mo", state: "review", label: "In review" },
  { id: "lr", lender: "LightReach", product: "PPA · $0 down", monthly: "$142/mo", state: "pending", label: "Quote pending" },
];

function LineItems() {
  const items = [
    ["24 × Q-Cell 400W module", "$14,400"],
    ["Enphase IQ8 microinverters", "$6,120"],
    ["Racking + BOS", "$3,480"],
    ["Labor · 3 crew days", "$7,200"],
    ["Permit + interconnection", "$1,850"],
  ];
  return (
    <div style={{ display: "grid", gap: 0 }}>
      {items.map(([l, v], i) => (
        <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: i === items.length - 1 ? "none" : "1px solid var(--border-subtle)" }}>
          <span style={{ font: "var(--type-body)", fontSize: 14.5, color: "var(--text-body)" }}>{l}</span>
          <span className="tabular" style={{ font: "var(--type-mono)", fontSize: 13.5, color: "var(--text-strong)" }}>{v}</span>
        </div>
      ))}
    </div>
  );
}

function EasyQuoteScreen({ onSend }) {
  const [battery, setBattery] = React.useState(false);
  const total = battery ? "$46,830" : "$33,050";
  const net = battery ? "$32,781" : "$23,135";
  return (
    <React.Fragment>
      <Topbar title="Calder Family Home" module="EasyQuote"
        actions={<React.Fragment>
          <Button size="sm" variant="secondary" icon="printer">Preview PDF</Button>
          <Button size="sm" icon="send" onClick={onSend}>Send proposal</Button>
        </React.Fragment>} />
      <PageBody>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 18, alignItems: "start" }}>
          <div style={{ display: "grid", gap: 18 }}>
            <Card padding="20px" style={{ display: "grid", gap: 16 }}>
              <SectionHead label="System" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Field label="Customer" htmlFor="q1"><Input id="q1" defaultValue="Calder Family Home" /></Field>
                <Field label="Trade" htmlFor="q2"><Select id="q2" options={["Solar", "Roofing", "HVAC"]} /></Field>
                <Field label="System size" hint="Nameplate DC" htmlFor="q3"><Input id="q3" defaultValue="11.2" suffix="kW" /></Field>
                <Field label="Annual usage" htmlFor="q4"><Input id="q4" defaultValue="14,820" suffix="kWh" /></Field>
                <Field label="Roof pitch" htmlFor="q5"><Input id="q5" defaultValue="6:12" /></Field>
                <Field label="Utility" htmlFor="q6"><Select id="q6" options={["PG&E", "SCE", "SDG&E"]} /></Field>
              </div>
              <div style={{ display: "grid", gap: 10, paddingTop: 4 }}>
                <Switch label="Add 13.5 kWh battery (+$13,780)" checked={battery} onChange={setBattery} />
                <Switch label="Include 30% federal ITC in customer view" defaultChecked />
              </div>
            </Card>
            <Card padding="20px" style={{ display: "grid", gap: 14 }}>
              <SectionHead label="Line items">
                <Button size="sm" variant="ghost" icon="plus">Add adder</Button>
              </SectionHead>
              <LineItems />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: 6, borderTop: "1.5px solid var(--border-strong)" }}>
                <span style={{ font: "var(--type-label)", color: "var(--text-strong)" }}>Contract total</span>
                <span className="tabular" style={{ font: "var(--weight-semibold) 26px/1 var(--font-mono)", color: "var(--text-strong)" }}>{total}</span>
              </div>
            </Card>
          </div>

          <div style={{ display: "grid", gap: 18 }}>
            <Card padding="0" style={{ overflow: "hidden" }}>
              <div style={{ position: "relative", background: "var(--teal-950)", padding: "22px 24px 20px", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--blueprint-rule-fine) 1px,transparent 1px),linear-gradient(90deg,var(--blueprint-rule-fine) 1px,transparent 1px)", backgroundSize: "34px 34px" }} />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(340px 200px at 82% 40%, var(--blueprint-glow-blue), transparent 70%)" }} />
                <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20 }}>
                  <div style={{ display: "grid", gap: 12 }}>
                    <Badge tone="ai-dark" uppercase>&#10022; AI design</Badge>
                    <span style={{ font: "var(--weight-bold) 44px/0.92 var(--font-display)", letterSpacing: "var(--tracking-display)", color: "var(--white)" }}>{battery ? "11.2 kW + 13.5 kWh" : "11.2 kW"}</span>
                    <div style={{ display: "flex", gap: 22 }}>
                      {[["Modules", "24"], ["Offset", "104%"], ["Pitch", "6:12"]].map(([k, v]) => (
                        <span key={k} style={{ display: "grid", gap: 4 }}>
                          <span className="eyebrow" style={{ color: "var(--teal-500)", letterSpacing: "var(--tracking-mono-label)" }}>{k}</span>
                          <span className="tabular" style={{ font: "var(--type-mono)", fontSize: 15, color: "var(--sand-400)" }}>{v}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <svg viewBox="0 0 260 170" style={{ width: 250, height: 164, flex: "0 0 auto" }} fill="none">
                    <polygon points="130,158 236,100 130,42 24,100" fill="#152021" opacity=".8" />
                    <polygon points="130,158 236,100 130,42 24,100" stroke="#466164" strokeWidth="1" strokeDasharray="5 7" />
                    <polygon points="130,42 236,100 190,20 78,26" fill="#2B3D3F" stroke="#81D1DA" strokeWidth="1.4" />
                    <g fill="#193A3E" stroke="#8FD6DE" strokeWidth="0.9">
                      <polygon points="112,52 140,44 130,30 104,38" /><polygon points="144,43 172,35 162,21 136,29" />
                      <polygon points="140,64 168,56 158,42 132,50" /><polygon points="172,55 200,47 190,33 164,41" />
                      <polygon points="84,62 112,54 102,40 76,48" /><polygon points="116,74 144,66 134,52 108,60" />
                    </g>
                    <g fill="#D9B98A" fillOpacity=".9" stroke="#E5CDA9" strokeWidth="1">
                      <polygon points="144,43 172,35 162,21 136,29" /><polygon points="116,74 144,66 134,52 108,60" />
                    </g>
                    <g fill="#81D1DA"><circle cx="130" cy="158" r="3" /><circle cx="236" cy="100" r="3" /><circle cx="24" cy="100" r="3" /><circle cx="130" cy="42" r="3" /></g>
                  </svg>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid var(--border-subtle)" }}>
                {[["Contract", total], ["Net after ITC", net], ["Est. yr-1 savings", "$2,940"]].map(([k, v], i) => (
                  <div key={k} style={{ padding: "14px 18px", borderLeft: i ? "1px solid var(--border-subtle)" : "none", display: "grid", gap: 6 }}>
                    <span className="eyebrow" style={{ color: "var(--text-subtle)", letterSpacing: "var(--tracking-mono-label)" }}>{k}</span>
                    <span className="tabular" style={{ font: "var(--weight-semibold) 21px/1 var(--font-mono)", color: "var(--text-strong)" }}>{v}</span>
                  </div>
                ))}
              </div>
            </Card>
            <div style={{ display: "grid", gap: 14 }}>
              <SectionHead label="Financing options">
                <span className="eyebrow" style={{ color: "var(--text-subtle)" }}>3 lenders quoted</span>
              </SectionHead>
              <DataTable dense rows={FINANCING} columns={[
                { key: "lender", label: "Lender", strong: true },
                { key: "product", label: "Product", mono: true },
                { key: "monthly", label: "Monthly", mono: true, align: "right" },
                { key: "state", label: "Status", render: (r) => <StatusPill state={r.state}>{r.label}</StatusPill> },
              ]} />
            </div>
          </div>
        </div>
      </PageBody>
    </React.Fragment>
  );
}

Object.assign(window, { EasyQuoteScreen });
