import React from 'react'
import { BsTwitter, BsFacebook, BsYoutube } from 'react-icons/bs'


function footer() {
  return (
    <div className='flex relative h-[100%] bg-[#004648] justify-evenly  w-[100%] mt-12'>
        <div className='flex flex-col mx-auto py-[32px]'>
            <h1 className='font-semibold font-catamaran text-[#fffffe] text-lg uppercase'>Get in touch with us!</h1>
            <span className='w-[40%] text-sm text-[#abd1c6]'>Submit your email below to get updates on possible discounts and weekly news.</span>
            <div className='flex pt-4'>
                <form className='flex flex-row'>
                    <input className='flex text-start pl-6  border focus:outline-none focus:ring ring-[#abd1c6] h-[36px] w-[75%] shadow-inner mr-3 text-[black] font-gafata' type="text" placeholder="email" id="email" name="email" />
                    <button  type="submit" className='bg-[#f9bc60] text-[#001e1d] text-xs font-gafata w-[86px] h-[36px] font-medium shadow-md '>Get notified!</button>
                </form>
            </div>
        </div>
        <div className='flex m-auto h-[100%] w-[35%]'>
            <span className='flex'>
            <a className="px-[16px]" href="www.twitter.com"><BsTwitter size="25px" color="#abd1c6" /></a>
            <a className="px-[16px]" href="www.facebook.com"><BsFacebook size="25px" color="#abd1c6" /></a>
            <a className="px-[16px]" href="www.youtube.com"><BsYoutube size="25px" color="#abd1c6"/></a>
            </span>
        </div>
        <div className='flex m-auto py-[32px]'>
            <div className='flex flex-col'>
                <span className='text-xl text-[#fffffe] font-exo underline decoration-[#f9bc60] underline-offset-8 pb-2'>Navigation</span>
                <ul className='pt-1'>
                    <a href="/#header" className='font-gafata text-base font-normal text-[#abd1c6] hover:underline decoration-[#f9bc60] underline-offset-4' data-te-smooth-scroll-init><li>Home</li></a>
                    <a href="/#about" className='font-gafata text-base font-normal text-[#abd1c6] hover:underline decoration-[#f9bc60] underline-offset-4' data-te-smooth-scroll-init><li>About Us</li></a>
                    <a href="/contactus" className='font-gafata text-base font-normal text-[#abd1c6] hover:underline decoration-[#f9bc60] underline-offset-4'><li>Contact Us</li></a>
                    <a href="/#ourServices" className='font-gafata text-base font-normal text-[#abd1c6] hover:underline decoration-[#f9bc60] underline-offset-4' data-te-smooth-scroll-init><li>Services</li></a>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default footer