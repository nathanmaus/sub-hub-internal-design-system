import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Switch } from "../forms/Switch.jsx";

/* ---- body (bundled as-is) ---- */
/**
 * MainMenu — the account / main menu that opens from the avatar in the top bar.
 * Not a dropdown menu: it holds the person's account, workspace and appearance
 * settings, plus sign-out. Entrance motion is the system's standard menu open
 * (see motion.md): the panel drops in, then rows follow 20ms apart.
 */
const MAIN_MENU_CSS = [
    "@keyframes shds-menu-in{from{opacity:0;transform:translateY(calc(-1 * var(--menu-offset, 8px))) scale(var(--menu-scale-from, .98))}to{opacity:1;transform:none}}",
    "@keyframes shds-menu-row-in{from{opacity:0;transform:translateY(calc(-1 * var(--menu-row-offset, 4px)))}to{opacity:1;transform:none}}",
    "@keyframes shds-menu-out{from{opacity:1}to{opacity:0}}",
    ".shds-menu-row{transition:background-color var(--duration-fast, 150ms) var(--ease-standard, ease)}",
    ".shds-menu-row:hover{background:var(--surface-sunken)}",
    ".shds-menu-row:focus-visible{outline:none;box-shadow:var(--ring-focus)}",
    "@media (prefers-reduced-motion: reduce){.shds-menu,.shds-menu > *{animation:none !important}}"
  ].join("\n");

const MENU_ROW = {
  display: "flex", alignItems: "center", gap: 12, minHeight: 48, padding: "0 16px",
  borderRadius: "var(--radius-control)", color: "var(--text-strong)",
  font: "var(--weight-regular) 16px/24px var(--font-sans)", letterSpacing: "var(--tracking-body)",
  textDecoration: "none", background: "transparent", border: 0, width: "100%",
  textAlign: "left", cursor: "pointer", boxSizing: "border-box"
};

function MainMenu({ items = [], animate = true, loop = false, width = 400, label = "Account", style, ...rest }) {
  const [cycle, setCycle] = React.useState(0);
  const [closing, setClosing] = React.useState(false);
  React.useEffect(() => {
    if (!loop) return undefined;
    let t2;
    const t1 = setTimeout(() => {
      setClosing(true);
      t2 = setTimeout(() => { setClosing(false); setCycle((c) => c + 1); }, 750);
    }, 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [loop, cycle]);

  const panelAnimation = closing
    ? "shds-menu-out var(--duration-menu-close, 150ms) var(--ease-in, ease-in) forwards"
    : animate
      ? "shds-menu-in var(--duration-menu, 200ms) var(--ease-menu, cubic-bezier(.2,0,0,1)) both"
      : "none";
  const rowAnimation = (i) => (animate && !closing ? {
    animation: "shds-menu-row-in var(--duration-menu, 200ms) var(--ease-menu, cubic-bezier(.2,0,0,1)) both",
    animationDelay: "calc(var(--menu-row-delay, 60ms) + " + i + " * var(--menu-row-stagger, 20ms))"
  } : {});
  const w = typeof width === "number" ? width + "px" : width;

  const renderItem = (item, i) => {
    const anim = rowAnimation(i);
    const key = item.key || item.label || "row-" + i;
    if (item.type === "divider") {
      return React.createElement("div", { key, role: "separator", style: { height: 1, background: "var(--border-subtle)", margin: "4px 16px", ...anim } });
    }
    if (item.type === "feature") {
      return React.createElement("div", {
        key, style: { display: "flex", alignItems: "center", gap: 16, padding: "12px 16px", borderRadius: "var(--radius-control)", background: "var(--surface-brand-subtle)", ...anim }
      },
        React.createElement(Switch, { checked: item.checked, defaultChecked: item.defaultChecked, onChange: item.onChange, "aria-label": item.label }),
        React.createElement("span", { style: { flex: 1, minWidth: 0 } },
          React.createElement("span", { style: { display: "flex", alignItems: "center", gap: 8 } },
            React.createElement("span", { style: { font: "var(--weight-semibold) 16px/24px var(--font-sans)", color: "var(--text-strong)" } }, item.label),
            item.badge ? React.createElement("span", { style: { font: "var(--weight-semibold) 12px/16px var(--font-sans)", color: "var(--text-inverse)", background: "var(--action-primary)", borderRadius: "var(--radius-pill)", padding: "2px 8px" } }, item.badge) : null
          ),
          item.description ? React.createElement("span", { style: { display: "block", marginTop: 4, font: "var(--weight-regular) 14px/20px var(--font-sans)", color: "var(--sand-800)" } }, item.description) : null
        )
      );
    }
    if (item.type === "value") {
      return React.createElement("button", { key, type: "button", role: "menuitem", className: "shds-menu-row", onClick: item.onSelect, style: { ...MENU_ROW, ...anim } },
        item.icon ? React.createElement(Icon, { name: item.icon, size: 24, color: "var(--text-strong)" }) : React.createElement("span", { style: { width: 24, flex: "0 0 auto" } }),
        React.createElement("span", { style: { flex: 1 } }, item.label),
        React.createElement("span", { style: { color: "var(--text-muted)" } }, item.value),
        React.createElement(Icon, { name: "chevron-down", size: 16, color: "var(--text-muted)" })
      );
    }
    const Tag = item.href ? "a" : "button";
    return React.createElement(Tag, {
      key, role: "menuitem", className: "shds-menu-row", href: item.href, type: item.href ? undefined : "button", onClick: item.onSelect,
      style: { ...MENU_ROW, alignItems: item.sublabel ? "flex-start" : "center", padding: item.sublabel ? "12px 16px" : MENU_ROW.padding, ...anim }
    },
      item.icon ? React.createElement(Icon, { name: item.icon, size: 24, color: "var(--text-strong)" }) : React.createElement("span", { style: { width: 24, flex: "0 0 auto" } }),
      item.sublabel
        ? React.createElement("span", null,
            React.createElement("span", { style: { display: "block" } }, item.label),
            React.createElement("span", { style: { display: "block", font: "var(--weight-regular) 12px/16px var(--font-sans)", color: "var(--text-muted)" } }, item.sublabel))
        : React.createElement("span", null, item.label)
    );
  };

  return React.createElement("div", {
    key: cycle, role: "menu", "aria-label": label, className: "shds-menu",
    style: {
      width: "min(" + w + ", calc(100vw - 32px))", boxSizing: "border-box",
      background: "var(--surface-card)", border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-overlay)",
      padding: 8, display: "flex", flexDirection: "column", gap: 4,
      transformOrigin: "top right", animation: panelAnimation, ...style
    },
    ...rest
  }, React.createElement("style", null, MAIN_MENU_CSS), items.map(renderItem));
}
/* ---- end body ---- */

export { MainMenu };
