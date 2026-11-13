/* @ds-bundle: {"format":4,"namespace":"InternalDesignSystem","components":[{"name":"HeroBanner","sourcePath":"components/brand/HeroBanner.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"MainMenu","sourcePath":"components/navigation/MainMenu.jsx"},{"name":"Tooltip","sourcePath":"components/overlays/Tooltip.jsx"},{"name":"Toast","sourcePath":"components/overlays/Toast.jsx"}],"sourceHashes":{"components/brand/HeroBanner.jsx":"d54fb3381574","components/brand/Logo.jsx":"ab8f07e600bc","components/core/Badge.jsx":"16dadbd2ca44","components/core/Button.jsx":"13486597e8ba","components/core/Icon.jsx":"2a9872b2da62","components/core/IconButton.jsx":"80cfd030f29f","components/core/StatusPill.jsx":"aabba9907016","components/data/Card.jsx":"778a37a9298d","components/data/DataTable.jsx":"e3b212356861","components/data/StatCard.jsx":"75d4641a62ad","components/forms/Field.jsx":"146f2755424d","components/forms/Input.jsx":"5068142b34db","components/forms/Select.jsx":"a49055057eae","components/forms/Switch.jsx":"227d2f1312fd","components/navigation/Tabs.jsx":"31f560b15ae4","components/navigation/MainMenu.jsx":"af3339eec7f2","components/overlays/Tooltip.jsx":"9233ec65fcfe","components/overlays/Toast.jsx":"01cdc7fe0dc5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.InternalDesignSystem = window.InternalDesignSystem || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  light: "logo-light.svg",
  dark: "logo-dark.svg",
  sand: "logo-on-amber.svg",
  amber: "logo-on-amber.svg"
};

/** The SubHub lockup in this system's teal and sand. Never recolored, redrawn or stretched. */
function Logo({
  variant = "dark",
  height = 24,
  assetPath = "../../assets/",
  style,
  ...rest
}) {
  /* Offline bundles may inline a hidden <img data-logo="…"> per lockup; prefer its resolved src. */
  const preload = typeof document !== "undefined" ? document.querySelector('img[data-logo="' + variant + '"]') : null;
  const src = preload && preload.src || assetPath + (SRC[variant] || SRC.dark);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "SubHub",
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/HeroBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The blueprint direction's isometric site drawing, recreated from the
   supplied Engineering Header source. Scales with the SVG viewBox. */
function BlueprintArt({
  right,
  top,
  size
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 570 510",
    style: {
      position: "absolute",
      right,
      top,
      width: size,
      height: size,
      overflow: "visible"
    },
    fill: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hbRoof",
    x1: "0",
    y1: "1",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#233638"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#365154"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "hbPanel",
    x1: "0",
    y1: "1",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#193A3E"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#2C6167"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "hbBeam",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#D9B98A",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".5",
    stopColor: "#D9B98A",
    stopOpacity: ".22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#D9B98A",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("polygon", {
    points: "280,492 500,371 280,250 60,371",
    fill: "#152021",
    opacity: ".85"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "280,492 500,371 280,250 60,371",
    stroke: "#466164",
    strokeWidth: "1.2",
    strokeDasharray: "6 8"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "280,470 90,365 90,195 280,300",
    fill: "#263436"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "280,470 470,365 470,195 280,300",
    fill: "#34484A"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "280,300 90,195 185,152",
    fill: "#2D3F41"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "280,300 470,195 375,47 185,152",
    fill: "url(#hbRoof)"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "#81D1DA",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "280,470 90,365 90,195 280,300"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "280,470 470,365 470,195 280,300"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "280,300 90,195 185,152"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "280,300 470,195 375,47 185,152"
  })), /*#__PURE__*/React.createElement("polygon", {
    points: "223,368.5 188.8,349.6 188.8,289.6 223,308.5",
    fill: "#1B2728",
    stroke: "#5A7F83",
    strokeWidth: "1.1"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "356,428 397.8,404.9 397.8,299.9 356,323",
    fill: "#1B2728",
    stroke: "#5A7F83",
    strokeWidth: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "371",
    cy: "374",
    r: "3",
    fill: "#D9B98A"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "url(#hbPanel)",
    stroke: "#8FD6DE",
    strokeWidth: "1.1"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "283.8,273.8 320.3,253.7 298.3,219.5 261.8,239.6"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "323.7,251.8 360.2,231.6 338.2,197.4 301.7,217.6"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "363.6,229.7 400.1,209.6 378.1,175.4 341.6,195.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "403.5,207.7 440.0,187.5 418.0,153.3 381.5,173.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "259.7,236.4 296.2,216.2 274.2,182.0 237.8,202.1"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "299.6,214.3 336.1,194.1 314.1,159.9 277.7,180.1"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "339.5,192.3 376.0,172.1 354.0,137.9 317.6,158.0"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "379.4,170.2 415.9,150.1 393.9,115.8 357.5,135.9"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "235.7,198.9 272.1,178.7 250.2,144.5 213.7,164.6"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "275.6,176.8 312.1,156.6 290.1,122.4 253.6,142.6"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "315.5,154.8 352.0,134.6 330.0,100.4 293.5,120.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "355.4,132.7 391.9,112.5 369.9,78.3 333.4,98.4"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#D9B98A",
    fillOpacity: ".9",
    stroke: "#E5CDA9",
    strokeWidth: "1.2"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "339.5,192.3 376.0,172.1 354.0,137.9 317.6,158.0"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "275.6,176.8 312.1,156.6 290.1,122.4 253.6,142.6"
  })), /*#__PURE__*/React.createElement("polygon", {
    points: "253.6,142.6 393.9,115.8 415.9,150.1 274.2,182.0",
    fill: "url(#hbBeam)"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "#D9B98A",
    strokeWidth: "2",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M206 92 L206 68 L232 68"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M420 62 L446 62 L446 86"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M446 264 L446 288 L420 288"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M232 294 L206 294 L206 270"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "206",
    y: "62",
    width: "240",
    height: "232",
    stroke: "#D9B98A",
    strokeWidth: "1",
    strokeOpacity: ".3",
    strokeDasharray: "4 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M446 88 L474 58 L556 58",
    stroke: "#D9B98A",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "446",
    cy: "88",
    r: "3.5",
    fill: "#D9B98A"
  }), /*#__PURE__*/React.createElement("text", {
    x: "480",
    y: "48",
    fontFamily: "IBM Plex Mono, monospace",
    fontSize: "17",
    fontWeight: "500",
    letterSpacing: "1.6",
    fill: "#D9B98A"
  }, "SOLAR ARRAY"), /*#__PURE__*/React.createElement("g", {
    fontFamily: "IBM Plex Mono, monospace",
    fontSize: "14",
    letterSpacing: "1.2",
    fill: "#ADB9BA"
  }, /*#__PURE__*/React.createElement("text", {
    x: "480",
    y: "80"
  }, "12 MODULES"), /*#__PURE__*/React.createElement("text", {
    x: "480",
    y: "100"
  }, "6.4 kW EST."), /*#__PURE__*/React.createElement("text", {
    x: "480",
    y: "120"
  }, "PITCH 6:12")), /*#__PURE__*/React.createElement("g", {
    fill: "#81D1DA",
    opacity: ".85"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "280",
    cy: "470",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "470",
    cy: "365",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "365",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "280",
    cy: "300",
    r: "4"
  })));
}

