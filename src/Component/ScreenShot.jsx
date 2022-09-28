import React from 'react';
import Slider from "react-slick";
import '../Style/ScreenShot.css';
import App1 from '../assets/xApp1.png.pagespeed.ic.Iz5rAscd9N.webp'
import App2 from '../assets/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp'
import App3 from '../assets/xApp3.png.pagespeed.ic.AlofEJC5tu.webp'


const ScreenShot = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='max-w-7xl mx-auto px-4 screen-container'>
            <div className='content '>
              <div className='mb-10 text-center'>
                <h1 className='font-semibold text-4xl mb-7'>Applic Apps  Screenshot</h1>
                <p>Lorem ipsum dolor sit amet, consecadipiscing elit, <br /> sed do eiusmod tempor incididunt ut ore et dolore magna b aliqua. Quis ipsum suspendisse gravida. Risus commodo viverra maecenasan lacus vel facilisis.</p>
              </div>
                  <div>
                    <Slider {...settings}>
                      <div>
                        <img className='mx-auto w-1/2' src={App1} alt="" />
                      </div>
                      <div>
                      <img className='mx-auto w-1/2' src={App2} alt="" />
                      </div>
                      <div>
                      <img className='mx-auto w-1/2' src={App3} alt="" />
                      </div>
                      <div>
                        <img className='mx-auto w-1/2' src={App1} alt="" />
                      </div>
                      <div>
                      <img className='mx-auto w-1/2' src={App2} alt="" />
                      </div>
                      <div>
                      <img className='mx-auto w-1/2' src={App3} alt="" />
                      </div>
                    </Slider>
                  </div>
            </div>
        </div>
    );
};

export default ScreenShot;