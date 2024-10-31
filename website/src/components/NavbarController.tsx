import React from "react";
import Navbar from "@theme/Navbar";
import { useLocation } from "@docusaurus/router";

export function NavbarController() {
  const location = useLocation();

  // Conditionally hide navbar on homepage
  const shouldShowNavbar = false; //location?.pathname !== "/";

  return null;
}
