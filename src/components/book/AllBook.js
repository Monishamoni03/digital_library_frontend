//ADMIN ---> Available books with edit, delete

import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, Paper, TableHead, TableRow, Button, styled } from "@mui/material";
import { getBooks, deleteBook } from '../../action/action';
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminNavBar from "../admin/AdminNavBar";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router";

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
    const dispatch = useDispatch();
    // const { id } = useParams();
    const { bookListSuccess } = useSelector(state => state.bookData);  //bookData-> reducer, root-reducer file
    const { bookListFailure } = useSelector(state => state.bookData);

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

    const deleteBookData = (id) => {
        dispatch(deleteBook(id));
        getAllBooks();   // if user added to my list, admin should not delete that user added book
        alert("Successfully book has been deleted from the table");
    
    }
    // const deleteBookData = async (id) => {
    //     await deleteBook(id);
    //     getAllBooks();   // if user added to my list, admin should not delete that user added book
    //     alert("Successfully book has been deleted from the table");
    // }

    const getAllBooks = async () => {
        let res = await getBooks();
        setBooks(res.data);
    }

    const navigate = useNavigate();
    return (
        <>
            <AdminNavBar />
            <div className="admin-page">
                <h1 style={{ textAlign: "center" }}>Available Books</h1>
            </div>
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
                                <Button color="primary" variant="contained" style={{ marginRight: 20 }} component={Link} to={`/edit/${book._id}`}>Edit</Button>
                                <Button color="secondary" variant="contained" style={{ marginRight: 25 }} onClick={() => deleteBookData(book._id)}>Delete</Button>
                                <Button color="primary" variant="contained" style={{ marginRight: 5 }} component={Link} to={`/description/${book._id}`}>View</Button>
                            </TableCell>
                        </TRow>
                    ))}
                </TableBody>
            </StyledTable>
            <div className='book-container'>

                <button onClick={() => navigate('/admin')}
                    type='button'
                    className="admin-button"
                    data-toggle='modal'
                    data-target='#exampleModal' 
                    id = 'all-book'>
                    Go Back
                </button>

            </div>
        </>
    )
}

export default AllBook;
