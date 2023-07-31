import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import savedMovies from "../../utils/savedMovies";
import { useLocation } from "react-router-dom";

function SavedMovies() {
  let location = useLocation();
  const isLoggedIn = location.pathname === "/" ? false : true;
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="saves-movies">
        <SearchForm />
        <MoviesCardList movies={savedMovies} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
