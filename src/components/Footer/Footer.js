import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr className="footer__line"></hr>
      <div className="footer__group">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__menu">
          <li>
            <a className="footer__link"
               href="https://practicum.yandex.ru"
               target="_blank"
               rel="noreferrer">
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a className="footer__link"
               href="https://github.com/OksanaKam"
               target="_blank"
               rel="noreferrer">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
