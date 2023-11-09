import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import Menu_Logo_2 from '../../../public/assets/images/toggle-icon1.png';
import Logo from '../../../public/assets/images/logo.png';
import Cart from '../../../public/assets/images/trolly-icon.png';
import Search from '../../../public/assets/images/search-icon.png';

const NavResponsive = () => {
    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(!visible);
    }

    return (
        <div className='navbar none d-block'>
            <div className='flex justify-between items-center'>
                <div className='bg-white pl-5 py-5 w-4/12'>
                    <div className="logo">
                        <Link href='/'>
                            <img loading='lazy' src={Logo} alt="logo-img" />
                        </Link>
                    </div>
                </div>
                <div className="menu_logo_2 w-20 mr-5">
                    <img className='cursor-pointer h-7' onClick={handleVisible} loading='lazy' src={Menu_Logo_2} alt="Menu_Logo_2" />
                </div>
            </div>
            {visible &&
                (
                    <div className='nav duration-500 font-bold text-lg flex flex-col justify-center items-center gap-8'>
                        <nav>
                            <ul className='flex gap-5 flex-col'>
                                <li>
                                    <Link className='text-black hover:text-orange-300' href='/'>Home</Link>
                                </li>
                                <li>
                                    <Link className='text-black hover:text-orange-300' href='/about'>About</Link>
                                </li>
                                <li>
                                    <Link className='text-black hover:text-orange-300' href='/ourcycle'>Our Cycle</Link>
                                </li>
                                <li>
                                    <Link className='text-black hover:text-orange-300' href='/shop'>Shop</Link>
                                </li>
                                <li>
                                    <Link className='text-black hover:text-orange-300' href='/news'>News</Link>
                                </li>
                                <li>
                                    <Link className='text-black hover:text-orange-300' href='/contact'>Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )
            }
        </div>
    );
};

export default NavResponsive;
