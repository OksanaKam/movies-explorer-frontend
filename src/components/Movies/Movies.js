import React, { useEffect, useState } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ERROR_TEXT } from "../../utils/constants";
import { SHORT_DURATION } from "../../utils/constants";
import { SCREEN } from "../../utils/constants";
import { CARDS_AMOUNT } from "../../utils/constants";
import { CARDS_ADD } from "../../utils/constants";
import movieApi from "../../utils/MoviesApi";

function Movies({ userMovies,
                  errorMessage,
                  setErrorMessage,
                  handleSaveMovie,
                  handleDeleteMovie }) {
  let location = useLocation();
  const isLoggedIn = location.pathname === "/" ? false : true;

  let width = window.innerWidth;

  const [movies, setMovies] = useLocalStorage('movies', []);
  const [query, setQuery] = useLocalStorage('query', '');
  const [checked, setChecked] = useLocalStorage('checked', false);
  const [filteredMovies, setFilteredMovies] = useLocalStorage('filteredMovies', []);
  const [shortMovies, setShortMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [found, setFound] = useState(true);
  const [validMessage, setValidMessage] = useState('');
  const [count, setCount] = useState(CARDS_AMOUNT.SIXTEEN);

  useEffect(() => {
    if (isLoading && movies.length < 1) {
      movieApi.getInitialMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch(() => {
        setErrorMessage(ERROR_TEXT.ERROR_HAS_OCCURED);
      });
    }
  }, [isLoading, movies, setMovies, setErrorMessage]);

  useEffect(() => {
    if (isLoading) {
      const result = movies.filter((movie) => {
        const nameMovie = movie.nameRU.toLowerCase();
        return nameMovie.includes(query.toLowerCase());
      });
      if (result.length < 1) {
        setFound(false);
        setErrorMessage(ERROR_TEXT.ERROR_NOT_FOUND);
      } else {
        setFilteredMovies(result);
        setFound(true);
      }
    }
    setTimeout(() => setIsLoading(false), 1000);
  }, [isLoading, movies, query, setFilteredMovies, setErrorMessage]);

  useEffect(() => {
    if (checked) {
      const shortMovies = filteredMovies.filter((movie) => {
        return movie.duration <= SHORT_DURATION;
      });
      setShortMovies(shortMovies);
    }
  }, [checked, filteredMovies, setShortMovies]);

  useEffect(() => {
    if (width >= SCREEN.FULL_SCREEN) {
      setCount(CARDS_AMOUNT.SIXTEEN);
    }
    if (width < SCREEN.FULL_SCREEN && width >= SCREEN.MEDIUM_SCREEN) {
      setCount(CARDS_AMOUNT.TWELVE);
    }
    if (width < SCREEN.MEDIUM_SCREEN && width >= SCREEN.SMALL_SCREEN) {
      setCount(CARDS_AMOUNT.EIGHT);
    }
    if (width < SCREEN.SMALL_SCREEN) {
      setCount(CARDS_AMOUNT.FIVE);
    }
  }, [width]);

  useEffect(() => {
    setValidMessage('');
  }, [query]);

  function onChange(e) {
    setQuery(e.target.value);
  }

  function onChangeChecked(e) {
    setChecked(!checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    query ? setIsLoading(true) : setValidMessage(ERROR_TEXT.ERROR_QUERY);
  }

  function handleShowMoreMovies() {
    if (width >= SCREEN.FULL_SCREEN) {
      setCount(count + CARDS_ADD.FOUR);
    } else if (width < SCREEN.FULL_SCREEN && width >= SCREEN.MEDIUM_SCREEN) {
      setCount(count + CARDS_ADD.THREE);
    } else {
      setCount(count + CARDS_ADD.TWO);
    }
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm query={query}
                    checked={checked}
                    validMessage={validMessage}
                    handleSubmit={handleSubmit}
                    onChange={onChange}
                    onChangeChecked={onChangeChecked} />
        {isLoading ?
          <Preloader />
        : found ? (
          <MoviesCardList movies={checked ? shortMovies : filteredMovies}
                          savedMovies={userMovies}
                          count={count}
                          handleSaveMovie={handleSaveMovie}
                          handleDeleteMovie={handleDeleteMovie}
                          handleShowMoreMovies={handleShowMoreMovies} />
        ) : (
          <p className="movies__not-found">{errorMessage}</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
