import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation} from "react-router-dom";
import "./App.css";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth";
import { ERRORS } from "../../utils/constants";
import { ERROR_TEXT } from "../../utils/constants";

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [userMovies, setUserMovies] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  function checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      auth.checkToken(token)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          navigate(location.pathname);
        }
      })
      .catch((err) => {
        if (err.includes(401)) {
          setErrorMessage(ERROR_TEXT.ERROR_401);
          setLoggedIn(false);
          localStorage.clear();
        }
        console.log(err);
      });
    }
  }

  useEffect(() => {
    checkToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getUserInfo()
      .then((profileUser) => {
        setCurrentUser(profileUser);
      })
      .catch(console.error);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getUserMovies()
      .then((res) => {
        setUserMovies(res.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [isLoggedIn]);

  function handleEditProfileClick(e) {
    e.preventDefault();
    setIsEdit(true);
  }

  function handleUpdateUser(userData) {
    mainApi.postUserInfo(userData)
      .then((user) => {
        setCurrentUser(user);
        setErrorMessage(ERROR_TEXT.SUCCESS_PROFILE);
        setIsEdit(false);
      })
      .catch((err) => {
        if (err === ERRORS.CONFLICT) {
          setErrorMessage(ERROR_TEXT.ERROR_409);
        } else {
          setErrorMessage(ERROR_TEXT.ERROR_PROFILE);
        }
      });
  };

  function handleRegister(name, email, password) {
    auth.register(name, email, password)
    .then(() => {
      handleLogin(email, password);
      setErrorMessage("");
    })
    .catch((err) => {
      if (err === ERRORS.CONFLICT) {
        setErrorMessage(ERROR_TEXT.ERROR_409);
      } else {
        setErrorMessage(ERROR_TEXT.ERROR_REGISTER);
      }
    })
  }

  function handleLogin(email, password) {
    auth.login(email, password)
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        setErrorMessage("");
        setLoggedIn(true);
        navigate('/movies');
      }
    })
    .catch((err) => {
      if (err === ERRORS.AUTH) {
        setErrorMessage(ERROR_TEXT.ERROR_401);
      } else {
        setErrorMessage(ERROR_TEXT.ERROR_LOGIN);
      }
      console.log(err);
    });
  }

  function handleSignout() {
    localStorage.removeItem('token');
    localStorage.clear();
    setLoggedIn(false);
    setErrorMessage("");
    navigate('/');
  }

  function handleSaveMovie(data) {
    mainApi.addMovie(data)
    .then((newMovie) => {
      setUserMovies([newMovie, ...userMovies]);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
    .then(() => {
      const newUserMovie = userMovies.filter((c) => c._id !== movie._id);
      setUserMovies(newUserMovie);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route path="/signup"
                 element={
                 <Register handleRegister={handleRegister}
                           errorMessage={errorMessage} />}/>
          <Route path="/signin"
                 element={
                 <Login handleLogin={handleLogin}
                        errorMessage={errorMessage} />}/>
          <Route path="/movies"
                 element={
                 <ProtectedRouteElement element={Movies}
                                        isLoggedIn={isLoggedIn}
                                        userMovies={userMovies}
                                        errorMessage={errorMessage}
                                        setErrorMessage={setErrorMessage}
                                        handleSaveMovie={handleSaveMovie}
                                        handleDeleteMovie={handleDeleteMovie} />} />
          <Route path="/saved-movies"
                 element={
                 <ProtectedRouteElement element={SavedMovies}
                                        isLoggedIn={isLoggedIn}
                                        userMovies={userMovies}
                                        errorMessage={errorMessage}
                                        setErrorMessage={setErrorMessage}
                                        handleDeleteMovie={handleDeleteMovie} />} />
          <Route path="/profile"
                 element={
                 <ProtectedRouteElement element={Profile}
                                        isLoggedIn={isLoggedIn}
                                        handleSignout={handleSignout}
                                        onUpdateUser={handleUpdateUser}
                                        errorMessage={errorMessage}
                                        onEditProfile={handleEditProfileClick}
                                        isEdit={isEdit} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
