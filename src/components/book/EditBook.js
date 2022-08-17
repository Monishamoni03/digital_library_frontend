import React, { useState, useEffect } from "react";
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getBooks, editBook } from '../../action/action';

const initialValue = {
    bookName: '',
    author: '',
    category: '',
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditBook = () => {

    const [book, setBook] = useState(initialValue);
    const { bookName, author, category } = book;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadBookDetails();
    }, []);

    useEffect(() => {
       if(book) {
        setBook({...book});
       }
    }, [book]);


    const loadBookDetails = async() => {
        const res = await getBooks(id);
        setBook(res.data);
    }

    const editBookDetails = async() => {
        let res = await editBook(id, book);
        navigate('/admin/book');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setBook({...book, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Book Information</Typography>
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
                {/* <div className="form-floating mb-3"> */}
                {/* <label htmlFor="floatingRole">Role Type</label */}
                {/* <select class="form-control" aria-label="Default select example" required={true} onChange={(e) => onValueChange(e)} name='category' value={category} id="my-input" aria-describedby="my-helper-text">
                  <option value="" selected>Choose Category</option>
                  <option value="Disney">Disney</option>
                  <option value="Comics">Comics</option>
                  <option value="Science">Science</option>
                  <option value="Biography">Biography</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Social Related">Social Related</option>
                </select> */}
              {/* </div> */}
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editBookDetails()}>Update Book</Button>
            </FormControl>
        </Container>
    );
}

export default EditBook;