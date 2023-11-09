import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Nav from '@/Components/Nav';
import News from '@/Components/News';
import React from 'react';

const NewsPage = () => {
    return (
        <section>
            <div className='bg-linear w-full'>
                <Nav />
                <Header />
            </div>
            <News />
            <Footer />
        </section>
    );
};

export default NewsPage;
