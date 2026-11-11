import React from "react";
import { Logo } from "./Logo.jsx";

/* The blueprint direction's isometric site drawing, recreated from the
   supplied Engineering Header source. Scales with the SVG viewBox. */
function BlueprintArt({ right, top, size }) {
  return (
    <svg viewBox="0 0 570 510" style={{ position: "absolute", right, top, width: size, height: size, overflow: "visible" }} fill="none">
      <defs>
        <linearGradient id="hbRoof" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#233638" /><stop offset="1" stopColor="#365154" />
        </linearGradient>
        <linearGradient id="hbPanel" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#193A3E" /><stop offset="1" stopColor="#2C6167" />
        </linearGradient>
        <linearGradient id="hbBeam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#D9B98A" stopOpacity="0" />
          <stop offset=".5" stopColor="#D9B98A" stopOpacity=".22" />
          <stop offset="1" stopColor="#D9B98A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points="280,492 500,371 280,250 60,371" fill="#152021" opacity=".85" />
      <polygon points="280,492 500,371 280,250 60,371" stroke="#466164" strokeWidth="1.2" strokeDasharray="6 8" />
      <polygon points="280,470 90,365 90,195 280,300" fill="#263436" />
      <polygon points="280,470 470,365 470,195 280,300" fill="#34484A" />
      <polygon points="280,300 90,195 185,152" fill="#2D3F41" />
      <polygon points="280,300 470,195 375,47 185,152" fill="url(#hbRoof)" />
      <g stroke="#81D1DA" strokeWidth="1.6">
        <polygon points="280,470 90,365 90,195 280,300" />
        <polygon points="280,470 470,365 470,195 280,300" />
        <polygon points="280,300 90,195 185,152" />
        <polygon points="280,300 470,195 375,47 185,152" />
      </g>
      <polygon points="223,368.5 188.8,349.6 188.8,289.6 223,308.5" fill="#1B2728" stroke="#5A7F83" strokeWidth="1.1" />
      <polygon points="356,428 397.8,404.9 397.8,299.9 356,323" fill="#1B2728" stroke="#5A7F83" strokeWidth="1.1" />
      <circle cx="371" cy="374" r="3" fill="#D9B98A" />
      <g fill="url(#hbPanel)" stroke="#8FD6DE" strokeWidth="1.1">
        <polygon points="283.8,273.8 320.3,253.7 298.3,219.5 261.8,239.6" />
        <polygon points="323.7,251.8 360.2,231.6 338.2,197.4 301.7,217.6" />
        <polygon points="363.6,229.7 400.1,209.6 378.1,175.4 341.6,195.5" />
        <polygon points="403.5,207.7 440.0,187.5 418.0,153.3 381.5,173.5" />
        <polygon points="259.7,236.4 296.2,216.2 274.2,182.0 237.8,202.1" />
        <polygon points="299.6,214.3 336.1,194.1 314.1,159.9 277.7,180.1" />
        <polygon points="339.5,192.3 376.0,172.1 354.0,137.9 317.6,158.0" />
        <polygon points="379.4,170.2 415.9,150.1 393.9,115.8 357.5,135.9" />
        <polygon points="235.7,198.9 272.1,178.7 250.2,144.5 213.7,164.6" />
        <polygon points="275.6,176.8 312.1,156.6 290.1,122.4 253.6,142.6" />
        <polygon points="315.5,154.8 352.0,134.6 330.0,100.4 293.5,120.5" />
        <polygon points="355.4,132.7 391.9,112.5 369.9,78.3 333.4,98.4" />
      </g>
      <g fill="#D9B98A" fillOpacity=".9" stroke="#E5CDA9" strokeWidth="1.2">
        <polygon points="339.5,192.3 376.0,172.1 354.0,137.9 317.6,158.0" />
        <polygon points="275.6,176.8 312.1,156.6 290.1,122.4 253.6,142.6" />
      </g>
      <polygon points="253.6,142.6 393.9,115.8 415.9,150.1 274.2,182.0" fill="url(#hbBeam)" />
      <g stroke="#D9B98A" strokeWidth="2" strokeLinecap="square">
        <path d="M206 92 L206 68 L232 68" /><path d="M420 62 L446 62 L446 86" />
        <path d="M446 264 L446 288 L420 288" /><path d="M232 294 L206 294 L206 270" />
      </g>
      <rect x="206" y="62" width="240" height="232" stroke="#D9B98A" strokeWidth="1" strokeOpacity=".3" strokeDasharray="4 8" />
      <path d="M446 88 L474 58 L556 58" stroke="#D9B98A" strokeWidth="1.2" />
      <circle cx="446" cy="88" r="3.5" fill="#D9B98A" />
      <text x="480" y="48" fontFamily="IBM Plex Mono, monospace" fontSize="17" fontWeight="500" letterSpacing="1.6" fill="#D9B98A">SOLAR ARRAY</text>
      <g fontFamily="IBM Plex Mono, monospace" fontSize="14" letterSpacing="1.2" fill="#ADB9BA">
        <text x="480" y="80">12 MODULES</text>
        <text x="480" y="100">6.4 kW EST.</text>
        <text x="480" y="120">PITCH 6:12</text>
      </g>
      <g fill="#81D1DA" opacity=".85">
        <circle cx="280" cy="470" r="4" /><circle cx="470" cy="365" r="4" />
        <circle cx="90" cy="365" r="4" /><circle cx="280" cy="300" r="4" />
      </g>
    </svg>
  );
}

