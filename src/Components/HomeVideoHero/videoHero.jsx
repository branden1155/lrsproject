import React from 'react';
import videoSource from '../../assets/bg-video.mp4';
import ContactForm from '../ContactForm/contactForm';

const VideoBackground = () => {
  return (
    <div className='flex'>
      <div className='flex lg:m-auto absolute gap-[126px] text-white z-1 max-w-[1240px] h-[480px] m-auto left-0 right-0 top-0 bottom-0 justify-center w-[70%] items-center'>
        <div className='flex flex-col max-w-[480px]'>
          <span className='w-[100%] font-exo uppercase font-bold text-[42px]'>Land Recovery Solutions</span>
          <span className='font-gafata uppercase tracking-wider'>Take your LAND back one step at a time </span>
          <a href="/contactus"><button className='bg-[#f9bc60] text-[#001e1d] w-[112px] h-[42px] rounded-sm mt-8 font-catamaran text-md hover:text-[#fffffe] transition duration-200 ease-in-out'>Get Started</button></a>
        </div>
        <ContactForm />
      </div>
      <div className="relative w-full h-screen z-[-9999]">
        <div className="absolute inset-0 overflow-hidden brightness-[0.1]">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
        <div className="relative text-white z-10"></div>
      </div>
    </div>
  );
};

export default VideoBackground;