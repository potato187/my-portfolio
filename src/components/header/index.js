import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import MenuBar from "./MenuBars";
import { Circle, Bottom } from "components/styled";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const handleReSizeWidth = () =>
    window.innerWidth >= 1030 ? setIsOpen(false) : 0;

  const handleScrollDown = () => {
    return window.pageYOffset > window.outerHeight / 2
      ? setHidden(false)
      : setHidden(true);
  };

  const handleScrollToTop = () =>
    window.scroll({ top: 0, left: 0, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("resize", handleReSizeWidth);
    window.addEventListener("scroll", handleScrollDown);
    return () => {
      window.removeEventListener("resize", handleReSizeWidth);
      window.removeEventListener("scroll", handleScrollDown);
    };
  }, []);
  return (
    <header>
      <NavBar isOpen={isOpen} toggle={toggle} />
      <MenuBar isOpen={isOpen} toggle={toggle} />
      <Bottom hidden={hidden}>
        <Circle onClick={handleScrollToTop} />
      </Bottom>
    </header>
  );
}

export default Header;
