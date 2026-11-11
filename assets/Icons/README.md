# Icons

The SubHub Icon Library, 24px variants, exported from the Figma file that is the
source of truth. **All 256 icons across 8 sections** — the whole library, so that any
reasonable icon request resolves to a real drawn glyph.

## The rule

**Every icon in this design system is drawn in the SubHub Icon Library in Figma.**
Nobody — no designer, no engineer, no AI assistant — authors an icon here, pastes one
in from another set, or generates one. There is no exception and no "just this once".

If you need an icon the library does not have:

1. Use the `placeholder` glyph, or just pass the name you want — an unknown name
   renders `placeholder` by itself and logs a console warning naming the icon.
2. **Contact Nathan Maus (nmaus@subcontractorhub.com)** to have it drawn in the Figma
   library. Say what the icon is for; that is usually enough to draw it.
3. The weekly sync brings it across automatically once it exists in Figma.

Shipping a visible placeholder is the correct outcome. It is a known gap with a name
on it. A hand-drawn stand-in is an unknown gap that looks finished, and those are the
ones that reach production.

## Ink

Every file is drawn in a single ink, `#0E1320`. The files are stored as images, so they
cannot inherit `currentColor` on their own. The **Icon** component renders them as a CSS
mask and paints `currentColor` through, which is what makes an icon match the text beside
it. Use the component, not an `<img>`, anywhere colour matters.

## Geometry

24 × 24 viewBox, filled paths. Four icons are drawn with 1.5px strokes rather than fills
and read slightly lighter than their neighbours at small sizes — `activity`, `billing`,
`monitor` and `organization`. They work, but they are worth redrawing to match.

### Two-tone icons

Seven icons use a second, lighter ink (`#E7E7E7`) for their "inactive" segments:
`signal-1` through `signal-4`, and `wifi-1` through `wifi-3`. **A CSS mask keys on alpha,
not colour, so both inks render solid** — `signal-1` and `signal-4` come out identical
through the Icon component. Use `signal-null` / `wifi-null` for an explicit "no signal"
state, and treat the graded variants as unusable until they are redrawn with the
inactive bars removed rather than greyed.

## Legacy name map

The system was built against Lucide slugs. The Icon component maps them to library names,
so existing call sites keep working. New work should use the library name on the right.
An alias never shadows a real library name.

| Call site uses | Resolves to |
| --- | --- |
| `alert-circle` | `warning` |
| `bar-chart-3` | `bar-chart` |
| `bell` | `notification-bell` |
| `circle-dollar-sign` | `billing` |
| `circle-help` | `question` |
| `file-check` | `shield-check` |
| `file-text` | `documents` |
| `mail` | `email` |
| `map-pin` | `pin` |
| `send` | `navigation-arrow` |
| `settings` | `settings-gear` |
| `sparkles` | `sparkle` |
| `trending-down` | `trend-down` |
| `trending-up` | `trend-up` |
| `wind` | `hvac-air` |

`sun` used to be aliased to `solar`, because the library had no sun. It has one now, so
`sun` means the real weather glyph and the two Solar trade badges were moved to `solar`
explicitly — they wanted the solar-panel mark, not a sun.

## Retired stand-ins

Five names used to resolve to a near-enough icon so that nothing from outside the set
shipped. That hid the gap: `hard-hat` quietly rendered a screwdriver and looked fine.
Those aliases are **gone**. The five now render the `placeholder` glyph and warn, which
is visible in review and impossible to ship by accident.

| Name | Used to render | Renders now |
| --- | --- | --- |
| `hard-hat` | `screwdriver` | `placeholder` |
| `hourglass` | `clock-alarm` | `placeholder` |
| `kanban` | `apps-home-screen-grid` | `placeholder` |
| `layers` | `package-box` | `placeholder` |
| `wallet` | `credit-card` | `placeholder` |

All five are drawing requests with Nathan. Until they exist in Figma, the placeholder
stays — do not re-add an alias to paper over it.

## The library

256 icons, by section as they are organised in Figma.

### Arrows (24)

`arrow-down`, `arrow-left`, `arrow-right`, `arrow-up`, `arrow-up-right`, `chevron-down`, `chevron-left`, `chevron-right`, `chevron-up`, `download`, `expand`, `external-link`, `minimize`, `move`, `refresh`, `reload`, `share`, `share-2`, `sign-in`, `sign-out`, `switch`, `trend-down`, `trend-up`, `upload`

### Devices & Device States (63)

