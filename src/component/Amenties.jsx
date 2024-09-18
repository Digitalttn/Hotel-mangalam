import React from 'react';
import { Helmet } from 'react-helmet';
import { TbArrowRightCircle, TbArrowLeftCircle } from 'react-icons/tb';
import { CgShapeRhombus } from 'react-icons/cg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import carparking from '../assets/car-Parking.jpg';
import lift from '../assets/lift2.jpg';
import badrinath from '../assets/badrinath.jpg';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: <TbArrowLeftCircle className="text-[#706d6a] text-3xl" />,
  nextArrow: <TbArrowRightCircle className="text-[#706d6a] text-3xl" />,
};

const Amenties = () => {
  return (
    <>
      <Helmet>
        
        <meta name="description" content="Explore the premium amenities at Hotel Mangalam, including on-site parking, modern lift facilities, and serene temple views. Experience luxury and comfort during your stay." />
        <meta name="keywords" content="Hotel Mangalam, hotel amenities, parking, lift facilities, temple view, luxury amenities" />
        {/* <link rel="canonical" href="https://yourwebsite.com/amenities" /> */}
      </Helmet>

      <section className='mt-9'>
        {/* Header Section */}
        <header className="flex items-center justify-center mb-8">
          <TbArrowLeftCircle className='text-[#736450] text-2xl' />
          <CgShapeRhombus className='text-[#706d6a] text-2xl mx-2' />
          <h2 className='text-lg md:text-xl font-semibold text-gray-800'>Luxury Comfort</h2>
          <CgShapeRhombus className='text-[#706d6a] text-2xl mx-2' />
          <TbArrowRightCircle className='text-[#706d6a] text-2xl' />
        </header>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
            <span className='text-[#706d6a]'>Our</span> Amenities
          </h1>
        </div>

        {/* Facilities Carousel */}
        <div className="p-6 bg-gray-100 flex justify-center">
          <div className="w-full max-w-5xl">
            <Slider {...settings}>
              {/* Facility 1 */}
              <article className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 slick-slide">
                <div className="flex flex-col md:flex-row items-center w-full rounded-lg shadow-lg overflow-hidden">
                  {/* Image Container */}
                  <div className="relative w-full md:w-1/2 overflow-hidden">
                    <img
                      src={carparking}
                      alt="On-site parking at our hotel, available for all vehicles"
                      className="w-full h-full object-cover rounded-l-full"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="w-full md:w-1/2 p-8 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-[#706d6a]">Parking</h2>
                    <p className="text-black mt-2">
                      On-Site Parking: Our hotel provides ample on-site parking space for guests. Whether you're driving a compact car or an SUV, you'll find a parking spot conveniently located close to the hotel's entrance.
                    </p>
                  </div>
                </div>
              </article>

              {/* Facility 2 */}
              <article className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 slick-slide">
                <div className="flex flex-col md:flex-row items-center w-full rounded-lg shadow-lg overflow-hidden">
                  {/* Image Container */}
                  <div className="relative w-full md:w-1/2 overflow-hidden">
                    <img
                      src={lift}
                      alt="Modern lift facilities for easy access to all floors"
                      className="w-full h-full object-cover rounded-l-full"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="w-full md:w-1/2 p-8 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-[#706d6a]">Lift Facilities</h2>
                    <p className="text-black mt-2">
                      Our hotel is equipped with modern lift facilities for your convenience. Enjoy easy access to all floors, whether you're carrying heavy luggage or simply exploring.
                    </p>
                  </div>
                </div>
              </article>

              {/* Facility 3 */}
              <article className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 slick-slide">
                <div className="flex flex-col md:flex-row items-center w-full rounded-lg shadow-lg overflow-hidden">
                  {/* Image Container */}
                  <div className="relative w-full md:w-1/2 overflow-hidden">
                    <img
                      src={badrinath}
                      alt="Serene view of the temple from the hotel"
                      className="w-full h-full object-cover rounded-l-full"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="w-full md:w-1/2 p-8 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-[#706d6a]">Temple View</h2>
                    <p className="text-black mt-2">
                      Enjoy a serene view of the temple from our hotel. The tranquil surroundings offer a perfect escape from the hustle and bustle of city life.
                    </p>
                  </div>
                </div>
              </article>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Amenties;
