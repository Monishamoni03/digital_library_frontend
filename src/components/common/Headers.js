import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../action/action';
import { useHistory } from 'react-router';

const Headers = () => {
  const dispatch = useDispatch();

  const history = useHistory;
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  //logout handler
  const logoutHandler = () => {
    dispatch(logout());
    history.push('/');
  };
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          Digital Library
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav m-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              {/* Modal  */}

              <button
                type='button'
                className='btn btn-danger'
                data-toggle='modal'
                data-target='#about'>
                About
              </button>

            </li>

            {userInfo ? (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/books'>
                    Books
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/addbook'>
                    Add book
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link className='nav-link' to='/users'>
                    Users
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/login'
                    onClick={() => dispatch(logoutUser())}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/register'>
                    Register
                  </Link>
                </li>
              </>
            )}

            {/* Drop dowm */}
            {userInfo ? (
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle btn-dark'
                  data-toggle='dropdown'
                  href='/'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  {userInfo.name}
                </a>
                <div className='dropdown-menu'>
                  <Link className='dropdown-item' to='/profile'>
                    Profile
                  </Link>
                  <Link className='dropdown-item' to='/addbook'>
                    Add book
                  </Link>
                  <Link className='dropdown-item' to='/books'>
                    Books
                  </Link>

                  <div className='dropdown-divider'></div>
                  <button onClick={logoutHandler} className='dropdown-item'>
                    Logout
                  </button>
                </div>
              </li>
            ) : (
              ''
            )}
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='text'
              placeholder='Search'
            />
            <button className='btn btn-secondary my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Headers;