`arriving`, `brightness-bright`, `brightness-dim`, `brightness-null`, `cool-snow`, `cool-snow-null`, `devices`, `devices-null`, `distance`, `door`, `door-null`, `door-open`, `electric-tower`, `fan`, `fan-null`, `fire`, `fire-null`, `first-responder-1`, `first-responder-1-null`, `first-responder-2`, `first-responder-2-null`, `garage`, `garage-null`, `garage-opened`, `garage-unknown`, `heating-cooling`, `home`, `home-2`, `home-battery`, `home-fill`, `hvac-air`, `leaving`, `light`, `light-null`, `light-on`, `lock-null`, `locked`, `moon`, `pet`, `pet-print`, `power-on`, `power-plant`, `router`, `saved-bookmark`, `shield`, `shield-check`, `shield-check-fill`, `shield-star`, `shield-star-fill`, `siren-alarm`, `siren-alarm-fill`, `solar`, `thermometer`, `thermometer-cool`, `thermometer-heat`, `thermometer-heat-null`, `toggle-off`, `toggle-on`, `unlocked`, `water-drop`, `window`, `window-null`, `window-open`

### Identification (1)

`apple-face-id`

### Menus (3)

`menu-hamburger`, `menu-more-horizontal`, `menu-more-vertical`

### Status Indicators (25)

`battery`, `battery-100`, `battery-20`, `battery-40`, `battery-60`, `battery-80`, `battery-charging`, `battery-null`, `battery-warning`, `signal-1`, `signal-2`, `signal-3`, `signal-4`, `signal-5`, `signal-null`, `speaker`, `speaker-loud`, `speaker-mute`, `speaker-on`, `wifi-1`, `wifi-2`, `wifi-3`, `wifi-4`, `wifi-null`, `wifi-warning`

### Utilities (107)

`activity`, `ai`, `ai-search`, `airplane`, `apps-add`, `apps-home-screen-grid`, `attachment-paperclip`, `bar-chart`, `billing`, `building-apartment`, `building-apartment-2`, `building-bank`, `calendar`, `calendar-null`, `call`, `call-fill`, `car`, `car-electric-charging`, `car-electric-eco`, `card`, `cash`, `chat`, `chat-2`, `check`, `check-circle`, `check-circle-filled`, `clock`, `clock-alarm`, `clock-fill`, `close-cancel`, `close-cancel-circle`, `copy`, `credit-card`, `cross`, `cursor-selection`, `dark-mode`, `diamond`, `documents`, `drag-drop`, `ear`, `eco`, `email`, `energy-grid-charging`, `eye-view`, `eye-view-null`, `filter`, `flag`, `flashlight`, `grip`, `headset`, `headset-null`, `heart-like-love`, `heart-like-love-fill`, `info`, `legal`, `lightning-bolt`, `lightning-bolt-fill`, `link`, `magic-wand`, `minus`, `monitor`, `navigation-arrow`, `notification-bell`, `notification-bell-null`, `notification-snooze`, `organization`, `package-box`, `pencil`, `phone-cell`, `pin`, `placeholder`, `plus`, `potion`, `printer`, `qr-code`, `question`, `refer-a-friend`, `screwdriver`, `search`, `settings-gear`, `share-android`, `shopping-bag`, `shopping-bag-fill`, `shopping-cart`, `slider`, `sparkle`, `sparkle-2`, `star`, `star-filled`, `star-half`, `sunrise`, `sunset`, `thumbs-down`, `thumbs-down-fill`, `thumbs-up`, `thumbs-up-fill`, `trash`, `user`, `user-add`, `user-admin`, `user-null`, `users`, `warning`, `warning-fill`, `world-globe`, `zoom-in`, `zoom-out`

### Video (19)

`backward-rewind`, `camera`, `film`, `forward`, `image`, `image-add`, `image-multiple`, `microphone`, `microphone-null`, `next`, `pause`, `pause-fill`, `play`, `play-fill`, `previous`, `video-camera`, `video-camera-null`, `video-clip`, `video-playback`

### Weather (14)

`cloud`, `cloud-lightning-rain`, `cloud-partly-sunny`, `cloud-rain`, `cloud-snow-sun`, `cloud-snowing`, `cloud-sun-rain`, `cloud-wind`, `fast-wind`, `fog`, `hurricane-storm`, `snow-alt`, `sun`, `tornado`

## Keeping this current

A weekly task re-reads the Figma library and reports what changed. Icons are never edited
here — draw in Figma, and the sync brings them across. The sync adds new icons
automatically; it never silently replaces or removes an existing one, because a redraw
can change how shipped screens look and a removal is usually a rename. Those get reported
for Nathan to decide on.