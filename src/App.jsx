import { lazy, Suspense } from 'react';
import './App.css'
import Navigation from './components/Navigation/Navigation.jsx'
import Loader from './components/Loader/Loader.jsx';
import { Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('./pages/MoviePage/MoviePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));

function App() {
  return (
    <div>
    <Navigation />
    <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<SearchPage />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='/movies/:movieId' element={<MoviePage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
