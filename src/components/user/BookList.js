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
        color: pink;
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
            <UserNavBar />
            <StyledTable>
                <TableHead>
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
            </StyledTable>
            <div className = 'book-container'>

                <button onClick = {() => navigate('/user')}
                    style={{ margin: "100px", height: "20%", width: "10%", color: "black", backgroundColor: "skyblue" }}
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

export default BookList;












// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// // import BookmarkAddIcon from '@material-ui/icons-material/BookmarkAdd';
// import { TableBody, TableCell, TableRow, Typography } from "@mui/material";

// const BookList = ({history}) => {
//     const dispatch = useDispatch();
//     const { bookList } = useSelector((state) => state.data);
//     // const navigate = useNavigate();

//     // const deleteList = (id) => {
//     //     dispatch(removeFromList(id));
//     // };

//     return (
//         <>
//             {bookList.length === 0 ? (
//                 <div className = "list">
//                     {/* <BookmarkAddIcon /> */}
//                     <Typography>No Book List</Typography>
//                     <Link to = "/view">View Available Books</Link>
//                 </div>
//             ) : (
//                 <>
//                 <div className = "cancel">
//                     <div className = "header">
//                         <p>Cancel</p>
//                     </div>
//                 <StyledTable>
//                     <TableHead>
//                     <THead>
//                         <TableCell>Id</TableCell>
//                         <TableCell>Book Name</TableCell>
//                         <TableCell>Author</TableCell>
//                         <TableCell>Category</TableCell>
//                         <TableCell>Booking List</TableCell>
//                     </THead>
//                 </TableHead>
//                     <TableBody>
//                         {bookList &&
//                             bookList.map((book) => (
//                                 <TRow key = {book.id}>
//                                     <TableCell>{book._id}</TableCell>
//                                     <TableCell>{book.bookName}</TableCell>
//                                     <TableCell>{book.author}</TableCell>
//                                     <TableCell>{book.category}</TableCell>
//                                     <TableCell>
//                                      <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${book._id}`}>View</Button> 
//                                     </TableCell>
//                                 </TRow>
//                             ))
//                         }
//                     </TableBody>
//                 </StyledTable>
//                     </div>
//                 </>
//             )}
//         </>
//     );
// }

// export default BookList;