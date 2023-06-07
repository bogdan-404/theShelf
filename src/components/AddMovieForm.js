import { useState, useContext } from "react";
import NavigationContext from '../context/navigation';
import MoviesContext from '../context/movies';
import { TextField, Button, Container, Typography, Rating, Grid, Box } from "@mui/material";


function AddMovieForm() {
    const { navigate } = useContext(NavigationContext);
    const { addMovie } = useContext(MoviesContext);

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [notes, setNotes] = useState("");


    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleChangeRating = (event) => {
        setRating(event.target.value);
    }

    const handleChangeNotes = (event) => {
        setNotes(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addMovie(title, notes, rating);
        defaultValues();
        navigate("/movies");
    }

    const handleCancel = () => {
        defaultValues();
        navigate("/movies");
    }

    const defaultValues = () => {
        setTitle('');
        setRating(0);
        setNotes('');
    }


    return (
        <Container style={{ margin: 'auto', maxWidth: '60%' }}>
            <Typography variant="h4" align="center" style={{ marginTop: 40 }}>
                Add Movie
            </Typography>
            <form onSubmit={handleSubmit} style={{ marginTop: 40 }}>
                <Grid container spacing={3} justifyContent="center" direction="column">
                    <Grid item xs={12} sm={4}>
                        <Typography component="legend" >Title</Typography>
                        <TextField
                            value={title}
                            onChange={handleChangeTitle}
                            label="Title"
                            variant="outlined"
                            fullWidth
                            required
                            style={{ marginTop: 3 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography component="legend">Notes</Typography>
                        <TextField
                            value={notes}
                            onChange={handleChangeNotes}
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            style={{ marginTop: 3 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography component="legend">Your Rating</Typography>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={handleChangeRating}
                            size="large"
                            style={{ marginTop: 3 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box display="flex" justifyContent="flex-end">
                            <Button variant="outlined" color="primary" onClick={handleCancel} style={{ marginRight: 10 }}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" color="primary">
                                Save
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default AddMovieForm;