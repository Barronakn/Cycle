import React from 'react';
import Nav from '@/Components/Nav';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Cycles from '@/Components/Cycles';
import About from '@/Components/About';
import News from '@/Components/News';
import Contact from '@/Components/Contact';
import NavResponsive from '@/Components/NavResponsive';


const Home = () => {
    return (
        <section>
            <div className='bg-linear w-full'>
                <Nav />
                <NavResponsive />
                <Header />
            </div>
            <Cycles />
            <About />
            <News />
            <Contact />
            <Footer />
        </section>
    );
};

export default Home;
