import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TbArrowRightCircle, TbArrowLeftCircle } from 'react-icons/tb';
import { CgShapeRhombus } from 'react-icons/cg';
import { RiServiceFill } from "react-icons/ri";
import { GiHomeGarage, GiFruitTree } from 'react-icons/gi';
import { FaBedPulse } from 'react-icons/fa6';
import { MdBrunchDining, MdFamilyRestroom } from 'react-icons/md';
import './style.css';

const Facilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Helmet>
        
        <meta name="description" content="Explore the top-notch facilities at Hotel Mangalam in Badrinath, including dining options, room amenities, and family-friendly services." />
        <meta name="keywords" content="Hotel Mangalam facilities, Badrinath hotel amenities, room services, dining options, family facilities, special features, extra features" />
       
      </Helmet>

      <section className="py-12 px-4 md:px-16" aria-labelledby="facilities-title">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-8">
          <TbArrowLeftCircle className='text-[#817f7d] text-2xl' />
          <CgShapeRhombus className='text-[#817f7d] text-2xl mx-2' />
          <h2 id="facilities-title" className='text-lg md:text-xl font-semibold text-gray-800'>
            Hotel Facilities in Badrinath
          </h2>
          <CgShapeRhombus className='text-[#817f7d] text-2xl mx-2' />
          <TbArrowRightCircle className='text-[#817f7d] text-2xl' />
        </div>

        {/* Title Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
            Our Best <span className='text-[#706d6a]'>Services</span> in Badrinath
          </h1>
          <p className='text-base text-gray-600 mt-4'>
            Experience top-notch facilities and services at our family-friendly hotel in Badrinath, offering a blend of modern amenities and traditional hospitality.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <GiHomeGarage className='icon text-[#706d6a] text-6xl mb-4' />,
              title: 'Basic Facilities',
              items: ['24×7 Front Desk Services', 'Room Service', 'Housekeeping', 'Free Wi-Fi & Parking'],
              key: 'home',
              animation: 'fade-right',
              description: 'Enjoy essential hotel amenities including 24×7 reception, room service, and free Wi-Fi at our Badrinath hotel.',
            },
            {
              icon: <FaBedPulse className='icon text-[#706d6a] text-6xl mb-4' />,
              title: 'Room Amenities',
              items: ['Comfortable Bedding', 'En-suite Bathroom', 'Television', 'Mineral Water'],
              key: 'bed',
              animation: 'fade-up',
              description: 'Relax in our comfortable rooms equipped with modern amenities including en-suite bathrooms, television, and more.',
            },
            {
              icon: <MdBrunchDining className='icon text-[#706d6a] text-6xl mb-4' />,
              title: 'Dining Options',
              items: ['In-house Restaurant', 'Pure Vegetarian Food', 'Special Garhwali Cuisine (on Request)'],
              key: 'dining',
              animation: 'fade-left',
              description: 'Savor delicious pure vegetarian food and special Garhwali cuisine at our hotel’s in-house restaurant in Badrinath.',
            },
            {
              icon: <MdFamilyRestroom className='icon text-[#706d6a] text-6xl mb-4' />,
              title: 'Family Facilities',
              items: ['Family Rooms', 'Wheelchair Accessibility', 'Local Guide Services', 'Special Puja Arrangements'],
              key: 'family',
              animation: 'fade-right',
              description: 'Our family-friendly hotel in Badrinath offers spacious family rooms, wheelchair accessibility, and local guide services.',
            },
            {
              icon: <GiFruitTree className='icon text-[#706d6a] text-6xl mb-4' />,
              title: 'Special Features',
              items: ['Custom Room Booking', 'Event Spaces(Bhagwat Geeta)'],
              key: 'special',
              animation: 'fade-up',
              description: 'Host your events at our versatile event spaces, with custom room booking options tailored to your needs.',
            },
            {
              icon: <RiServiceFill className='icon text-[#706d6a] text-6xl mb-4' />,
              title: 'Extra Features',
              items: ['Electric Blanket', 'Hot Water', 'Lift Facility'],
              key: 'extra',
              animation: 'fade-left',
              description: 'Stay cozy with electric blankets, hot water, and easy access to rooms with our lift facility.',
            },
          ].map(({ icon, title, items, key, animation, description }) => (
            <article
              key={key}
              className="card bg-gray-100 rounded-3xl shadow-lg p-6"
              data-aos={animation}
              aria-labelledby={`facility-${key}`}
            >
              {icon}
              <h2 id={`facility-${key}`} className='text-xl font-semibold text-gray-800 mb-4'>{title}</h2>
              <p className="sr-only">{description}</p>
              <ul className="space-y-2 text-gray-600">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="mr-2 text-[#9d7e54]">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Facilities;
