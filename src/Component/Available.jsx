import React from 'react';
import '../Style/Available.css';
import AppStore from '../assets/xapp_btn1.png.pagespeed.ic.YpLN5QcG95.webp'
import PlayStore from '../assets/xapp_btn2.png.pagespeed.ic._NK39AKizi.webp'
import xAvailable from '../assets/xavailable-app.png.pagespeed.ic.AJNBEefGH7.webp'


const Available = () => {
    return (
        <div className='available-container py-4 sm:py-7 md:py-[100px] lg:py-[220px]'>
            <div className='circle hidden lg:block'></div>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='mainContainer flex justify-between items-center flex-col gap-16 lg:flex-row'>
                    <div className=''>
                        <h1 className='text-xl sm:text-2xl md:text-5xl font-semibold text-white'>Our App Available For Any  Device Download now</h1>
                        <p className='py-10 text-white'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fug.</p>
                        <div className='flex justify-start  items-center flex-col gap-5 md:flex-row'>
                            <button className=''>
                                <img src={AppStore} alt="" />
                            </button>
                            <button className=''>
                                <img src={PlayStore} alt="" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={xAvailable} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Available;