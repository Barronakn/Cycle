import Cycles from '@/Components/Cycles';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Nav from '@/Components/Nav';
import React from 'react';

const CyclePage = () => {
    return (
        <section>
            <div className='bg-linear w-full'>
                <Nav />
                <Header />
            </div>
            <Cycles />
            <Footer />
        </section>
    );
};

export default CyclePage;
