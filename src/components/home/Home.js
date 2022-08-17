import React, { Component } from 'react';
import Header from "../shared/Header";
import Footer from "../shared/Footer";
// import About from './About';
import Nav from '../shared/Nav';

class Home extends Component {
    render() {
        return (
            <>
            <Nav />
             <Header />
             {/* <About /> */}
             <Footer />
            </>
        );
    }
}

export default Home;