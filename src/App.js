import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import Loading from './components/Loading/Loading';

import './App.module.css';

const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "HomeView" */));

const MoviesView = lazy(() => import('./views/MoviesView' /* webpackChunkName: "MoviesView" */));
const MovieDetailsView = lazy(() =>
  import('./views/MovieDetailsView' /* webpackChunkName: "MovieDetailsView" */),
);
const NotFoundView = lazy(() => import('./views/NotFoundView.js'));

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="movies" element={<MoviesView />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
