import { useEffect, useContext } from 'react';
import MoviesContext from '../context/movies';
import NavigationContext from '../context/navigation';
import MovieList from '../components/MovieList';
import { Container, Button, Box, Typography } from "@mui/material";


function MoviesPage() {
    const { fetchMovies } = useContext(MoviesContext);
    const { navigate } = useContext(NavigationContext);

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <Container style={{ margin: 'auto', maxWidth: '80%' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="2em" style={{ marginTop: 40, marginLeft: 10, maxWidth: '98%' }}>
                <Typography variant="h4">Watched Movies List</Typography>
                <Button variant="contained" style={{ backgroundColor: 'black' }} onClick={() => navigate("/add-movie")}>Add Movie</Button>
            </Box>
            <MovieList />
        </Container>
    );
}

export default MoviesPage;