import * as regex from '../constants/regex';

function ValidateRegister(firstName, lastName, email, password, confirmPassword) {
    console.log("Entered validation")
 
    const error = {
        firstNameError:'',
        lastNameError:'',
        emailError:'',
        passwordError:'',
        confirmPasswordError: ''
    }

    if (firstName === "") { 
        error.firstNameError = "Please enter your first name";
    } else if (!regex.NAME_REGEX.test(firstName)) {
        error.firstNameError = "Invalid first name";
    }

    if (lastName === "") {
        error.lastNameError = "Please enter your last name";
    } else if (!regex.NAME_REGEX.test(lastName)) {
        error.lastNameError = "Invalid last name";
    }

    if (email === "") {
        error.emailError = "Please enter your email";
    } else if (!regex.EMAIL_REGEX.test(email)) {
        error.emailError = "Invalid email address";
    }

    if (password === "") {
        error.passwordError = "Please enter your password";
    } else if (!regex.PASSWORD_REGEX.test(password)) {
        error.passwordError = "Minimum 6 characters required";
    }

    if (confirmPassword === "") {
        error.confirmPasswordError = "Please enter your confirm password";
    } else if (!regex.PASSWORD_REGEX.test(confirmPassword)) {
        error.confirmPasswordError = "Minimum 6 characters required";
    } else if (password !== confirmPassword) {
        error.confirmPasswordError = "Please enter the same password as above"
    }
    console.log("ERROR in validation : ", error)

    if (error.firstNameError || error.lastNameError || error.emailError || error.passwordError || error.confirmPasswordError) {
        return error;
    }
   
    return true;
}

export default ValidateRegister;