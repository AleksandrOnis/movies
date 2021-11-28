import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSearchMovie } from '../services/moviesApi';
import SearchForm from '../components/SearchForm/SearchForm';
import Loading from '../components/Loading/Loading';

function MoviesView() {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(null);

  useEffect(() => {
    query && searchMovie(query);
  }, [query]);

  async function searchMovie(query) {
    setStatus('loading');
    await fetchSearchMovie(query).then(({ results }) => setMovies(results));
    setStatus(null);
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
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <li>{movie.title}</li>
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default MoviesView;
