import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import { REGEX_NAME, REGEX_EMAIL } from "../../utils/constants";

function Register({ handleRegister, errorMessage }) {
  const { formValue, handleChange, errors, isValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(formValue.name, formValue.email, formValue.password)
  };

  return (
    <main className="register">
      <Logo />
      <Form title="Добро пожаловать!"
            button="Зарегистрироваться"
            errorName="register"
            onSubmit={handleSubmit}
            errorMessage={errorMessage}
            isValid={isValid}>
        <label className="register__label" htmlFor="name">Имя</label>
        <input className="register__input"
               id="name"
               name="name"
               type="text"
               minLength="2"
               maxLength="30"
               placeholder="Имя"
               value={formValue.name || ''}
               onChange={handleChange}
               pattern={REGEX_NAME}
               required />
        <span className={`register__input-error ${!isValid
              ? "register__input-error_active" : ""}`}>
          {errors.name}
        </span>
        <label className="register__label" htmlFor="email">E-mail</label>
        <input className="register__input"
               id="email"
               name="email"
               type="email"
               minLength="2"
               placeholder="Электронная почта"
               value={formValue.email || ''}
               onChange={handleChange}
               pattern={REGEX_EMAIL}
               required />
        <span className={`register__input-error ${!isValid
              ? "register__input-error_active" : ""}`}>
          {errors.email}
        </span>
        <label className="register__label" htmlFor="password">Пароль</label>
        <input className="register__input"
               id="password"
               name="password"
               type="password"
               minLength="8"
               maxLength="30"
               placeholder="Пароль"
               value={formValue.password || ''}
               onChange={handleChange}
               required />
        <span className={`register__input-error ${!isValid
              ? "register__input-error_active" : ""}`}>
          {errors.password}
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
