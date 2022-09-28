import React from 'react';
import '../Style/Contact.css';
import xShape from '../assets/xsay-shape-left.png';
import xShape2 from '../assets/xsay-shape-right.png.pagespeed.ic.eTuVF_bJv6.jpg';


const Contact = () => {
    return (
        <div className=' contact-container '>
            <img className='btnImg hidden lg:block' src={xShape} alt="" />
            <img className='btnImg2 hidden lg:block' src={xShape2} alt="" />
            <div className='max-w-7xl mx-auto px-4 py-6 sm:py-10 md:py-16 lg:py-24'>
                <div className='flex justify-between flex-col items-center gap-10 lg:flex-row'>
                    <div>
                        <h1 className='text-xl leading-6 sm:text-2xl md:text-5xl font-bold'>Say Hello To The <br /> Collaboration Hub.</h1>
                    </div>
                    <div>
                        <div className='contactBtn'>
                            <button className='cBtn '>Contact Us</button>
                            <div className='cHover'></div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Contact;