// src/pages/ServicesPage.js
import React from 'react';
import { Helmet } from 'react-helmet';
import hotel3 from '../assets/hotel3.jpeg';
import Facilities from '../component/Facilities';

const ServicesPage = () => {
  return (
    <div>
      <Helmet>
        <title>Our Services - Hotel Mangalam</title>
        <meta name="description" content="Explore the exceptional services offered by Hotel Mangalam, including luxury accommodations, fine dining, and personalized experiences in Badrinath." />
        <meta name="keywords" content="Hotel Mangalam services, luxury accommodations, fine dining, personalized experiences, Badrinath hotel services" />
        <meta property="og:title" content="Our Services - Hotel Mangalam" />
        <meta property="og:description" content="Discover the premium services of Hotel Mangalam, including comfortable rooms, exquisite dining, and more in Badrinath." />
        <meta property="og:image" content={hotel3} />
        
      </Helmet>

      <div className="relative w-full h-96">
        <img src={hotel3} alt="Badrinath" className="w-full h-full object-cover filter brightness-45" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold tracking-wider shadow-lg" data-aos="fade-up">
            <span className="text-[#706d6a]">Our</span> Services
          </h1>
        </div>
      </div>
      <Facilities />
    </div>
  );
};

export default ServicesPage;
