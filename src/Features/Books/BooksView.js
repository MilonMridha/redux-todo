import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BookSlice';

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books);
    const dispatch = useDispatch();


    const handleDelete = (id) => {

        dispatch(deleteBook(id))
    }
    return (
        <div>
            <h1>List of Books</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map(book => {
                        const { id, title, author } = book;
                        return <tr>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{author}</td>
                            <td>
                                <Link to="/edit-book" state={{id, title, author}}>
                                    <button>Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(id)}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;