import './App.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header.jsx';
import { Film } from './Film/Film.jsx';

const FilmsList = React.lazy(() => import('../pages/FilmsList/FilmsList.jsx'));
const Reviews = React.lazy(() => import('./Reviews/Reviews.jsx'));
const Cast = React.lazy(() => import('./Cast/Cast.jsx'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage/NotFoundPage.jsx'));
const SearchMovies = React.lazy(() => import('../pages/SearchMovies/SearchMovies.jsx'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<b>Loading...</b>}>
        <Routes>
          <Route path="/" element={<FilmsList />} />
          <Route path="/movies/" element={<SearchMovies />} />
          <Route path="/movies/:movieId" element={<Film />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
