import s from './MovieDescription.module.css';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function MovieDescription({ movie }) {
  const location = useLocation();
  const locationFrom = location?.state?.from?.location;

  const label = locationFrom?.pathname.includes('/movies') ? 'Back to movies' : 'Back to home';
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
            <li className={s.item}>
              <Link
                to={`/movies/${movie.id}/cast`}
                state={{
                  from: {
                    location: locationFrom,
                    label,
                  },
                }}
              >
                Cast
              </Link>
            </li>
            <li className={s.item}>
              <Link
                to={`/movies/${movie.id}/reviews`}
                state={{
                  from: {
                    location: locationFrom,
                    label,
                  },
                }}
              >
                Reviews
              </Link>
            </li>
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
