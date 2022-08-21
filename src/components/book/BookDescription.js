//ADMIN-> Book Description in a container

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBooks } from '../../action/action';
// import descriptionImage from "../../assets/images/description.jpg";
import '../../assets/css/ViewDescription.css';

const initialValue = {
    bookName: '',
    author: '',
    category: '',
    description: ''
}

function BookDescription() {

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
        <>
            <div className = 'descriptionBook-container' >
                {/* <div className = "descriptionImage"><img src = {descriptionImage} alt = "description" className = "description-image"></img></div> */}
                <div className='card-description' style={{ marginTop: "145px" }}>
                    <div className='card-header'>
                        <p>Description</p>
                    </div>
                    <div className = 'description-conatiner'>
                        <br /> <br />
                        <strong>Book Name - </strong>
                        <span>{bookName}</span>
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
                    <div className = 'book-container'>
                        <button onClick={() => navigate('/admin/book')}
                            style={{ margin: "50px", height: "50%", width: "30%", color: "black", backgroundColor: "skyblue" }}
                            type='button'
                            className='btn btn-primary'
                            data-toggle='modal'
                            data-target='#exampleModal' >
                            Go Back
                        </button>
                    </div>

                </div>

            </div>


        </>
    )
}

export default BookDescription;