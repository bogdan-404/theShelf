import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';


function BooksList() {
    const { books } = useContext(BooksContext);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {books.map((book, index) => (
                <BookShow key={index} book={book} />
            ))}
        </div>
    );
}

export default BooksList;