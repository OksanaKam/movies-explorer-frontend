import React from "react";
import "./Portfolio.css";
import pointer from "../../images/pointer.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__set">
        <li className="portfolio__link-set">
          <a className="portfolio__link"
             href="https://oksanakam.github.io/how-to-learn/"
             target="_blank"
             rel="noreferrer">
            Статичный сайт
            <img className="portfolio__img"
               src={pointer}
               alt="Стрелка переход по ссылке"/>
          </a>
        </li>
        <li className="portfolio__link-set">
          <a className="portfolio__link"
             href="https://oksanakam.github.io/russian-travel/index.html"
             target="_blank"
             rel="noreferrer">
            Адаптивный сайт
            <img className="portfolio__img"
                 src={pointer}
                 alt="Стрелка переход по ссылке"/>
          </a>
        </li>
        <li className="portfolio__link-set">
          <a className="portfolio__link"
             href="https://oksanakam.nomoreparties.sbs"
             target="_blank"
             rel="noreferrer">
            Одностраничное приложение
            <img className="portfolio__img"
                 src={pointer}
                 alt="Стрелка переход по ссылке"/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
