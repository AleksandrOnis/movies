import { Routes, Route, NavLink } from 'react-router-dom';

import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';

import './App.module.css';

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="movies" element={<MoviesView />}>
          {/* <Route path=":id" element={<DescriptionMovie />} /> */}
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
