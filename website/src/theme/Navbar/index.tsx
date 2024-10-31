import React, { useEffect, useState } from "react";
import Navbar from "@theme-original/Navbar";
import type NavbarType from "@theme/Navbar";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): JSX.Element {
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    // Check if the site is within an iframe
    setIsIframe(window.self !== window.top);
  }, []);

  // Render nothing if in an iframe
  if (isIframe) {
    return (
      <div className="navbar" style={{ height: 0, visibility: "hidden" }} />
    );
  }

  return (
    <>
      <Navbar {...props} />
    </>
  );
}
