import React from 'react';
import new1 from "../../../public/assets/images/img-6.png"
import new2 from "../../../public/assets/images/img-7.png"
import new3 from "../../../public/assets/images/img-8.png"

const NewsList = () => {
    const news = [
        {
            id: 0,
            image: new1,
            title: "Speed cycle",
            author: "Den",
            date: "20-12-2019",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
        },
        {
            id: 1,
            image: new2,
            title: "Speed cycle",
            author: "Den",
            date: "20-12-2019",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
        },
        {
            id: 2,
            image: new3,
            title: "Jaump cycle",
            author: "Den",
            date: "20-12-2019",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
        },
    ]

    return (
        <div className='newslist flex gap-10 justify-center items-center px-24 py-10'>
            {
                news.map((lnew) =>
                (
                    <div className='new flex flex-col hover:rounded-b-md hover:duration-500 hover:shadow-lg hover:shadow-white' key={lnew.id}>
                        <div>
                            <img className='zoom w-full' src={lnew.image} alt={"new" + lnew.id} />
                        </div>
                        <div className='bg-white p-5 rounded-b-md'>
                            <h2 className='text-xl'>{lnew.title}</h2>
                            <p className='legend flex text-gray-300 py-2 justify-between items-center'>
                                <span>Post by: {lnew.author}</span>
                                <span>{lnew.date}</span>
                            </p>
                            <p>{lnew.text}</p>
                        </div>
                    </div>
                )
                )
            }
        </div>
    );
};

export default NewsList;
