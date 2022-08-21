import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/NavBar';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation(); 

  useEffect(() => {
    if(location.pathname === '/') {
        setActiveTab('Home');
    } else if(location.pathname === '/login') {
        setActiveTab('Login');
    } else if(location.pathname === '/register') {
        setActiveTab('Register');
    }
  }, [location]); 

  return (
    <>
    <div className = 'header'>
      <p className = 'logo'>Library Management System</p>
      
      <div className = 'header-right'>
        <Link to = '/'>
          <p className = {`${activeTab === 'Home' ? 'active' : ''}`} onClick = {() => setActiveTab('Home')}>Home |</p>
        </Link>
        <Link to = '/login'>
          <p className = {`${activeTab === 'Login' ? 'active' : ''}`} onClick = {() => setActiveTab('Login')}>Login |</p>
        </Link>
        <Link to = '/register'>
          <p className = {`${activeTab === 'Register' ? 'active' : ''}`} onClick = {() => setActiveTab('Register')}>Register</p>
        </Link>
      </div>
    </div>
    </>
  )
}

export default NavBar;