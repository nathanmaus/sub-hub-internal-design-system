const { Logo, Icon, IconButton, Input, Badge } = window.InternalDesignSystem;

const NAV = [
  { key: "pipeline", label: "Pipeline", icon: "kanban", module: "Sales Velocity" },
  { key: "quote", label: "EasyQuote", icon: "file-text", module: "EasyQuote" },
  { key: "projects", label: "Projects", icon: "hard-hat", module: "Project Management" },
  { key: "invoices", label: "Invoices", icon: "wallet", module: "Payments" },
];
const NAV_SECONDARY = [
  { key: "ambassador", label: "Ambassador", icon: "users" },
  { key: "reports", label: "Reports", icon: "bar-chart-3" },
  { key: "settings", label: "Settings", icon: "settings" },
];

function SidebarItem({ item, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "center", gap: 11, width: "100%", height: 40,
        padding: "0 12px", border: "1px solid transparent", borderRadius: "var(--radius-control)",
        background: active ? "var(--sand-400)" : hover ? "rgba(255,255,255,0.06)" : "transparent",
        color: active ? "var(--white)" : "var(--teal-400)", cursor: "pointer", textAlign: "left",
        font: "var(--weight-medium) 14.5px/1 var(--font-sans)", letterSpacing: "-0.005em",
        transition: "var(--transition-control)",
      }}>
      <Icon name={item.icon} size={17} />
      {item.label}
    </button>
  );
}

function Sidebar({ view, setView }) {
  return (
    <aside style={{ width: "var(--app-sidebar-w)", flex: "0 0 auto", background: "var(--teal-950)", display: "flex", flexDirection: "column", padding: "18px 14px 16px", gap: 20 }}>
      <div style={{ padding: "0 4px" }}><Logo variant="light" height={22} assetPath="../../assets/" /></div>
      <div style={{ display: "grid", gap: 4 }}>
        <div className="eyebrow" style={{ color: "var(--teal-600)", padding: "6px 12px 4px", letterSpacing: "var(--tracking-mono-label)" }}>Work</div>
        {NAV.map((n) => <SidebarItem key={n.key} item={n} active={view === n.key} onClick={() => setView(n.key)} />)}
      </div>
      <div style={{ display: "grid", gap: 4 }}>
        <div className="eyebrow" style={{ color: "var(--teal-600)", padding: "6px 12px 4px", letterSpacing: "var(--tracking-mono-label)" }}>Company</div>
        {NAV_SECONDARY.map((n) => <SidebarItem key={n.key} item={n} active={view === n.key} onClick={() => setView(n.key)} />)}
      </div>
      <div style={{ marginTop: "auto", borderTop: "1px solid var(--border-inverse)", paddingTop: 14, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--sand-500)", color: "var(--white)", display: "grid", placeItems: "center", font: "var(--weight-semibold) 12.5px/1 var(--font-mono)" }}>JO</span>
        <span style={{ display: "grid" }}>
          <span style={{ font: "var(--weight-semibold) 13.5px/1.3 var(--font-sans)", color: "var(--white)" }}>Jamie Ortiz</span>
          <span className="eyebrow" style={{ color: "var(--teal-600)", letterSpacing: "var(--tracking-mono-label)" }}>Ridgeline Solar</span>
        </span>
      </div>
    </aside>
  );
}

function Topbar({ title, module, actions }) {
  return (
    <header style={{ height: "var(--app-topbar-h)", flex: "0 0 auto", background: "var(--surface-card)", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: 16, padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
        <h1 style={{ font: "var(--weight-semibold) 20px/1 var(--font-display)", letterSpacing: "var(--tracking-heading)", color: "var(--text-strong)" }}>{title}</h1>
        <span className="eyebrow" style={{ color: "var(--text-subtle)" }}>{module}</span>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
        <Input placeholder="Search" icon="search" style={{ width: 210, height: "var(--control-height-sm)" }} />
        <IconButton icon="bell" label="Notifications" size="sm" />
        <IconButton icon="circle-help" label="Help" size="sm" />
        {actions}
      </div>
    </header>
  );
}

function PageBody({ children }) {
  return <div style={{ flex: 1, overflow: "auto", padding: "22px 24px 32px", display: "grid", gap: 18, alignContent: "start" }}>{children}</div>;
}

function SectionHead({ label, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <span className="eyebrow" style={{ color: "var(--text-subtle)", letterSpacing: "var(--tracking-mono-label)" }}>{label}</span>
      <span style={{ flex: 1, height: 1, background: "var(--border-subtle)" }} />
      {children}
    </div>
  );
}

Object.assign(window, { Sidebar, Topbar, PageBody, SectionHead, NAV, NAV_SECONDARY });
