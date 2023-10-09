import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bhbefore1 from '../../assets/BushHogging/bushhog-before1.jpg';
import bhafter1 from '../../assets/BushHogging/bushhog-after1.jpg';
import bhbefore2 from '../../assets/BushHogging/bushhog-before2.jpg';
import bhafter2 from '../../assets/BushHogging/bushhog-after2.jpg';


const inAction = () => {

    const images = [
        {
          src: `${bhbefore1}`,
          alt: 'Before 1',
        },
        {
          src: `${bhafter1}`,
          alt: 'After 1',
        },
        {
          src: `${bhbefore2}`,
          alt: 'Before 2',
        },
        {
            src: `${bhafter2}`,
            alt: 'After 2',
          },
      ];

  return (
    
    <div className='flex max-w-[1920px] justify-center items-center mx-auto w-[90%]'>
        <div className='flex flex-col w-[580px] h-[680px] justify-center items-start p-6 bg-[#004643] border-solid border-black'>
            <h1 className=' font-bold uppercase text-3xl underline underline-offset-8 decoration-[#f9bc60] text-[#fffffe] pb-2'>See us in Action</h1>
            <span className='text-[#abd1c6]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ad! Accusamus impedit, nemo dolorem rem illum numquam. Odio magnam, voluptatum autem laboriosam molestiae vero!</span>
            <a href="/contactus"><button className='bg-[#f9bc60] text-[#001e1d] w-[89px] h-[32px] mt-4 font-catamaran rounded-sm text-sm hover:text-[#fffffe] transition duration-200 ease-in-out'>Learn More</button></a>
        </div>
        <div className='w-[1140px] h-[100%] max-h-[880px] min-w[]'>
            <Carousel autoPlay interval="3000" transitionTime="1000" showThumbs={false}  dynamicHeight={false} infiniteLoop={true}>
                {images.map((image, index) => (
                    <div className=' w-full h-full object-cover max-h-[680px]' key={index}>
                        <img className=' w-full h-full object-cover' src={image.src} alt={image.alt} />
                    </div>
                ))}
            </Carousel>
        </div>
    </div>
    
  )
}

export default inAction