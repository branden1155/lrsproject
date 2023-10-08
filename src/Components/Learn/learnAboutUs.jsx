import React from 'react'

const learnAboutUs = () => {
  return (
    <div id="about" className='flex max-w-[1920px] w-[90%] m-auto p-12 justify-between'>
        <div className='flex mx-auto w-[1080px] gap-12'>
            <div className='w-[50%]'>
                <h1 className='text-2xl uppercase' >Learn About Us</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus excepturi vel debitis aliquid. Nesciunt ea asperiores cumque nulla quisquam commodi, suscipit in dolores ipsum saepe.</p>
                <a href="/grading"><button className='bg-[#f9bc60] text-[#001e1d] w-[89px] h-[32px] mt-4 font-catamaran rounded-sm text-sm hover:text-[#fffffe] transition duration-200 ease-in-out'>Learn More</button></a>
            </div>
            <div className='w-[50%]'>
                <h1 className='text-2xl uppercase'>Our Pursuit</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam laborum recusandae quae, neque, ut minus sunt quo laboriosam, non provident modi perspiciatis corporis illum necessitatibus.</p>
                <a href="/grading"><button className='bg-[#f9bc60] text-[#001e1d] w-[89px] h-[32px] mt-4 font-catamaran rounded-sm text-sm hover:text-[#fffffe] transition duration-200 ease-in-out'>Learn More</button></a>
            </div>
        </div>

    </div>
  )
}

export default learnAboutUs