import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../action/action';
import '../../assets/css/NavBar';

const UserNavBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  //for my book list
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const disptach = useDispatch();

  const logoutFunction = () => {
    disptach(logout());
  }

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') {
      setActiveTab('About');
    } else if (location.pathname === '/user') {
      setActiveTab('Books');
    } else if (location.pathname === '/book-list') {
      setActiveTab('My List');
    } else if (location.pathname === '/') {
      setActiveTab('Logout');
    }
  }, [location]);

  const handleLogout = () => {
    alert('Successfully logged out');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
  }

  return (
    <div className='header'>
      <p className='logo'>Library Management System</p>
      <div className='header-right'>
        <Link to='/about'>
          <p className={`${activeTab === 'About' ? 'active' : ''}`} onClick={() => setActiveTab('About')}>About |</p>
        </Link>
        <Link to='/user'>
          <p className={`${activeTab === 'Books' ? 'active' : ''}`} onClick={() => setActiveTab('Books')}>Books |</p>
        </Link>
        <Link to='/book-list'>
          <p className={`${activeTab === 'My List' ? 'active' : ''}`} onClick={() => setActiveTab('My List')}>My List |</p>
        </Link>
        <Link to='/'>
          <p className={`${activeTab === 'Logout' ? 'active' : ''}`} onClick={handleLogout}>Logout</p>
        </Link>
      </div>
    </div>

  )
}

export default UserNavBar;