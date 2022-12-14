import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../action/action';
import '../../assets/css/NavBar';

const AdminNavBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const disptach = useDispatch();

  const logoutFunction = () => {
    disptach(logout());
  }

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveTab('Logout');
    } else if (location.pathname === '/profile') {
      setActiveTab('Profile');
    }
  }, [location]);

  const handleLogout = () => {

    console.log("IN LOGOUT");
    alert('Successfully logged out');
    localStorage.removeItem('role')
    localStorage.removeItem('token')
  }

  return (

    <div className='header'>
      <p className='logo'>Library Management System</p>

      <div className='header-right'>
        <Link to='/profile'>
          <p className={`${activeTab === 'ProfileInfo' ? 'active' : ''}`} onClick={() => setActiveTab('Admin')}>Profile</p>
        </Link>

        <Link to='/'>
          <p className={`${activeTab === 'Logout' ? 'active' : ''}`} onClick={handleLogout}>Logout</p>
        </Link>
      </div>
    </div>

  )
}

export default AdminNavBar;