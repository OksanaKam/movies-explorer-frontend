import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Profile() {
  let location = useLocation();
  const isLoggedIn = location.pathname === "/" ? false : true;
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form"
              name="profile-form"
              action="#"
              noValidate>
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
        </form>
        <hr className="profile__line"/>
        <form className="profile__form"
              name="profile-form"
              action="#"
              noValidate>
          <label className="profile__info-key">E-mail</label>
          <input className="profile__info-value"
                 id="email"
                 name="email"
                 type="email"
                 minLength="4"
                 maxLength="30"
                 placeholder="Электронная почта"
                 value="pochta@yandex.ru"
                 disabled
                 required />
        </form>
        <button className="profile__edit" type="submit">Редактировать</button>
        <Link className="profile__exit" to={'/'}>
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
