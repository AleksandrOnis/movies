import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSearchMovie } from '../services/moviesApi';
import SearchForm from '../components/SearchForm/SearchForm';

function MoviesView() {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => query && searchMovie(query), [query]);

  async function searchMovie(query) {
    await fetchSearchMovie(query).then(({ results }) => setMovies(results)); //попробывать ссылкой без вызова setMovies без колбэка
  }

  const getQuery = value => setQuery(value);

  return (
    <>
      <SearchForm onSubmit={getQuery} />
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
