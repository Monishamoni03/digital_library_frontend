import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ValidateSession() {

    console.log("In validating session");
    const navigate = useNavigate();

    const ValidateSession =() => {
        let url = window.location.href;

        //free routes
        if (url.indexOf('login') > -1 || url.indexOf('register') > -1 || url.indexOf('admin') > -1 || url === 'http://localhost:3000/') {   
            return true
        }

        if (localStorage.getItem("token")) //Check if login
            return true
        else {
            return false
        }
    }

    useEffect(() => {
        if (!ValidateSession()) {
            navigate('/login')
        }
    })
}

export default ValidateSession;