import { useContext } from 'react';
import MoviesContext from '../context/movies';
import MovieShow from '../components/MovieShow';


function MovieList() {
    const { movies } = useContext(MoviesContext);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {movies.map((movie, index) => (
                <MovieShow key={index} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;