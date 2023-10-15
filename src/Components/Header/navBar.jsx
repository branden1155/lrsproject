import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import './navBarStyle.css'
import LRSImage from '../../assets/lrsimg.png'
import { FaPhoneSquareAlt } from 'react-icons/fa'

function navBar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleHover = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };
    
  return (
   <div id="header" className='text-black flex justify-between items-center h-24 max-w-[1240px] mx-auto z-20 px-4'>
    <a href="/"><img src={LRSImage} className='w-[6rem] h-[6rem]'></img></a>
    <ul className='hidden md:flex'>
        <a href="/"><li className='p-2 px-8 hover:bg-[#abd1c6] ease-in-out duration-200 whitespace-nowrap font-catamaran'>Home</li></a>
        <div className='relative inline-block'>
            <li 
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave} 
            className='p-2 px-8 hover:bg-[#abd1c6] ease-in-out duration-200 whitespace-nowrap font-catamaran'>Services</li>
        </div>
        {isOpen && (
        <div
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        className="absolute mt-10 z-20 ml-[6.5rem] w-32 bg-white text-gray-700 rounded-t-lg shadow-lg text-center text-md">
          <ul className="py-1">
          <a href="/brushClearing"><li className="hover:bg-[#abd1c6] py-4 px-2 font-catamaran">Brush Clearing</li></a>
          <a href="/treeRemoval"><li className="hover:bg-[#abd1c6] py-4 px-2 font-catamaran">Tree Removal</li></a>
          <a href="/grading"><li className="hover:bg-[#abd1c6] py-4 px-2 font-catamaran">Grading</li></a>
          <a href="/erosionControl"><li className="hover:bg-[#abd1c6] py-4 px-2 font-catamaran">Erosion Control</li></a>
          </ul>
        </div>
      )}
        <a href="/#about"><li className='p-2 px-8 hover:bg-[#abd1c6] ease-in-out duration-200 whitespace-nowrap font-catamaran'>About Us</li></a>
        <a href="/contactus"><li className='p-2 px-8 hover:bg-[#abd1c6] ease-in-out duration-200 whitespace-nowrap font-catamaran'>Contact Us</li></a>
    </ul>
    <div className='hidden ml-16 md:flex items-center sm:ml-6'>
        <a href="#ourServices" data-te-smooth-scroll-init><button className='text-sm text-[#ffffff] bg-[#001e1d] rounded w-[6rem] h-[2rem] font-catamaran'>Learn More</button></a>
        <span className='ml-4 mr-1'><FaPhoneSquareAlt size="25px"/></span>
        <h1 className='text-black text-sm mx-4w-[6.5rem] underline font-catamaran'>(1)999-999-9999</h1>
    </div>
    <div onClick={handleNav} className='block z-30 md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
    </div>
    <div className={nav ? 'fixed left-0 z-30 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
        <img src={LRSImage} className='w-[6rem] h-[6rem]'></img>
        <ul className='uppercase p-4'>
            <a href="/"><li className='p-4 border-b border-gray-600'>Home</li></a>
            <div className='relative inline-block'>
                <li
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                className='p-4 border-b border-gray-600'>
                Services
                </li>
            </div>
            <a href="/#about"><li className='p-4 border-b border-gray-600 cursor-pointer font-catamaran'>About Us</li></a>
            <a href="/contactus"><li className='p-4 border-b border-gray-600'>Contact Us</li></a>
        </ul>
        {isOpen && (
        <div
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        className="absolute mt-[-12rem] z-20 w-[100%] bg-white text-gray-700 rounded-t-lg shadow-lg text-center text-md">
          <ul className="py-1">
            <a href="/brushClearing"><li className="hover:bg-[#abd1c6] py-4 px-2 cursor-pointer font-catamaran">Brush Clearing</li></a>
            <a href="/treeRemoval"><li className="hover:bg-[#abd1c6] py-4 px-2 cursor-pointer font-catamaran ">Tree Removal</li></a>
            <a href="/grading"><li className="hover:bg-[#abd1c6] py-4 px-2 cursor-pointer font-catamaran">Grading</li></a>
            <a href="/erosionControl"><li className="hover:bg-[#abd1c6] py-4 px-2 cursor-pointer font-catamaran">Erosion Control</li></a>
          </ul>
        </div>
      )}
    </div>
   </div>
   
   
  )
}

export default navBar