import './App.css';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FilmsList } from './FilmsList/FilmsList.jsx';
import { Header } from './Header/Header.jsx';
import { SearchMovies } from './SearchMovies/SearchMovies.jsx';

// const home = React.lazy(() => import(''));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<b>Loading...</b>}>
        <Routes>
          <Route path="/" element={<FilmsList />} />
          <Route path="/movies/" element={<SearchMovies />} />
          <Route path="/movies/:movieId" element={<div>Movie ID</div>} />
          <Route path="*" element={<div>Ви заблукали :(</div>} />
        </Routes>
      </Suspense>
    </>
  );
};
