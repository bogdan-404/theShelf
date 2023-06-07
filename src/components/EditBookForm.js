import { useState, useContext, useEffect } from "react";
import NavigationContext from '../context/navigation';
import BookContext from '../context/books';
import { TextField, Button, Container, Typography, Rating, Grid, Box } from "@mui/material";
import { useParams } from 'react-router-dom';

function EditMovieForm() {
    const { navigate } = useContext(NavigationContext);
    const { books, updateBook } = useContext(BookContext);
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);
    const [notes, setNotes] = useState('');

    useEffect(() => {
        const book = books.find(book => book.id === id);
        if (book) {
            setTitle(book.title);
            setRating(book.rating);
            setNotes(book.notes);
        }
    }, [books, id]);


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
        updateBook(id, title, notes, rating);
        defaultValues();
        navigate("/books");
    }

    const handleCancel = () => {
        defaultValues();
        navigate("/books");
    }

    const defaultValues = () => {
        setTitle('');
        setRating(0);
        setNotes('');
    }

    return (
        <Container style={{ margin: 'auto', maxWidth: '60%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <Box sx={{ width: '100%' }}>
                    <Typography variant="h3" sx={{ fontSize: '35px', fontWeight: 'bold', color: 'black', my: 3 }} >
                        Edit Book
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="title"
                                    label="Title"
                                    name="title"
                                    value={title}
                                    onChange={handleChangeTitle}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="notes"
                                    label="Notes"
                                    name="notes"
                                    value={notes}
                                    onChange={handleChangeNotes}
                                />
                            </Grid>
                            <Grid item xs={12}>

                                <Rating
                                    name="rating"
                                    value={rating}
                                    onChange={handleChangeRating}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant="contained" color="primary" type="submit">
                                    Save
                                </Button>
                                <Button variant="contained" color="secondary" onClick={handleCancel}>
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Container>
    )
}

export default EditMovieForm;