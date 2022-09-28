import React from 'react';
import '../Style/Pricing.css';
import Price from '../assets/best_pricingbg.jpg.webp'

const Pricing = () => {
    return (
        <div>
            <div className='priceContainer'>
                <img className='h-[500px]' src={Price} alt="" />
                <div className='priceOverlay'>
                    <h1 className=' text-white pt-20 text-center'><span className='text-7xl'>Choose Your Very</span> <br /> <span className='text-5xl'>Best Pricing Plan.</span></h1>
                </div>
            </div>
            <div className='max-w-7xl mx-auto px-4 pricing-container'>
                <div className='p-16'>
                    
                    <div className='cardContainer grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='primary'>
                            <div className='pricingCard'>
                                <p className='py-4'>2 Years</p>
                                <p className='pb-5 text-[#6a56a6]'><span className='text-4xl font-semibold'>$05 </span><span className='text-2xl'>/ month</span></p>
                                <hr className='pb-5' />
                                <div className='grid grid-cols-1 gap-3'>
                                    <p>Increase traffic 50%</p>
                                    <p>E-mail support</p>
                                    <p>10 Free optimization</p>
                                    <p>24/7 support</p>
                                </div>
                                <div className='btnContainer'>
                                    <button className='cardBtn'>GET STARTED</button>
                                    <div className='btnHover'></div>
                                </div>
                            </div>
                        </div>
                        <div className='primary'>
                            <div className='pricingCard'>
                                <p className='py-4'>2 Years</p>
                                <p className='pb-5 text-[#6a56a6]'><span className='text-4xl font-semibold'>$05 </span><span className='text-2xl'>/ month</span></p>
                                <hr className='pb-5' />
                                <div className='grid grid-cols-1 gap-3'>
                                    <p>Increase traffic 50%</p>
                                    <p>E-mail support</p>
                                    <p>10 Free optimization</p>
                                    <p>24/7 support</p>
                                </div>
                                <div className='btnContainer'>
                                    <button className='cardBtn'>GET STARTED</button>
                                    <div className='btnHover'></div>
                                </div>
                            </div>
                        </div>
                        <div className='primary'>
                            <div className='pricingCard'>
                                <p className='py-4'>2 Years</p>
                                <p className='pb-5 text-[#6a56a6]'><span className='text-4xl font-semibold'>$05 </span><span className='text-2xl'>/ month</span></p>
                                <hr className='pb-5' />
                                <div className='grid grid-cols-1 gap-3'>
                                    <p>Increase traffic 50%</p>
                                    <p>E-mail support</p>
                                    <p>10 Free optimization</p>
                                    <p>24/7 support</p>
                                </div>
                                <div className='btnContainer'>
                                    <button className='cardBtn'>GET STARTED</button>
                                    <div className='btnHover'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Pricing;