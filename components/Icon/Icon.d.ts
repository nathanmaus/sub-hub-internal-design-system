import * as React from "react";

/**
 * A single glyph from the SubHub Icon Library, masked so it takes currentColor.
 * The library is the only source of icons in this system — see
 * assets/Icons/README.md for the full name list and the rule.
 */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * A SubHub Icon Library name, e.g. "arrow-right", "trash", "solar", "calendar".
   * Legacy Lucide slugs the system was built on ("mail", "map-pin", "settings")
   * still resolve via the alias map. A name the library does not have renders the
   * `placeholder` glyph and logs a warning — it is never substituted or invented.
   */
  name: string;
  /** Square size in px. 15 in sm controls, 17–18 default, 20 in lg. */
  size?: number;
  /** Any CSS color. Defaults to var(--icon-default) for a standalone icon. Pass "currentColor" when the
   *  icon sits in a control or beside text, so it matches the label. The system's components do. */
  color?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
