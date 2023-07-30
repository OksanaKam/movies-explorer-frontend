import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="aboutproject">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__description">
        <div className="about-project__block">
          <h3 className="about-project__heading">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__block">
          <h3 className="about-project__heading">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__graph">
        <p className="about-project__one-week">1 неделя</p>
        <p className="about-project__four-week">4 недели</p>
      </div>
      <div className="about-project__signature">
        <span className="about-project__backend">Back-end</span>
        <span className="about-project__frontend">Front-end</span>
      </div>
    </section>
  );
}

export default AboutProject;
