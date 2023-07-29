import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header({ isLoggedIn }) {
  return (
    <header className={`header ${!isLoggedIn ? "header__main" : ""}`}>
      <div className='header__group'>
        <Logo />
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
}

export default Header;
