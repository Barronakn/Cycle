import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import Logo from '../../../public/assets/images/logo.png';
import Menu_Logo_1 from '../../../public/assets/images/toggle-icon.png';
import Cart from '../../../public/assets/images/trolly-icon.png';
import Search from '../../../public/assets/images/search-icon.png';

const Nav = () => {
    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(!visible);
    }

    return (
        <div className='nav-bar flex justify-between items-center'>
            <div className='bg-white pl-5 py-5 w-4/12'>
                <div className="logo">
                    <Link href='/'>
                        <img loading='lazy' src={Logo} alt="logo-img" />
                    </Link>
                </div>
            </div>
            {visible &&
                (
                    <div className='nav duration-500 flex w-6/12 gap-8'>
                        <nav>
                            <ul className='flex gap-8'>
                                <li>
                                    <Link className='text-gray-300 hover:text-orange-300' href='/'>Home</Link>
                                </li>
                                <li>
                                    <Link className='text-gray-300 hover:text-orange-300' href='/about'>About</Link>
                                </li>
                                <li>
                                    <Link className='text-gray-300 hover:text-orange-300' href='/ourcycle'>Our Cycle</Link>
                                </li>
                                <li>
                                    <Link className='text-gray-300 hover:text-orange-300' href='/shop'>Shop</Link>
                                </li>
                                <li>
                                    <Link className='text-gray-300 hover:text-orange-300' href='/news'>News</Link>
                                </li>
                                <li>
                                    <Link className='text-gray-300 hover:text-orange-300' href='/contact'>Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                        <ul className='flex justify-evenly w-3/12 '>
                            <li>
                                <Link className='text-gray-300' href='/login'>Login</Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <img src={Cart} alt="Cart-icon" />
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <img src={Search} alt="search-icon" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                )
            }
            <div className="menu_logo_1 w-20 mr-5">
                <img className='cursor-pointer h-7' onClick={handleVisible} loading='lazy' src={Menu_Logo_1} alt="Menu_Logo_1" />
            </div>
        </div>
    );
};

export default Nav;
