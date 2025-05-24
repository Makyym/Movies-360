import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovies } from "../../redux/movies/operations";
import { selectTrendingMovies } from "../../redux/movies/selectors";

const TendingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTrendingMovies());
    }, [dispatch]);
    const movies = useSelector(selectTrendingMovies);
    return (
        <div>
            {movies ? (
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <p>{movie.overview}</p>
                        <p>Rating: {movie.vote_average}</p>
                    </li>
                ))}
            </ul>) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default TendingMovies