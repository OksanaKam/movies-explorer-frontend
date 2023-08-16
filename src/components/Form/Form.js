import React from "react";
import "./Form.css";

function Form({onSubmit, isValid, title, button, errorName, errorMessage, children}) {

  return (
    <form className="form"
          name="form"
          onSubmit={onSubmit}
          noValidate>
      <h1 className="form__title">{title}</h1>
      {children}
      <span className={`form__error form__error_${errorName}`}>{errorMessage}</span>
      <button className={`form__button form__button_${errorName} ${!isValid && 'form__button_disabled'}`}
              type="submit"
              disabled={!isValid}
              aria-label="Зарегистрироваться">{button}</button>
     </form>
  );
}

export default Form;
