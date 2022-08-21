import React from "react";
import { Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '.././components/home/Home';
import About from '.././components/home/About';
import Login from '.././components/home/Login';
import Register from "../components/home/Register";
import AddBook from '../components/book/AddBook';
import AllBook from '../components/book/AllBook';
import EditBook from '../components/book/EditBook';
import Header from "../components/admin/Header";
import EditInfo from "../components/admin/EditInfo";
import ViewBook from "../components/user/ViewBook";
import BookList from "../components/user/BookList";
import BookDescription from "../components/book/BookDescription"
import ValidateSession from "../shared/utils/validateSession";
import ViewDescription from "../components/user/ViewDescription";

function Router() {

    ValidateSession()   //route protection

        return ( 
            <div className = "App">
                <Routes>
                    <Route exact path = "/" element = {<Home />} />
                    <Route exact path = "/about" element = {<About />} />               {/* USER page*/}
                    <Route exact path = "/login" element = {<Login />} />
                    <Route exact path = "/register" element = {<Register />} />
                    <Route exact path = "/admin" element = {<Header />} />              {/* ADMIN */}
                    <Route exact path = "/admin/add" element = {<AddBook />} />           {/* ADMIN */}
                    <Route exact path = "/editbooks" element = {<EditInfo />} />          {/* ADMIN */}
                    <Route exact path = "/admin/book" element = {<AllBook />} />      {/* ADMIN */}
                    <Route exact path = "/user" element = {<ViewBook />} />               {/* USER */}
                    <Route exact path = "/book-list" element = {<BookList />} />            {/* USER */}
                    <Route exact path = "/edit/:id" element = {<EditBook />} />       {/*ADMIN*/}
                    <Route exact path = "/description/:id" element = {<BookDescription />} />       {/*ADMIN*/}
                    <Route exact path = "/view/:id" element = {<ViewDescription />} />               {/* USER */}
                </Routes>               
            </div>
        )    
}

export default Router;