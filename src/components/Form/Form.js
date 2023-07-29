import React from "react";
import "./Form.css";

function Form({title, button, children}) {
  return (
    <form className="form"
          name="form"
          action="#"
          method="get"
          noValidate>
      <h2 className="form__title">{title}</h2>
      {children}
      <button className="form__button"
              type="submit"
              aria-label="Зарегистрироваться">{button}</button>
     </form>
  );
}

export default Form;
