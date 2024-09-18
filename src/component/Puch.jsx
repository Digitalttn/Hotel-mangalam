import React from 'react';
import { Helmet } from 'react-helmet';
import { TbArrowRightCircle, TbArrowLeftCircle } from 'react-icons/tb';
import { CgShapeRhombus } from 'react-icons/cg';
import badri from '../assets/panchBadri2.png';

const Puch = () => {
  return (
    <>
      <Helmet>
        
        <meta name="description" content="Explore the scenic beauty of Panch Badri with stunning views and attractions. Learn more about this picturesque destination and its highlights." />
        <meta name="keywords" content="Panch Badri, scenic views, travel destinations, attractions, scenic beauty" />
        {/* <link rel="canonical" href="https://yourwebsite.com/discover-panch-badri" /> */}
      </Helmet>

      <section className="bg-white py-16 px-6 md:px-12 lg:px-24" aria-labelledby="discover-heading-panch Badri">
        {/* Navigation Arrows and Title */}
        <div className="flex items-center justify-center mb-8">
          <TbArrowLeftCircle className='text-[#706d6a] text-2xl md:text-3xl hover:text-[#9d7e54] transition duration-300' />
          <CgShapeRhombus className='text-[#706d6a] text-2xl md:text-3xl mx-2' />
          <p className='text-lg md:text-xl font-semibold text-gray-800'>Discover</p>
          <CgShapeRhombus className='text-[#706d6a] text-2xl md:text-3xl mx-2' />
          <TbArrowRightCircle className='text-[#706d6a] text-2xl md:text-3xl hover:text-[#9d7e54] transition duration-300' />
        </div>

        {/* Title Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 id="discover-heading" className="text-3xl md:text-5xl font-bold text-gray-800">
            Explore <span className="text-[#706d6a]">Panch Badri</span>
          </h1>
          <div className='flex justify-center mt-8'>
            <img
              src={badri}
              alt="Scenic view of Panch Badri"
              className="rounded-md w-full full mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Puch;
