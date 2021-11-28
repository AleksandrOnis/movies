import s from './MovieDescription.module.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function MovieDescription({ movie }) {
  return (
    movie && (
      <div className={s.container}>
        <div className={s.section}>
          <div>
            <img
              className={s.image}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>
          <div className={s.description}>
            <h2 className={s.title}>{movie.original_title}</h2>
            <p className={s.text}>User score: {movie.vote_average * 10}%</p>
            <h3 className={s.title}>Overview</h3>
            <p className={s.text}>{movie.overview}</p>
            <h3 className={s.title}>Genres</h3>
            <p className={s.text}>{movie.genres.map(genre => genre.name).join(' ')}</p>
          </div>
        </div>
        <div className={s.additionalInfo}>
          <h3 className={s.title}>Additional information</h3>
          <ul>
            <NavLink to={`/movies/${movie.id}/cast`}>
              <li className={s.item}>Cast</li>
            </NavLink>
            <NavLink to={`/movies/${movie.id}/reviews`}>
              <li className={s.item}>Reviews</li>
            </NavLink>
          </ul>
        </div>
      </div>
    )
  );
}

MovieDescription.prototype = {
  movie: PropTypes.object.isRequired,
};

export default MovieDescription;
