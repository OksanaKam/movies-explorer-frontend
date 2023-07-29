import React from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import MenuBurger from "../MenuBurger/MenuBurger";

function Navigation({ isLoggedIn }) {
  const location = useLocation();
  return (
    <nav>
      {!isLoggedIn ?
        (<div className="navigation__main">
          <Link className="navigation__register" to="/signup">
            Регистрация
          </Link>
          <Link to="/signin">
            <button className="navigation__enter">Войти</button>
          </Link>
        </div>)
        :
        (<>
          <MenuBurger />
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
            <Link to="/profile">
                <button className="navigation__profile">Аккаунт</button>
              </Link>
          </div>
        </>)
      }
    </nav>
  );
}

export default Navigation;
