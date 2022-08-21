import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ValidateLogin from "../../shared/utils/ValidateLogin";
import { userLoggedIn, setLoggedIn } from '../../action/action';
import login from "../../assets/images/login.jpg";
import '../../assets/css/Login.css';
import Nav from '../shared/Nav';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  let user = useSelector(state => state.data)

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateLogin = () => {

    const error = ValidateLogin(email, password);

    if (error.emailError) {
      setEmailError(error.emailError)
    }

    if (error.passwordError) {
      setPasswordError(error.passwordError)
    }

    if (error.emailError || error.passwordError) {
      return false;
    }

    return true;
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { errormessage } = useSelector(state => state.data);
  const { successmessage } = useSelector(state => state.data);
  const { roleLogin } = useSelector((state) => state.data);

  useEffect(() => {

    if (successmessage) {
      alert(successmessage)
      dispatch(setLoggedIn())
    } else if (errormessage) {
      alert(errormessage)
    }
  }, [successmessage, errormessage])

  useEffect(() => {

    if (localStorage.getItem('token')) {
      console.log("ROLE in login: ", localStorage.getItem('role'))
      if (localStorage.getItem('role') === "admin") {
        navigate('/admin')
      } else if (localStorage.getItem('role') === "user") {
        navigate('/user')
      }
    }
  })

  user = {
    email: email,
    password: password,
    roles: role
  }

  const handleSubmit = e => {
    e.preventDefault();
    const checkValid = validateLogin(user);
    if (checkValid) {
      dispatch(userLoggedIn({ email: email, password: password }));
    } else {
      alert(errormessage);
    }
  }

  return (
    <>
      <Nav />
      <img src={login} alt="login" className="login-image"></img>
      <div className="container-login">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-bold fs-5">Login</h5>
                <form method='POST' onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input autoComplete="" value={email}
                      onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address<sup> *</sup></label>
                    <p style={{ color: 'red' }}>{emailError}</p>
                  </div>
                  <div className="form-floating mb-3">
                    <input autoComplete="" value={password}
                      onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password<sup> *</sup></label>
                    <p style={{ color: 'red' }}>{passwordError}</p>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Login</button>
                  </div>
                  <hr className="my-4" />
                  <div className="d-grid mb-2">
                    <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                      <i className="fab fa-google me-2"></i> Don't have an account? <Link to='/register'>Sign Up</Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Login;