import React from 'react';
import { MdPlayArrow } from 'react-icons/md';
import hero from '../assets/xhero_right.png.pagespeed.ic.GkpyOQDTCI.webp';
import '../Style/Header.css'


const Header = () => {
    return (
        <div className=' header-container'>
            <div className='max-w-7xl mx-auto px-4 flex justify-between items-center py-20'>
                <div className=''>
                    <div className='animate__animated animate__fadeInUp'>
                        <p className=' text-7xl font-bold mb-10'>Get things done with Appco</p>
                        <p className='text-[#707b8e] mb-10'>Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do <br /> eiusm tempor incididunt ulabore et dolore magna aliqua.</p>
                    </div>
                    <div className='flex gap-10 items-center'>
                        <div className='downloadBtn'>
                            <button className='bDownload animate__animated animate__fadeInLeft'>Download</button>
                            <div className='btnOverlay'></div>
                        </div>
                        <button className='bArrow animate__animated animate__fadeInRight flex items-center relative'><MdPlayArrow className='absolute left-4' /></button>
                    </div>
                </div>
                <div>
                    <img className='animate__animated animate__fadeInRight mx-auto hidden md:block' src={hero} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;