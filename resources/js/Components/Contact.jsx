import React from 'react';

const Contact = () => {
    return (
        <section className='contact py-20 px-32 secondary'>
            <h1 className='text-center text-white font-bold text-4xl'>A Call Back</h1>
            <form className='flex flex-col justify-center items-center py-10 gap-12' action="">
                <input className='rounded-2xl text-lg w-1/2 width' type="text" name="name" id="name" placeholder='Name' />
                <input className='rounded-2xl text-lg w-1/2 width' type="email" name="email" id="email" placeholder='Email' />
                <input className='rounded-2xl text-lg w-1/2 width' type="tel" name="phone" id="phone" placeholder='Phone Number' />
                <textarea className="resize-none rounded-2xl text-lg w-1/2 width" rows="5" name="message" id="message" placeholder="Message"></textarea>
                <input className='bg-orange-300 p-3 w-2/4 width text-center text-xl uppercase hover:cursor-pointer rounded-2xl hover:text-black hover:bg-white' type="submit" value="Send" />
            </form>
        </section>
    );
};

export default Contact;
