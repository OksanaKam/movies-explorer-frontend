import React from "react";
import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({ movies } ) {
  let location = useLocation();
  return (
    <section className="movie-list">
      <ul className="movie-list__container">
        {movies.map((movie) => {
          return(
            <MoviesCard movie={movie} key={movie._id} />
          );
        })}
      </ul>
      {location.pathname === "/movies" &&
        <button className="movie-list__button" type="button">Ещё</button>
      }
    </section>
  );
}

export default MoviesCardList;
