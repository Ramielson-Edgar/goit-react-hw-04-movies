const API_KEY = "937073afabb9cc88604030e8fb100ccc";
const BASE_URL = "https://api.themoviedb.org/3/";

const fetchMovies = () => {
  return fetch(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  ).then((response) => response.json());
};

const fetchMovieDetails = (movieId) => {
  return fetch(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  ).then((response) => response.json());
};

const fetchReviews = (reviewsId) => {
  return fetch(
    `${BASE_URL}movie/${reviewsId}/reviews?api_key=${API_KEY}`
  ).then((response) => response.json());
};

const fetchCast = (castId) => {
  return fetch(
    `${BASE_URL}movie/${castId}/credits?api_key=${API_KEY}`
  ).then((response) => response.json());
};

const fetchWithQuery = (query) => {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  ).then((response) => response.json());
};

const Api = {
  fetchMovieDetails,
  fetchMovies,
  fetchReviews,
  fetchCast,
  fetchWithQuery,
};

export default Api;
