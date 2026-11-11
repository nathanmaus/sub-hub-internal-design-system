const { Card, Badge } = window.InternalDesignSystem;

/* Ambassador, Reports and Settings exist in the product but no source screens were
   supplied for them, so the kit shows an explicit gap rather than inventing a design. */
function PlaceholderScreen({ view }) {
  const label = { ambassador: "Ambassador", reports: "Reports", settings: "Settings" }[view] || view;
  return (
    <React.Fragment>
      <Topbar title={label} module="Not supplied" />
      <PageBody>
        <Card padding="34px" style={{ display: "grid", gap: 12, justifyItems: "start" }}>
          <Badge tone="neutral" uppercase>Intentionally blank</Badge>
          <span style={{ font: "var(--type-h3)", color: "var(--text-strong)" }}>No source screens for {label}</span>
          <span style={{ font: "var(--type-body)", color: "var(--text-muted)", maxWidth: 520 }}>
            The supplied design-system source documents tokens, motifs and primitives — not this module's layout.
            Rather than invent one, this kit leaves it blank. Send screenshots or code for {label} and it can be recreated faithfully.
          </span>
        </Card>
      </PageBody>
    </React.Fragment>
  );
}

Object.assign(window, { PlaceholderScreen });
