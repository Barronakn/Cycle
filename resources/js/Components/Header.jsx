import React from 'react';
import { Link } from '@inertiajs/react';
import cycle_1 from '../../../public/assets/images/img-1.png';

const Header = () => {
    return (
        <header className='bg-linear-header flex px-32'>
            <div className='flex flex-col justify-between items-center'>
                <h1 className='flex justify-between items-center rounded-full mr-6 p-5 text-xl font-bold uppercase bg-orange-300 primary w-24 h-24'>Best</h1>
                <img src={cycle_1} alt="img-1" />
            </div>
            <div className='flex flex-col mt-16 gap-9 text-white'>
                <h1 className='text-5xl w-1/4 font-bold'>New Model Cycle</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content</p>
                <Link className='bg-orange-300 p-3 w-2/4 text-center hover:text-black hover:bg-white' href='#'>Shop Now</Link>
            </div>
        </header>
    );
};

export default Header;
