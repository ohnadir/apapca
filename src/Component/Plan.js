import React from 'react';

const Plan = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='CardOverlay'>
                    <div>
                        <h1>Choose Your Very <br /> Best Pricing Plan.</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            <div className='pricingCard'>
                                <p>2 Years</p>
                                <span>$05</span> <span>/ month</span>
                                <hr />
                                <div className='grid grid-cols-1 gap-3'>
                                    <p>Increase traffic 50%</p>
                                    <p>E-mail support</p>
                                    <p>10 Free optimization</p>
                                    <p>24/7 support</p>
                                </div>
                            </div>
                            <div className='pricingCard'>
                                <p>2 Years</p>
                                <span>$05</span> <span>/ month</span>
                                <hr />
                                <div className='grid grid-cols-1 gap-3'>
                                    <p>Increase traffic 50%</p>
                                    <p>E-mail support</p>
                                    <p>10 Free optimization</p>
                                    <p>24/7 support</p>
                                </div>
                            </div>
                            <div className='pricingCard'>
                                <p>2 Years</p>
                                <span>$05</span> <span>/ month</span>
                                <hr />
                                <div className='grid grid-cols-1 gap-3'>
                                    <p>Increase traffic 50%</p>
                                    <p>E-mail support</p>
                                    <p>10 Free optimization</p>
                                    <p>24/7 support</p>
                                    console.log("div");
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;