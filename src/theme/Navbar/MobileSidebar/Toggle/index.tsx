import React from "react";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import IconMenu from "@theme/Icon/Menu";
import { SidebarButtonIcon } from "@site/src/icons/SidebarButtonIcon";

export default function MobileSidebarToggle(): JSX.Element {
  const { toggle, shown } = useNavbarMobileSidebar();
  return (
    <button
      onClick={toggle}
      aria-label={translate({
        id: "theme.docs.sidebar.toggleSidebarButtonAriaLabel",
        message: "Toggle navigation bar",
        description:
          "The ARIA label for hamburger menu button of mobile navigation",
      })}
      aria-expanded={shown}
      className="navbar__toggle clean-btn"
      type="button"
    >
      <SidebarButtonIcon />
    </button>
  );
}
