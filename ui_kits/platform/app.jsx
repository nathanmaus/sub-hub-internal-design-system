const { Button, Card, Field, Input, Select, Badge, Logo } = window.InternalDesignSystem;

function NewQuoteDialog({ open, onClose, onCreate }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "var(--scrim-inverse)", display: "grid", placeItems: "center", zIndex: 40 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 460, background: "var(--surface-card)", borderRadius: "var(--radius-panel)", boxShadow: "var(--shadow-overlay)", padding: 26, display: "grid", gap: 18 }}>
        <div style={{ display: "grid", gap: 8 }}>
          <Badge tone="ai" uppercase style={{ justifySelf: "start" }}>&#10022; EasyQuote</Badge>
          <span style={{ font: "var(--weight-bold) 27px/1.1 var(--font-display)", letterSpacing: "var(--tracking-heading)", color: "var(--text-strong)" }}>New quote</span>
          <span style={{ font: "var(--type-body)", fontSize: 14.5, color: "var(--text-muted)" }}>Enter the address and we design the system before you leave the driveway.</span>
        </div>
        <div style={{ display: "grid", gap: 14 }}>
          <Field label="Service address" htmlFor="na"><Input id="na" icon="map-pin" defaultValue="1408 Calder Ave, Bakersfield CA" /></Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <Field label="Trade" htmlFor="nt"><Select id="nt" options={["Solar", "Roofing", "HVAC"]} /></Field>
            <Field label="Monthly bill" htmlFor="nb"><Input id="nb" defaultValue="284" suffix="USD" /></Field>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button icon="sparkles" onClick={onCreate}>Design system</Button>
        </div>
      </div>
    </div>
  );
}

function Toast({ text, onDone }) {
  React.useEffect(() => { const t = setTimeout(onDone, 2600); return () => clearTimeout(t); }, [text]);
  return (
    <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 50, background: "var(--teal-950)", color: "var(--white)", borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-overlay)", padding: "13px 18px", display: "flex", alignItems: "center", gap: 11, font: "var(--type-body)", fontSize: 14.5 }}>
      <span style={{ color: "var(--sand-400)" }}>&#10022;</span>{text}
    </div>
  );
}

function LoginScreen({ onIn }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex" }}>
      <div style={{ flex: "0 0 46%", position: "relative", background: "var(--teal-950)", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "44px 46px" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--blueprint-rule-fine) 1px,transparent 1px),linear-gradient(90deg,var(--blueprint-rule-fine) 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--blueprint-rule-major) 1px,transparent 1px),linear-gradient(90deg,var(--blueprint-rule-major) 1px,transparent 1px)", backgroundSize: "250px 250px" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(620px 400px at 74% 46%, var(--blueprint-glow-blue), transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(400px 280px at 96% 98%, var(--blueprint-glow-amber), transparent 70%)" }} />
        <div style={{ position: "relative" }}><Logo variant="light" height={26} assetPath="../../assets/" /></div>
        <div style={{ position: "relative", display: "grid", gap: 22 }}>
          <span style={{ font: "var(--weight-bold) 62px/0.9 var(--font-display)", letterSpacing: "var(--tracking-hero)", color: "var(--white)" }}>Win the Job.<br />Run the Project.<br />Get Paid.</span>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <span style={{ width: 56, height: 3, background: "var(--sand-400)" }} />
            <span style={{ font: "var(--type-mono)", fontSize: 14, color: "var(--teal-400)" }}>QUOTE · SELL · BUILD · PAY</span>
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", gap: 30 }}>
          {["500+ teams", "Solar · Roofing · HVAC", "One login"].map((t) => (
            <span key={t} className="eyebrow" style={{ color: "var(--teal-600)", letterSpacing: "var(--tracking-mono-label)" }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, display: "grid", placeItems: "center", background: "var(--surface-page)" }}>
        <Card padding="30px" style={{ width: 372, display: "grid", gap: 18 }}>
          <div style={{ display: "grid", gap: 6 }}>
            <span style={{ font: "var(--weight-bold) 28px/1.1 var(--font-display)", letterSpacing: "var(--tracking-heading)", color: "var(--text-strong)" }}>Sign in</span>
            <span style={{ font: "var(--type-body)", fontSize: 14.5, color: "var(--text-muted)" }}>Ridgeline Solar workspace</span>
          </div>
          <Field label="Work email" htmlFor="le"><Input id="le" icon="mail" defaultValue="jamie@ridgelinesolar.com" /></Field>
          <Field label="Password" htmlFor="lp"><Input id="lp" type="password" defaultValue="••••••••••" /></Field>
          <Button fullWidth size="lg" iconTrailing="arrow-right" onClick={onIn}>Sign in</Button>
          <span style={{ font: "var(--type-body)", fontSize: 13.5, color: "var(--text-muted)", textAlign: "center" }}>
            Trouble signing in? <a href="#">Reach the team</a>
          </span>
        </Card>
      </div>
    </div>
  );
}

function App() {
  const [signedIn, setSignedIn] = React.useState(false);
  const [view, setView] = React.useState("pipeline");
  const [dialog, setDialog] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  if (!signedIn) return <LoginScreen onIn={() => setSignedIn(true)} />;

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", background: "var(--surface-page)" }}>
      <Sidebar view={view} setView={setView} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        {view === "pipeline" ? <PipelineScreen onNewQuote={() => setDialog(true)} />
          : view === "quote" ? <EasyQuoteScreen onSend={() => setToast("Proposal sent to the Calder family.")} />
          : view === "projects" ? <ProjectsScreen />
          : view === "invoices" ? <InvoicesScreen />
          : <PlaceholderScreen view={view} />}
      </div>
      <NewQuoteDialog open={dialog} onClose={() => setDialog(false)} onCreate={() => { setDialog(false); setView("quote"); setToast("EasyQuote designed an 11.2 kW system."); }} />
      {toast ? <Toast text={toast} onDone={() => setToast(null)} /> : null}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
