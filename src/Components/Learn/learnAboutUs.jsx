import React from 'react'

const learnAboutUs = () => {
  return (
    <div id="about" className='flex relative max-w-[1920px] w-[90%] m-auto p-12 justify-between items-start'>
        <div className='flex gap-12'>
            <div className='w-[100%]'>
                <h1 className='text-2xl uppercase font-catamaran underline decoration-[#f9bc60] underline-offset-8 pb-2' >Learn About Us</h1>
                <p className='font-gafata'>
Welcome to Land Recovery Solutions, your trusted partner for land grading, erosion control, tree removal, and brush clearing services. With years of experience in the industry, our team is dedicated to delivering top-quality solutions that meet your specific needs. We pride ourselves on our commitment to safety, environmental responsibility, and the expertise to transform your land into a functional and aesthetically pleasing space.Discover how we can help you achieve your land management goals with our comprehensive services.</p>
                <a href="/grading"><button className='bg-[#f9bc60] text-[#001e1d] w-[89px] h-[32px] mt-4 font-catamaran rounded-sm text-sm hover:text-[#fffffe] transition duration-200 ease-in-out'>Learn More</button></a>
            </div>
            <div className='flex flex-col m-auto w-[100%]'>
                <h1 className='text-2xl uppercase font-catamaran underline decoration-[#f9bc60] underline-offset-8 pb-2'>Our Pursuit</h1>
                <p className='font-gafata'>Land Recovery Solutions is dedicated to setting the industry standard in land management. We prioritize sustainability and environmental responsibility in all our services, aiming to create functional and harmonious landscapes. Whether it's through precise land grading, erosion control, tree removal, or brush clearing, our pursuit is to transform land into a more resilient and aesthetically pleasing space for our clients and the environment.</p>
                <a href="/grading"><button className='bg-[#f9bc60] text-[#001e1d] w-[89px] h-[32px] mt-4 font-catamaran rounded-sm text-sm hover:text-[#fffffe] transition duration-200 ease-in-out'>Learn More</button></a>
            </div>
        </div>

    </div>
  )
}

export default learnAboutUs