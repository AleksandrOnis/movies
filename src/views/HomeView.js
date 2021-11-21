import { Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchTrending } from '../services/moviesApi';

function HomeView() {
  const [movies, setMovies] = useState([]);
  console.log('🚀 ~ HomeView ~ movies', movies);

  useEffect(() => searchTrendMovies(), []);

  // useEffect(() => movies.map(movie => <li>{movie.title}</li>), [movies]);

  // createMakup(movie.poster_path)
  //   function createMakup(movie) {
  //     // <img src="movie.poster_path" alt="" />;
  //   }

  async function searchTrendMovies() {
    await fetchTrending().then(({ results }) => setMovies(results));
  }
  return (
    <ul>
      {movies.map(movie => (
        <li>
          <a href="/">{movie.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default HomeView;
