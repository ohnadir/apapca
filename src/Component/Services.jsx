import React from 'react';
import '../Style/Services.css';
import Manage from '../assets/presentation.png';
import Pay from '../assets/secure-payment.png';
import Overlay from '../assets/xdot-bg.png.pagespeed.ic.CHsEbhdzpj.webp';


import Messaging from '../assets/airplane.png';

const Services = () => {
    return (
        <div className='services-container'>
            <div className='max-w-7xl mx-auto px-4 py-4 sm:py-8 md:py-[100px] lg:py-[200px]'>
                <h1 className='text-center mb-20 text-3xl md:text-6xl font-semibold'>How Can We Help Your <br /> with Appco!</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className=' card'>
                        <div className='main-container'>
                            <div className='img-container'>
                                <img className='img-icon' src={Manage} alt="" />
                            </div>
                        </div>
                        <h1 className='text-[24px] font-semibold mb-6'>Easily Manage</h1>
                        <p className='text-[#707b8e] '>Sorem spsum dolor sit amsectetur adipiclit, seddo eiusmod tempor incididunt ut laborea</p>
                    </div>
                    <div className=' card active-card'>
                        <div className='main-container active'>
                            <div className='img-container img'>
                                <img className='img-icon' src={Pay} alt="" />
                            </div>
                        </div>
                        <h1 className='text-[24px] font-semibold mb-6'>Get Payments Easily</h1>
                        <p className='text-[#707b8e] '>Sorem spsum dolor sit amsectetur adipiclit, seddo eiusmod tempor incididunt ut laborea</p>
                    </div>
                    <div className='card'>
                        <div className='main-container'>
                            <div className='img-container'>
                                <img className='img-icon' src={Messaging} alt="" />
                            </div>
                        </div>
                        <h1 className='text-[24px] font-semibold mb-6'>Quick Messaging</h1>
                        <p className='text-[#707b8e] '>Sorem spsum dolor sit amsectetur adipiclit, seddo eiusmod tempor incididunt ut laborea</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;