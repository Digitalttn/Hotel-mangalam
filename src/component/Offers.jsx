import React from 'react';
import { Helmet } from 'react-helmet';
import { TbArrowRightCircle, TbArrowLeftCircle } from 'react-icons/tb';
import { CgShapeRhombus } from 'react-icons/cg';
import offer1 from '../assets/offer1.jpg';
import offer2 from '../assets/offer2.jpg';
import offer3 from '../assets/offer3.jpg';

const Offers = () => {
  return (
    <>
      <Helmet>
        
        <meta name="description" content="Discover the best offers at Hotel Mangalam, including exclusive discounts on premium rooms, family packages, and weekend getaways with complimentary amenities." />
        <meta name="keywords" content="hotel offers, discounts, family packages, weekend getaway, Hotel Mangalam" />
        {/* <link rel="canonical" href="https://yourwebsite. */}
      </Helmet>

      <section className="max-w-6xl mx-auto py-12 px-4" aria-labelledby="offers-heading">
        {/* Title Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 id="offers-heading" className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Best <span className="text-[#706d6a]">Hotel Offers</span>
          </h1>
        </div>

        {/* Offers Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="relative overflow-hidden rounded-lg shadow-lg group" data-aos="fade-up">
            <img
              src={offer1}
              alt="Exclusive Hotel Offer 1: Discount on premium rooms and luxury amenities."
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              aria-label="Exclusive Offer 1"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Exclusive Offer 1</p>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg shadow-lg group" data-aos="fade-up" data-aos-delay="100">
            <img
              src={offer2}
              alt="Special Hotel Offer 2: Family packages with free breakfast and kids' activities."
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              aria-label="Exclusive Offer 2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Exclusive Offer 2</p>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg shadow-lg group" data-aos="fade-up" data-aos-delay="200">
            <img
              src={offer3}
              alt="Weekend Getaway Offer 3: Package with complimentary dinner and luxury accommodations."
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              aria-label="Exclusive Offer 3"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Exclusive Offer 3</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Offers;
