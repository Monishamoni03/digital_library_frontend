//ADMIN--> Adding books to the table

import React, { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { addBook } from "../../action/action";

const initialValue = {
    bookName: '',
    author: '',
    category: '' 
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddBook = () => {
    const [book, setBook] = useState(initialValue);
    const { bookName, author, category } = book; 
    // const [error, setError] = useState(""); 
   
    let navigate = useNavigate();
    // let dispatch = useDispatch();


    const { errormessage } = useSelector(state => state.data);
    const { successmessage } = useSelector(state => state.data);

    useEffect(() => {

        if (successmessage) {
          alert(successmessage)
          dispatch(addBook(book))
        } else if (errormessage) {
          alert(errormessage)
        }
      }, [successmessage, errormessage])
    const handleChange = (e) => {
        setBook({
            ...book, 
            [e.target.name]: e.target.value
        })
    }

    // const addBookDetails = (e) => {
    //     e.preventDefault();
    //     if (!bookName || !author || !category) {
    //         setError("Please enter data in all input fields");
    //     } else {
    //         dispatch
    //     }

    // }
    const addBookDetails = async() => { 
        await addBook(book);
        navigate('/admin/book');
    }
    return (
        <>
        <Container>
            <Typography variant="h3">Add Book</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Book Name</InputLabel>
                <Input onChange = {(e) => handleChange(e)} name = 'bookName' value = {bookName} id = 'my-input' />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Author</InputLabel>
                <Input onChange = {(e) => handleChange(e)} name = 'author' value = {author} id = 'my-input' />
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input">Category</InputLabel>
                <Input onChange = {(e) => handleChange(e)} name = 'category' value = {category} id = 'my-input' />
            {/* <div className="form-floating mb-3">
                {/* <label htmlFor="floatingRole">Role Type</label /}
                <select class="form-control" aria-label="Default select example" required={true} >
                  <option value="" selected>Choose Category</option>
                  <option value="admin">Disney</option>
                  <option value="user">Comics</option>
                  <option value="admin">Science</option>
                  <option value="user">Biography</option>
                  <option value="admin">Fantansy</option>
                  <option value="user">Social Related</option>
                </select>
              </div> */}
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addBookDetails()}>Add</Button>
            </FormControl>
        </Container>
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

export default AddBook;