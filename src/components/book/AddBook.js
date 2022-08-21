//ADMIN--> Adding books to the table

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { addBook, setBookIn } from "../../action/action";
import ValidateBook from "../../shared/utils/ValidateBook";
import '../../assets/css/ViewDescription.css'; 

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
        margin-top: 20px;
`;

const AddBook = () => {
    const [book, setBook] = useState(initialValue);
    const { bookName, author, category, description } = book;
    const [error, setError] = useState("");
    const [bookNameError, setBookNameError] = useState("");
    const [authorError, setAuthorError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    const validateBooks = () => {

        const error = ValidateBook(bookName, author, category, description);

        if (error.bookNameError) {
            setBookNameError(error.bookNameError)
        }

        if (error.authorError) {
            setAuthorError(error.authorError)
        }

        if (error.categoryError) {
            setCategoryError(error.categoryError)
        }

        if (error.descriptionError) {
            setDescriptionError(error.descriptionError)
        }

        if (error.bookNameError || error.authorError || error.categoryError || error.descriptionError) {
            return false;
        }

        return true;
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // let validateBooks = ValidateBook(book);

    const { errormessage } = useSelector(state => state.data);
    const { successmessage } = useSelector(state => state.data);

    useEffect(() => {

        if (successmessage) {
            alert(successmessage)
            dispatch(setBookIn())
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

    const addBookDetails = () => {
        const checkValid = validateBooks(book);

        if (checkValid) {
            dispatch(addBook({ bookName: bookName, author: author, category: category, description: description }));
            navigate('/admin/book');
            alert("Successfully book added to the table");
        }
    }

    return (
        <>
            <div className="new-container">
            <Container>
                <Typography variant="h2" style={{ textAlign: 'center' }}>Add Book</Typography>
                {error && <h3 style={{ color: "red", textAlign: "center" }}>{error}</h3>}
                <FormControl>
                    <InputLabel htmlFor="my-input" style={{color: "lightpink", fontSize: "25px", fontWeight: "bold"}}>Book Name</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name='bookName' value={bookName} style={{color: "white", fontSize: "20px", fontWeight: "bold"}} id='my-input' />
                    <p style={{ color: 'red' }}>{bookNameError}</p>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Author</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name='author' value={author} id='my-input' />
                    <p style={{ color: 'red' }}>{authorError}</p>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Category</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name='category' value={category} id='my-input' />
                    <p style={{ color: 'red' }}>{categoryError}</p>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Description</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name='description' value={description} id='my-input' />
                    <p style={{ color: 'red' }}>{descriptionError}</p>
                </FormControl>
                <FormControl>
                    <Button variant="contained" color="primary" onClick={() => addBookDetails()}>Add</Button>
                </FormControl>
            </Container>
            <div className='book-container'>
                <button onClick={() => navigate('/admin')}
                    style={{ margin: "80px", height: "30%", width: "17%", color: "black", backgroundColor: "skyblue" }}
                    type='button'
                    className='btn btn-primary'
                    data-toggle='modal'
                    data-target='#exampleModal' >
                    Go Back
                </button>
            </div>
            </div>
        </>

    )
}

export default AddBook;