# Switch

An immediate on/off setting. Flipping it takes effect at once — there is no Save.

## Switch or checkbox

Switch for a setting that applies the moment it changes. Checkbox for a choice that is submitted with a form, and for anything in a multi-select list. If a Cancel button could undo it, it is a checkbox.

## Geometry

44 × 24px track, 16px thumb, 4px inset — all on the 4px grid. The label is part of the control's hit area, which is what carries the target past 44px on a phone; the track alone is only 24px tall.

## Rules

- The label states what being on means, in the positive: "Email the homeowner on approval", never "Don't email".
- Disabled drops the whole control to 55%% opacity. Pair it with a hint saying why, or the state looks broken.
- Sand is the on state. Do not switch it to green for "good" — on is not a value judgement.
- The track carries `role="switch"` and `aria-checked`; the component manages its own state unless `checked` is passed.

## The consumer provides

The label, the controlled value where the setting is server-owned, the change handler, and the save-on-change behaviour.
