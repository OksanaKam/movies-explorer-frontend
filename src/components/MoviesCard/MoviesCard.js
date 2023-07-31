import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie }) {
  let isChecked = movie.checked;
  const cardCheckButtonClassName = (
    `movie__save ${isChecked ? "movie__save_active" : "movie__save"}`
  );
  let location = useLocation();
  return (
    <li className="movie">
      <img className="movie__image" src={movie.link} alt={movie.name} />
      <div className="movie__title-group">
        <h2 className="movie__title">{movie.name}</h2>
        {location.pathname === "/movies" &&
        <button className={cardCheckButtonClassName} type="button"></button>
        }
        {location.pathname === "/saved-movies" &&
        <button className="movie__delete" type="button"></button>
        }
      </div>
      <p className="movie__time">1ч42м</p>
    </li>
  );
}

export default MoviesCard;
