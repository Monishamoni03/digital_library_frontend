import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../action/action';
import '../../assets/css/NavBar';

const UserNavBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const user = useSelector(state => state.data._id);
  // const admin = useSelector(state => state.admin._idAdmin);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const disptach = useDispatch();
  
  const logoutFunction = () => {
    disptach(logout());
  }

  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/') {
        setActiveTab('Home');
    } else if(location.pathname === '/about') {
        setActiveTab('About');
    } else if(location.pathname === '/profile') {
        setActiveTab('User Profile');
    } else if(location.pathname === '/') {
      setActiveTab('Logout');
    }
  }, [location]);

  const handleLogout = () => {

    console.log("IN LOGOUT");
    localStorage.removeItem('role')
    localStorage.removeItem('token')
  }

  return (
 
    <div className = 'header'>
      <p className = 'logo'>Library Management System</p>
      
      <div className = 'header-right'>
        {/* <Link to = '/'>
          <p className = {`${activeTab === 'Home' ? 'active' : ''}`} onClick = {() => setActiveTab('Home')}>Home</p>
        </Link> */}
        <Link to = '/about'>
          <p className = {`${activeTab === 'About' ? 'active' : ''}`} onClick = {() => setActiveTab('About')}>About /</p>
        </Link>
        {/* <Link to = '/profile'>
          <p className = {`${activeTab === 'User Profile' ? 'active' : ''}`} onClick = {() => setActiveTab('User Profile')}>Profile /</p>
        </Link> */}
        <Link to = '/book-list'>
          <p className = {`${activeTab === 'MyList' ? 'active' : ''}`} onClick = {togglePopup}>My List /</p>
          { isOpen && <Popup content = {<>Ohm Sai Ram</>} handleClose={togglePopup}/> }
        </Link>
        <Link to = '/'>
          <p className = {`${activeTab === 'Logout' ? 'active' : ''}`} onClick = {handleLogout}>Logout</p>
        </Link>
      </div>
    </div>
    
  )
}

export default UserNavBar;