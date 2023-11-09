import React from 'react';
import NewsList from './NewsList';

const News = () => {

    return (
        <section className='news py-20 secondary'>
            <div>
                <div className='flex flex-col text-white justify-center items-center'>
                    <h1 className='text-4xl font-bold'>News</h1>
                    <p className='my-16 w-2/3 width'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                    </p>
                </div>
                <NewsList />
            </div>
        </section>
    );
};

export default News;
