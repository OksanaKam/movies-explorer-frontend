import React from "react";
import "./SearchForm.css";

function SearchForm({ query,
                      checked,
                      validMessage,
                      handleSubmit,
                      onChange,
                      onChangeChecked}) {

  return (
    <section className="search-form">
      <form className="search-form__form"
            onSubmit={handleSubmit}
            noValidate>
        <div className="search-form__input-group">
          <input className="search-form__input"
                 name="search"
                 placeholder="Фильм"
                 type="text"
                 value={query}
                 onChange={onChange}/>
          <button className="search-form__button" type="submit"></button>
        </div>
        <span className="search-form__error">{validMessage}</span>
        <div className="search-form__short">
          <input className="search-form__switch"
                 type="checkbox"
                 checked={checked}
                 onChange={onChangeChecked}
                 id="switch" />
          <label className="search-form__label" htmlFor="switch"></label>
          <p className="search-form__text">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
