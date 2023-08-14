import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { MoviesURL } from "../../utils/constants";

function MoviesCard({ movie, savedMovies, handleSaveMovie, handleDeleteMovie }) {

  let location = useLocation();
  const imageUrl = location.pathname === "/movies" ? `${MoviesURL}${movie.image.url}` : `${movie.image}`;
  const savedMovie = savedMovies.find((i) => i.movieId === movie.id);
  const cardCheckButtonClassName = (
    `movie__save ${savedMovie ? "movie__save_active" : "movie__save"}`
  );

  function setTime(min) {
    const hours = Math.trunc(min / 60)
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  }
  const duration = setTime(movie.duration);

  function handleClickSave() {
    if (savedMovie) {
      handleDeleteMovie(savedMovie);
    } else {
      handleSaveMovie(movie);
    }
  }

  function handleClickDelete() {
    handleDeleteMovie(movie);
  }

  return (
    <li className="movie">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="movie__image" src={imageUrl} alt={movie.nameRU} />
      </a>
      <div className="movie__title-group">
        <h2 className="movie__title">{movie.nameRU}</h2>
        {location.pathname === "/movies" &&
        <button className={cardCheckButtonClassName}
                type="button"
                onClick={handleClickSave}></button>
        }
        {location.pathname === "/saved-movies" &&
        <button className="movie__delete"
                type="button"
                onClick={handleClickDelete}></button>
        }
      </div>
      <p className="movie__time">{duration}</p>
    </li>
  );
}

export default MoviesCard;
