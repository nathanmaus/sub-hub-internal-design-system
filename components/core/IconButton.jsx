import React from "react";
import { Icon } from "./Icon.jsx";

const SIZES = { sm: { box: 32, icon: 16 }, md: { box: 40, icon: 18 }, lg: { box: 48, icon: 20 } };

export function IconButton({ icon, label, size = "md", variant = "quiet", disabled = false, style, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const skins = {
    quiet: { bg: hover ? "var(--surface-page)" : "transparent", fg: "var(--text-muted)", border: "1px solid transparent" },
    outline: { bg: hover ? "var(--surface-sunken)" : "var(--surface-card)", fg: "var(--text-body)", border: "1px solid var(--border-default)" },
    solid: { bg: hover ? "var(--action-primary-hover)" : "var(--action-primary)", fg: "var(--text-on-brand)", border: "1px solid transparent" },
  };
  const k = skins[variant] || skins.quiet;
  return (
    <button
      type="button" aria-label={label} title={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: s.box, height: s.box, display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "var(--radius-control)", border: k.border, background: disabled ? "var(--action-disabled-bg)" : k.bg,
        color: disabled ? "var(--action-disabled-text)" : k.fg, cursor: disabled ? "not-allowed" : "pointer",
        transition: "var(--transition-control)", ...style,
      }}
      {...rest}
    >
      <Icon color="currentColor" name={icon} size={s.icon} />
    </button>
  );
}
