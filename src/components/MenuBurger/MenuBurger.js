import React from "react";
import "./MenuBurger.css";

function MenuBurger() {
  return (
    <>
      <input className="checkbox" type="checkbox" name="checkbox" id="checkbox"/>
      <label className="menu-burger" htmlFor="checkbox">
        <span className="menu-burger__line menu-burger__line1"></span>
        <span className="menu-burger__line menu-burger__line2"></span>
        <span className="menu-burger__line menu-burger__line3"></span>
      </label>
    </>
  );
}

export default MenuBurger;
