import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTrending } from '../services/moviesApi';

function HomeView() {
  const [movies, setMovies] = useState();
  const location = useLocation();

  useEffect(() => searchTrendMovies(), []);

  async function searchTrendMovies() {
    await fetchTrending().then(({ results }) => setMovies(results));
  }
  return movies ? (
    movies.length ? (
      <div>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: { location, label: 'Back to home' } }}
              >
                {movie.title}
              </Link>
            </li>
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
