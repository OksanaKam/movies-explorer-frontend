import { MainURL, MoviesURL } from "./constants";

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status}`);
  }

  _request(endpoint, options) {
    return fetch(`${this._baseUrl}/${endpoint}`, options).then(this._checkResponse);
  }

  getUserInfo() {
    return this._request(`users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }

  getUserMovies() {
    return this._request(`movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }

  postUserInfo(userData) {
    return this._request(`users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email
      })
    });
  }

  addMovie(data) {
    return this._request(`movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `${MoviesURL}${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `${MoviesURL}${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameEN,
        nameEN: data.nameEN,
      }),
    });
  }

  deleteMovie(movieId) {
    return this._request(`movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }
}

const mainApi = new MainApi({
  baseUrl: MainURL,
});

export default mainApi;
