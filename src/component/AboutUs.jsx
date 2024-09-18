import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import inside1 from '../assets/hotel3.jpeg';
import inside2 from '../assets/logo2.png';
import { TbArrowRightCircle, TbArrowLeftCircle } from 'react-icons/tb';
import { CgShapeRhombus } from 'react-icons/cg';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
       
        <meta name="description" content="Discover Hotel Mangalam in Badrinath, where elegance meets spirituality. Learn about our luxurious accommodations and exceptional services." />
        <meta name="keywords" content="Hotel Mangalam, Badrinath hotel, luxury hotel Badrinath, elegant hotel, spiritual hotel, Hotel Mangalam services, Badrinath accommodations, boutique hotel Badrinath" />
        
      </Helmet>

      <div className="flex flex-col items-center justify-center mb-8 mt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center mb-8">
          <TbArrowLeftCircle className='text-[#817f7d] text-2xl' />
          <CgShapeRhombus className='text-[#817f7d] text-2xl mx-2' />
          <h2 id="facilities-title" className='text-lg  text-justify md:text-xl font-semibold text-gray-800'>
          Explore Your Divine Journey in Badrinath
          </h2>
          <CgShapeRhombus className='text-[#817f7d] text-2xl mx-2' />
          <TbArrowRightCircle className='text-[#817f7d] text-2xl' />
        </div>
    </div>

      <div className="relative w-full flex flex-col md:flex-row items-center bg-gray-100 p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-8">
        {/* Full Image */}
        <div data-aos="fade-right" className="w-full md:w-1/2">
          <img
            src={inside1}
            alt="Luxury hotel in Badrinath - Hotel Mangalam interior"
            className="w-full h-full rounded-lg shadow-lg object-cover"
            style={{ maxHeight: '300px' }}
          />
        </div>

        {/* Text and Partial Overlay */}
        <div className="w-full md:w-1/2 h-full relative">
          <div data-aos="fade-left" className="absolute inset-0 flex items-center justify-end">
            <img
              src={inside2}
              alt="Elegant design at Hotel Mangalam, Badrinath"
              className="w-2/3 h-auto rounded-lg shadow-lg object-cover"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 50%)', maxHeight: '300px' }}
            />
          </div>

          {/* Text Section */}
          <div data-aos="fade-up" className="relative z-20 mt-16 md:mt-0 md:pl-8">
            <h3 className="text-gray-700 text-lg md:text-xl font-semibold mb-2">Hotel Mangalam, Badrinath</h3>
            <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Faith <span className="text-[#847a70]">Brings</span> Blessings
            </h1>
            <p className="text-black text-base md:text-lg leading-relaxed text-wrap">
              Nestled in the heart of Badrinath, Uttarakhand, Hotel Mangalam stands as a beacon of elegance and sophistication. Our hotel seamlessly blends timeless charm with modern amenities, offering an unparalleled experience for discerning travelers seeking spiritual solace and luxury.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
