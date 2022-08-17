import * as regex from '../constants/regex';

function ValidateLogin(email, password) {
    console.log("user-->"+email)
    console.log("Entered validation")

    const error = {
        emailError:'',
        passwordError:''
    }

    if (email === "") {
        // console.log("user email err")
        error.emailError = "Please enter your email";
    }
    else if (!regex.EMAIL_REGEX.test(email)) {
        error.emailError = "Invalid email address";
    }

    if (password === "") {
        error.passwordError = "Please enter your password";
    }
    else if (!regex.PASSWORD_REGEX.test(password)) {
        error.passwordError = "Please check your password-minimum 6 characters required";
    }

    console.log("ERROR in validation : ", error)

    if (error.emailError || error.passwordError) {
        return error;
    }

    return true;
}

export default ValidateLogin;