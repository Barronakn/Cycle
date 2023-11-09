import { Link } from '@inertiajs/react';
import React from 'react';
import cycle_1 from '../../../public/assets/images/img-2.png';
import cycle_2 from '../../../public/assets/images/img-3.png';
import cycle_3 from '../../../public/assets/images/img-4.png';

const Cycles = () => {
    return (
        <section className='cycles my-20 px-44'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold text-4xl'>Our cycle</h1>
                <p>It is a long established fact that a reader will be distracted by the</p>
            </div>
            <div className='flex cycle mt-40 gap-10'>
                <div className='relative z-50 left w-1/2 width flex flex-col justify-center items-center  '>
                    <div className='bg bg-size-1 absolute left-0 z-0'></div>
                    <h3 className='relative z-50 flex text-white justify-center items-center rounded-full p-5 text-xl secondary w-12 h-12'>01</h3>
                    <img className='relative z-50' loading='lazy' src={cycle_1} alt="cycle_1" />
                </div>
                <div className='right w-1/2 width'>
                    <div className='flex justify-between items-center'>
                        <div className='h w-44 bg-black'></div>
                        <h2 className='font-bold text-4xl'>Cycles</h2>
                    </div>
                    <div className='py-8'>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                        </p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Link className='secondary py-3 px-6 font-bold text-white text-center hover:bg-orange-300' href='#'>Buy Now</Link>
                        <p className='font-bold'>Price <span className='text-orange-300'>$</span> <span className='primary'>200</span></p>
                    </div>
                </div>
            </div>
            <div className='flex cycle my-72 gap-10'>
                <div className='left w-1/2 width'>
                    <div className='flex justify-between items-center'>
                        <div className='h w-44 bg-black'></div>
                        <h2 className='font-bold text-4xl'>Stylis Cycle</h2>
                    </div>
                    <div className='py-8'>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                        </p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Link className='secondary py-3 px-6 font-bold text-white text-center hover:bg-orange-300' href='#'>Buy Now</Link>
                        <p className='font-bold'>Price <span className='text-orange-300'>$</span> <span className='primary'>200</span></p>
                    </div>
                </div>
                <div className='relative z-50 right w-1/2 width flex flex-col justify-center items-center'>
                    <div className='bg bg-size-2 absolute left-0 z-0'></div>
                    <h3 className='relative z-50 flex text-white justify-center items-center rounded-full p-5 text-xl secondary w-12 h-12'>02</h3>
                    <img className='relative z-50' loading='lazy' src={cycle_2} alt="cycle_2" />
                </div>
            </div>
            <div className='flex cycle gap-10'>
                <div className='relative z-50 left w-1/2 width flex flex-col justify-center items-center'>
                    <div className='bg bg-size-3 absolute left-0 z-0'></div>
                    <h3 className='relative z-50 flex text-white justify-center items-center rounded-full p-5 text-xl secondary w-12 h-12'>03</h3>
                    <img className='relative z-50' loading='lazy' src={cycle_3} alt="cycle_3" />
                </div>
                <div className='right w-1/2 width'>
                    <div className='flex justify-between items-center'>
                        <div className='h w-44 bg-black'></div>
                        <h2 className='font-bold text-4xl'>Mordern Cycle</h2>
                    </div>
                    <div className='py-8'>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                        </p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Link className='secondary py-3 px-6 font-bold text-white text-center hover:bg-orange-300' href='#'>Buy Now</Link>
                        <p className='font-bold'>Price <span className='text-orange-300'>$</span> <span className='primary'>200</span></p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center my-10'>
                <Link className='bg-orange-300 py-3 px-6 text-white text-center hoverSecondary' href='#'>Read More</Link>
            </div>
        </section>
    );
};

export default Cycles;
