import { MoviesURL } from "./constants";

class MoviesApi {
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

  getInitialMovies() {
      return this._request(`beatfilm-movies`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });
  }
}

const movieApi = new MoviesApi({
  baseUrl: MoviesURL,
});

export default movieApi;
