import * as regex from '../constants/regex';

function ValidateLogin(email, password) {
    console.log("Entered validation")

    const error = {
        emailError:'',
        passwordError:''
    }

    if (email === "") { 
        error.emailError = "Please enter your email";
    } else if (!regex.EMAIL_REGEX.test(email)) {
        error.emailError = "Invalid email address";
    }

    if (password === "") {
        error.passwordError = "Please enter your password";
    } else if (!regex.PASSWORD_REGEX.test(password)) {
        error.passwordError = "Should contain a minimum of 6 characters with special character and numbers";
    } 

    console.log("ERROR in validation : ", error)

    if (error.emailError || error.passwordError) {
        return error;
    }

    return true;
}

export default ValidateLogin;