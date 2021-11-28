import { fetchMovieReviews } from '../../services/moviesApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import s from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => getMovieReviews(movieId), [movieId]);

  async function getMovieReviews(id) {
    await fetchMovieReviews(id).then(({ results }) => setReviews(results));
  }
  return reviews?.length ? (
    <ul>
      {reviews.map(review => (
        <li key={review.id} className={s.item}>
          <h4 className={s.title}>{review.author}</h4>
          <p className={s.text}>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    "We don't have any reviews for this movie"
  );
}

export default Reviews;
