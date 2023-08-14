import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import { REGEX_EMAIL } from "../../utils/constants";

function Login({ handleLogin, errorMessage }) {
  const { formValue, handleChange, errors, isValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formValue.email, formValue.password)
  }

  return (
    <main className="login">
      <Logo />
      <Form title="Рады видеть!"
            button="Войти"
            errorName="login"
            onSubmit={handleSubmit}
            errorMessage={errorMessage}
            isValid={isValid}>
        <label className="login__label">E-mail</label>
        <input className="login__input"
               id="email"
               name="email"
               type="email"
               minLength="2"
               placeholder="Электронная почта"
               value={formValue.email || ''}
               onChange={handleChange}
               pattern={REGEX_EMAIL}
               required />
        <span className={`login__input-error ${!isValid
              ? "login__input-error_active" : ""}`}>
          {errors.email}
        </span>
        <label className="login__label">Пароль</label>
        <input className="login__input"
               id="password"
               name="password"
               type="password"
               minLength="8"
               maxLength="30"
               placeholder="Пароль"
               value={formValue.password || ''}
               onChange={handleChange}
               required />
        <span className={`login__input-error ${!isValid
              ? "login__input-error_active" : ""}`}>
          {errors.password}
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
