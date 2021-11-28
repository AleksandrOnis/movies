const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '590a6f37621ff65548240da14486f6b8';

async function fetchMovie(url = '', opt = '') {
  const response = await fetch(`${BASE_URL}${url}?api_key=${API_KEY}${opt}`);
  return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
  return fetchMovie(`/trending/movie/day`);
}

export function fetchSearchMovie(query) {
  return fetchMovie(`/search/movie`, `&query=${query}`);
}

export function fetchMovieDetails(id) {
  return fetchMovie(`/movie/${id}`);
}

export function fetchMovieCredits(id) {
  return fetchMovie(`/movie/${id}/credits`);
}

export function fetchMovieReviews(id) {
  return fetchMovie(`/movie/${id}/reviews`);
}
