import React from "react";
import "./Form.css";

function Form({title, button, name, children}) {
  return (
    <form className="form"
          name="form"
          action="#"
          method="get"
          noValidate>
      <h1 className="form__title">{title}</h1>
      {children}
      <button className={`form__button form__button_${name}`}
              type="submit"
              aria-label="Зарегистрироваться">{button}</button>
     </form>
  );
}

export default Form;
