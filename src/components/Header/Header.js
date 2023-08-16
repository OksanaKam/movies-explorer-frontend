import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { useLocation } from "react-router-dom"

function Header({ isLoggedIn }) {
  let location = useLocation();
  return (
    <header className={`header ${location.pathname === "/" ? "header_active" : ""}`}>
      <div className='header__group'>
        <Logo />
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
}

export default Header;