/* The amber direction's braced tower, recreated from the supplied source (1c Site). */
function TowerArt({ right, top, width, height }) {
  return (
    <svg viewBox="0 0 480 520" style={{ position: "absolute", right, top, width, height, overflow: "visible" }} fill="none">
      <g stroke="#81D1DA" strokeWidth="1.7">
        <line x1="70" y1="20" x2="70" y2="500" /><line x1="410" y1="20" x2="410" y2="500" />
        <line x1="70" y1="20" x2="410" y2="20" /><line x1="70" y1="140" x2="410" y2="140" />
        <line x1="70" y1="260" x2="410" y2="260" /><line x1="70" y1="380" x2="410" y2="380" />
        <line x1="70" y1="500" x2="410" y2="500" />
        <line x1="70" y1="20" x2="410" y2="140" /><line x1="410" y1="140" x2="70" y2="260" />
        <line x1="70" y1="260" x2="410" y2="380" /><line x1="410" y1="380" x2="70" y2="500" />
      </g>
      <g fill="#D9B98A">
        <circle cx="70" cy="20" r="5.5" /><circle cx="410" cy="140" r="5.5" />
        <circle cx="70" cy="260" r="5.5" /><circle cx="410" cy="380" r="5.5" />
        <circle cx="70" cy="500" r="5.5" />
      </g>
      <g fontFamily="IBM Plex Mono, monospace" fontSize="14" letterSpacing="1.6" fill="#A1B0B1">
        <text x="428" y="25">QUOTE</text><text x="428" y="145">SELL</text><text x="428" y="265">BUILD</text>
        <text x="428" y="385">PAY</text><text x="428" y="505">LEARN</text>
      </g>
    </svg>
  );
}

/* The editorial direction's AI node mesh, recreated from the source (1b Stack). */
function MeshArt({ right, top, width, height }) {
  return (
    <svg viewBox="0 0 460 260" style={{ position: "absolute", right, top, width, height, overflow: "visible" }} fill="none">
      <g stroke="#39B8C6" strokeWidth="1.2" opacity=".38">
        <line x1="24" y1="196" x2="128" y2="96" /><line x1="128" y1="96" x2="248" y2="150" />
        <line x1="248" y1="150" x2="352" y2="42" /><line x1="128" y1="96" x2="352" y2="42" />
        <line x1="248" y1="150" x2="436" y2="118" /><line x1="352" y1="42" x2="436" y2="118" />
      </g>
      <g fill="#FFFFFF" stroke="#39B8C6" strokeWidth="2">
        <circle cx="24" cy="196" r="5" /><circle cx="128" cy="96" r="5" />
        <circle cx="248" cy="150" r="5" /><circle cx="436" cy="118" r="5" />
      </g>
      <circle cx="352" cy="42" r="7" fill="#D9B98A" />
    </svg>
  );
}

