import React from "react";
import "./Logo.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img className="logo" src={logo} alt="логотип учебный проект" />
    </Link>
  );
}

export default Logo;
