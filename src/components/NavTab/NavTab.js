import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__menu">
        <li className="navtab__item">
          <a className="navtab__link" href="#aboutproject">О проекте</a>
        </li>
        <li className="navtab__item">
          <a className="navtab__link" href="#techs">Технологии</a>
        </li>
        <li className="navtab__item">
          <a className="navtab__link" href="#student">Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
