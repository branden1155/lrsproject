import React from 'react'

const ourServicesCard = () => {
  return (
    <div id="ourServices" className='bg-white w-full'>
        <div className='flex max-w-[1920px] h-[680px] w-[90%] mx-auto'>
            <div className='flex flex-col'>
                <h1 className=' mt-[32px] text-3xl ml-2 mx-auto underline underline-offset-8 decoration-[#f9bc60] text-[#001e1d] uppercase font-bold'>Our Services</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-12  justify-start items-center m-auto ">
                    <div class="flex flex-col bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <h1 className='text-xl py-4 uppercase '>Grading</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat commodi dolore aut voluptatem aliquid reiciendis hic? Assumenda quasi dignissimos, suscipit quaerat nostrum fugiat nesciunt.</p>
                        <a href="/grading"><button className='bg-[#f9bc60] text-[#001e1d] w-[89px] h-[32px] mt-4 font-catamaran rounded-sm text-sm hover:text-[#fffffe] transition duration-200 ease-in-out'>Learn More</button></a>
                    </div>
                    <div class="flex flex-col bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <h1 className='text-xl py-4 uppercase'>Erosion Control</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore iure dolore a quis aspernatur ab aliquam aperiam consectetur temporibus labore, dolorem debitis explicabo cum.</p>
                        <a href="/erosionControl"><button className='bg-[#f9bc60] text-[#001e1d] w-[89px] h-[32px] mt-4 font-catamaran rounded-sm text-sm hover:text-[#fffffe] transition duration-200 ease-in-out'>Learn More</button></a>                   
                    </div>

                    <div class="flex flex-col bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <h1 className='text-xl py-4 uppercase'>Tree Removal</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A est eius repellendus optio maxime cum quisquam, nisi doloribus reprehenderit temporibus recusandae aperiam blanditiis facilis minima?</p>
                        <a href="/treeRemoval"><button className='bg-[#f9bc60] text-[#001e1d] w-[89px] h-[32px] mt-4 font-catamaran rounded-sm text-sm hover:text-[#fffffe] transition duration-200 ease-in-out'>Learn More</button></a>
                    </div>
                    <div class="flex flex-col bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <h1 className='text-xl py-4 uppercase'>Brush Clearing</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum doloribus eligendi aliquid praesentium, dolorum, alias molestias, maiores qui quae atque fugit maxime ullam provident vitae!</p>
                        <a href="/brushClearing"><button className='bg-[#f9bc60] text-[#001e1d] w-[89px] h-[32px] mt-4 font-catamaran rounded-sm text-sm hover:text-[#fffffe] transition duration-200 ease-in-out'>Learn More</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ourServicesCard