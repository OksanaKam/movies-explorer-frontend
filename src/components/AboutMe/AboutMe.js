import React from "react";
import "./AboutMe.css";
import student from "../../images/student.png";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <h2 className="about-me__title">Студент</h2>
      <hr className="about-me__line"></hr>
      <div className="about-me__group">
        <div className="about-me__description">
          <h3 className="about-me__heading">Виталий</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="about-me__link"
             href="https://github.com/OksanaKam"
             target="_blank"
             rel="noreferrer">Github</a>
        </div>
        <img className="about-me__photo"
             src={student}
             alt="Фото студента"/>
      </div>
    </section>
  );
}

export default AboutMe;
