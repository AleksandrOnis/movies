import { useParams, Route, Routes, useNavigate, useLocation } from 'react-router';
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
  const navigate = useNavigate();
  // const location = useLocation();

  const [movie, setMovie] = useState(null);

  // const queryFromSearchParameter = new URLSearchParams(location.search).get('query');
  // console.log('🚀 ~ MovieDetailsView ~ queryFromSearchParameter', queryFromSearchParameter);

  useEffect(() => getMovieDetails(movieId), [movieId]);
  // useEffect(() => getMovieDetails(movieId), [navigate, location]); //query

  async function getMovieDetails(id) {
    await fetchMovieDetails(id).then(data => setMovie(data));
  }

  return (
    movie && (
      <>
        <button type="button" onClick={() => navigate(-1)}>
          Go back
        </button>
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
