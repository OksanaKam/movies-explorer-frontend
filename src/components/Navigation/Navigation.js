import React from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import MenuBurger from "../MenuBurger/MenuBurger";

function Navigation({ isLoggedIn }) {
  const location = useLocation();
  return (
    <nav className="navigation">
      {!isLoggedIn ?
        (<div className="navigation__main">
          <Link className="navigation__register" to="/signup">
            Регистрация
          </Link>
          <Link className="navigation__enter" to="/signin">
            Войти
          </Link>
        </div>)
        :
        (<>
          <MenuBurger />
          <div className="navigation__overlay"></div>
          <div className="navigation__movie">
            <div className="navigation__movie-group">
              <Link className={`navigation__movies_main ${
                  location.pathname === "/"
                  ? "navigation__movies_active"
                  : "navigation__movies"}`} to="/">
                Главная
              </Link>
              <Link className={`navigation__movies ${
                  location.pathname === "/movies"
                  ? "navigation__movies_active"
                  : "navigation__movies"}`} to="/movies">
                Фильмы
              </Link>
              <Link className={`navigation__movies ${
                  location.pathname === "/saved-movies"
                  ? "navigation__movies_active"
                  : "navigation__movies"}`} to="/saved-movies">
                Сохранённые фильмы
              </Link>
            </div>
            <Link className="navigation__profile" to="/profile">
              Аккаунт
            </Link>
          </div>
        </>)
      }
    </nav>
  );
}

export default Navigation;
