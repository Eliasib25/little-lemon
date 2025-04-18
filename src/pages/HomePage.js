import React from 'react';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
        <Main>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </Main>
        <Footer />
        </>
    );
}

export default HomePage;