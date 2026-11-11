import React from "react";
import { Icon } from "./Icon.jsx";

const SIZES = {
  sm: { height: "var(--control-height-sm)", padding: "0 14px", font: "var(--weight-semibold) 13.5px/1 var(--font-sans)", gap: 4, icon: 15 },
  md: { height: "var(--control-height)", padding: "0 20px", font: "var(--weight-semibold) 15px/1 var(--font-sans)", gap: 4, icon: 17 },
  lg: { height: "var(--control-height-lg)", padding: "0 26px", font: "var(--weight-semibold) 16.5px/1 var(--font-sans)", gap: 4, icon: 19 },
};

const VARIANTS = {
  primary: { background: "var(--action-primary)", color: "var(--text-on-brand)", border: "1px solid transparent", hover: "var(--action-primary-hover)", shadow: "var(--shadow-xs)" },
  secondary: { background: "var(--surface-card)", color: "var(--text-strong)", border: "1px solid var(--border-default)", hover: "var(--surface-sunken)", shadow: "var(--shadow-xs)" },
  dark: { background: "var(--action-secondary)", color: "var(--text-on-ink)", border: "1px solid transparent", hover: "var(--action-secondary-hover)", shadow: "var(--shadow-xs)" },
  accent: { background: "var(--action-accent)", color: "var(--teal-900)", border: "1px solid transparent", hover: "var(--action-accent-hover)", shadow: "var(--shadow-xs)" },
  ghost: { background: "transparent", color: "var(--text-link)", border: "1px solid transparent", hover: "var(--surface-brand-subtle)", shadow: "none" },
};

export function Button({
  children, variant = "primary", size = "md", icon, iconTrailing, fullWidth = false,
  disabled = false, type = "button", style, ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        gap: s.gap, height: s.height, padding: s.padding, font: v.family ? s.font.replace("var(--font-sans)", v.family) : s.font,
        letterSpacing: "0.002em", whiteSpace: "nowrap",
        borderRadius: "var(--radius-control)", border: v.border,
        background: disabled ? "var(--action-disabled-bg)" : hover ? v.hover : v.background,
        color: disabled ? "var(--action-disabled-text)" : v.color,
        boxShadow: disabled ? "none" : v.shadow,
        width: fullWidth ? "100%" : undefined,
        cursor: disabled ? "not-allowed" : "pointer",
        transform: press && !disabled ? "scale(var(--press-scale))" : "none",
        transition: "var(--transition-control), transform var(--duration-instant) var(--ease-standard)",
        ...style,
      }}
      {...rest}
    >
      {icon ? <Icon color="currentColor" name={icon} size={s.icon} /> : null}
      {children}
      {iconTrailing ? <Icon color="currentColor" name={iconTrailing} size={s.icon} /> : null}
    </button>
  );
}
