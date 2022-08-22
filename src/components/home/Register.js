import React, { Component } from "react";
import { connect } from 'react-redux'
import { registerUser } from '../../action/action';
import ValidateRegister from '../../shared/utils/ValidateRegister';
import { Link } from "react-router-dom";
import login from "../../assets/images/login.jpg";
import '../../assets/css/Login.css'
import Nav from '../shared/Nav';
import { withRouter } from "react-router";

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
                confirmPasswordError: '',
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.formValChange = this.formValChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword } = this.state;
        const error = ValidateRegister(firstName, lastName, email, password, confirmPassword);
        const errormessage = this.state.data;
        const successmessage = this.state.data;
        // const { user } = this.state;
        // const error = ValidateRegister(user)
        if (error) {
            this.setState({
                error: {
                    firstNameError: error.firstNameError,
                    lastNameError: error.lastNameError,
                    emailError: error.emailError,
                    passwordError: error.passwordError,
                    confirmPasswordError: error.confirmPasswordError
                }
            })
            // alert(errormessage)
        } else {
            alert(successmessage);
            // this.props.history.push("/user");
        }

        if (error.firstNameError || error.lastNameError || error.emailError || error.passwordError || error.confirmPasswordError) {
            return false;
        }

        const user = this.state;
        if (user) {
            this.props.registerUser(user);
           
            // this.props.history.push("/user");
            
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

    componentDidUpdate() {
        console.log("error message before alert : ", this.props.errormessage)
        if (this.props.errormessage !== " ") {
            console.log("in if");
            console.log(this.props.errormessage)
        } else {
            {
                this.props.successmessage && <><h1>{this.props.successmessage}</h1></>
            }
        }
    }

    render() {

        const { error } = this.state;
        return (
            <>
                {/* {
                    this.props.errormessage && <><h1>{this.props.errormessage}</h1></>
                } */}
                <Nav />
                <img src={login} alt="login" className="login-image"></img>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 col-md-10 col-lg-5 mx-auto">
                            <div className="card border-0 shadow rounded-3 my-5">
                                <div className="card-body p- p-sm-5">
                                    <h5 className="card-title text-center mb-5 fw-bold fs-5">Create Account</h5>
                                    {
                                        this.props.errormessage && <><p style={{ color: 'red', textAlign: 'center', fontSize: "25px" }}>{this.props.errormessage}</p></>
                                    }
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
                                            <p style={{ color: 'red' }}>{error.firstNameError}</p>
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
                                            <p style={{ color: 'red' }}>{error.lastNameError}</p>
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
                                            <p style={{ color: 'red' }}>{error.emailError}</p>
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
                                            <p style={{ color: 'red' }}>{error.passwordError}</p>
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
                                            <p style={{ color: 'red' }}>{error.confirmPasswordError}</p>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Register</button>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="d-grid mb-2">
                                            <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                                                <i className="fab fa-google me-2"></i>Already have an account? <Link to='/login'>Sign In</Link>
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
        successmessage: state.data.successmessage,
        errormessage: state.data.errormessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (user) => dispatch(registerUser(user))
    }
}

withRouter(Register);
export default connect(mapStateToProps, mapDispatchToProps)(Register);