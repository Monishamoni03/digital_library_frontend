//ADMIN ---> Available books

import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, Paper, TableHead, TableRow, Button, styled } from "@mui/material";
import { getBooks, deleteBook } from '../../action/action';
import { Link, useNavigate } from "react-router-dom";
import AdminNavBar from "../admin/AdminNavBar";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 90px 0 0 90px;
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
        font-size: 25px
    }
`;

const AllBook = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        getAllBooks();
    }, []);

    const deleteBookData = async (id) => {
        await deleteBook(id);
        getAllBooks();
    }

    const getAllBooks = async () => {
        let res = await getBooks();
        setBooks(res.data);
    }

    const navigate = useNavigate();
return (
    <>
    <AdminNavBar />
    <div className = "admin-page">
        <h1 style = {{textAlign: "center"}}>Available Books</h1>
    </div>
    <StyledTable>
        <TableHead>
            <THead>
                <TableCell>Id</TableCell>
                <TableCell>Book Name</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Actions</TableCell>
            </THead>
        </TableHead> 
        <TableBody>
        {books.map((book) => (
                    <TRow key={book.id}>
                        <TableCell>{book._id}</TableCell> 
                        <TableCell>{book.bookName}</TableCell>
                        <TableCell>{book.author}</TableCell>
                        <TableCell>{book.category}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${book._id}`}>Edit</Button> 
                            <Button color="secondary" variant="contained" onClick={() => deleteBookData(book._id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
        </TableBody>
    </StyledTable>
    <div className = 'book-container'>
          
          <button onClick = {() => navigate('/admin')}
            style = {{margin: "50px"}}
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal' >
            Go Back
          </button>

    </div>
    </>
   )
}

export default AllBook;