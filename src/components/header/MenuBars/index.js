import React from "react";
import { Menu, Bars } from "./MenuBarsStyles";

function MenuBars({ isOpen, toggle }) {
  const handleToggle = () => (toggle ? toggle() : 0);
  return (
    <>
      <Menu onClick={handleToggle} active={isOpen}>
        <Bars />
      </Menu>
    </>
  );
}

MenuBars.defaultProps = {
  isOpen: false,
  toggle: null,
};

export default MenuBars;
