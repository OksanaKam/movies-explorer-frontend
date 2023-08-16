import React, { useEffect, useState } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";
import { ERROR_TEXT } from "../../utils/constants";
import { SHORT_DURATION } from "../../utils/constants";

function SavedMovies({ userMovies,
                       errorMessage,
                       setErrorMessage,
                       handleDeleteMovie }) {
  let location = useLocation();
  const isLoggedIn = location.pathname === "/" ? false : true;

  const [query, setQuery] = useState('');
  const [checked, setChecked] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [found, setFound] = useState(true);
  const [validMessage, setValidMessage] = useState('');

  useEffect(() => {
    setFilteredMovies(userMovies);
  }, [userMovies]);

  useEffect(() => {
    if (isLoading) {
      const result = userMovies.filter((movie) => {
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
  }, [isLoading, userMovies, query, setFilteredMovies, setErrorMessage]);

  useEffect(() => {
    if (checked) {
      const shortMovies = filteredMovies.filter((movie) => {
        return movie.duration <= SHORT_DURATION;
      });
      setShortMovies(shortMovies);
    }
  }, [checked, filteredMovies, setShortMovies]);

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

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm query={query}
                    checked={checked}
                    validMessage={validMessage}
                    handleSubmit={handleSubmit}
                    onChange={onChange}
                    onChangeChecked={onChangeChecked} />
        {isLoading ? (
          <Preloader />
        ) : found ? (
          <MoviesCardList movies={checked ? shortMovies : filteredMovies}
                          savedMovies={userMovies}
                          handleDeleteMovie={handleDeleteMovie} />
        ) : (
          <p className="saved-movies__not-found">{errorMessage}</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
