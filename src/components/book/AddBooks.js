//ADMIN--> Adding books to the table


import React, { useState } from 'react';
import { withStyles,makeStyles } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { ClassNames } from '@emotion/react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBook } from '../../action/action';

const useStyles = styled((theme) => ({
    root: {
        marginTop : 300,
        "& > *": {
            margin : theme.spacing(1),
            width : "25px",
        },
    },
}));


const AddBooks = () => {
    const classes = useStyles();
    const [book, setState] = useState({
        name : "",
        author : "",
        category : "",
    });

    const [error, setError] = useState("");     
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const { name, author, category } = book;

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...book, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !author || !category) {
            setError("Please enter the data in all input fields");
        } else {
            dispatch(addBook(book));
            navigate("/admin/book");
            setError("");
        }

    }

    return (
        <div>
            <Button style={{width : "100px", marginTop:"20px"}} variant='contained' color='secondary' 
             onClick={() => navigate("/admin")}>
                Go Back</Button>
            <h2>Add User</h2>
            {error && <h3 style={{color : "red"}}>{error}</h3>}
            <form className={classes.root} noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Book Name" value={name} name="name"
                         type="text" onChange={handleInputChange}/> <br /><br />
                <TextField id="standard-basic" label="Author" value={author} name="author"
                         type="author" onChange={handleInputChange}/> <br /><br />
                <TextField id="standard-basic" label="Category" value={category} name="category"
                         type="number"  onChange={handleInputChange}/> <br /><br />
               <Button style={{width : "100px"}} variant='contained' color='primary' type="submit">
                    Submit</Button>
            </form>
        </div>
    );
}

export default AddBooks;

// import React, { useState } from "react";
// import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
// import { useNavigate } from "react-router-dom";
// import { addBook } from "../../action/action";
// import ValidateBook from "../../shared/utils/ValidateLogin";

// const initialValue = {
//     bookName: '',
//     author: '',
//     category: ''
// }

// const Container = styled(FormGroup)`
//     width: 50%;
//     margin: 5% 0 0 25%;
//     & > div {
//         margin-top: 20px;
// `;

// const AddBook = () => {
//     const [book, setBook] = useState(initialValue);
//     const { bookName, author, category } = book; 

//     const [bookNameError, setBookNameError] = useState("");
//     const [authorError, setAuthorError] = useState("");
//     const [categoryError, setCategoryError] = useState("");

//     const validateBooks = () => {

//         const error = ValidateBook(bookName, author, category)
//         console.log("ERROR  in add books: " + error.bookNameError);
    
//         if (error.bookNameError) {
//           setBookNameError(error.bookNameError)
//         }
    
//         if (error.authorError) {
//           setAuthorError(error.authorError)
//         }

//         if (error.categoryError) {
//             setCategoryError(error.categoryError)
//           }
    
//         if (error.bookNameError || error.authorError || error.categoryError) {
//           return false;
//         }
    
//         return true
//       }
    
//     let navigate = useNavigate();

//     const handleChange = (e) => {
//         setBook({
//             ...book, 
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = e => {
//         e.preventDefault();
    
//         console.log("books : ", book)
    
//         const checkValid = validateBooks(book);
//         console.log("CHECK VALID : ", checkValid);
//         if (checkValid) {
//           dispatch(addBook(book));
//           navigate('/admin/book')
//         }
//     }
//     // const addBookDetails = async() => {
//     //     await addBook(book);
//     //     navigate('/admin/book');
//     // }
//     return (
//         <>
//         <Container>
//             <Typography variant="h3">Add Book</Typography>
//             <FormControl>
//                 <InputLabel htmlFor="my-input">Book Name</InputLabel>
//                 <Input onChange = {(e) => handleChange(e)} name = 'bookName' value = {bookName} id = 'my-input' />
//             </FormControl>
//             <FormControl>
//                 <InputLabel htmlFor="my-input">Author</InputLabel>
//                 <Input onChange = {(e) => handleChange(e)} name = 'author' value = {author} id = 'my-input' />
//             </FormControl>
//             <FormControl>
//             <InputLabel htmlFor="my-input">Category</InputLabel>
//                 <Input onChange = {(e) => handleChange(e)} name = 'category' value = {category} id = 'my-input' />
//             {/* <div className="form-floating mb-3">
//                 {/* <label htmlFor="floatingRole">Role Type</label /}
//                 <select class="form-control" aria-label="Default select example" required={true} >
//                   <option value="" selected>Choose Category</option>
//                   <option value="admin">Disney</option>
//                   <option value="user">Comics</option>
//                   <option value="admin">Science</option>
//                   <option value="user">Biography</option>
//                   <option value="admin">Fantansy</option>
//                   <option value="user">Social Related</option>
//                 </select>
//               </div> */}
//             </FormControl>
//             <FormControl>
//                 <Button variant="contained" color="primary" onSubmit={handleSubmit}>Add</Button>
//             </FormControl>
//         </Container>
//         <div className = 'book-container'>
          
//           <button onClick = {() => navigate('/admin')}
//             style = {{margin: "50px"}}
//             type='button'
//             className='btn btn-primary'
//             data-toggle='modal'
//             data-target='#exampleModal' >
//             Go Back
//           </button>
          
//     </div>

//         </>
        
//     )
// }

// export default AddBook;