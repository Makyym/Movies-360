import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingMovies } from '../redux/movies/operations';
import { selectTrendingMovies } from '../redux/movies/selectors';
import { AppDispatch, RootState } from '../redux/store';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

const TendingMovies = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);
  const movies = useSelector<RootState, Movie[] | null>(selectTrendingMovies);
  return (
    <div className="opacity-60">
      {movies ? (
        <ul className=" flex flex-wrap gap-2 overflow-hidden justify-center">
          {movies.map(movie => (
            <li key={movie.id} className="w-[195.56px] h-[200px]">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className=" w-full h-full object-cover rounded-xl "
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TendingMovies;
