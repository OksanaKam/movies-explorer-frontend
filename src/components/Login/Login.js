import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";

function Login() {
  let isErrorActive = true;
  return (
    <main className="login">
      <Logo />
      <Form title="Рады видеть!" button="Войти" name="login">
        <label className="login__label">E-mail</label>
        <input className="login__input"
               id="email"
               name="email"
               type="email"
               minLength="2"
               placeholder="Электронная почта"
               required />
        <span className={`login__input-error ${isErrorActive
              ? "login__input-error_active" : ""}`}>
                Что-то пошло не так
        </span>
        <label className="login__label">Пароль</label>
        <input className="login__input"
               id="password"
               name="password"
               type="password"
               minLength="8"
               maxLength="30"
               placeholder="Пароль"
               required />
        <span className={`login__input-error ${isErrorActive
              ? "login__input-error_active" : ""}`}>
                Что-то пошло не так
        </span>
      </Form>
      <p className="login__question">
        Ещё не зарегистрированы?{" "}
        <Link className="login__link" to={'/signup'}>
          Регистрация
        </Link>
      </p>
    </main>
  );
}

export default Login;
