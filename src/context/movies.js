import { createContext, useState } from 'react';
import axios from 'axios';

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await axios.get('http://localhost:3001/movies');
        setMovies(response.data);
    }

    const addMovie = async (title, notes, rating) => {
        const response = await axios.post('http://localhost:3001/movies', {
            title,
            notes,
            rating
        });
        setMovies([...movies, response.data]);
    }

    const deleteMovie = async (id) => {
        await axios.delete(`http://localhost:3001/movies/${id}`);
        const newMovies = movies.filter(movie => movie.id !== id);
        setMovies(newMovies);
    }

    const updateMovie = async (id, title, notes, rating) => {
        const response = await axios.put(`http://localhost:3001/movies/${id}`, {
            title,
            notes,
            rating
        });
        const newMovies = movies.map(movie => movie.id === id ? response.data : movie);
        setMovies(newMovies);
    }

    return (
        <MoviesContext.Provider value={{
            movies,
            addMovie,
            deleteMovie,
            updateMovie,
            fetchMovies
        }}>
            {children}
        </MoviesContext.Provider>
    )

}

export { MoviesProvider };
export default MoviesContext;