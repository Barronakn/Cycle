import About from '@/Components/About';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Nav from '@/Components/Nav';
import React from 'react';

const AboutPage = () => {
    return (
        <section>
            <div className='bg-linear w-full'>
                <Nav />
                <Header />
            </div>
            <About />
            <Footer />
        </section>
    );
};

export default AboutPage;
