import { createContext, useState } from 'react';
import axios from 'axios';

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    const addMovie = async (title, notes, rating) => {
        const response = await axios.post('http://localhost:3001/movies', {
            title,
            notes,
            rating
        });
        setMovies([...movies, response.data]);
    }

    return (
        <MoviesContext.Provider value={{ movies, addMovie }}>
            {children}
        </MoviesContext.Provider>
    )

}

export { MoviesProvider };
export default MoviesContext;