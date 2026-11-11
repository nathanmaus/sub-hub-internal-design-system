const { Button, Badge, Card, StatCard, HeroBanner, Icon, StatusPill, Logo } = window.InternalDesignSystem;

const MODULES = [
  { name: "EasyQuote", icon: "file-text", line: "Send AI-generated quotes in minutes. Built-in financing so customers can say yes on the spot." },
  { name: "Sales Velocity", icon: "kanban", line: "Close more jobs faster with automated follow-ups, proposals, and a pipeline you can actually see." },
  { name: "Project Management", icon: "hard-hat", line: "Every job on one board — tasks, crew, timeline, and customer updates in one place." },
  { name: "Ambassador", icon: "users", line: "Turn happy customers into your best salespeople. Track referrals and pay commissions automatically." },
];

function ModuleCard({ m, active, onClick }) {
  return (
    <Card interactive onClick={onClick} padding="22px 24px"
      style={{ display: "grid", gap: 12, alignContent: "start", borderColor: active ? "var(--border-brand)" : undefined }}>
      <span style={{ width: 40, height: 40, borderRadius: "var(--radius-control)", background: active ? "var(--sand-400)" : "var(--surface-brand-subtle)", color: active ? "var(--white)" : "var(--sand-700)", display: "grid", placeItems: "center" }}>
        <Icon name={m.icon} size={20} />
      </span>
      <span style={{ font: "var(--type-h3)", color: "var(--text-strong)" }}>{m.name}</span>
      <span style={{ font: "var(--type-body)", fontSize: 15, color: "var(--text-body)" }}>{m.line}</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, font: "var(--type-label)", color: "var(--text-link)" }}>
        Explore <Icon name="arrow-right" size={15} />
      </span>
    </Card>
  );
}

