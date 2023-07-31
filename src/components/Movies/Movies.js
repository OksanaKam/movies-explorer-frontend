import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useLocation } from "react-router-dom";
import movies from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

function Movies({ isLoading }) {
  let location = useLocation();
  const isLoggedIn = location.pathname === "/" ? false : true;
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm />
        {isLoading && <Preloader />}
        <MoviesCardList movies={movies} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
