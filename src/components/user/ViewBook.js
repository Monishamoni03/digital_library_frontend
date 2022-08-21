//USER  --> Viewing available books with VIEW & ADD TO LIST  -->1st pg

import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, Button, Paper, TableHead, TableRow, styled } from "@mui/material";
import { addBookToList, getBooks, setBookIn } from '../../action/action';
import { Link, useNavigate } from "react-router-dom";
import UserNavBar from "./UserNavBar";
import { useDispatch, useSelector } from "react-redux";
import jwtdecode from 'jwt-decode';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF; 
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const ViewBook = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    const { bookListSuccess } = useSelector(state => state.bookData);
    const { bookListFailure } = useSelector(state => state.bookData);
    const dispatch = useDispatch();

    useEffect(() => {
      if (bookListSuccess) {
        console.log('added book');
        alert(bookListSuccess)
        // dispatch(setBookIn())
    } else if (bookListFailure) {
      alert(bookListFailure)
    }
  }, [bookListSuccess, bookListFailure])

    useEffect(() => {
        getAllBooks();
    }, []);

    const getAllBooks = async () => {
        let res = await getBooks();
        setBooks(res.data);
    }

    const addBook = (bookId) => {
        const token = jwtdecode(window.localStorage.getItem('token')).id
        dispatch(addBookToList({
            user : token,
            book : bookId
        }));
        // alert('Book is added to your list');
    }

return (
    <>
    <UserNavBar />
    <div className = "about">
            <h1 className = "aboutHead">Welcome User</h1>
            <p className = "aboutPara">The available books in the Digital Library are given below. You can now able to view the book for more details and also you can add to your book list.</p></div>
            <h1 className = "aboutHead">Available Books</h1>
    <StyledTable>
        <TableHead>
            <THead>
                {/* <TableCell>Id</TableCell> */}
                <TableCell>Book Name</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Actions</TableCell>
            </THead>
        </TableHead>
        <TableBody>
        {books.map((book) => (
                    <TRow key={book.id}>
                        {/* <TableCell>{book._id}</TableCell>  */}
                        <TableCell>{book.bookName}</TableCell>
                        <TableCell>{book.author}</TableCell>
                        <TableCell>{book.category}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:15}} component={Link} to={`/view/${book._id}`}>View</Button>
                            <Button color="secondary" variant="contained" onClick={() => addBook(book._id)}>Add to List</Button>  
                        </TableCell>
                    </TRow>
                ))}
        </TableBody>
    </StyledTable>
    </>
   )
}

export default ViewBook;
