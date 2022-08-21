//ADMIN--> Editing the books

import React, { useState, useEffect } from "react";
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getBooks, editBook } from '../../action/action';

const initialValue = {
    bookName: '',
    author: '',
    category: '',
    description: ''
}

const Container = styled(FormGroup)`
    width: 40%;
    margin: 5% 10% 0 25%;
    & > div {
        margin-top: 20px
`;

const EditBook = () => {

    const [book, setBook] = useState(initialValue);
    const [error, setError] = useState(""); 
    const { bookName, author, category, description } = book;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {;
        loadBookDetails();
    }, []);

    //getting books based on book id
    const loadBookDetails = async() => {
        const res = await getBooks(id);
        setBook(res.data);
    }

    const editBookDetails = async() => {
        if (!bookName || !author || !category || !description) {
            setError("Please enter the changes to update");
        }
        await editBook(id, book);
        navigate('/admin/book');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setBook({...book, [e.target.name]: e.target.value})
    }

    return (
        <>
        <Container injectfirst>
            <Typography variant="h2" style={{textAlign: 'center'}}>Edit Book Information</Typography>
            {error && <h3 style={{color : "red", textAlign : "center"}}>{error}</h3>}
            <FormControl>
                <InputLabel htmlFor="my-input">Book Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='bookName' value={bookName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Author</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='author' value={author} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Category</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='category' value={category} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Book Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editBookDetails()}>Update Book</Button>
            </FormControl>
        </Container>
        <div className = 'book-container'>
          
        <button onClick = {() => navigate('/admin/book')}
          style = {{margin: "80px", height: "30%", width: "17%", color: "black", backgroundColor: "skyblue"}}
          type='button'
          className='btn btn-primary'
          data-toggle='modal'
          data-target='#exampleModal' >
          Go Back
        </button>
        </div>
        </>
    );
}

export default EditBook;