# Select

A native `<select>` in the system's field shell: same 44px height, same border and focus treatment as Input, with a chevron affix.

## Why native

The menu is the platform's own, so it is keyboard- and screen-reader-correct everywhere and lands as a scroll wheel on iOS at 393px. A custom listbox is only worth building when options need icons, descriptions or search.

## Rules

- A placeholder option carries an empty value so "nothing chosen" is distinguishable from the first real option.
- Options take `string` or `{value, label}`. Sort by what the user is scanning for, not alphabetically by id.
- Above roughly 12 options, give people search instead — a long native menu is a worse experience than a typeahead.
- Right padding is 10px, not 12px, so the chevron sits on the same optical margin as text in the other controls.

## The consumer provides

The options array, the value, the change handler, and the `id` the Field's label points at.
