import React from "react";
import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({ movies,
                          savedMovies,
                          count,
                          handleSaveMovie,
                          handleDeleteMovie,
                          handleShowMoreMovies } ) {
  let location = useLocation();
  const limit = count < movies.length;

  return (
    <section className="movie-list">
      <ul className={`movie-list__container ${!limit ? "movie-list__container_nomore" : "movie-list__container"}`}>
        {movies.slice(0, count).map((movie) => {
          return(
            <MoviesCard key={movie.id || movie._id}
                        movie={movie}
                        savedMovies={savedMovies}
                        handleSaveMovie={handleSaveMovie}
                        handleDeleteMovie={handleDeleteMovie} />
          );
        })}
      </ul>
      {location.pathname === "/movies" && limit &&
        <button className="movie-list__button"
                type="button"
                onClick={handleShowMoreMovies}>Ещё</button>
      }
    </section>
  );
}

export default MoviesCardList;
