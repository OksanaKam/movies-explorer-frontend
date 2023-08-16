import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";
import { REGEX_NAME, REGEX_EMAIL } from "../../utils/constants";

function Profile({
         handleSignout,
         onEditProfile,
         onUpdateUser,
         errorMessage,
         isEdit }) {

  const currentUser = useContext(CurrentUserContext);
  const {formValue, handleChange, setFormValue, errors, isValid} = useForm({});

  let location = useLocation();
  const isLoggedIn = location.pathname === "/" ? false : true;

  const [isDataChanged, setIsDataChanged] = useState(false);

  useEffect(() => {
    setFormValue({
        name: currentUser.name,
        email: currentUser.email
    });
  }, [currentUser, setFormValue]);

  useEffect(() => {
    currentUser.name !== formValue.name || currentUser.email !== formValue.email ?
    setIsDataChanged(true) : setIsDataChanged(false);
  }, [currentUser.name, currentUser.email, formValue.name, formValue.email]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
        name: formValue.name,
        email: formValue.email
    });
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <section className="profile">
          <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
          <form className="profile__form"
                name="profile-form"
                onSubmit={handleSubmit}
                noValidate>
            <div className="profile__name">
              <div className="profile__name-info">
              <label className="profile__info-key">Имя</label>
              <input className="profile__info-value"
                     id="name"
                     name="name"
                     type="text"
                     value={formValue.name || ""}
                     onChange={handleChange}
                     minLength="2"
                     maxLength="30"
                     placeholder="Имя"
                     pattern={REGEX_NAME}
                     disabled={isEdit ? "" : "disabled"}
                     required />
              </div>
              <span className={`profile__input-error ${!isValid
                ? "profile__input-error_active" : ""}`}>
                {errors.name}
              </span>
            </div>
            <div className="profile__email">
              <div className="profile__email-info">
              <label className="profile__info-key">E-mail</label>
              <input className="profile__info-value"
                     id="email"
                     name="email"
                     type="email"
                     minLength="2"
                     placeholder="Электронная почта"
                     value={formValue.email || ""}
                     onChange={handleChange}
                     pattern={REGEX_EMAIL}
                     disabled={isEdit ? "" : "disabled"}
                     required />
              </div>
              <span className={`profile__input-error ${!isValid
                ? "profile__input-error_active" : ""}`}>
                {errors.email}
              </span>
            </div>
            <span className="profile__error">{errorMessage}</span>
            {isEdit ? (
              <button className={
                `profile__save ${isValid && isDataChanged ? "profile__save_active" : ""}`}
                      type="submit"
                      disabled={!isValid || !isDataChanged}
                      >Сохранить</button>
            )
            : (
              <button className="profile__edit"
                      type="button"
                      onClick={onEditProfile}>Редактировать</button>
            )
            }
          </form>
          <Link className={isEdit ? "profile__exit_invisible" : "profile__exit"} onClick={handleSignout} to={'/'}>
            Выйти из аккаунта
          </Link>
        </section>
      </main>
    </>
  );
}

export default Profile;
