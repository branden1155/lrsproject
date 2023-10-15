import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PhotoAlbum from 'react-photo-album';
import bhbefore1 from '../../../src/assets/BushHogging/bushhog-before1.jpg';
import bhafter1 from '../../../src/assets/BushHogging/bushhog-after1.jpg';
import bhbefore2 from '../../../src/assets/BushHogging/bushhog-before2.jpg';
import bhafter2 from '../../../src/assets/BushHogging/bushhog-after2.jpg';
import mulching1 from '../../assets/TreeRemoval/mulching-1.jpg'
import mulching2 from '../../assets/TreeRemoval/mulching-2.jpg'
import mulching3 from '../../assets/TreeRemoval/mulching-3.jpg'
import mulching4 from '../../assets/TreeRemoval/mulching-4.jpg'
import mulching5 from '../../assets/TreeRemoval/mulching-5.jpg'
import mulching6 from '../../assets/TreeRemoval/mulching-6.jpg'
import mulching7 from '../../assets/TreeRemoval/mulching-7.jpg'
import grading1 from '../../assets/Grading/grading-1.jpg'
import grading2 from '../../assets/Grading/grading-2.jpg'
import grading3 from '../../assets/Grading/grading-3.jpg'

const grading = () => {

  const images = [
    {
      src: `${grading1}`,
      alt: 'Before 1',
    },
    {
      src: `${grading2}`,
      alt: 'After 1',
    },
    {
      src: `${grading3}`,
      alt: 'Before 2',
    },
  ];

  const photos = [
    {
      src: mulching1,
      caption: 'Mulching 1',
      width: 800, height: 600
    },
    {
      src: mulching2,
      caption: 'Mulching2',
      width: 600, height: 600
    },
    {
      src: mulching3,
      caption: 'Mulching3',
      width: 800, height: 600
    },
    {
      src: mulching4,
      caption: 'Mulching4',
      width: 800, height: 600
    },
    {
      src: mulching5,
      caption: 'Mulching5',
      width: 400, height: 300
    },
    {
      src: mulching6,
      caption: 'Mulching6',
      width: 800, height: 600
    },
    {
      src: mulching7,
      caption: 'Mulching7',
      width: 800, height: 600
    },
    {
      src: bhbefore1,
      caption: 'bhbefore1',
      width: 800, height: 600
    },
    {
      src: bhbefore2,
      caption: 'bhbefore2',
      width: 800, height: 600
    },
    {
      src: bhafter1,
      caption: 'bhafter1',
      width: 800, height: 600
    },
    {
      src: bhafter2,
      caption: 'bhafter2',
      width: 800, height: 600
    },
    {
      src: grading1,
      caption: 'grading1',
      width: 800, height: 600
    },
    {
      src: grading2,
      caption: 'grading2',
      width: 800, height: 600
    },
    {
      src: grading3,
      caption: 'grading3',
      width: 800, height: 600
    },
    
  ];
  

  return (
    <div className='flex flex-col w-[70%] m-auto pt-32'>
      <div className='flex md:flex-row flex-col'>
        <div className='flex lg:flex-col lg:justify-center lg:items-center flex-col w-[70%] h-[100%]'>
          <div className='mb-[38px]'>
            <h1 className='uppercase text-3xl font-bold text-[#f9bc60] font-exo'>Grading</h1>
            <p className='pt-2 text-[#004643] font-catamaran'>Grading is a fundamental aspect of land development and construction that involves reshaping the topography and contour of a piece of land. This process is typically carried out to achieve a level or sloped surface that meets specific design and engineering requirements. Grading serves multiple essential purposes, such as creating a solid foundation for structures, controlling surface water drainage, and ensuring safe and accessible landscapes.</p>
          </div>
          <div className=''>
            <h1 className='uppercase text-2xl font-medium text-[#f9bc60] font-exo'>Why us for Grading?</h1>
            <p className='pt-2 text-[#004643] font-catamaran'>Land Recovery Solutions is well-suited to provide grading services thanks to their expertise in sustainable land management and construction practices. Their commitment to preserving the natural environment while optimizing land for various purposes ensures that grading is done with minimal ecological impact. With a team of skilled operators and knowledge of best practices, they can efficiently and effectively shape the land to meet project requirements, whether it's for building foundations, road construction, or landscaping, while also promoting responsible land development and erosion control.</p>
          </div>
        </div>
        <div className="w-[980px] h-[680px] pl-12">
            <Carousel className='' autoPlay interval="3000" transitionTime="1000" showThumbs={false}  dynamicHeight={false} infiniteLoop={true}>
                {images.map((image, index) => (
                    <div className=' h-[480px]' key={index}>
                        <img className='' src={image.src} alt={image.alt} />
                    </div>
                ))}
            </Carousel>
        </div>
      </div>
      <div>
        <a className='text-[#004643] font-medium' href="/">Back -</a>
      </div>
      <div className="border-t border-gray-300 py-4"></div>
      <div className='flex justify-center items-center text-2xl uppercase pb-8 '>
        <h1 className='font-exo uppercase text-[#004643]'>Image Collection</h1>
      </div>
      <div className="">
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    </div>
  )
}

export default grading