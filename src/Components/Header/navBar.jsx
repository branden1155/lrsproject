import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import './navBarStyle.css'
import LRSImage from '../../assets/lrsimg.png'

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
   <div className='text-black flex justify-between items-center h-24 max-w-[1240px] mx-auto z-20 px-4'>
    <a href="/"><img src={LRSImage} className='w-[6rem] h-[6rem]'></img></a>
    <ul className='hidden md:flex'>
        <a href="/"><li className='p-2 px-8 hover:bg-[#abd1c6] ease-in-out duration-200 whitespace-nowrap'>Home</li></a>
        <div className='relative inline-block'>
            <li 
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave} 
            className='p-2 px-8 hover:bg-[#abd1c6] ease-in-out duration-200 whitespace-nowrap'>Services</li>
        </div>
        {isOpen && (
        <div
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        className="absolute mt-10 z-20 ml-[6.5rem] w-32 bg-white text-gray-700 rounded-t-lg shadow-lg text-center text-md">
          <ul className="py-1">
          <a href="/brushClearing"><li className="hover:bg-[#abd1c6] py-4 px-2">Brush Clearing</li></a>
          <a href="/treeRemoval"><li className="hover:bg-[#abd1c6] py-4 px-2">Tree Removal</li></a>
          <a href="/grading"><li className="hover:bg-[#abd1c6] py-4 px-2">Grading</li></a>
          <a href="/erosionControl"><li className="hover:bg-[#abd1c6] py-4 px-2">Erosion Control</li></a>
          </ul>
        </div>
      )}
        <a href="/#about"><li className='p-2 px-8 hover:bg-[#abd1c6] ease-in-out duration-200 whitespace-nowrap'>About Us</li></a>
        <a href="/contactus"><li className='p-2 px-8 hover:bg-[#abd1c6] ease-in-out duration-200 whitespace-nowrap'>Contact Us</li></a>
    </ul>
    <div className='hidden ml-16 md:flex items-center sm:ml-6'>
        <a href="#ourServices"><button className='text-sm text-[#ffffff] bg-[#001e1d] rounded w-[6rem] h-[2rem]'>Learn More</button></a>
        <h1 className='text-black text-sm mx-4 w-[6.5rem] underline'>(1)999-999-9999</h1>
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
            <a href="/aboutus"><li className='p-4 border-b border-gray-600 cursor-pointer'>About Us</li></a>
            <a href=""><li className='p-4 border-b border-gray-600'>Contact Us</li></a>
        </ul>
        {isOpen && (
        <div
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        className="absolute mt-[-12rem] z-20 w-[100%] bg-white text-gray-700 rounded-t-lg shadow-lg text-center text-md">
          <ul className="py-1">
            <a href="/brushClearing"><li className="hover:bg-[#abd1c6] py-4 px-2 cursor-pointer">Brush Clearing</li></a>
            <a href="/treeRemoval"><li className="hover:bg-[#abd1c6] py-4 px-2 cursor-pointer">Tree Removal</li></a>
            <a href="/grading"><li className="hover:bg-[#abd1c6] py-4 px-2 cursor-pointer">Grading</li></a>
            <a href="/erosionControl"><li className="hover:bg-[#abd1c6] py-4 px-2 cursor-pointer">Erosion Control</li></a>
          </ul>
        </div>
      )}
    </div>
   </div>
   
   
  )
}

export default navBar