import { Link } from '@inertiajs/react';
import React from 'react';

const Footer = () => {
    return (
        <footer className='secondary'>
            <hr />
            <div className='footer-top flex py-10 justify-around items-center gap-6'>
                <div className='flex gap-6'>
                    <Link className='text-white hover:text-orange-300' href='#'>Page when looking at its layou</Link>
                    <Link className='text-white hover:text-orange-300' href='#'>Call Now  +01 123467890</Link>
                    <Link className='text-white hover:text-orange-300' href='#'>demo@gmail.com</Link>
                </div>
                <form action="#">
                    <input className='width w-72' type="email" name="email" id="email" placeholder='Enter Your Email' />
                    <input className='bg-orange-300 p-3 width w-2/4 text-center hover:cursor-pointer hover:text-gray-500 hover:bg-white' type="submit" value="Subscribe" />
                </form>
            </div>
            <div className='footer-b bg-white py-2'>
                <p className='text-center'>Copyright 2019 All Right Reserved By. Free html Templates</p>
            </div>
        </footer>
    );
};

export default Footer;
