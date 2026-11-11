const { Logo, Button, Icon, Badge } = window.InternalDesignSystem;

const LINKS = [
  { key: "home", label: "Platform" },
  { key: "easyquote", label: "EasyQuote" },
  { key: "pricing", label: "Pricing" },
];

function SiteHeader({ view, setView }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(255,255,255,0.86)", backdropFilter: "var(--blur-panel)", WebkitBackdropFilter: "var(--blur-panel)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", height: 72, padding: "0 32px", display: "flex", alignItems: "center", gap: 34 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); setView("home"); }}><Logo variant="dark" height={22} assetPath="../../assets/" /></a>
        <nav style={{ display: "flex", gap: 26 }}>
          {LINKS.map((l) => (
            <button key={l.key} type="button" onClick={() => setView(l.key)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 0",
                font: "var(--weight-medium) 15px/1 var(--font-sans)", letterSpacing: "-0.005em",
                color: view === l.key ? "var(--text-strong)" : "var(--text-muted)",
                boxShadow: view === l.key ? "inset 0 -2px 0 0 var(--action-accent)" : "none",
                transition: "var(--transition-control)" }}>{l.label}</button>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
          <a href="#" style={{ font: "var(--weight-medium) 15px/1 var(--font-sans)" }}>Sign in</a>
          <Button size="sm">Book a Demo</Button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  const cols = [
    ["Platform", ["Sales Velocity", "EasyQuote", "Project Management", "Ambassador"]],
    ["Trades", ["Solar", "Roofing", "HVAC"]],
    ["Company", ["About", "Careers", "Blog", "Contact"]],
  ];
  return (
    <footer style={{ background: "var(--teal-950)", padding: "64px 32px 34px" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr repeat(3, 1fr)", gap: 40 }}>
        <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
          <Logo variant="light" height={24} assetPath="../../assets/" />
          <p style={{ font: "var(--type-body)", fontSize: 14.5, color: "var(--teal-400)", maxWidth: 300 }}>
            The AI home services platform for roofing, solar and HVAC contractors. Quote, sell, build and get paid from one login.
          </p>
          <span className="eyebrow" style={{ color: "var(--teal-600)", letterSpacing: "var(--tracking-mono-label)" }}>(661) 384-7070</span>
        </div>
        {cols.map(([title, items]) => (
          <div key={title} style={{ display: "grid", gap: 12, alignContent: "start" }}>
            <span className="eyebrow" style={{ color: "var(--teal-600)", letterSpacing: "var(--tracking-mono-label)" }}>{title}</span>
            {items.map((i) => <a key={i} href="#" style={{ font: "var(--type-body)", fontSize: 14.5, color: "var(--teal-300)" }}>{i}</a>)}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "var(--container-max)", margin: "44px auto 0", paddingTop: 20, borderTop: "1px solid var(--border-inverse)", display: "flex", justifyContent: "space-between" }}>
        <span className="eyebrow" style={{ color: "var(--teal-600)", letterSpacing: "var(--tracking-mono-label)" }}>© 2026 SubcontractorHub</span>
        <span className="eyebrow" style={{ color: "var(--teal-600)", letterSpacing: "var(--tracking-mono-label)" }}>English · Español</span>
      </div>
    </footer>
  );
}

function Band({ children, tone = "page", pad = "88px 32px" }) {
  const bg = { page: "var(--surface-page)", card: "var(--surface-card)", sunken: "var(--surface-sunken)", ink: "var(--teal-950)", amber: "var(--sand-400)" }[tone];
  return (
    <section style={{ background: bg, padding: pad, borderTop: tone === "card" ? "1px solid var(--border-subtle)" : "none", borderBottom: tone === "card" ? "1px solid var(--border-subtle)" : "none" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function Kicker({ eyebrow, title, blurb, inverse = false }) {
  return (
    <div style={{ display: "grid", gap: 16, maxWidth: 760, marginBottom: 40 }}>
      {eyebrow ? <span className="eyebrow" style={{ color: inverse ? "var(--sand-400)" : "var(--sand-400)" }}>{eyebrow}</span> : null}
      <h2 style={{ font: "var(--weight-bold) 46px/1.05 var(--font-display)", letterSpacing: "var(--tracking-display)", color: inverse ? "var(--white)" : "var(--text-strong)" }}>{title}</h2>
      {blurb ? <p style={{ font: "var(--type-body-lg)", fontSize: 20, color: inverse ? "var(--teal-400)" : "var(--text-body)" }}>{blurb}</p> : null}
    </div>
  );
}

Object.assign(window, { SiteHeader, SiteFooter, Band, Kicker, LINKS });
