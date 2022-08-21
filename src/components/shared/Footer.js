import React, { Component } from 'react';
import '../../assets/css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <section className='footer-subs'>
                    <p className='footer-subs-heading'>Join the Online Library Management System to see the current available books</p>
                    <p className='footer-subs-text'>You can subscribe at any time</p>
                    <div className='input-area'>
                        <form>
                            <input type='email' name='email' placeholder='Enter your email' className='footer-input' />
                            <button className='btn-footer'>Subscribe</button>
                        </form>
                    </div>
                </section>
                <p className='copyrights'>Library Management System © 2022</p>
            </div>
        );
    }
}

export default Footer;