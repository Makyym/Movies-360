import { lazy, Suspense } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import { Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviePage = lazy(() => import('./pages/MoviePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const MovieCast = lazy(() => import('./components/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews'));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<SearchPage />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="/movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
