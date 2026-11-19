// Rebuilds the colour sections of tokens.css from tokens.json.
//
//   node scripts/build-colour-tokens.mjs           update tokens.css
//   node scripts/build-colour-tokens.mjs --check   only report whether tokens.css is out of date
//
// Run it after changing any colour in tokens.json. It rewrites the colour variables in the
// light block (:root, [data-theme="light"]) and the dark block ([data-theme="dark"]).
// Fonts, shadows, spacing, radius, type and motion in tokens.css are left exactly as they are.
import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const tokens = JSON.parse(readFileSync(new URL('tokens.json', root), 'utf8')).color.tokens;
const cssPath = new URL('tokens.css', root);
const css = readFileSync(cssPath, 'utf8');

const names = new Set(tokens.map((t) => t.name));
const value = (v) => { const m = /^\{(.+)\}$/.exec(v); return m ? `var(--${m[1]})` : v; };
const isColour = (line) => { const m = /^\s*--([a-z0-9-]+):/.exec(line); return !!m && names.has(m[1]); };

/** Replaces the colour lines in one block, keeping its other lines (shadows and so on) where they were. */
function rebuild(block, colourLines) {
  const lines = block.split('\n');
  const first = lines.findIndex(isColour);
  if (first === -1) throw new Error('No colour variables found in a block of tokens.css.');
  const rest = lines.filter((l) => !isColour(l));
  const at = lines.slice(0, first).filter((l) => !isColour(l)).length;
  return [...rest.slice(0, at), ...colourLines, ...rest.slice(at)].join('\n');
}

function section(header) {
  const start = css.indexOf(header);
  if (start === -1) throw new Error(`tokens.css is missing "${header.trim()}".`);
  const from = start + header.length;
  return { from, to: css.indexOf('\n}', from) + 1 };
}

const light = section(':root, [data-theme="light"] {\n');
const dark = section('[data-theme="dark"] {\n');
const lightLines = tokens.map((t) => `  --${t.name}: ${value(t.value.light)};${t.usage ? ` /* ${t.usage} */` : ''}`);
// Dark only lists tokens that point somewhere different in dark mode.
const darkLines = tokens.filter((t) => t.value.dark !== t.value.light).map((t) => `  --${t.name}: ${value(t.value.dark)};`);

const out = css.slice(0, light.from) + rebuild(css.slice(light.from, light.to), lightLines)
  + css.slice(light.to, dark.from) + rebuild(css.slice(dark.from, dark.to), darkLines) + css.slice(dark.to);

if (process.argv.includes('--check')) {
  if (out !== css) { console.error('tokens.css is out of date. Run: node scripts/build-colour-tokens.mjs'); process.exit(1); }
  console.log('tokens.css matches tokens.json.');
} else if (out === css) {
  console.log('tokens.css already matches tokens.json. Nothing changed.');
} else {
  writeFileSync(cssPath, out);
  console.log(`Updated tokens.css: ${lightLines.length} colours, ${darkLines.length} dark-mode overrides.`);
}
