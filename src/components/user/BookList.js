//USER---> MY BOOK LIST

import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, Paper, TableHead, TableRow, Button, styled } from "@mui/material";
import { getBookList, removeBook } from '../../action/action';
import jwtdecode from 'jwt-decode';
import UserNavBar from "./UserNavBar";
import { useNavigate } from "react-router-dom";

const StyledTable = styled(Table)`
    width: 50%;
    margin: 100px 0 0 400px;
`;

const THead = styled(TableRow)` 
    & > th {
        font-size: 20px;
        background: black;
        color: white;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 25px
    }
`;

const BookList = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllBookList();
        console.log("books", books)
    }, []);

    const getAllBookList = async () => {
        const token = jwtdecode(window.localStorage.getItem('token')).id
        let res = await getBookList(token);
        setBooks(res.data);
    }

    const removeBooks = async (id) => {
        await removeBook(id);
        getAllBookList();
        alert("Removed from your book list");
    }

    return (
        <>
            {/* <UserNavBar /> */}
            <div style={{ background: `url('https://i.pinimg.com/originals/73/66/0d/73660d35a956a520d400d2ca465eb02c.jpg') center center/cover no-repeat`, height: "980px"}}>
            <UserNavBar />
            <StyledTable>
                <TableHead>
                {/* <div className = "about"> */}
                {/* <TableCell style={{color: "violet", fontSize: "50px", textAlign: "center"}}>My List</TableCell> */}
                {/* </div> */}
                <br /><br />
                    <THead>
                        <TableCell>Book Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </THead>
                </TableHead>

                <TableBody>
                    {books && books.map((book) => (
                        <TRow key={book.id}>
                            {/* <TableCell>{book._id}</TableCell>  */}
                            <TableCell>{book.book.bookName || ""}</TableCell>

                            <TableCell>
                                <Button color="secondary" variant="contained" style={{ marginRight: 25 }} onClick={() => removeBooks(book._id)}>Remove</Button>
                            </TableCell>
                        </TRow>
                    ))}
                    {/* {books && console.log("books"+books)} */}
                </TableBody>
                <div className='book-container'>
                <button onClick={() => navigate('/user')}
                    style={{ margin: "50px", height: "80%", width: "100%", color: "white", backgroundColor: "black" }}
                    type='button'
                    className='admin-button'
                    data-toggle='modal'
                    data-target='#exampleModal' >
                    Go Back
                </button>
            </div>
            </StyledTable>
            </div>
        </>
    )
}

export default BookList;