import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSearchMovie } from '../services/moviesApi';
import SearchForm from '../components/SearchForm/SearchForm';
import Loading from '../components/Loading/Loading';

function MoviesView() {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const queryFromSearchParameter = new URLSearchParams(location.search).get('query');

  useEffect(() => queryFromSearchParameter && searchMovie(queryFromSearchParameter), []);

  useEffect(() => {
    query && searchMovie(query);
  }, [query]);

  async function searchMovie(query) {
    setStatus('loading');
    await fetchSearchMovie(query).then(({ results }) => setMovies(results));
    setStatus(null);
    navigate({ ...location, search: `query=${query}` });
  }

  const getQuery = value => setQuery(value);

  return (
    <>
      <SearchForm onSubmit={getQuery} />
      {status && <Loading />}
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: { location, label: 'Back to movies' } }}
                >
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default MoviesView;
