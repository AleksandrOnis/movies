import { useParams, Route, Routes } from 'react-router';
import { useState, useEffect, lazy, Suspense } from 'react';
import { fetchMovieDetails } from '../services/moviesApi';
import MovieDescription from '../components/MovieDescription/MovieDescription';
import Loading from '../components/Loading/Loading';

const Cast = lazy(() => import('../components/Cast/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../components/Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => getMovieDetails(movieId), [movieId]);

  async function getMovieDetails(id) {
    await fetchMovieDetails(id).then(data => setMovie(data));
  }

  return (
    movie && (
      <>
        <MovieDescription movie={movie} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={`/cast`} element={<Cast id={movieId} />} />
            <Route path={`/reviews`} element={<Reviews id={movieId} />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}

export default MovieDetailsView;
