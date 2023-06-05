import { useContext } from 'react';
import MoviesContext from '../context/movies';
import { Card, CardContent, Typography, IconButton, Box, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';

function MovieShow({ movie }) {
    const { deleteMovie } = useContext(MoviesContext);


    const handleDelete = (movie) => {
        deleteMovie(movie.id);
    }

    const handleEdit = (movie) => {
        console.log('edit');
    }


    return (
        <Card sx={{ minWidth: '300px', maxWidth: '33%', margin: '1%', position: 'relative', marginTop: 2.5 }}>
            <IconButton aria-label="delete" onClick={() => handleDelete(movie)} sx={{ position: 'absolute', top: 0, right: 0, width: '30px', height: '30px' }}>
                <DeleteIcon fontSize="small" />
            </IconButton>
            <CardContent>
                <Typography variant="h5"><b>Title:</b> {movie.title}</Typography>
                <Typography variant="body2" style={{ marginTop: 10, marginLeft: 3 }}><b>Notes:</b> {movie.notes}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '3em' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <StarIcon color="warning" />
                        <Typography variant="body2">{movie.rating}</Typography>
                    </Box>
                    <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={() => handleEdit(movie)}>
                        Edit
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default MovieShow;