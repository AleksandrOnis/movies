import MovieCard from './../MovieCard';
import s from './MoviesList.module.scss';

function MoviesList({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </ul>
  );
}

export default MoviesList;
