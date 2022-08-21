import React, { Component } from 'react';
import '../../assets/css/Header';
import Footer from "../shared/Footer";
import Nav from '../shared/Nav';

class Home extends Component {
    render() {
        return (
            <>
             <Nav />
             <div className = 'home-container'>
                <h1>Digital Library</h1>
             </div>
             <Footer />
            </>
        );
    }
}

export default Home;