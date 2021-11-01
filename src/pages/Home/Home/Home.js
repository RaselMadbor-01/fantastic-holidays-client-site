import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Blogs from '../Blogs/Blogs';
import Destinations from '../Destinations/Destinations';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Destinations/>
            <AboutUs/>
            <Blogs/>
            <Footer/>
        </div>
    );
};

export default Home;