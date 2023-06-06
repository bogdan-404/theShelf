import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }

    const addBook = async (title, author, notes, quotes, rating) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
            author,
            notes,
            quotes,
            rating
        });
        setBooks([...books, response.data]);
    }

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const newBooks = books.filter(book => book.id !== id);
        setBooks(newBooks);
    }

    const updateBook = async (id, title, author, notes, quotes, rating) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title,
            author,
            notes,
            quotes,
            rating
        });
        const newBooks = books.map(book => book.id === id ? response.data : book);
        setBooks(newBooks);
    }

    return (
        <BooksContext.Provider value={{
            books,
            addBook,
            deleteBook,
            updateBook,
            fetchBooks
        }}>
            {children}
        </BooksContext.Provider>
    )
}

export { BooksProvider };
export default BooksContext;
