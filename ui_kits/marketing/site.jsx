function Site() {
  const [view, setView] = React.useState("home");
  React.useEffect(() => { window.scrollTo(0, 0); }, [view]);
  return (
    <React.Fragment>
      <SiteHeader view={view} setView={setView} />
      {view === "home" ? <HomePage setView={setView} /> : view === "easyquote" ? <EasyQuotePage setView={setView} /> : <PricingPage />}
      <SiteFooter />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Site />);
