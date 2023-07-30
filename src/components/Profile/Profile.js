import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Profile() {
  let location = useLocation();
  const isLoggedIn = location.pathname === "/" ? false : true;
  return (
    <main>
      <Header isLoggedIn={isLoggedIn} />
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form"
              name="profile-form"
              action="#"
              noValidate>
          <div className="profile__name">
            <label className="profile__info-key">Имя</label>
            <input className="profile__info-value"
                   id="name"
                   name="name"
                   type="text"
                   value="Виталий"
                   minLength="2"
                   maxLength="30"
                   placeholder="Имя"
                   disabled
                   required />
          </div>
          <div className="profile__email">
            <label className="profile__info-key">E-mail</label>
            <input className="profile__info-value"
                   id="email"
                   name="email"
                   type="email"
                   minLength="2"
                   placeholder="Электронная почта"
                   value="pochta@yandex.ru"
                   disabled
                   required />
          </div>
          <button className="profile__edit" type="submit">Редактировать</button>
        </form>
        <Link className="profile__exit" to={'/'}>
          Выйти из аккаунта
        </Link>
      </section>
    </main>
  );
}

export default Profile;