/* The amber direction's braced tower, recreated from the supplied source (1c Site). */
function TowerArt({
  right,
  top,
  width,
  height
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 480 520",
    style: {
      position: "absolute",
      right,
      top,
      width,
      height,
      overflow: "visible"
    },
    fill: "none"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "#81D1DA",
    strokeWidth: "1.7"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "70",
    y1: "20",
    x2: "70",
    y2: "500"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "410",
    y1: "20",
    x2: "410",
    y2: "500"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "70",
    y1: "20",
    x2: "410",
    y2: "20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "70",
    y1: "140",
    x2: "410",
    y2: "140"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "70",
    y1: "260",
    x2: "410",
    y2: "260"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "70",
    y1: "380",
    x2: "410",
    y2: "380"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "70",
    y1: "500",
    x2: "410",
    y2: "500"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "70",
    y1: "20",
    x2: "410",
    y2: "140"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "410",
    y1: "140",
    x2: "70",
    y2: "260"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "70",
    y1: "260",
    x2: "410",
    y2: "380"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "410",
    y1: "380",
    x2: "70",
    y2: "500"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#D9B98A"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "20",
    r: "5.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "410",
    cy: "140",
    r: "5.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "260",
    r: "5.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "410",
    cy: "380",
    r: "5.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "500",
    r: "5.5"
  })), /*#__PURE__*/React.createElement("g", {
    fontFamily: "IBM Plex Mono, monospace",
    fontSize: "14",
    letterSpacing: "1.6",
    fill: "#A1B0B1"
  }, /*#__PURE__*/React.createElement("text", {
    x: "428",
    y: "25"
  }, "QUOTE"), /*#__PURE__*/React.createElement("text", {
    x: "428",
    y: "145"
  }, "SELL"), /*#__PURE__*/React.createElement("text", {
    x: "428",
    y: "265"
  }, "BUILD"), /*#__PURE__*/React.createElement("text", {
    x: "428",
    y: "385"
  }, "PAY"), /*#__PURE__*/React.createElement("text", {
    x: "428",
    y: "505"
  }, "LEARN")));
}

/* The editorial direction's AI node mesh, recreated from the source (1b Stack). */
function MeshArt({
  right,
  top,
  width,
  height
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 460 260",
    style: {
      position: "absolute",
      right,
      top,
      width,
      height,
      overflow: "visible"
    },
    fill: "none"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "#39B8C6",
    strokeWidth: "1.2",
    opacity: ".38"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "24",
    y1: "196",
    x2: "128",
    y2: "96"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "128",
    y1: "96",
    x2: "248",
    y2: "150"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "248",
    y1: "150",
    x2: "352",
    y2: "42"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "128",
    y1: "96",
    x2: "352",
    y2: "42"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "248",
    y1: "150",
    x2: "436",
    y2: "118"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "352",
    y1: "42",
    x2: "436",
    y2: "118"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#FFFFFF",
    stroke: "#39B8C6",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "196",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "128",
    cy: "96",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "248",
    cy: "150",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "436",
    cy: "118",
    r: "5"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "352",
    cy: "42",
    r: "7",
    fill: "#D9B98A"
  }));
}

/**
 * The brand's section-header banner, in the three directions defined by the
 * supplied Engineering Header source: blueprint (dark, technical), editorial
 * (light) and amber (high energy). Designed at 1600x600; scales with width/height.
 */
