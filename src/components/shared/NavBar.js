import React, { useEffect } from 'react';
import '../../assets/css/Header.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from '../../action/action';

function NavBar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { checkLogin } = useSelector((state) => state.data);
  console.log(checkLogin);

  useEffect(() => {
    if (localStorage.getItem("token")) {
        dispatch(setLoggedIn());
    }
    console.log("Login status : " + checkLogin)
  }, [checkLogin])

  const handleCart = (e) => {
    e.preventDefault();
    navigate('/cart')
  }

  return (
    <>
      <div className="nav-shopy">
        <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <div className="container">
              {/* <a className="navbar-brand" onClick={() => navigate('/')}>
                {/* <img src={brand} alt='SHOPY' width={138} height={50} /> 
              /a> */}
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navcol-1"
              >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navcol-1">

                            <ul className="nav navbar-nav me-4">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" onClick={() => navigate('/')}>
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" onClick={() => navigate('/about')} >
                                        About
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <form className="form-inline mr-auto" target="_self">
                                <div className="form-group">
                                    <label htmlFor="search-field">
                                    </label>
                                </div>
                            </form>

                            {/* <a data-toggle="tooltip" data-placement="bottom" title="Profile" className="nav-link" onClick={() => navigate('/viewprofile')}>
                                <i className='fa fa-user-circle user-circle' style={{ fontSize: 25 }} ></i>
                            </a>

                            <a data-toggle="tooltip" data-placement="bottom" title="Cart" className="nav-link" onClick={handleCart}>
                                <i className='fa fa-shopping-cart shopping-cart' style={{ fontSize: 25 }} ></i>
                            </a> */}
                            {checkLogin ? <></> :
                                <>  <a className="btn btn-light action-button me-2" role="button" href="login">
                                    Log In
                                </a>
                                    <a className="btn btn-light action-button me-2" role="button" href="register">
                                        Sign Up
                                    </a>
                                    {/* <a className="btn btn-light action-button" role="button" href="admin">
                                        Admin Login
                                    </a> */}
                                </>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar;


















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../../assets/css/NavBar';

// const NavBar = () => {
//   const [activeTab, setActiveTab] = useState("Home");

//   return (
//     <div className = 'header'>
//       <p className = 'logo'>Library Management System</p>
      
//       <div className = 'header-right'>
//         <Link to = '/'>
//           <p className = {`${activeTab === 'Home' ? 'active' : ''}`} onClick = {() => setActiveTab('Home')}>Home</p>
//         </Link>
//         <Link to = '/about'>
//           <p className = {`${activeTab === 'About' ? 'active' : ''}`} onClick = {() => setActiveTab('About')}>About</p>
//         </Link>
//         <Link to = '/login'>
//           <p className = {`${activeTab === 'Login' ? 'active' : ''}`} onClick = {() => setActiveTab('Login')}>Login</p>
//         </Link>
//         <Link to = '/register'>
//           <p className = {`${activeTab === 'Register' ? 'active' : ''}`} onClick = {() => setActiveTab('Register')}>Register</p>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default NavBar;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <header>
//       <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
//         <a className='navbar-brand' to='/'>Library Management System</a>
//         <button
//           className='navbar-toggler'
//           type='button'
//           data-toggle='collapse'
//           data-target='#navbarColor01'
//           aria-controls='navbarColor01'
//           aria-expanded='false'
//           aria-label='Toggle navigation'>
//           <span className='navbar-toggler-icon'></span>
//         </button>

//         <div className='collapse navbar-collapse' id='navbarColor01'>
//           <ul className='navbar-nav m-auto'>
//             <li className='nav-item active'>
//               <Link className='nav-link' to='/'>
//                 Home
//               </Link>
//             </li>
           
//             {/* List menu items */}
//             <>
//               <li className='nav-item'>
//                 <Link className='nav-link' to='/about'>
//                   About
//                 </Link>
//               </li>
//               <li className='nav-item'>
//                 <Link className='nav-link' to='/contact'>
//                   Contact
//                 </Link>
//               </li>

//               <li className='nav-item'>
//                 <Link className='nav-link' to='/login'>
//                   Login
//                 </Link>
//               </li>
//               <li className='nav-item'>
//                 <Link className='nav-link' to='/register'>
//                   Register
//                 </Link>
//               </li>
//             </>
//             </ul>
         
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// // import React, { Component } from 'react'
// // import 'bootstrap/dist/css/bootstrap.css';

// // class NavBar extends Component {
// //   render() {
// //   return (
// //     <>
// //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //   <a className="navbar-brand" href="#">Library Management System</a>
// //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //     <span className="navbar-toggler-icon"></span>
// //   </button>

// //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //     <ul className="navbar-nav ml-auto">
// //       <li className="nav-item active">
// //         <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
// //       </li>
// //       <li className="nav-item">
// //         <a className="nav-link" href="/about">About us</a>
// //       </li>
// //       <li className="nav-item">
// //         <a className="nav-link" href="/contact">Contact</a>
// //       </li>
// //       <li className="nav-item">
// //         <a className="nav-link" href="/login">Login</a>
// //       </li>
// //       <li className="nav-item">
// //         <a className="nav-link" href="/register">Register</a>
// //       </li>
// //     </ul>
// //   </div>
// // </nav>
// //     </>
// //   );
// //   }
// // }

// // export default NavBar;