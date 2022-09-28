import React, { useState } from 'react';
import Slider from "react-slick";
import '../Style/Feedback.css'

const images = [
    "https://i.ibb.co/DzpSzTF/xman1.jpg",
    "https://i.ibb.co/8cFbXBf/xman2.jpg",
    "https://i.ibb.co/9VsmTY2/xman3.jpg",
    "https://i.ibb.co/DzpSzTF/xman1.jpg",
    "https://i.ibb.co/8cFbXBf/xman2.jpg",
    "https://i.ibb.co/9VsmTY2/xman3.jpg"
]

const Feedback = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        beforeChange: (current, next)=>setSlideIndex(next),
        centerMode: true,
        autoplaySpeed: 2000
      };
    
    return (
        <div  className='max-w-7xl mx-auto px-4'>
            <div className='pt-16'>
                <div className='mb-20'>
                    <h1 className='text-5xl font-semibold  text-center'>What Out Customers <br /> Have to Say</h1>
                </div>
                <div className="slider">
                    <Slider {...settings}>
                    {
                        images.map((img, index)=>(
                        <div className={index === slideIndex ? 'slide slide-active': 'slide'} key={index}>
                            <div className='shadow-lg p-4'>
                                <img className='w-16 pb-4' src={img} alt="" />
                                <p className='text-[20px] text-[#712fda] mb-[20px]'>Welcome to The Best Model Winner Contest</p>
                                <p className='text-[#707b8e] mb-[15px]'>Utenm ad minim veniam quisnostrud exercitation ullamcolabor nisiut aliquip ex ea commondo consequat duis aute irure dolor in repress</p>
                            </div>
                        </div>
                        ))
                    }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Feedback;