function HeroBanner({
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
  const px = n => Math.round(n * scale);
  /* Type and the logo never scale below legibility, however small the banner gets. */
  const fs = (n, min) => Math.max(Math.round(n * scale), min);
  /* Vertical scale, so decoration sized against the 600px design height still fits. */
  const py = n => Math.round(n * (height / 600));
  const shell = {
    position: "relative",
    width,
    height,
    overflow: "hidden",
    fontFamily: "var(--font-display)",
    ...style
  };
  if (variant === "editorial") {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        ...shell,
        background: "var(--teal-025)",
        boxShadow: "var(--shadow-lg)"
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(rgba(44,47,62,.055) 1px, transparent 1px)",
        backgroundSize: "100% " + px(40) + "px"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: px(10),
        background: "var(--sand-400)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: px(10),
        top: 0,
        bottom: 0,
        width: px(10),
        background: "var(--sand-400)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        right: px(110),
        bottom: 0,
        display: "flex",
        alignItems: "flex-end",
        gap: px(14),
        height: "100%"
      }
    }, [172, 268, 392, 508, 330].map((h, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: px(74),
        height: py(h),
        transform: "skewX(-16deg)",
        background: ["var(--sand-200)", "var(--sand-300)", "var(--sand-400)", "var(--sand-400)", "var(--teal-900)"][i]
      }
    }))), children || /*#__PURE__*/React.createElement(MeshArt, {
      right: px(98),
      top: py(56),
      width: px(460),
      height: py(260)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: px(120),
        top: 0,
        bottom: 0,
        width: px(700),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: px(28)
      }
    }, eyebrow ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: px(14),
        font: "var(--type-eyebrow)",
        fontSize: fs(13, 11),
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--sand-400)",
        whiteSpace: "nowrap"
      }
    }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        position: "relative",
        font: "var(--weight-bold) " + fs(150, 34) + "px/0.86 var(--font-display)",
        letterSpacing: "var(--tracking-hero)",
        color: "var(--teal-900)"
      }
    }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: px(600),
        font: "var(--type-body-lg)",
        fontSize: fs(23, 12),
        color: "var(--teal-700)",
        textWrap: "pretty"
      }
    }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: px(120),
        bottom: px(44),
        opacity: 0.55
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
      variant: "dark",
      height: Math.max(px(19), 14),
      assetPath: assetPath
    })));
  }
  if (variant === "amber") {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        ...shell,
        background: "var(--sand-400)",
        boxShadow: "var(--shadow-lg)"
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "repeating-linear-gradient(-16deg, rgba(44,47,62,.055) 0 2px, transparent 2px 26px)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: px(720),
        background: "var(--teal-900)",
        transform: "skewX(-16deg)",
        transformOrigin: "bottom left"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: px(104),
        top: 0,
        bottom: 0,
        width: px(660),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: px(24)
      }
    }, eyebrow ? /*#__PURE__*/React.createElement("span", {
      style: {
        alignSelf: "flex-start",
        display: "inline-flex",
        alignItems: "center",
        gap: px(10),
        padding: px(8) + "px " + px(15) + "px",
        background: "var(--teal-900)",
        borderRadius: 4,
        font: "var(--type-eyebrow)",
        fontSize: fs(12, 10),
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--white)",
        whiteSpace: "nowrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--sand-400)"
      }
    }, "\u2726"), " ", eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        font: "var(--weight-bold) " + fs(142, 34) + "px/0.86 var(--font-display)",
        letterSpacing: "var(--tracking-hero)",
        color: "var(--teal-900)"
      }
    }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: px(560),
        font: "var(--weight-medium) " + fs(22, 12) + "px/1.45 var(--font-sans)",
        color: "#2E4042",
        textWrap: "pretty"
      }
    }, subtitle) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: px(10)
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
      variant: "amber",
      height: Math.max(px(19), 14),
      assetPath: assetPath
    }))), children || /*#__PURE__*/React.createElement(TowerArt, {
      right: px(118),
      top: py(40),
      width: px(440),
      height: py(480)
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...shell,
      background: "var(--teal-950)",
      boxShadow: "var(--shadow-lg)"
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(var(--blueprint-rule-fine) 1px, transparent 1px), linear-gradient(90deg, var(--blueprint-rule-fine) 1px, transparent 1px)",
      backgroundSize: px(50) + "px " + px(50) + "px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(var(--blueprint-rule-major) 1px, transparent 1px), linear-gradient(90deg, var(--blueprint-rule-major) 1px, transparent 1px)",
      backgroundSize: px(250) + "px " + px(250) + "px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(" + px(900) + "px " + px(520) + "px at 72% 46%, var(--blueprint-glow-blue), transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(" + px(600) + "px " + px(400) + "px at 96% 96%, var(--blueprint-glow-amber), transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: px(96),
      top: 0,
      bottom: 0,
      width: px(660),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: px(26)
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: "flex-start",
      display: "inline-flex",
      alignItems: "center",
      gap: px(10),
      padding: px(7) + "px " + px(14) + "px " + px(7) + "px " + px(11) + "px",
      border: "1px solid rgba(217,185,138,.45)",
      borderRadius: 999,
      background: "rgba(217,185,138,.08)",
      font: "var(--type-eyebrow)",
      fontSize: fs(12, 10),
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--sand-400)",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: fs(14, 11),
      lineHeight: 1
    }
  }, "\u2726"), " ", eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--weight-bold) " + fs(132, 34) + "px/0.9 var(--font-display)",
      letterSpacing: "var(--tracking-hero)",
      color: "var(--white)",
      textWrap: "balance"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: px(18)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: px(64),
      height: px(3),
      background: "var(--sand-400)",
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-mono)",
      fontSize: fs(17, 11),
      lineHeight: 1.5,
      color: "var(--teal-400)"
    }
  }, subtitle)) : null), children || /*#__PURE__*/React.createElement(BlueprintArt, {
    right: px(104),
    top: px(26),
    size: px(520)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: px(96),
      right: px(96),
      bottom: px(40),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: px(22),
      borderTop: "1px solid var(--border-inverse)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "light",
    height: Math.max(px(28), 16),
    assetPath: assetPath
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: px(34),
      font: "var(--type-eyebrow)",
      fontSize: fs(12, 10),
      letterSpacing: "var(--tracking-mono-label)",
      textTransform: "uppercase",
      color: "var(--teal-500)"
    }
  }, rail.map(r => /*#__PURE__*/React.createElement("span", {
    key: r
  }, r)))));
}
Object.assign(__ds_scope, { HeroBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/HeroBanner.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* SubHub Icon Library - the complete library, 24px variants, served from this
   artifact's own asset store. Every name below is drawn in Figma; nothing here is
   authored by hand. ICON_ALIAS maps the legacy Lucide slugs the system was built on
   to library names so existing call sites keep working.
   An unknown name renders the `placeholder` glyph and warns - it is never invented.
   To add an icon: it gets drawn in the Figma library, not here. Contact Nathan Maus
   (nmaus@subcontractorhub.com) and the weekly sync brings it across. */
const ICON_BLOBS = {"3D":"56b9550641d8a7c7703174ea415a971a","activity":"266f426d9f9cbb9a162d0a268af2f8cd","ai":"447eec96c6e9443530292054e9ba6cc6","ai-search":"3f00745706ce586a874e553a620ceef9","airplane":"76342d657807a21009433a8964206c89","apple-face-id":"f37a135e33e4c2377a3528ad890e9caa","apps-add":"5d79c9854e47c19dcff5ce27e4344283","apps-home-screen-grid":"9766fd366cb45ec108fb712963019d53","arriving":"9473f7d25c660657fa82328e8455c4b9","arrow-down":"7647d763e1cdeacf698d95cbd378cec5","arrow-left":"4c65f24835eb6114e62ed042553c74a3","arrow-right":"1e99b0a6f735a67723a2e0ce67399576","arrow-up":"b7df7e965db262f989efb75b07d3b811","arrow-up-right":"2ecc8337c2652b517477eeeba2619fe4","attachment-paperclip":"f3bc59ab2360ab447c9cd091df46d773","backward-rewind":"56634a04920eec45995622b397f4c406","bar-chart":"7e1c5b81c39c9dc9da0efcf107d17761","battery":"f16ee8968a814644e0877f2cb068a784","battery-100":"cb5537642bded2a2599e388e72fcf35c","battery-20":"3d458871224e793a4c3f2664190ccf5f","battery-40":"036961880320c3c5bd71c0d2553af442","battery-60":"51f36037a8fb07ca3429aa9d0b31e529","battery-80":"bc4b86bf119265bab7cc8b7b83419791","battery-charging":"8bd2bf5efa2874d93b2f359550131470","battery-null":"b74a12c6915eb5c4bd5923f24d78dedf","battery-warning":"156670bdbe6bf2253416075aa84bda27","billing":"ddc218aeb50176efbe48f777c4b34bfa","brightness-bright":"edeb8346817451348e9840aac99cceaa","brightness-dim":"4732679e69377d18292240364f5891e6","brightness-null":"09999d6bca6d7e32bb78f7caca37fed7","bug":"c5582ab2986e2edd23ce563cd631bdbb","building-apartment":"3fe6f6b4b3496bc69d652871e8e7c2fd","building-apartment-2":"9d52cbed1592218d14e761a6889a5732","building-bank":"1e7330d6f520283eea098225adad3afd","calculate":"42dd19dfb595e07462d9f4bfd2f2df91","calendar":"355056f6261dde0b0a65eb976641af95","calendar-null":"5e45fea2e9f1c0b63777d858a0d37e7d","call":"f81516319eb38743037054391bdbea94","call-fill":"5767bb6b73f5db777c861b3b1c260f8a","camera":"2a6213612170444c04f34dd44e5c6f3f","car":"bdd4666524b65e9c9080cc184b2e1d40","car-electric-charging":"28daf8374ee1e9ee2cdd8e6faa2a5f75","car-electric-eco":"dd13f7a6eb1d68be5e55746e801913cb","card":"9254fc33acbc7e157a0704fffbec6d7f","cash":"256c42e48d1949e5132c55fb855c038b","change-orientation":"60319db924bb40b0dbe08df4b43d5197","chat":"bd3eb1a34af756385351782ad8c7a231","chat-2":"e89e077f7c21606e965eab597ac65fa3","check":"b2f160e702cd00aa0e5114dfcc9aebda","check-circle":"dfc341297ba136cfe624f3b35013f8fc","check-circle-filled":"21a09c19faa542109b892d51a67b31ca","chevron-down":"832760579d07f0833611ab840000a32a","chevron-left":"dd4be0fbebcace39d941d98361edda72","chevron-right":"d9f3cd03157f428adbbf0a41246a948b","chevron-up":"74ccf89fc6c0649ecf3562d5d644748f","clock":"e19d5d0f9faa5b38424096f02b569f62","clock-alarm":"e92aded74ecf9d692c583472e565d556","clock-fill":"b4a424c2a895ab0d0825e65b4a4c629b","close-cancel":"8f4d8071e5c3a8025314334d5817aa74","close-cancel-circle":"05e663706fb71ab33d816f6794ad0123","cloud":"e24951cd7f7229a4a1c65218696d6a01","cloud-lightning-rain":"778246bd3ac2b6306f826cdacc5e6491","cloud-partly-sunny":"b882e6bf54a1ca6af2d67ce4c57a1372","cloud-rain":"a15c710638b6f42f851ea98a4fd48d9c","cloud-snow-sun":"949b5e619e26c94cfd0c42ed1f573b15","cloud-snowing":"4b0ab0751b484e03fac72e94b92f1593","cloud-sun-rain":"c27b930ec9d41637b6e69470614d7193","cloud-wind":"e16631cf06b680fb8783a0ac4445f107","cool-snow":"41d56c4ca6c477c251f1ed8a8ecb5a41","cool-snow-null":"00b151882f4fa5007578ff732c5144b9","copy":"37ed7f845c4eaa7c0c836d5a8e1775d7","credit-card":"e66f9f7949151298152fd9964091b390","cursor-selection":"82f53f6248fb5108ddd0e328d446f5f3","dark-mode":"d4a6fb3f78b392caac25e96fa57120cc","dev-mode":"158523304aed4e7bf6300aa56de1140f","devices":"3f4ca29b060f8729812707845d8ad17c","devices-null":"6606a3a514164f81f83cba846cc044d7","diamond":"e77e71aef90fd1c1f44614965d57f8d4","distance":"6dea85b1123e132f1247def71ef7b93e","documents":"dd30c71f6879240a0c7d8a53c56d5b2b","door":"5c46759af1eb58869a76b47cc0a3fa19","door-null":"9fbcbef1ec782a2a78014ed7344f0e4b","door-open":"e611e4a3957b0f85171b4d8ff39c9cbe","download":"3fdfa6948bdf3b0a2e5ada8714c93eb3","drag-drop":"7ead45f9f21b6601be227ff798d0787e","draw-facets":"48660fb4c48551e681ce06a1a49ffce7","ear":"5c3981e52b666fdac194c0815ae87e63","eco":"f054b2710d4a5192f4cea8737c80707c","edges":"ff73ad8e7717f7bddc916ed26ffa2840","edit-facets":"4ee48a9eb9e57fc8d861451f6997f9d1","edit-panel":"2ce82d9a206b41b23eb4b1e5d5fd4321","electric-tower":"1c35fb56436363115504d9918020b1b1","email":"5d30037d9815be46c1935a3009949f8d","energy-grid-charging":"552add54157ec85cdda1ef84323f94bd","expand":"e46bcd471261fd8f84e4c0b628f63cba","external-link":"9434d94915ed1cdb493a95d9ff6b84da","eye-view":"4e56b0ed33bfe34c61f828a8f6fd3aad","eye-view-null":"434e3549823eb395e452c4c1d02b3738","fan":"b0d1da8d718baca86c5bbd5a2deb0789","fan-null":"4f13b18ea9f59b0268c4c84b79c21447","fast-wind":"9ee61863942bc5a73526f11d8676bd3f","film":"11a7f074a8c59ecfbcc3daa7dc3fdf79","filter":"bc96d340257ac54b3c5ae77f39bec544","fire":"ce4f46bf0c59582b3c30796145489c1a","fire-null":"d411f1fb17de721f92d03d83897fff20","first-responder-1":"99a4cd87cb11ad46b660cbfa72fe1591","first-responder-1-null":"e65a0f9ed72971d699102756ce5a4679","first-responder-2":"26bd1c6bde52a45bbfe484d352640030","first-responder-2-null":"1350b621a45b19ec6129ee6d8c1fb7c0","flag":"013eeee7129556298ac93f1a8863b8a3","flashlight":"2ca9826a486a582915f1b07bc78848d6","fog":"083500bce114147ecf59b6863ad14259","forward":"dc6a725b3d3464a36fbfb3818037bc5c","garage":"a61d9125f86081b2bda9835d73f05b46","garage-null":"88338eb3ad4ec77bd0cffd32b6c4dc86","garage-opened":"65a69febe5430de712c7606cf43a1b5c","garage-unknown":"1304016742921e4d515f1584cd2126ef","grip":"ea779a642f413b16e214608f24dd625d","headset":"14197231d4f79da6d5dcc8a957f6b625","headset-null":"d494056f53c3b05b9fb4cf13a2739014","heart-like-love":"0c5c24197251a3919071b366c2deb2f9","heart-like-love-fill":"b37e61ea0d9cc2bb4dac2bab641a6e3b","heating-cooling":"a017afce5e34f4f8ddcb3995e35c5045","home":"f1bd3b3f24a1240be9c6feba5d2408ed","home-2":"be629ec548805f4cfa395f93ef2db985","home-battery":"f32d40aa09a3f1775ebbbea8704eafde","home-fill":"f5533073f05c2f08e9f7772bd59f575d","hurricane-storm":"07b44585c588623ad246d309d4cb8fb2","hvac-air":"803495f44abdb0059ff1d5032470e963","image":"f53445fdc36d944e283671240dd36ca0","image-add":"8b43584833774bffdcb79cd3e6b3c761","image-multiple":"c1c999ef0aabc73285e687e5459dd7e7","info":"77a7a664fbae9c39c5098e80420f52e9","keyboard":"067cb2f6ef1566389a70ed3c05e944ca","leaving":"3860e12e1b1f5faef99f54b1930b73c0","legal":"433d7e78c1896cadbf8d2058a1335df0","light":"fdddc73d2a45de941212890a265b81bd","light-null":"384958d3abd7786619c65b594bf5dba0","light-on":"6ad2db943c50e76a5bde813bbb068105","lightning-bolt":"12a3f7b7e7912b4aa1ab2810d7f4ef52","lightning-bolt-fill":"6a944632cf4dcbf74449181550da011a","link":"03d87c1a4c663afb90f9ce7f30616e2a","lock-null":"7c2ba5226fbc1ecd6ee81069434debbc","locked":"930f13de7444023795b0e6c951cac635","magic-wand":"0efa80bc4427fdcfbcfb06f7813b7ec1","menu-collapse":"2db8a9264d9d10c2f7fe83ae33827a46","menu-hamburger":"f62e0dc0b7d5ad4a53caf527607faa65","menu-more-horizontal":"25c1ca62ddfac48250c9722cb1a62246","menu-more-vertical":"4f6ff602160c29eb667221e16fa91139","microphone":"915554c3a18d4064314e6d305113df5f","microphone-null":"db4ccae5aa96e0b738c81b86e553c1af","minimize":"30e1baf213a20e8ce6e5d374a9bc0935","minus":"0a04ca7c374d758de250211c3ec54f9d","monitor":"1f2de28c126827c789310c85a0c65ff6","moon":"b454dbd54b724bbf134b09df53a80dc4","move":"b87faf542fbe63c0012ceb28d5651ede","navigation-arrow":"f96e59144b73c5d3038fd3c20a056181","next":"4d02ebf700984845b2bd67880c01faa5","notification-bell":"dc3808616b87232a28151b5b395a0eb6","notification-bell-null":"4a5ba2b8697dfad390db3d0537b40d59","notification-snooze":"8781678910eb5e02940ee39a0d3b3a20","obstruction":"82056104bde0ec8d1f25bd46d85f7c1e","organization":"703b8947666fdb4c2f7e884f9d4617cb","package-box":"3d6701eb846fca636c809934abef451a","panels":"2450eaaa0b353340e9cce03bff7a46bb","pause":"1a1401bcc1cdd4b85b53498ec2f1d68a","pause-fill":"6121a6f419698e8955152a7a12d53556","pencil":"58b8347a43a10397468b27952a154a09","pet":"40eb725b0fa0014863ebb191b9174469","pet-print":"32afd0930af9b2a0a9e8ced0fb211fbc","phone-cell":"9c0e298c47b42070c31d35fbed5f0aac","pin":"c76b825724c2b525224fa5defa5c6774","placeholder":"50eaf21c423cd92aaeadddffa7840ded","play":"d1b6dad74550f9213e8197c67c4f9b75","play-fill":"cebfdc6ea10cfdce59eddf3d3469548f","plus":"cb020bcf8a926e5b98b63b7148c3a4aa","potion":"f74c5a6a8ef999acb681a58cf1ff7773","power-on":"a817e20b186ef54e43b9dd613092a3c5","power-plant":"fa67a22182762bceabf9d5e61c822ddd","previous":"6f6c5dbcf358d47a1b29ee818b9e01ea","printer":"56f73c53077fc8c52c0bf172e89e3baa","qr-code":"f0ddddf2eaaead9dd0cb8b34761fdc04","question":"b3e42077ee4ced6bc6d5029bc5ca1d29","redo":"75c18eba7564d5a9b0152e02e6241aaa","refer-a-friend":"d64241ad731334a6ecab7605cce770b5","refresh":"408702be9bfb486de97eaecb9444d25b","reload":"6217eb28674e774c86eaa38d92035a75","router":"9c0ed21539260b876b560fa0b0dcb76b","saved-bookmark":"58acefac51aa20e9643dbec3b29de80f","screwdriver":"cab11d411014f1699b658f83252f88a5","search":"f90daea78fe4fbe0f596ecfb614b12d3","settings-gear":"5c1e0eb05d86f498372b42f198ce0395","share":"347aafa6dc85ada0ce5a630941fc24de","share-2":"613f8655bdc6502ca39f2e38338a7217","share-android":"a724b430beff9a1586ff763fb062df99","shield":"0639f2d650aaf93a37e11bbb3b85b509","shield-check":"c30765f679cc19e59bdfbd0e36db096d","shield-check-fill":"1cd4ea9597fc99b92be60e69c76bbccf","shield-star":"947b55f46e5397e128c6120693c5679a","shield-star-fill":"0ef9e1fb9e0be7bf59d5641b389c78d4","shopping-bag":"fc1b98530a8b863e9d18ed811f9becf2","shopping-bag-fill":"ec65bf1deb52714af4f70a1f0ad01bd3","shopping-cart":"b5d22af55e710a38f02b7d2247938604","sign-in":"c809b9203beb9b05cc2b23a143e8067b","sign-out":"76095a64181b198456edbdc642d57c5d","signal-1":"5309539809627703eb0125d38e411baa","signal-2":"e71a95718a4c8d28a0b477804247cef9","signal-3":"c9998558f59104855ecd2e0398864156","signal-4":"032b0160f47079aef99f9b29f5657102","signal-5":"9a11147f24c5b5e30f61bd5e376d6363","signal-null":"95cd30b58ddcb9707ba07aec6aa11a6b","siren-alarm":"f1f50aa8974a5620ebd52fbce6be6445","siren-alarm-fill":"cd888b5e9e5e81adfce9bc2e11ebd09c","slider":"e9509445282640c021c33eb4e0fa6acd","snow-alt":"ce3bad7a77518ca1202a620661e98c9d","solar":"9dd4f72df3d05b143c0edc48703af05a","sparkle":"032df04114324b16c0cd78253b53d60d","sparkle-2":"abad403f9d9bc5b3f81a0e1faac868b9","speaker":"616a6be7cc59fbcd49eb1655f80accec","speaker-loud":"93393a9aaca73333f2d5e577c7989b12","speaker-mute":"ca8cfd549789ac911b4bbe8abd0c6fe9","speaker-on":"618207e76fb8967c620feac969fb789c","star":"6eb99647641f047ceaf924b267e1b103","star-filled":"5be6fc19c7144410b0125196df9ff021","star-half":"ded8eca0d3ec0d4a53a4a0887f79423d","sun":"f67f874d60e145d92f055f1e9bd8ab49","sunrise":"597b9c371fcf516e5d2475774f139229","sunset":"095501098a65d6bf17f88b0298a80054","switch":"5c7cf9dc000bbd4cf71fb54fdbe4414f","thermometer":"90387b0f531a5e83ab14a5c22a62ebea","thermometer-cool":"7e06927e549c9237db3102023eee5bf5","thermometer-heat":"8b4fa18f1dc0096d20f846ddca6fd4a5","thermometer-heat-null":"f5932cc8de58ad61f5abf5e9013a869d","thumbs-down":"c89872b38a57419f3906884f9b5c9153","thumbs-down-fill":"2e90e5276451b930e994f4d8d6ec090e","thumbs-up":"e2d2f9ea39e83217d71b6af6ca4a5a5c","thumbs-up-fill":"c04a47d1c622e3c63756572b44675fb2","toggle-off":"12ae29eac6948e6f537e01cf598fb64c","toggle-on":"dd0a95fafbc93bcaf54404a8ce5c6b24","tornado":"8d6c3139cc0fd5622c1f08b00b7ed455","trash":"5879697f1743b6bc12150294b8c210cd","tree":"75992691b0c6ab51467339beb80b0058","trend-down":"4bfc1d09630ed3b568b92f73587f7cca","trend-up":"25f3ea83b7e412bc0282325728478c6d","undo":"23dce3a7783c84338f4eb5e8a636889d","unlocked":"0b08b858cf1a31482a5a057ad49e8075","upload":"ad613cc1d36d52a8a33f5dd606c3c301","user":"b2c327f1a85b1a07b8b1ef8c3efbc497","user-add":"637d2ebecce390d8886f313dd99f0930","user-admin":"a686dc6cade16cd26bbdeb8def05591c","user-null":"ec1701124143aa8f3aab0cbb00190ac1","users":"b5967172a59ef65020d7bd2dbededfa9","video-camera":"952a2bc85ee85f57c99facb97df23736","video-camera-null":"9f1a5819e2cb8e106dd38c9de345ab09","video-clip":"7b28784db4cb29cebeb71977c57d3def","video-playback":"70201ade64189790eaae9f813827bc49","warning":"4da0d147c321a4d14f3d5d1dece1b3c0","warning-fill":"e18ad747834ebe516dc35d4135c00e1a","water-drop":"3af06a5097f9d042fc9ef71f26be92c8","wifi-1":"efd22ce0855ef482229ccc3e79ce06f6","wifi-2":"fb6f443e1f3726a8b23ea061ade45b4c","wifi-3":"79c540bca968c84b03e5e099c4a194bb","wifi-4":"efb5f841062325e4be6939f79630bc4a","wifi-null":"072e801ead9b3169ac37c906de588b0b","wifi-warning":"cfc9db4838aedbab77a51cf8f820dec8","window":"2d41b6930f25b6288f800a5c09fcb281","window-null":"d321588e68e25df1d4ff55e6e2376eb1","window-open":"7ebb8ef9726479f2d5f7b81e66966e23","world-globe":"716057e972c43fbf779b553076ffd06f","zoom-in":"5b09e9899ebd25302f28f23b8e175666","zoom-out":"a249e1d5b4a8a89ac89d26b8563b580a"};
const ICON_ALIAS = {"alert-circle":"warning","bar-chart-3":"bar-chart","bell":"notification-bell","circle-dollar-sign":"billing","circle-help":"question","file-check":"shield-check","file-text":"documents","mail":"email","map-pin":"pin","send":"navigation-arrow","settings":"settings-gear","sparkles":"sparkle","trending-down":"trend-down","trending-up":"trend-up","wind":"hvac-air"};
const ICON_MISSING = "placeholder";
const __iconWarned = (typeof Set === "function") ? new Set() : null;
/* Where icon files come from: <name>.svg inside __ICON_DIR, a folder beside the bundle's parent.
   GitHub repo: "icons/". Claude artifact: "assets/Icons/". Resolved at first use, in order:
   window.SUBHUB_ICON_BASE, the folder next to this bundle's own URL, the artifact's project/
   folder, then a plain relative path. */
const __ICON_DIR = "assets/Icons/";
const __BUNDLE_SRC = (typeof document !== "undefined" && document.currentScript && document.currentScript.src) || "";
let __iconBaseCache = null;
function __iconBase() {
  if (__iconBaseCache) return __iconBaseCache;
  let b = (typeof window !== "undefined" && window.SUBHUB_ICON_BASE) || "";
  if (!b && __BUNDLE_SRC) b = new URL("../" + __ICON_DIR, __BUNDLE_SRC).href;
  if (!b && typeof document !== "undefined") {
    const s = document.querySelector('script[src*="bundle.js"]');
    if (s && s.src) b = new URL("../" + __ICON_DIR, s.src).href;
  }
  if (!b && typeof location !== "undefined") {
    const i = location.pathname.indexOf("/project/");
    if (i >= 0) b = location.origin + location.pathname.slice(0, i) + "/project/" + __ICON_DIR;
  }
  __iconBaseCache = (b || __ICON_DIR).replace(/\/?$/, "/");
  return __iconBaseCache;
}
function __iconSrc(key) { return __iconBase() + key + ".svg"; }
function iconUrl(name) {
  const key = ICON_BLOBS[name] ? name : ICON_ALIAS[name];
  const id = ICON_BLOBS[key];
  if (id) return __iconSrc(key);
  if (__iconWarned && !__iconWarned.has(name)) {
    __iconWarned.add(name);
    if (typeof console !== "undefined" && console.warn) {
      console.warn(
        '[SubHub Icon] "' + name + '" is not in the SubHub Icon Library, so the ' +
        'placeholder glyph is showing. Do not draw a replacement and do not paste in ' +
        'an icon from another set - this design system only ships icons drawn in the ' +
        'SubHub Icon Library in Figma. Contact Nathan Maus (nmaus@subcontractorhub.com) ' +
        'to have "' + name + '" drawn, and the weekly sync will bring it across.'
      );
    }
  }
  return __iconSrc(ICON_MISSING);
}
function Icon({
  name,
  size = 18,
  color = "currentColor",
  style,
  ...rest
}) {
  const _src = iconUrl(name);
  const url = `url("${_src}")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: "var(--surface-page)",
    fg: "var(--status-neutral-text)",
    border: "1px solid var(--border-subtle)"
  },
  brand: {
    bg: "var(--surface-brand-subtle)",
    fg: "var(--status-info-text)",
    border: "1px solid var(--sand-200)"
  },
  accent: {
    bg: "var(--surface-accent-subtle)",
    fg: "var(--sand-700)"
  },
  ai: {
    bg: "var(--surface-accent-subtle)",
    fg: "var(--sand-700)"
  },
  "ai-dark": {
    bg: "rgba(217,185,138,0.08)",
    fg: "var(--sand-400)",
    border: "1px solid rgba(217,185,138,0.45)"
  },
  inverse: {
    bg: "rgba(255,255,255,0.12)",
    fg: "var(--white)"
  }
};
function Badge({
  children,
  tone = "neutral",
  icon,
  uppercase = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: t.bg,
      color: t.fg,
      border: t.border || "none",
      font: uppercase ? "var(--type-eyebrow)" : "var(--weight-semibold) 13px/1 var(--font-sans)",
      letterSpacing: uppercase ? "var(--tracking-eyebrow)" : "-0.005em",
      textTransform: uppercase ? "uppercase" : "none",
      padding: "7px 13px",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: "var(--control-height-sm)",
    padding: "0 14px",
    font: "var(--weight-semibold) 13.5px/1 var(--font-sans)",
    gap: 4,
    icon: 15
  },
  md: {
    height: "var(--control-height)",
    padding: "0 20px",
    font: "var(--weight-semibold) 15px/1 var(--font-sans)",
    gap: 4,
    icon: 17
  },
  lg: {
    height: "var(--control-height-lg)",
    padding: "0 26px",
    font: "var(--weight-semibold) 16.5px/1 var(--font-sans)",
    gap: 4,
    icon: 19
  }
};
const VARIANTS = {
  primary: {
    background: "var(--action-primary)",
    color: "var(--text-on-brand)",
    border: "1px solid transparent",
    hover: "var(--action-primary-hover)",
    shadow: "var(--shadow-xs)"
  },
  secondary: {
    background: "var(--surface-card)",
    color: "var(--text-strong)",
    border: "1px solid var(--border-default)",
    hover: "var(--surface-sunken)",
    shadow: "var(--shadow-xs)"
  },
  dark: {
    background: "var(--action-secondary)",
    color: "var(--text-on-ink)",
    border: "1px solid transparent",
    hover: "var(--action-secondary-hover)",
    shadow: "var(--shadow-xs)"
  },
  accent: {
    background: "var(--action-accent)",
    color: "var(--teal-900)",
    border: "1px solid transparent",
    hover: "var(--action-accent-hover)",
    shadow: "var(--shadow-xs)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-link)",
    border: "1px solid transparent",
    hover: "var(--surface-brand-subtle)",
    shadow: "none"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconTrailing,
  fullWidth = false,
  disabled = false,
  type = "button",
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      font: v.family ? s.font.replace("var(--font-sans)", v.family) : s.font,
      letterSpacing: "0.002em",
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-control)",
      border: v.border,
      background: disabled ? "var(--action-disabled-bg)" : hover ? v.hover : v.background,
      color: disabled ? "var(--action-disabled-text)" : v.color,
      boxShadow: disabled ? "none" : v.shadow,
      width: fullWidth ? "100%" : undefined,
      cursor: disabled ? "not-allowed" : "pointer",
      transform: press && !disabled ? "scale(var(--press-scale))" : "none",
      transition: "var(--transition-control), transform var(--duration-instant) var(--ease-standard)",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children, iconTrailing ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconTrailing,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    box: 32,
    icon: 16
  },
  md: {
    box: 40,
    icon: 18
  },
  lg: {
    box: 48,
    icon: 20
  }
};
function IconButton({
  icon,
  label,
  size = "md",
  variant = "quiet",
  disabled = false,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const skins = {
    quiet: {
      bg: hover ? "var(--surface-page)" : "transparent",
      fg: "var(--text-muted)",
      border: "1px solid transparent"
    },
    outline: {
      bg: hover ? "var(--surface-sunken)" : "var(--surface-card)",
      fg: "var(--text-body)",
      border: "1px solid var(--border-default)"
    },
    solid: {
      bg: hover ? "var(--action-primary-hover)" : "var(--action-primary)",
      fg: "var(--text-on-brand)",
      border: "1px solid transparent"
    }
  };
  const k = skins[variant] || skins.quiet;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: s.box,
      height: s.box,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-control)",
      border: k.border,
      background: disabled ? "var(--action-disabled-bg)" : k.bg,
      color: disabled ? "var(--action-disabled-text)" : k.fg,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATES = {
  approved: {
    bg: "var(--status-success-bg)",
    fg: "var(--status-success-text)",
    dot: "var(--green-600)"
  },
  paid: {
    bg: "var(--status-success-bg)",
    fg: "var(--status-success-text)",
    dot: "var(--green-600)"
  },
  pending: {
    bg: "var(--status-warning-bg)",
    fg: "var(--status-warning-text)",
    dot: "var(--yellow-600)"
  },
  overdue: {
    bg: "var(--status-danger-bg)",
    fg: "var(--status-danger-text)",
    dot: "var(--red-600)"
  },
  review: {
    bg: "var(--status-info-bg)",
    fg: "var(--status-info-text)",
    dot: "var(--teal-500)"
  },
  draft: {
    bg: "var(--status-neutral-bg)",
    fg: "var(--status-neutral-text)",
    dot: "var(--teal-400)"
  }
};
function StatusPill({
  state = "draft",
  children,
  showDot = true,
  style,
  ...rest
}) {
  const s = STATES[state] || STATES.draft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      background: s.bg,
      color: s.fg,
      font: "var(--type-label)",
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), showDot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: s.dot
    }
  }) : null, children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  padding = "var(--card-pad)",
  tone = "default",
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      color: "var(--text-body)"
    },
    sunken: {
      background: "var(--surface-sunken)",
      border: "1px solid var(--border-subtle)",
      color: "var(--text-body)"
    },
    inverse: {
      background: "var(--surface-inverse)",
      border: "1px solid var(--border-inverse)",
      color: "var(--teal-200)"
    },
    brand: {
      background: "var(--surface-brand-subtle)",
      border: "1px solid var(--sand-200)",
      color: "var(--sand-800)"
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: t.background,
      border: t.border,
      color: t.color,
      padding,
      borderRadius: "var(--radius-card)",
      boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      cursor: interactive ? "pointer" : "default",
      transition: "var(--transition-surface)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  dense = false,
  style,
  ...rest
}) {
  const padY = dense ? 10 : 14;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: "hidden",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-sm)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--surface-sunken)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: "11px 18px",
      font: "var(--weight-semibold) var(--text-eyebrow)/1 var(--font-sans)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
      width: c.width
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id || i,
    style: {
      borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--border-subtle)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: c.mono ? "tabular" : undefined,
    style: {
      padding: `${padY}px 18px`,
      textAlign: c.align || "left",
      font: c.mono ? "var(--type-mono)" : "var(--type-body)",
      fontSize: dense ? 14 : 15,
      color: c.strong ? "var(--text-strong)" : "var(--text-body)",
      fontWeight: c.strong ? "var(--weight-semibold)" : undefined,
      verticalAlign: "middle"
    }
  }, c.render ? c.render(r) : r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  label,
  value,
  delta,
  deltaDirection = "up",
  icon,
  footnote,
  style,
  ...rest
}) {
  const good = deltaDirection === "up";
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    padding: "18px 20px",
    style: {
      display: "grid",
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-semibold) var(--text-eyebrow)/1 var(--font-sans)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, label), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17,
    color: "var(--text-subtle)"
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      font: "var(--weight-bold) 30px/1.1 var(--font-mono)",
      color: "var(--text-strong)"
    }
  }, value), delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      font: "var(--type-label)",
      fontSize: 13,
      color: good ? "var(--green-700)" : "var(--red-700)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: good ? "trending-up" : "trending-down",
    size: 14
  }), delta) : null), footnote ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, footnote) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label + hint + error wrapper shared by every form control. */
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gap: 6,
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red-600)",
      marginLeft: 3
    }
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontSize: 13,
      color: "var(--status-danger-text)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  icon,
  suffix,
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const border = invalid ? "var(--red-600)" : focus ? "var(--border-brand)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      height: "var(--field-height)",
      padding: "0 14px",
      background: disabled ? "var(--surface-page)" : "var(--surface-card)",
      border: `1px solid ${border}`,
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "var(--transition-control)",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17,
    color: "var(--text-subtle)"
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--type-body)",
      fontSize: 15,
      color: "var(--text-strong)"
    }
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      fontSize: 13,
      color: "var(--text-subtle)"
    }
  }, suffix) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      minWidth: 0,
      height: "var(--field-height)",
      padding: "0 12px 0 14px",
      background: disabled ? "var(--surface-page)" : "var(--surface-card)",
      border: `1px solid ${focus ? "var(--border-brand)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "var(--transition-control)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      width: 0,
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      appearance: "none",
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--type-body)",
      fontSize: 15,
      color: "var(--text-strong)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 17,
    color: "var(--text-subtle)"
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked === undefined ? inner : checked;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    if (onChange) onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    onClick: toggle,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 11,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    style: {
      width: 42,
      height: 24,
      borderRadius: "var(--radius-pill)",
      padding: 3,
      flex: "0 0 auto",
      background: on ? "var(--action-primary)" : "var(--teal-300)",
      transition: "background-color var(--duration-base) var(--ease-standard)",
      display: "flex",
      justifyContent: on ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "var(--white)",
      boxShadow: "var(--shadow-xs)",
      transition: "transform var(--duration-base) var(--ease-out)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontSize: 15,
      color: "var(--text-strong)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const first = tabs.length ? typeof tabs[0] === "string" ? tabs[0] : tabs[0].value : "";
  const [inner, setInner] = React.useState(defaultValue || first);
  const active = value === undefined ? inner : value;
  const pick = v => {
    if (value === undefined) setInner(v);
    if (onChange) onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 26,
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), tabs.map(t => {
    const v = typeof t === "string" ? t : t.value;
    const label = typeof t === "string" ? t : t.label;
    const count = typeof t === "string" ? undefined : t.count;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      onClick: () => pick(v),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "0 0 12px",
        background: "none",
        border: "none",
        cursor: "pointer",
        font: "var(--weight-semibold) 15px/1 var(--font-sans)",
        color: on ? "var(--text-strong)" : "var(--text-muted)",
        boxShadow: on ? "inset 0 -2px 0 0 var(--action-primary)" : "none",
        transition: "var(--transition-control)"
      }
    }, label, count !== undefined ? /*#__PURE__*/React.createElement("span", {
      className: "tabular",
      style: {
        font: "var(--type-mono)",
        fontSize: 12,
        color: on ? "var(--status-info-text)" : "var(--text-subtle)",
        background: on ? "var(--surface-brand-subtle)" : "var(--surface-page)",
        padding: "2px 7px",
        borderRadius: "var(--radius-pill)"
      }
    }, count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MainMenu.jsx
try { (() => {
const { Icon, Switch } = __ds_scope;
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
            item.badge ? React.createElement("span", { style: { font: "var(--weight-semibold) 12px/16px var(--font-sans)", color: "var(--text-on-brand)", background: "var(--action-primary)", borderRadius: "var(--radius-pill)", padding: "2px 8px" } }, item.badge) : null
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
Object.assign(__ds_scope, { MainMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MainMenu.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tooltip.jsx
try { (() => {
const { Button } = __ds_scope;
/**
 * Tooltip — a small surface that points at the element it explains.
 * Variant "announcement": an unprompted tooltip that introduces something new,
 * with a title, a line of body copy and up to two actions. It enters on the
 * system's tooltip spring (stiffness 380, damping 19, mass 1; see motion.md).
 */
/* The tooltip spring (stiffness 380, damping 19, mass 1) sampled at 41 points over 450ms.
   Baked into keyframes rather than a linear() easing so it plays in every browser. */
const TOOLTIP_SPRING = [0, 0.022, 0.085, 0.176, 0.281, 0.396, 0.520, 0.641, 0.750, 0.849, 0.938, 1.013, 1.070, 1.115, 1.145, 1.164, 1.172, 1.171, 1.162, 1.148, 1.131, 1.112, 1.091, 1.069, 1.050, 1.032, 1.016, 1.002, 0.991, 0.983, 0.977, 0.973, 0.971, 0.970, 0.971, 0.973, 0.976, 0.980, 0.983, 0.987, 1];
const TOOLTIP_OFFSET = 32;
const TOOLTIP_SCALE_FROM = 0.92;
function tooltipSpringKeyframes(name, sign) {
  const last = TOOLTIP_SPRING.length - 1;
  return "@keyframes " + name + "{" + TOOLTIP_SPRING.map((p, i) =>
    (i * 100 / last).toFixed(2) + "%{transform:translateY(" + (sign * TOOLTIP_OFFSET * (1 - p)).toFixed(2) + "px) scale(" + (TOOLTIP_SCALE_FROM + (1 - TOOLTIP_SCALE_FROM) * p).toFixed(4) + ")}"
  ).join("") + "}";
}
const TOOLTIP_CSS = [
  tooltipSpringKeyframes("shds-tip-from-above", -1),
  tooltipSpringKeyframes("shds-tip-from-below", 1),
  "@keyframes shds-tip-fade{from{opacity:0}to{opacity:1}}",
  "@keyframes shds-tip-out{from{opacity:1}to{opacity:0}}",
  "@media (prefers-reduced-motion: reduce){.shds-tooltip{animation:none !important}}"
].join("\n");

function Tooltip({
  variant = "announcement", title, body, children,
  primaryLabel, secondaryLabel, onPrimary, onSecondary, onDismiss,
  placement = "bottom", arrowAlign = "end", arrowOffset = 104,
  delay = 600, animate = true, loop = false, width = 320, style, ...rest
}) {
  const titleId = React.useId ? React.useId() : "shds-tip-title";
  const [cycle, setCycle] = React.useState(0);
  const [closing, setClosing] = React.useState(false);
  React.useEffect(() => {
    if (!loop) return undefined;
    let t2;
    const t1 = setTimeout(() => {
      setClosing(true);
      t2 = setTimeout(() => { setClosing(false); setCycle((c) => c + 1); }, 400);
    }, delay + 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [loop, cycle, delay]);

  const below = placement !== "top";
  const arrowX = arrowAlign === "start" ? arrowOffset + "px" : arrowAlign === "center" ? "50%" : "calc(100% - " + arrowOffset + "px)";
  const move = below ? "shds-tip-from-above" : "shds-tip-from-below";
  const animation = closing
    ? "shds-tip-out 150ms cubic-bezier(.4,0,1,1) forwards"
    : animate
      ? move + " 450ms linear " + delay + "ms both, shds-tip-fade 150ms linear " + delay + "ms both"
      : "none";
  const w = typeof width === "number" ? width + "px" : width;

  const arrowStyle = {
    position: "absolute", width: 16, height: 16, background: "var(--surface-card)",
    left: arrowX, marginLeft: -8, transform: "rotate(45deg)",
    ...(below
      ? { top: -9, borderLeft: "1px solid var(--border-subtle)", borderTop: "1px solid var(--border-subtle)", borderRadius: "4px 0 0 0" }
      : { bottom: -9, borderRight: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", borderRadius: "0 0 4px 0" })
  };

  return React.createElement("div", {
    key: cycle, role: "dialog", "aria-labelledby": titleId, "data-variant": variant, className: "shds-tooltip",
    onKeyDown: (e) => { if (e.key === "Escape" && onDismiss) onDismiss(); },
    style: {
      position: "relative", width: "min(" + w + ", calc(100vw - 32px))", boxSizing: "border-box",
      background: "var(--surface-card)", border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-overlay)", padding: 24,
      transformOrigin: arrowX + (below ? " 0" : " 100%"), animation, ...style
    },
    ...rest
  },
    React.createElement("style", null, TOOLTIP_CSS),
    React.createElement("span", { "aria-hidden": "true", style: arrowStyle }),
    React.createElement("div", { id: titleId, style: { font: "var(--weight-semibold) 20px/24px var(--font-sans)", color: "var(--text-strong)", letterSpacing: "var(--tracking-heading)" } }, title),
    (body || children) ? React.createElement("p", { style: { margin: "8px 0 0", font: "var(--weight-regular) 16px/24px var(--font-sans)", color: "var(--text-body)" } }, body || children) : null,
    (primaryLabel || secondaryLabel) ? React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 } },
      primaryLabel ? React.createElement(Button, { variant: "primary", onClick: onPrimary }, primaryLabel) : null,
      secondaryLabel ? React.createElement(Button, { variant: "secondary", onClick: onSecondary || onDismiss }, secondaryLabel) : null
    ) : null
  );
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Toast.jsx
try { (() => {
const { Icon, IconButton } = __ds_scope;
/**
 * Toast — a transient message that slides up from the bottom of the viewport,
 * holds for seven seconds and fades away. It enters on the system's tooltip
 * spring (stiffness 380, damping 19, mass 1; see motion.md) over 8px of travel,
 * which reads as a soft landing rather than a bounce.
 *
 * ToastStack positions up to three of them, bottom centre, newest nearest the edge.
 */
/* The tooltip spring sampled at 41 points over 450ms. Baked into keyframes rather than
   a linear() easing so it plays in every browser. Same curve as Tooltip, 8px of travel. */
const TOAST_SPRING = [0, 0.022, 0.085, 0.176, 0.281, 0.396, 0.520, 0.641, 0.750, 0.849, 0.938, 1.013, 1.070, 1.115, 1.145, 1.164, 1.172, 1.171, 1.162, 1.148, 1.131, 1.112, 1.091, 1.069, 1.050, 1.032, 1.016, 1.002, 0.991, 0.983, 0.977, 0.973, 0.971, 0.970, 0.971, 0.973, 0.976, 0.980, 0.983, 0.987, 1];
const TOAST_OFFSET = 8;
const TOAST_DURATION = 7000;
const TOAST_SPRING_MS = 450;
const TOAST_FADE_IN_MS = 150;
const TOAST_EXIT_MS = 200;
const TOAST_INSET = 16;
const TOAST_MAX = 3;

const TOAST_CSS = [
  "@keyframes shds-toast-move{" + TOAST_SPRING.map((p, i) =>
    (i * 100 / (TOAST_SPRING.length - 1)).toFixed(2) + "%{transform:translateY(" + (TOAST_OFFSET * (1 - p)).toFixed(2) + "px)}"
  ).join("") + "}",
  "@keyframes shds-toast-fade{from{opacity:0}to{opacity:1}}",
  "@keyframes shds-toast-out{from{opacity:1}to{opacity:0}}",
  "@media (prefers-reduced-motion: reduce){.shds-toast{animation:shds-toast-fade " + TOAST_FADE_IN_MS + "ms linear both !important}}"
].join("\n");

const TONES = {
  success: { bg: "var(--status-success-bg)", fg: "var(--status-success-text)", icon: "check-circle-filled" },
  danger: { bg: "var(--status-danger-bg)", fg: "var(--status-danger-text)", icon: "close-cancel-circle" },
  warning: { bg: "var(--status-warning-bg)", fg: "var(--status-warning-text)", icon: "warning-fill" },
  info: { bg: "var(--status-info-bg)", fg: "var(--status-info-text)", icon: "info" }
};

function Toast({
  tone = "info", children, message, icon, showIcon = true,
  actionLabel, onAction, onDismiss, duration = TOAST_DURATION,
  animate = true, paused = false, style, ...rest
}) {
  const t = TONES[tone] || TONES.info;
  const [leaving, setLeaving] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const held = paused || hover;

  /* The hold is wall time, not an animation: it starts once the entrance has landed
     and stops while the pointer is over the toast, so an action stays reachable. */
  React.useEffect(() => {
    if (!onDismiss || held || duration == null || duration === Infinity) return undefined;
    const t1 = setTimeout(() => setLeaving(true), (animate ? TOAST_SPRING_MS : 0) + duration);
    return () => clearTimeout(t1);
  }, [onDismiss, held, duration, animate]);

  React.useEffect(() => {
    if (!leaving || !onDismiss) return undefined;
    const t2 = setTimeout(onDismiss, TOAST_EXIT_MS);
    return () => clearTimeout(t2);
  }, [leaving, onDismiss]);

  const animation = leaving
    ? "shds-toast-out " + TOAST_EXIT_MS + "ms var(--ease-standard) forwards"
    : animate
      ? "shds-toast-move " + TOAST_SPRING_MS + "ms linear both, shds-toast-fade " + TOAST_FADE_IN_MS + "ms linear both"
      : "none";

  return React.createElement("div", {
    className: "shds-toast", role: tone === "danger" ? "alert" : "status",
    "aria-live": tone === "danger" ? "assertive" : "polite", "data-tone": tone,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    onFocusCapture: () => setHover(true), onBlurCapture: () => setHover(false),
    style: {
      display: "inline-flex", alignItems: "center", gap: 12, boxSizing: "border-box",
      maxWidth: "calc(100vw - " + (TOAST_INSET * 2) + "px)", padding: "12px 12px 12px 16px",
      background: t.bg, color: t.fg, border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-control)", boxShadow: "var(--shadow-overlay)",
      pointerEvents: "auto", animation, ...style
    },
    ...rest
  },
    React.createElement("style", null, TOAST_CSS),
    showIcon ? React.createElement(Icon, { name: icon || t.icon, size: 20, "aria-hidden": "true", style: { flex: "0 0 auto" } }) : null,
    React.createElement("span", {
      style: { font: "var(--weight-regular) 16px/24px var(--font-sans)", minWidth: 0 }
    }, message || children),
    actionLabel ? React.createElement("button", {
      type: "button", onClick: onAction,
      style: {
        flex: "0 0 auto", minHeight: 44, padding: "0 8px", border: 0, background: "none",
        font: "var(--weight-semibold) 16px/24px var(--font-sans)", color: "inherit",
        textDecoration: "underline", cursor: "pointer", borderRadius: "var(--radius-control)"
      }
    }, actionLabel) : null,
    onDismiss ? React.createElement(IconButton, {
      icon: "close-cancel", variant: "quiet", size: "sm", label: "Dismiss",
      onClick: () => setLeaving(true),
      /* 16px glyph, 44px hit area: the visible mark is small, the target is not. */
      style: { flex: "0 0 auto", width: 44, height: 44, color: "inherit" }
    }) : null
  );
}

/** Positions toasts bottom centre, newest nearest the edge. Renders at most three. */
function ToastStack({ children, bottomUI = 0, style, ...rest }) {
  const shown = React.Children.toArray(children).slice(-TOAST_MAX);
  return React.createElement("div", {
    "aria-live": "polite",
    style: {
      position: "fixed", left: 0, right: 0, bottom: TOAST_INSET + bottomUI,
      display: "flex", flexDirection: "column-reverse", alignItems: "center", gap: 8,
      padding: "0 " + TOAST_INSET + "px", pointerEvents: "none", zIndex: 60, ...style
    },
    ...rest
  }, shown);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Toast.jsx", error: String((e && e.message) || e) }); }


__ds_ns.HeroBanner = __ds_scope.HeroBanner;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.MainMenu = __ds_scope.MainMenu;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

})();
