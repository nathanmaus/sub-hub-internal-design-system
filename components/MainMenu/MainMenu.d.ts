import * as React from "react";

/** One row of the main menu. `type` defaults to "link". */
export type MainMenuItem =
  | { type?: "link"; label: string; icon?: string; href?: string; sublabel?: string; onSelect?: () => void; key?: string }
  | { type: "feature"; label: string; description?: string; badge?: string; checked?: boolean; defaultChecked?: boolean; onChange?: (next: boolean) => void; key?: string }
  | { type: "value"; label: string; icon?: string; value: string; onSelect?: () => void; key?: string }
  | { type: "divider"; key?: string };

/** The account / main menu that opens from the avatar in the top bar. Not a dropdown menu. */
export interface MainMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Rows, top to bottom. "feature" is the highlighted row with a switch (one per menu, at the top). */
  items: MainMenuItem[];
  /** Play the standard menu entrance (panel drop + 20ms row stagger). Default true. */
  animate?: boolean;
  /** Replay open → close every ~3s. Design review and specimens only — never in product. */
  loop?: boolean;
  /** Panel width; capped at the viewport minus 32px. Default 400. */
  width?: number | string;
  /** Accessible name for the menu. Default "Account". */
  label?: string;
}
export declare function MainMenu(props: MainMenuProps): JSX.Element;
