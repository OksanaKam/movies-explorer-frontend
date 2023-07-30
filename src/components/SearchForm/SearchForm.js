import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form" action="#" method="get">
        <div className="search-form__input-group">
          <input className="search-form__input"
                 name="search"
                 placeholder="Фильм"
                 type="search"
                 required />
          <button className="search-form__button" type="submit"></button>
        </div>
        <div className="search-form__short">
          <input className="search-form__switch"
                 type="checkbox"
                 id="switch" />
          <label className="search-form__label" htmlFor="switch"></label>
          <p className="search-form__text">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
