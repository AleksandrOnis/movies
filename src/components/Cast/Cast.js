import { fetchMovieCredits } from '../../services/moviesApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import s from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => getMovieActors(movieId), [movieId]);

  async function getMovieActors(id) {
    await fetchMovieCredits(id).then(({ cast }) => setActors(cast));
  }

  return actors?.length ? (
    <ul>
      {actors.map(actor => (
        <li key={actor.id} className={s.item}>
          <h4 className={s.title}>{actor.name}</h4>
          <img
            className={s.image}
            src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
            alt={actor.name}
          />
          <h4>Character: {actor.character}</h4>
        </li>
      ))}
    </ul>
  ) : (
    "We don't have any information about actors "
  );
}

export default Cast;