function HomePage({ setView }) {
  const [active, setActive] = React.useState("EasyQuote");
  return (
    <React.Fragment>
      <HeroBanner width={1440} height={560} variant="blueprint"
        eyebrow="AI-native platform"
        title="Win the Job."
        subtitle={"Quote in minutes. Run the install. Get paid.\nOne login for roofing, solar and HVAC."}
        rail={["Quote", "Sell", "Build", "Pay"]}
        assetPath="../../assets/"
        style={{ width: "100%" }} />

      <Band tone="card" pad="22px 32px">
        <div style={{ display: "flex", alignItems: "center", gap: 30, flexWrap: "wrap" }}>
          <span className="eyebrow" style={{ color: "var(--text-subtle)", letterSpacing: "var(--tracking-mono-label)" }}>Trusted by 500+ roofing, solar &amp; HVAC teams</span>
          <span style={{ flex: 1, height: 1, background: "var(--border-subtle)", minWidth: 40 }} />
          <div style={{ display: "flex", gap: 12 }}>
            <Badge tone="neutral" icon="solar">Solar</Badge>
            <Badge tone="neutral" icon="home">Roofing</Badge>
            <Badge tone="neutral" icon="wind">HVAC</Badge>
          </div>
          <Button variant="ghost" size="sm" iconTrailing="arrow-right" onClick={() => setView("pricing")}>See pricing</Button>
        </div>
      </Band>

      <Band>
        <Kicker eyebrow="One platform" title="Every tool runs on AI." blurb="So your team quotes in minutes, closes more jobs, and gets paid faster — without adding overhead." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {MODULES.map((m) => <ModuleCard key={m.name} m={m} active={active === m.name} onClick={() => setActive(m.name)} />)}
        </div>
      </Band>

      <Band tone="ink">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div style={{ display: "grid", gap: 24 }}>
            <Kicker inverse eyebrow="✦ EasyQuote" title="The close happens at the table." blurb="Homeowners see the net cost after the 30% ITC, their estimated monthly savings, and three payment options before the rep finishes presenting." />
            <div style={{ display: "flex", gap: 12 }}>
              <Button variant="accent" iconTrailing="arrow-right" onClick={() => setView("easyquote")}>See EasyQuote</Button>
              <Button variant="dark" style={{ border: "1px solid var(--border-inverse)" }}>Book a Demo</Button>
            </div>
          </div>
          <Card tone="inverse" padding="0" style={{ overflow: "hidden" }}>
            <div style={{ padding: "18px 20px", borderBottom: "1px solid var(--border-inverse)", display: "flex", alignItems: "center", gap: 12 }}>
              <Badge tone="ai-dark" uppercase>&#10022; AI design</Badge>
              <span className="eyebrow" style={{ marginLeft: "auto", color: "var(--teal-500)", letterSpacing: "var(--tracking-mono-label)" }}>1408 Calder Ave</span>
            </div>
            <div style={{ padding: "20px", display: "grid", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                <span className="tabular" style={{ font: "var(--weight-bold) 46px/1 var(--font-mono)", color: "var(--white)" }}>11.2</span>
                <span className="eyebrow" style={{ color: "var(--sand-400)" }}>kW · 24 modules · 104% offset</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
                {[["Contract", "$46,830"], ["Net after ITC", "$32,781"], ["From", "$186/mo"]].map(([k, v]) => (
                  <div key={k} style={{ display: "grid", gap: 5, padding: "12px 14px", background: "rgba(255,255,255,0.05)", borderRadius: "var(--radius-md)" }}>
                    <span className="eyebrow" style={{ color: "var(--teal-500)", letterSpacing: "var(--tracking-mono-label)" }}>{k}</span>
                    <span className="tabular" style={{ font: "var(--type-mono)", fontSize: 16, color: "var(--white)" }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <StatusPill state="approved">GoodLeap approved</StatusPill>
                <StatusPill state="review">Sungage in review</StatusPill>
                <StatusPill state="pending">LightReach PPA</StatusPill>
              </div>
            </div>
          </Card>
        </div>
      </Band>

      <Band tone="card">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          <StatCard label="Installs / month" value="600+" footnote="Largest single customer" icon="hard-hat" />
          <StatCard label="Teams on platform" value="500+" footnote="Roofing, solar, HVAC" icon="users" />
          <StatCard label="Quote to signature" value="19 days" delta="-3 days" icon="clock" footnote="Solar average" />
          <StatCard label="Trades in one login" value="3" footnote="No separate systems" icon="layers" />
        </div>
      </Band>

      <Band>
        <Kicker eyebrow="From the field" title="Software built by people who worked in the industry." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {[
            ["“One of the most — if not THE most — modular solar and roofing proposal and CRM platform.”", "We do 600+ installations a month."],
            ["“SubcontractorHub, by far, hands down, is the best.”", "Middle processor, roofing."],
            ["“So awesome to see software built from people who actually worked in the industry instead of outsiders.”", "Seamless Energy."],
          ].map(([q, a]) => (
            <Card key={q} padding="24px" style={{ display: "grid", gap: 16, alignContent: "start" }}>
              <span style={{ font: "var(--weight-medium) 18px/1.4 var(--font-sans)", letterSpacing: "-0.01em", color: "var(--text-strong)" }}>{q}</span>
              <span className="eyebrow" style={{ color: "var(--text-subtle)", letterSpacing: "var(--tracking-mono-label)" }}>{a}</span>
            </Card>
          ))}
        </div>
      </Band>

      <Band tone="amber" pad="72px 32px">
        <div style={{ display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div style={{ display: "grid", gap: 14, flex: 1, minWidth: 380 }}>
            <span className="eyebrow" style={{ color: "var(--teal-900)" }}>Free 30-min demo</span>
            <span style={{ font: "var(--weight-bold) 52px/0.94 var(--font-display)", letterSpacing: "var(--tracking-display)", color: "var(--teal-900)" }}>See it in action.</span>
            <span style={{ font: "var(--weight-medium) 19px/1.45 var(--font-sans)", color: "#2E4042", maxWidth: 520 }}>Quotes, projects, payments and reporting — all in one platform.</span>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Button variant="dark" size="lg" iconTrailing="arrow-right">Book a Free Demo</Button>
            <Button variant="secondary" size="lg">Talk to the Team</Button>
          </div>
        </div>
      </Band>
    </React.Fragment>
  );
}

Object.assign(window, { HomePage });
