import React from 'react'

const ourServicesCard = () => {
  return (
    <div id="ourServices" className='bg-white w-full'>
        <div className='flex max-w-[1920px] h-[680px] w-[90%] mx-auto'>
            <div className='flex flex-col'>
                <h1 className=' mt-[32px] text-3xl ml-2 mx-auto underline underline-offset-8 decoration-[#f9bc60] text-[#001e1d] uppercase font-bold'>Our Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12  justify-start items-center m-auto ">
                    <div className="flex flex-col bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <h1 className='text-xl py-4 uppercase font-catamaran '>Grading</h1>
                        <p className='font-gafata'>
                        The company Land Recovery Solutions will perform land grading, reshaping and leveling the land's surface to achieve the desired slope, contour, or grade, ensuring proper drainage and preparing the land for construction or landscaping purposes.</p>
                        <a href="/grading"><button className='bg-[#f9bc60] text-[#001e1d] w-[89px] h-[32px] mt-4 font-catamaran rounded-sm text-sm hover:text-[#fffffe] transition duration-200 ease-in-out'>Learn More</button></a>
                    </div>
                    <div className="flex flex-col bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <h1 className='text-xl py-4 uppercase font-catamaran'>Erosion Control</h1>
                        <p className='font-gafata'>The company Land Recovery Solutions will provide erosion control services, which involve implementing measures to prevent or manage soil erosion, safeguarding the land from the damaging effects of water or wind erosion.</p>
                        <a href="/erosionControl"><button className='bg-[#f9bc60] text-[#001e1d] w-[89px] h-[32px] mt-4 font-catamaran rounded-sm text-sm hover:text-[#fffffe] transition duration-200 ease-in-out'>Learn More</button></a>                   
                    </div>

                    <div className="flex flex-col bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <h1 className='text-xl py-4 uppercase font-catamaran'>Tree Removal</h1>
                        <p className='font-gafata'>Land Recovery Solutions is equipped to provide professional tree removal services, ensuring the safe and efficient removal of trees for various purposes, including land clearing, safety concerns, or property development. Contact us to learn more about our tree services.</p>
                        <a href="/treeRemoval"><button className='bg-[#f9bc60] text-[#001e1d] w-[89px] h-[32px] mt-4 font-catamaran rounded-sm text-sm hover:text-[#fffffe] transition duration-200 ease-in-out'>Learn More</button></a>
                    </div>
                    <div className="flex flex-col bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <h1 className='text-xl py-4 uppercase font-catamaran'>Brush Clearing</h1>
                        <p className='font-gafata'>The company Land Recovery Solutions specializes in brush clearing services, effectively clearing vegetation and undergrowth to create a clean and manageable landscape, often for land preparation, fire prevention, or land improvement projects.</p>
                        <a href="/brushClearing"><button className='bg-[#f9bc60] text-[#001e1d] w-[89px] h-[32px] mt-4 font-catamaran rounded-sm text-sm hover:text-[#fffffe] transition duration-200 ease-in-out'>Learn More</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ourServicesCard