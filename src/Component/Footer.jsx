import React from 'react';
import '../Style/Footer.css';
import logo from '../assets/xlogo2_footer.png.pagespeed.ic.TPJcIPa4Tw.webp'
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='footer-container max-w-7xl mx-auto px-4'>
                <div className='py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    <div>
                        <img className='pb-7' src={logo} alt="" />
                        <p className='text-[#818b9b] text-[17px] font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <div>
                        <h1 >Quick Links</h1>
                        <ul className='subLink'>
                            <li>About</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Download</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                    <div>
                        <h1 >Support</h1>
                        <ul className='subLink'>
                            <li>Report a bug</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Sitemap</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Newsletter</h1>
                        <p className='text-[#818b9b] text-[17px]'>Heaven fruitful doesn't over lesser in days. Appear</p>
                        <div className='mt-[40px]'>
                            <div className=' flex items-center'>
                                <input className='bg-[#f9f9fe] px-3 py-[10px] border-0 outline-none' type="text" placeholder='Email Address' />
                                <button className='bg-[#8f1bdc] px-6 py-[12px]  text-white flex'> <FaTelegramPlane className='text-[20px]' /> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;