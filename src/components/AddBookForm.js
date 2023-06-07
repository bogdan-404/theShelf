import { useState, useContext } from 'react';
import BooksContext from '../context/books';
import NavigationContext from '../context/navigation';
import { TextField, Button, Container, Typography, Rating, Grid, Box } from "@mui/material";


function AddBookForm() {
    const { navigate } = useContext(NavigationContext);
    const { addBook } = useContext(BooksContext);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState(0);
    const [notes, setNotes] = useState("");
    const [quotes, setQuotes] = useState("");

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
    }

    const handleChangeRating = (event) => {
        setRating(event.target.value);
    }

    const handleChangeNotes = (event) => {
        setNotes(event.target.value);
    }

    const handleChangeQuotes = (event) => {
        setQuotes(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addBook(title, author, notes, quotes, rating);
        defaultValues();
        navigate("/books");
    }

    const handleCancel = () => {
        defaultValues();
        navigate("/books");
    }

    const defaultValues = () => {
        setTitle('');
        setAuthor('');
        setRating(0);
        setNotes('');
        setQuotes('');
    }

    return (
        <Container style={{ margin: 'auto', maxWidth: '60%' }}>

            <Typography variant="h4" align="center" style={{ marginTop: 40 }}>
                Add Book
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
                        <Typography component="legend" >Author</Typography>
                        <TextField
                            value={author}
                            onChange={handleChangeAuthor}
                            label="Author"
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
                            multiline
                            rows={4}
                            fullWidth
                            style={{ marginTop: 3 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography component="legend">Favorite Quotes</Typography>
                        <TextField
                            value={quotes}
                            onChange={handleChangeQuotes}
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            style={{ marginTop: 3 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography component="legend">Rating</Typography>
                        <Rating
                            value={rating}
                            onChange={handleChangeRating}
                            name="simple-controlled"
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
    );
}

export default AddBookForm;