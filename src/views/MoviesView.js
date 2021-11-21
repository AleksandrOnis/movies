import { Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSearchMovie } from '../services/moviesApi';
import SearchForm from '../components/SearchForm/SearchForm';

function MoviesView() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  console.log('🚀 ~ MoviesView ~ movies', movies);

  useEffect(() => query && searchMovie(query), [query]);

  async function searchMovie(query) {
    console.log('🚀 ~ searchMovie ~ query', query);

    await fetchSearchMovie(query).then(({ results }) => setMovies(results));

    console.log('to/past?');
  }

  const getQuery = value => setQuery(value);

  return <SearchForm onSubmit={getQuery} />;
}

export default MoviesView;
