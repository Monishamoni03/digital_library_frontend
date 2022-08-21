//USER --> Viewing the book description

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBooks } from '../../action/action';
import '../../assets/css/ViewDescription.css';

const initialValue = {
    bookName: '',
    author: '',
    category: '',
    description: ''
}

function ViewDescription() {

    const [book, setBook] = useState(initialValue);
    const { bookName, author, category, description } = book;
    const { id } = useParams();

    let navigate = useNavigate();
    useEffect(() => {;
        loadBookDetails();
    }, []);

    const loadBookDetails = async() => {
        const res = await getBooks(id);
        setBook(res.data);
    }

    return (
        <div style={{marginTop: "150px"}} className = 'user-container'>
            <div className='card-description'>
                <div className='card-header'>
                    <p>Description</p>
                </div>
                <div className='description-conatiner'>
                    <strong>Book Name - </strong>
                    <span>{ bookName}</span>
                    <br /> <br />
                    <strong>Author - </strong>
                    <span>{author}</span>
                    <br /> <br />
                    <strong>Book Category - </strong>
                    <span>{category}</span>
                    <br /> <br />
                    <strong>Book Description - </strong>
                    <span>{description}</span>
                    <br /> <br />
                </div>
            </div>
        <div className = 'book-container'>
          <button onClick = {() => navigate('/user')}
            style = {{margin: "100px", height: "20%", width: "10%", color: "black", backgroundColor: "skyblue"}}
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal' >
            Go Back
          </button>
        </div>
        </div>
    )
}

export default ViewDescription;