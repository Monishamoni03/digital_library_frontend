//USER--->MY BOOK LIST

import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, Paper, TableHead, TableRow, Button, styled } from "@mui/material";
import { getBookList } from '../../action/action';
import { Link } from "react-router-dom";

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

const BookList = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        getAllBookList();
    }, []);

    const getAllBookList = async () => {
        let res = await getBookList(userId);
        setBooks(res.data);
    }

return (
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
                    </TRow>
                ))}
        </TableBody>
    </StyledTable>
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