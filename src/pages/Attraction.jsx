import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import badrinath from '../assets/badrinath.jpg';
import mana from '../assets/mana.avif';
import vasu from '../assets/vasudhara.jpeg';
import auli from '../assets/auli.jpeg';
import hemkund from '../assets/hemkund.jpeg';
import narsigh from '../assets/narsigh.jpeg';
import velly from '../assets/velly.jpeg';
import satopant from '../assets/satopanth.jpeg';
import badri from '../assets/panchBadri2.png';

export const AttractionData = [
  {
    name: 'Badrinath',
    category: 'Nearby',
    img: badrinath,
    des: 'A sacred site located in the Chamoli district, known for the famous Badrinath Temple.',
  },
  {
    name: 'Mana',
    category: 'Nearby',
    img: mana,
    des: 'The last Indian village before the Tibetan border, known for its natural beauty.',
  },
  {
    name: 'Vasudhara Falls',
    category: 'Nearby',
    img: vasu,
    des: 'A majestic waterfall near Mana village, ideal for nature lovers.',
  },
  {
    name: 'Auli',
    category: 'Joshimath',
    img: auli,
    des: 'A popular skiing destination with breathtaking views and adventure sports.',
  },
  {
    name: 'Shri Narsingh Temple',
    category: 'Joshimath',
    img: narsigh,
    des: 'A historic temple dedicated to Lord Narsingh, an important religious site.',
  },
  {
    name: 'Hemkund',
    category: 'Nearby',
    img: hemkund,
    des: 'A high-altitude lake surrounded by snow-capped peaks and lush green meadows.',
  },
  {
    name: 'Valley of Flowers',
    category: 'Nearby',
    img: velly,
    des: 'A UNESCO World Heritage Site known for its vibrant and diverse floral species.',
  },
  {
    name: 'Satopanth Tal',
    category: 'Nearby',
    img: satopant,
    des: 'A high-altitude lake known for its pristine waters and serene environment.',
  },
];

const Attraction = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const filteredAttractions = selectedCategory === 'All'
    ? AttractionData
    : AttractionData.filter(attraction => attraction.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Attractions in Badrinath - Hotel Mangalam</title>
        <meta name="description" content="Discover top attractions in Badrinath including sacred sites, natural wonders, and adventure spots. Explore cultural and natural highlights during your stay at Hotel Mangalam." />
        <meta name="keywords" content="Badrinath attractions, sightseeing, cultural highlights, natural wonders, Hotel Mangalam" />
        {/* <link rel="canonical" href="https://yourwebsite.com/attractions" /> */}
      </Helmet>

      <main className="bg-gray-50">
        <header className="relative w-full h-60 sm:h-80 lg:h-96">
          <img src={badri} alt="Badrinath" className="w-full h-full object-cover filter" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Optionally, add text or a heading here */}
          </div>
        </header>

        <section className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-10">Top Cultural and Natural Highlights</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Explore the enchanting cultural heritage and stunning natural beauty of Badrinath. From the revered Badrinath Temple to the breathtaking Himalayan landscapes, Badrinath offers a wealth of attractions that will make your visit unforgettable. Hotel Mangalam provides the perfect base for your journey.
          </p>
        </section>

        <section className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-12" data-aos="fade-up">
          {['All', 'Nearby', 'Joshimath'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-4 sm:py-3 sm:px-6 rounded-full font-medium transition duration-300 shadow-md ${selectedCategory === category ? 'bg-[#847a70] text-white' : 'bg-white text-gray-800 border border-gray-300 hover:bg-[#161615] hover:text-white'}`}
            >
              {category}
            </button>
          ))}
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-screen-xl mx-auto px-4">
          {filteredAttractions.map((attraction, index) => (
            <article
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="relative">
                <img src={attraction.img} alt={attraction.name} className="w-full h-48 sm:h-56 lg:h-60 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-t-xl"></div>
                <h3 className="absolute bottom-4 left-4 text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                  {attraction.name}
                </h3>
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <p className="text-gray-700 mb-4 sm:mb-6">{attraction.des}</p>
                <button className="py-2 px-4 sm:py-3 sm:px-6 border border-black text-black rounded-full font-medium hover:bg-[#847a70] transition duration-300">
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Attraction;
