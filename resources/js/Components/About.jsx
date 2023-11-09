import React from 'react';
import cycle_4 from '../../../public/assets/images/img-5.png';
import { Link } from '@inertiajs/react';

const About = () => {
    return (
        <section className='about text-white py-20'>
            <div className='flex flex-col justify-center items-center about-bg'>
                <div className='flex flex-col justify-center pt-20 items-center'>
                    <h1 className='text-4xl font-bold'>About Our cycle Store</h1>
                    <p className='my-16 w-2/3 width'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </p>
                </div>
                <div className='relative z-50 left my-20'>
                    <div className='bg absolute left-0 z-0 shadow-2xl'></div>
                    <img className='relative z-50 w-80 h-72' loading='lazy' src={cycle_4} alt="cycle_4" />
                </div>
            </div>
            <div className='flex justify-center items-center my-10'>
                <Link className='bg-orange-300 py-3 px-6 text-white text-center hoverSecondary' href='#'>Read More</Link>
            </div>
        </section>
    );
};

export default About;
