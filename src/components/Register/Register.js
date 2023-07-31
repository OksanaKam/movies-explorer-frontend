import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";

function Register() {
  let isErrorActive = true;
  return (
    <main className="register">
      <Logo />
      <Form title="Добро пожаловать!" button="Зарегистрироваться" name="register">
        <label className="register__label">Имя</label>
        <input className="register__input"
               id="name"
               name="name"
               type="text"
               minLength="2"
               maxLength="30"
               placeholder="Имя"
               required />
        <span className={`register__input-error ${isErrorActive
              ? "register__input-error_active" : ""}`}>
                Что-то пошло не так
        </span>
        <label className="register__label">E-mail</label>
        <input className="register__input"
               id="email"
               name="email"
               type="email"
               minLength="2"
               placeholder="Электронная почта"
               required />
        <span className={`register__input-error ${isErrorActive
              ? "register__input-error_active" : ""}`}>
                Что-то пошло не так
        </span>
        <label className="register__label">Пароль</label>
        <input className="register__input"
               id="password"
               name="password"
               type="password"
               minLength="8"
               maxLength="30"
               placeholder="Пароль"
               required />
        <span className={`register__input-error ${isErrorActive
              ? "register__input-error_active" : ""}`}>
                Что-то пошло не так
        </span>
      </Form>
      <p className="register__question">
        Уже зарегистрированы?{" "}
        <Link className="register__link" to={'/signin'}>
        Войти
      </Link>
      </p>
    </main>
  );
}

export default Register;
