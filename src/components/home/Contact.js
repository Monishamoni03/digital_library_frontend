import React, { Component } from "react";
import '../../assets/css/Contact'; 
import contact from '../../assets/images/contactUs.jpg';

class Contact extends Component {
  render() {
    return (
        <div className = "containers">
            {/* <NavBar /> */}
            <section className = "contact-section cnt">
            <h1 className = "heading">CONTACT US</h1>
            <img src = {contact} alt = "contactUs" className = "contact-image"></img>
            
            <form className = "forms">
                <h3>GET IN TOUCH</h3> 
                <label>Name</label>
                <input type = "text" name = "name" />

                <label>Email</label>
                <input type = "email" name = "email" />

                <label>Message</label>
                <textarea name = "message" rows = "4" />
                <button type = "submit">Send</button>
            </form>
            
            </section>
        </div>
    );
  }
}

export default Contact;