/**
 * The brand's section-header banner, in the three directions defined by the
 * supplied Engineering Header source: blueprint (dark, technical), editorial
 * (light) and amber (high energy). Designed at 1600x600; scales with width/height.
 */
export function HeroBanner({
  title = "Engineering",
  subtitle,
  eyebrow,
  variant = "blueprint",
  rail = [],
  width = 1600,
  height = 600,
  assetPath = "../../assets/",
  children,
  style,
  ...rest
}) {
  const scale = width / 1600;
  const px = (n) => Math.round(n * scale);
  /* Type and the logo never scale below legibility, however small the banner gets. */
  const fs = (n, min) => Math.max(Math.round(n * scale), min);
  /* Vertical scale, so decoration sized against the 600px design height still fits. */
  const py = (n) => Math.round(n * (height / 600));
  const shell = {
    position: "relative",
    width,
    height,
    overflow: "hidden",
    fontFamily: "var(--font-display)",
    ...style,
  };

  if (variant === "editorial") {
    return (
      <div style={{ ...shell, background: "var(--teal-025)", boxShadow: "var(--shadow-lg)" }} {...rest}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(44,47,62,.055) 1px, transparent 1px)", backgroundSize: "100% " + px(40) + "px" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: px(10), background: "var(--sand-400)" }} />
        <div style={{ position: "absolute", left: px(10), top: 0, bottom: 0, width: px(10), background: "var(--sand-400)" }} />
        <div style={{ position: "absolute", right: px(110), bottom: 0, display: "flex", alignItems: "flex-end", gap: px(14), height: "100%" }}>
          {[172, 268, 392, 508, 330].map((h, i) => (
            <div key={i} style={{ width: px(74), height: py(h), transform: "skewX(-16deg)", background: ["var(--sand-200)", "var(--sand-300)", "var(--sand-400)", "var(--sand-400)", "var(--teal-900)"][i] }} />
          ))}
        </div>
        {children || <MeshArt right={px(98)} top={py(56)} width={px(460)} height={py(260)} />}
        <div style={{ position: "absolute", left: px(120), top: 0, bottom: 0, width: px(700), display: "flex", flexDirection: "column", justifyContent: "center", gap: px(28) }}>
          {eyebrow ? (
            <div style={{ display: "flex", alignItems: "center", gap: px(14), font: "var(--type-eyebrow)", fontSize: fs(13, 11), letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--sand-400)", whiteSpace: "nowrap" }}>{eyebrow}</div>
          ) : null}
          <h1 style={{ margin: 0, position: "relative", font: "var(--weight-bold) " + fs(150, 34) + "px/0.86 var(--font-display)", letterSpacing: "var(--tracking-hero)", color: "var(--teal-900)" }}>{title}</h1>
          {subtitle ? (
            <p style={{ margin: 0, maxWidth: px(600), font: "var(--type-body-lg)", fontSize: fs(23, 12), color: "var(--teal-700)", textWrap: "pretty" }}>{subtitle}</p>
          ) : null}
        </div>
        <div style={{ position: "absolute", left: px(120), bottom: px(44), opacity: 0.55 }}>
          <Logo variant="dark" height={Math.max(px(19), 14)} assetPath={assetPath} />
        </div>
      </div>
    );
  }

  if (variant === "amber") {
    return (
      <div style={{ ...shell, background: "var(--sand-400)", boxShadow: "var(--shadow-lg)" }} {...rest}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(-16deg, rgba(44,47,62,.055) 0 2px, transparent 2px 26px)" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: px(720), background: "var(--teal-900)", transform: "skewX(-16deg)", transformOrigin: "bottom left" }} />
        <div style={{ position: "absolute", left: px(104), top: 0, bottom: 0, width: px(660), display: "flex", flexDirection: "column", justifyContent: "center", gap: px(24) }}>
          {eyebrow ? (
            <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: px(10), padding: px(8) + "px " + px(15) + "px", background: "var(--teal-900)", borderRadius: 4, font: "var(--type-eyebrow)", fontSize: fs(12, 10), letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--white)", whiteSpace: "nowrap" }}>
              <span style={{ color: "var(--sand-400)" }}>&#10022;</span> {eyebrow}
            </span>
          ) : null}
          <h1 style={{ margin: 0, font: "var(--weight-bold) " + fs(142, 34) + "px/0.86 var(--font-display)", letterSpacing: "var(--tracking-hero)", color: "var(--teal-900)" }}>{title}</h1>
          {subtitle ? (
            <p style={{ margin: 0, maxWidth: px(560), font: "var(--weight-medium) " + fs(22, 12) + "px/1.45 var(--font-sans)", color: "#2E4042", textWrap: "pretty" }}>{subtitle}</p>
          ) : null}
          <div style={{ marginTop: px(10) }}><Logo variant="amber" height={Math.max(px(19), 14)} assetPath={assetPath} /></div>
        </div>
        {children || <TowerArt right={px(118)} top={py(40)} width={px(440)} height={py(480)} />}
      </div>
    );
  }

  return (
    <div style={{ ...shell, background: "var(--teal-950)", boxShadow: "var(--shadow-lg)" }} {...rest}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--blueprint-rule-fine) 1px, transparent 1px), linear-gradient(90deg, var(--blueprint-rule-fine) 1px, transparent 1px)", backgroundSize: px(50) + "px " + px(50) + "px" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--blueprint-rule-major) 1px, transparent 1px), linear-gradient(90deg, var(--blueprint-rule-major) 1px, transparent 1px)", backgroundSize: px(250) + "px " + px(250) + "px" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(" + px(900) + "px " + px(520) + "px at 72% 46%, var(--blueprint-glow-blue), transparent 70%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(" + px(600) + "px " + px(400) + "px at 96% 96%, var(--blueprint-glow-amber), transparent 70%)" }} />
      <div style={{ position: "absolute", left: px(96), top: 0, bottom: 0, width: px(660), display: "flex", flexDirection: "column", justifyContent: "center", gap: px(26) }}>
        {eyebrow ? (
          <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: px(10), padding: px(7) + "px " + px(14) + "px " + px(7) + "px " + px(11) + "px", border: "1px solid rgba(217,185,138,.45)", borderRadius: 999, background: "rgba(217,185,138,.08)", font: "var(--type-eyebrow)", fontSize: fs(12, 10), letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--sand-400)", whiteSpace: "nowrap" }}>
            <span style={{ fontSize: fs(14, 11), lineHeight: 1 }}>&#10022;</span> {eyebrow}
          </span>
        ) : null}
        <h1 style={{ margin: 0, font: "var(--weight-bold) " + fs(132, 34) + "px/0.9 var(--font-display)", letterSpacing: "var(--tracking-hero)", color: "var(--white)", textWrap: "balance" }}>{title}</h1>
        {subtitle ? (
          <div style={{ display: "flex", alignItems: "center", gap: px(18) }}>
            <span style={{ width: px(64), height: px(3), background: "var(--sand-400)", flex: "0 0 auto" }} />
            <p style={{ margin: 0, font: "var(--type-mono)", fontSize: fs(17, 11), lineHeight: 1.5, color: "var(--teal-400)" }}>{subtitle}</p>
          </div>
        ) : null}
      </div>
      {children || <BlueprintArt right={px(104)} top={px(26)} size={px(520)} />}
      <div style={{ position: "absolute", left: px(96), right: px(96), bottom: px(40), display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: px(22), borderTop: "1px solid var(--border-inverse)" }}>
        <Logo variant="light" height={Math.max(px(28), 16)} assetPath={assetPath} />
        <div style={{ display: "flex", gap: px(34), font: "var(--type-eyebrow)", fontSize: fs(12, 10), letterSpacing: "var(--tracking-mono-label)", textTransform: "uppercase", color: "var(--teal-500)" }}>
          {rail.map((r) => <span key={r}>{r}</span>)}
        </div>
      </div>
    </div>
  );
}
