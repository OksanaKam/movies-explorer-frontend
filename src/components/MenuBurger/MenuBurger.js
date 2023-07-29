import React from "react";
import "./MenuBurger.css";

function MenuBurger() {
  return (
    <>
      <input className="menu-burger__checkbox" type="checkbox" name="" id=""/>
      <label className="menu-burger">
        <span className="menu-burger__line menu-burger__line1"></span>
        <span className="menu-burger__line menu-burger__line2"></span>
        <span className="menu-burger__line menu-burger__line3"></span>
      </label>
    </>
  );
}

export default MenuBurger;
