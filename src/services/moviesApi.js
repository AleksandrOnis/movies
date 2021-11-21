const BASE_URL = 'https://api.themoviedb.org/3';
// ?api_key=590a6f37621ff65548240da14486f6b8
const API_KEY = '590a6f37621ff65548240da14486f6b8';

async function fetchMovie(url = '', opt = '') {
  const response = await fetch(`${BASE_URL}${url}?api_key=${API_KEY}${opt}`);
  return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
  return fetchMovie(`/trending/movie/day`);
}

export function fetchSearchMovie(query) {
  console.log('🚀 ~ fetchSearchMovie ~ query', query);

  return fetchMovie(`/search/movie`, `&query=${query}`);
}

export function fetchMovieDetails(id) {
  return fetchMovie(`/movie/${id}`);
}

export function fetchMovieCredits(id) {
  return fetchMovie(`/credit/get-movie-details/${id}`);
}

export function fetchMovieReviews(id) {
  return fetchMovie(`/review/${id}`);
}
// https://api.themoviedb.org/3/trending/movie/day?api_key=590a6f37621ff65548240da14486f6b8

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
