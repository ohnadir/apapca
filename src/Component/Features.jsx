import React from 'react';
import Customize from "../assets/customize.png"
import Security from "../assets/padlock.png";
import Support from "../assets/support.png";
import Idea from "../assets/idea.png";
import FeatureHero from "../assets/xbest-features.png.pagespeed.ic.-EurwAn5bC.webp";
import '../Style/Feature.css'


const Features = () => {
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className='my-16 flex  items-center gap-16'>
                <div className='hidden lg:block'>
                    <img className='' src={FeatureHero} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-center mb-16 text-4xl font-bold'>Some of the best features Of Out App!</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-16'>
                        <div className='flex gap-6 '>
                            <img className='feature-img' src={Customize} alt="" />
                            <div >
                                <h1 className='text-2xl font-semibold'>Easy to Customize</h1>
                                <p className='text-lg text-[#707b8e]'>Aorem psum olorsit amet <br /> ectetur adipiscing elit, sed dov.</p>
                            </div>
                        </div>
                        <div className='flex gap-6 '>
                            <img className='feature-img ' src={Security} alt="" />
                            <div>
                                <h1 className='text-xl font-semibold'>Extreme Security</h1>
                                <p className='text-lg text-[#707b8e]'>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                            </div>
                        </div>
                        <div className='flex gap-6 '>
                            <img className='feature-img mx-auto' src={Support} alt="" />
                            <div>
                                <h1 className='text-xl font-semibold'>Customer Support</h1>
                                <p className='text-lg text-[#707b8e]'>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <img className='feature-img' src={Idea} alt="" />
                            <div>
                                <h1 className='text-xl font-semibold'>Creative Design</h1>
                                <p className='text-lg text-[#707b8e]'>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;