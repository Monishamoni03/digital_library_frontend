import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../action/action';
import '../../assets/css/NavBar';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const user = useSelector(state => state.data._id);
  // const admin = useSelector(state => state.admin._idAdmin);
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
    } else if(location.pathname === '/login') {
        setActiveTab('Login');
    } else if(location.pathname === '/register') {
        setActiveTab('Register');
    } else if(location.pathname === '/logout') {
      setActiveTab('Logout');
    }
  }, [location]);

  return (
    <>
    {!user &&
    <div className = 'header'>
      <p className = 'logo'>Library Management System</p>
      
      <div className = 'header-right'>
        <Link to = '/'>
          <p className = {`${activeTab === 'Home' ? 'active' : ''}`} onClick = {() => setActiveTab('Home')}>Home /</p>
        </Link>
        {/* <Link to = '/about'>
          <p className = {`${activeTab === 'About' ? 'active' : ''}`} onClick = {() => setActiveTab('About')}>About</p>
        </Link> */}
        <Link to = '/login'>
          <p className = {`${activeTab === 'Login' ? 'active' : ''}`} onClick = {() => setActiveTab('Login')}>Login /</p>
        </Link>
        <Link to = '/register'>
          <p className = {`${activeTab === 'Register' ? 'active' : ''}`} onClick = {() => setActiveTab('Register')}>Register</p>
        </Link>
      </div>
    </div>
    }

    {user && 
      <div className = 'header'>
      <p className = 'logo'>Library Management System</p>
      
      <div className = 'header-right'>
        <Link to = '/'>
          <p className = {`${activeTab === 'Home' ? 'active' : ''}`} onClick = {() => setActiveTab('Home')}>Home</p>
        </Link>
        <Link to = '/about'>
          <p className = {`${activeTab === 'About' ? 'active' : ''}`} onClick = {() => setActiveTab('About')}>About</p>
        </Link>
        <Link to = '/logout'>
          <p className = {`${activeTab === 'Logout' ? 'active' : ''}`} onClick = {() => setActiveTab('Logout')}>Logout</p>
        </Link>
      </div>
    </div>
    
    }
    </>
  )
}

export default NavBar;