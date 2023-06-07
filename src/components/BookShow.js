import { useContext } from 'react';
import BooksContext from '../context/books';
import { Card, CardContent, Typography, IconButton, Box, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import NavigationContext from '../context/navigation';

function BookShow({ book }) {
    const { deleteBook } = useContext(BooksContext);
    const { navigate } = useContext(NavigationContext);

    const handleDelete = (book) => {
        deleteBook(book.id);
    }

    const handleEdit = (book) => {
        navigate(`/edit-book/${book.id}`);
    }

    return (
        <Card sx={{ minWidth: '300px', maxWidth: '30%', margin: '1%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '350px' }}>
            <div>
                <IconButton aria-label="delete" onClick={() => handleDelete(book)} sx={{ position: 'absolute', top: 0, right: 0, width: '30px', height: '30px' }}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <CardContent>
                    <Typography variant="h5"><b>Title:</b> {book.title}</Typography>
                    <Typography variant="body2" style={{ marginTop: 10, marginLeft: 3 }}><b>Author:</b> {book.author}</Typography>
                    <Typography variant="body2" style={{ marginTop: 10, marginLeft: 3 }}><b>Notes:</b> {book.notes}</Typography>
                    <Typography variant="body2" style={{ marginTop: 10, marginLeft: 3 }}><b>Quotes:</b> {book.quotes}</Typography>
                </CardContent>
            </div>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '1em 1em 1em 1em' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarIcon color="warning" />
                    <Typography variant="body2">{book.rating}</Typography>
                </Box>
                <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={() => handleEdit(book)}>
                    Edit
                </Button>
            </Box>
        </Card>
    );
};

export default BookShow;
