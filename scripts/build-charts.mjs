// Compile the chart sources into bundle sections and splice them into a system's bundle.js.
// usage: node scripts/build-charts.mjs .   (needs esbuild: npm i -D esbuild)
import fs from "node:fs";
import path from "node:path";
import { transformSync } from "esbuild";

const ROOT = process.argv[2];
const SRC = path.join(ROOT, "components/charts"); // sources are edited in place
const ORDER = ["ChartKit", "BarChart", "LineChart", "DonutChart", "Progress", "Sparkline", "FunnelChart"];
const EXPOSED = ["ChartCard", "BarChart", "LineChart", "DonutChart", "Progress", "Sparkline", "FunnelChart"];

function section(name) {
  const rel = `components/charts/${name}.jsx`;
  const src = fs.readFileSync(path.join(SRC, name + ".jsx"), "utf8");


  let js = transformSync(src, { loader: "jsx", jsx: "transform", target: "es2018", charset: "utf8" }).code;
  const imported = [];
  js = js.replace(/^import\s+([\s\S]*?)\s+from\s+"([^"]+)";\n/gm, (m, what, from) => {
    if (from === "react") return "";
    const names = what.replace(/[{}]/g, "").split(",").map((s) => s.trim()).filter(Boolean);
    imported.push(...names);
    return "";
  });
  const exported = [];
  js = js.replace(/^export (function|const) (\w+)/gm, (m, kw, n) => { exported.push(n); return kw + " " + n; });
  js = js.replace(/^export \{([^}]*)\};\n/gm, (m, list) => {
    list.split(",").map((s) => s.trim()).filter(Boolean).forEach((s) => {
      const [a, b] = s.split(/\s+as\s+/); exported.push(b ? `${b}: ${a}` : a);
    });
    return "";
  });
  const head = imported.length ? `const { ${imported.join(", ")} } = __ds_scope;\n` : "";
  return `// ${rel}\ntry { (() => {\n${head}${js}Object.assign(__ds_scope, { ${exported.join(", ")} });\n})(); } catch (e) { __ds_ns.__errors.push({ path: "${rel}", error: String((e && e.message) || e) }); }\n`;
}

const bundlePath = path.join(ROOT, "components/bundle.js");
let s = fs.readFileSync(bundlePath, "utf8");
const body = ORDER.map(section).join("\n");
const START = "/* @charts:start */\n", END = "/* @charts:end */\n";
if (s.includes(START)) {
  s = s.slice(0, s.indexOf(START)) + START + body + END + s.slice(s.indexOf(END) + END.length);
} else {
  const i = s.indexOf("// components/data/StatCard.jsx");
  const j = s.indexOf("\n// ", i + 5) + 1;
  s = s.slice(0, j) + START + body + END + "\n" + s.slice(j);
}
// header: component list
s = s.replace(/^\/\* @ds-bundle: (\{.*?\}) \*\//, (m, json) => {
  const h = JSON.parse(json);
  const at = h.components.findIndex((c) => c.name === "StatCard") + 1;
  const have = new Set(h.components.map((c) => c.name));
  const add = EXPOSED.filter((n) => !have.has(n)).map((n) => ({ name: n, sourcePath: `components/charts/${n === "ChartCard" ? "ChartKit" : n}.jsx` }));
  h.components.splice(at, 0, ...add);
  return "/* @ds-bundle: " + JSON.stringify(h) + " */";
});
// footer: namespace exports
for (const n of [...EXPOSED].reverse()) {
  const line = `__ds_ns.${n} = __ds_scope.${n};\n`;
  if (!s.includes(line)) s = s.replace("__ds_ns.StatCard = __ds_scope.StatCard;\n", (m) => m + "\n" + line);
}
fs.writeFileSync(bundlePath, s);
console.log("charts spliced into", bundlePath, Math.round(s.length / 1024) + " KB");
