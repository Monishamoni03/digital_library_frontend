import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/Footer.css';

class Footer extends Component {
    render() {
     return (
        <div className = 'footer-container'>
            <section className = 'footer-subs'>
                <p className = 'footer-subs-heading'>Join the Online Library Management System to see the current available books</p>
                <p className = 'footer-subs-text'>You can subscribe at any time</p>
                <div className = 'input-area'> 
                    <form>
                        <input type = 'email' name='email' placeholder = 'Enter your email' className = 'footer-input' />
                        <button className = 'btn-footer'>Subscribe</button>
                    </form>
                </div>
            </section>
            <div className = 'footer-links'>
                {/* <div className = 'footer-link-wrapper'>
                    <div className = 'footer-link-items'>
                        <h2>About us</h2>
                        <Link to = '/register'>Sign-up</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className = 'footer-link-items'>
                        <h2>Contact us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                </div> */}
            </div>
            <p className = 'copyrights'>Library Management System © 2022</p>
        
        </div>
     );
    }
}

export default Footer;