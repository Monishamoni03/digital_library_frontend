// WELCOME PAGE - Admin

import React from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/Header';
import AdminNavBar from "./AdminNavBar";

function Header() {

    let navigate = useNavigate();
    const addBookRoute = () => {
        let path = `add`;
        navigate(path)
    }

    const availableBooks = () => {
      let path = `book`;
      navigate(path)
    }

    return (
      <>
      <AdminNavBar />
        <div className = 'admin-container'>
          <h1 style={{textAlign: "center"}}>Welcome Admin</h1>
          <button onClick= {addBookRoute}
            style = {{margin: "50px"}}
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal' >
            Click to Add Books
          </button>

          <button onClick= {availableBooks}
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal' >
            See available books
          </button>

          {/* <button onClick= {editInfo}
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal' >
            Click to Edit Admin Info
          </button> */}
        </div>
        </>
    )
}

export default Header;