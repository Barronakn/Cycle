import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Nav from '@/Components/Nav';
import React from 'react';

const ContactPage = () => {
    return (
        <section>
            <div className='bg-linear w-full'>
                <Nav />
                <Header />
            </div>
            <Contact />
            <Footer />
        </section>
    );
};

export default ContactPage;
