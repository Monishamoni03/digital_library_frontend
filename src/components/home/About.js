import React, { Component } from "react";
import about from "../../assets/images/aboutLibrary.jpg";
import '../../assets/css/About';
import UserNavBar from "../user/UserNavBar";
import Footer from "../shared/Footer";

class About extends Component {
    render() {
        return (
            <>
                <UserNavBar />
                <div className="about">
                    <h1 className="aboutHead">ABOUT US</h1>
                    <div className="aboutImage"><img src={about} alt="about" className="about-image"></img></div>
                    <p className="aboutPara"><b>'Digital Library!' - </b> We are excited to introduce our Online Library Management System.Online Library Management System is an Automated Library System that handles the various functions of the library. It provides a complete solution to the library management software.The online library gives you access to quality-assured and trusted resources that are selected and assessed by subject specialists and academics.A library management system is used to maintain library records. It tracks the records of the number of books in the library, how many books are issued, or how many books have been returned or renewed or late fine charges, etc.</p>
                </div>
                <Footer />
            </>
        )
    }
}

export default About;