import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTrending } from '../services/moviesApi';

function HomeView() {
  const [movies, setMovies] = useState();

  useEffect(() => searchTrendMovies(), [movies]);

  async function searchTrendMovies() {
    await fetchTrending().then(({ results }) => setMovies(results));
  }
  return movies ? (
    movies.length ? (
      <div>
        <ul>
          {movies.map(movie => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <li>{movie.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    ) : (
      'Error, try again'
    )
  ) : (
    ''
  );
}

export default HomeView;
