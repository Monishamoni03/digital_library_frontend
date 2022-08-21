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
      <div className='admin-container'>
        <h1 style={{ textAlign: "center" }}>Welcome Admin</h1>
        <div className="buttons">
          <button onClick={addBookRoute} type='button' className="admin-button">Click to Add Books</button>
          <button onClick={availableBooks} type='button' className="admin-button">See available books</button>
        </div>
      </div>
    </>
  )
}

export default Header;