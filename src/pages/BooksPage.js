import { useEffect, useContext } from 'react';
import BooksContext from '../context/books';
import NavigationContext from '../context/navigation';
import BooksList from '../components/BooksList';
import { Container, Button, Box, Typography } from "@mui/material";



function BooksPage() {
    const { fetchBooks } = useContext(BooksContext);
    const { navigate } = useContext(NavigationContext);

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <Container style={{ margin: 'auto', maxWidth: '80%' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="2em" style={{ marginTop: 40, marginLeft: 10, maxWidth: '98%' }}>
                <Typography variant="h4">Read Books List</Typography>
                <Button variant="contained" style={{ backgroundColor: 'black' }} onClick={() => navigate("/add-book")}>Add Book</Button>
            </Box>
            <BooksList />
        </Container>
    );
}

export default BooksPage;