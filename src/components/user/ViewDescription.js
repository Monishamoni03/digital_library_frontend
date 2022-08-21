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
    useEffect(() => {
        ;
        loadBookDetails();
    }, []);

    const loadBookDetails = async () => {
        const res = await getBooks(id);
        setBook(res.data);
    }

    return (
        <div className='descriptionBook-container'>
            <div className='card-description' style={{ marginTop: "145px" }}>
                <div className='card-header'>
                    <span>{bookName}</span>
                </div>
                <div className='description-container'>
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
                <div className='book-container'>
                    <button onClick={() => navigate('/user')}
                        style={{ margin: "50px", height: "50%", width: "30%", color: "black", backgroundColor: "white" }}
                        type='button'
                        className='btn btn-primary'
                        data-toggle='modal'
                        data-target='#exampleModal' >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewDescription;