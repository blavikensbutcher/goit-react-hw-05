import './App.css';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FilmsList } from '../pages/FilmsList/FilmsList.jsx';
import { Header } from './Header/Header.jsx';
import { SearchMovies } from '../pages/SearchMovies/SearchMovies.jsx';
import { Film } from './Film/Film.jsx';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage.jsx';

// const home = React.lazy(() => import(''));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<b>Loading...</b>}>
        <Routes>
          <Route path="/" element={<FilmsList />} />
          <Route path="/movies/" element={<SearchMovies />} />
          <Route path="/movies/:movieId" element={<Film />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
