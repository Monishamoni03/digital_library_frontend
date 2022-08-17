import React, { Component } from "react";
import { connect } from 'react-redux'
import { registerUser } from '../../action/action';
import ValidateRegister from '../../shared/utils/ValidateRegister';
import { Link, Navigate } from "react-router-dom";
import login from "../../assets/images/login.jpg";
import Nav from '../shared/Nav';
import { GET_SUCCESS_MESSAGE } from "../../action/actionType";

class Register extends Component {

    constructor(props) {
        super(props)          
        this.state = {
            // user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            // },
            error: {
                firstNameError: '',
                lastNameError: '',
                emailError: '',
                passwordError: '',
                confirmPasswordError: ''
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.formValChange = this.formValChange.bind(this);
    }

     onSubmit(e) {
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword} = this.state;
        const error = ValidateRegister(firstName, lastName, email, password, confirmPassword);
        const errormessage = this.state.data;
        const successmessage = this.state.data;
        // const { user } = this.state;
        // const error = ValidateRegister(user)
        if(error) {
            this.setState({
                error: {
                    firstNameError: error.firstNameError,
                    lastNameError: error.lastNameError,
                    emailError: error.emailError,
                    passwordError: error.passwordError,
                    confirmPasswordError: error.confirmPasswordError
                }
            })
            alert(errormessage)
        } else {
            alert(successmessage)
        }
        if (error.firstNameError) {
            console.log(error.firstNameError)
        }
        if (error.lastNameError) {
            console.log(error.lastNameError)
        }
        if (error.emailError) {
            console.log(error.emailError)
        }
        
        if (error.passwordError) {
            console.log(error.passwordError)
        }

        if (error.confirmPasswordError) {
            console.log(error.confirmPasswordError)
        }

        if (error.firstNameError || error.lastNameError || error.emailError || error.passwordError || error.confirmPasswordError) {
            return false;
        }

        const  user  = this.state;
        console.log("USER : "+user)
        // <Navigate to="/login" />
        if (user) {
            this.props.registerUser(user);
            <Navigate to="/login" />
        } 
    };

    formValChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        let error = { ...this.state.error };
        this.setState({
            error,
            [name]: value
        })
    };
    
    render() {

        const { error } = this.state;
        return (
            <>
            <Nav />
            <img src = {login} alt = "login" className = "login-image" style={{position: 'absolute', top: 250, left: 0, right: 0, bottom: 0, justifyContent: 'left', alignItems: 'left'}}></img>
            <div className="container" style={{position: 'absolute', top: 100, left: 200, right: -500, bottom: 0, justifyContent: 'right', alignItems: 'right'}}>
             <div className="row">
                <div className="col-sm-5 col-md-10 col-lg-5 mx-auto">
                <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p- p-sm-5">
                <h5 className="card-title text-center mb-5 fw-bold fs-5">Create Account</h5>
            <form onSubmit={this.onSubmit}>
              <div className="form-floating mb-3">
                    <input
                        autoComplete="off"
                        type="text"
                        className="form-control" id="floatingInputs"
                        placeholder="Enter your first name"
                        name="firstName"
                        onChange={this.formValChange}
                    />
                    <label htmlFor="floatingInputs">First Name<sup> *</sup></label>
                    <p style = {{ color: 'red' }}>{error.firstNameError}</p>
              </div>
              <div className="form-floating mb-3">
                    <input
                        autoComplete="off"
                        type="text"
                        className="form-control" id="floatingInput"
                        placeholder="Enter your last name"
                        name="lastName"
                        onChange={this.formValChange}
                    />
                    <label htmlFor="floatingInput">Last Name<sup> *</sup></label>
                    <p style = {{ color: 'red' }}>{error.lastNameError}</p>
              </div>
              <div className="form-floating mb-3">
                    <input
                        autoComplete="off"
                        type="email"
                        className="form-control" id="floatingInputEmail"
                        placeholder="name@example.com"
                        name="email"
                        onChange={this.formValChange}
                    />
                    <label htmlFor="floatingInputEmail">Email<sup> *</sup></label>
                    <p style = {{ color: 'red' }}>{error.emailError}</p>
              </div>
              <div className="form-floating mb-3">
                    <input
                        autoComplete="off"
                        type="password"
                        className="form-control" id="floatingInputPassword"
                        placeholder="ABC@123"
                        name="password"
                        onChange={this.formValChange}
                    />
                    <label htmlFor="floatingInputPassword">Password<sup> *</sup></label>
                    <p style = {{ color: 'red' }}>{error.passwordError}</p>
              </div>
              <div className="form-floating mb-3">
                    <input
                        autoComplete="off"
                        type="password"
                        className="form-control" id="floatingInputConfirmPassword"
                        placeholder="ABC@123"
                        name="confirmPassword"
                        onChange={this.formValChange}
                    />
                    <label htmlFor="floatingInputPassword">Confirm Password<sup> *</sup></label>
                    <p style = {{ color: 'red' }}>{error.confirmPasswordError}</p>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Register</button>
              </div>
              <hr className="my-4" />
              <div className="d-grid mb-2">
                <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                  <i className="fab fa-google me-2"></i> Don't have an account? <Link to = '/login'>Sign In</Link>
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
}

const mapStateToProps = state => {
    return {
        user: state.data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (user) => dispatch(registerUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

{/*--------- Roles ----------*/}

              {/* <div className="form-floating mb-3">
                <label htmlFor="floatingRole">Role Type</label>
                <select class="form-control" aria-label="Default select example" required={true} id='role' name='role' value={role} onChange={e => setRole(e.target.value)}>
                  <option value="" selected>Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div> */}