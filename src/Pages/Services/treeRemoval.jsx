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

const treeRemoval = () => {

  const images = [
    {
      src: `${mulching1}`,
      alt: 'Before 1',
    },
    {
      src: `${mulching2}`,
      alt: 'After 2',
    },
    {
      src: `${mulching3}`,
      alt: 'Before 3',
    },
    {
      src: `${mulching4}`,
      alt: 'Before 4',
    },{
      src: `${mulching5}`,
      alt: 'Before 5',
    },{
      src: `${mulching6}`,
      alt: 'Before 6',
    },{
      src: `${mulching7}`,
      alt: 'Before 7',
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
            <h1 className='uppercase text-3xl font-bold text-[#f9bc60] font-exo'>Tree Removal</h1>
            <p className='pt-2 text-[#004643] font-catamaran'>Tree removal is a critical aspect of arboriculture and land management, involving the deliberate extraction of trees for various reasons. Whether it's to eliminate diseased, dead, or hazardous trees, create space for construction, or promote the healthy growth of other vegetation, tree removal is a skilled and precise process. It often requires the expertise of trained arborists or tree removal specialists who use specialized equipment like chainsaws, cranes, and chippers to safely and efficiently fell, limb, and remove trees. Proper tree removal not only enhances safety but also supports sustainable land management by allowing for the replanting of suitable species and minimizing the risk of damage from falling trees during storms or adverse weather conditions. Additionally, repurposing or recycling the wood from removed trees can contribute to environmental sustainability by reducing waste and finding new uses for the valuable timber resources.</p>
          </div>
          <div className=''>
            <h1 className='uppercase text-2xl font-medium text-[#f9bc60] font-exo'>Why us for Tree Removals?</h1>
            <p className='pt-2 text-[#004643] font-catamaran'>Land Recovery Solutions stands out as an excellent choice for tree removal services due to their holistic approach to land management. With their focus on ecological restoration and environmental sustainability, they understand the importance of responsible tree removal that minimizes the ecological impact and preserves the health of the surrounding landscape. Their experienced arborists and tree removal specialists are skilled in safely and efficiently removing trees while also considering replanting and recycling options, making them a perfect fit for clients who prioritize both environmental stewardship and land development needs.</p>
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

export default treeRemoval