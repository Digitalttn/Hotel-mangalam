import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import hotel from "../assets/hotel1.jpeg";

import hotel1 from "../assets/Aashiyana.png";
import hotel4 from "../assets/Dhanesh.png";
import hotel5 from "../assets/BEHLAshram.png";
import hotel6 from "../assets/BadriVilleResort.png";
import hotel7 from "../assets/HotelDivine.png";
import hotel8 from "../assets/Neelkanth.png";
import ttn from "../assets/hotelogo.webp";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>About Us - Hotel Mangalam Badrinath</title>
        <meta
          name="description"
          content="Discover Hotel Mangalam in Badrinath. Experience comfort and spirituality in the heart of the Himalayas. Explore our modern amenities and divine views."
        />
        <meta
          name="keywords"
          content="Hotel Mangalam, Badrinath hotel, Himalayan hotels, Temple View rooms, luxury stay, spiritual retreat"
        />
        {/* <link rel="canonical" href="https://traveltonirvana.com/about" /> */}
      </Helmet>

      {/* Hero Image with Overlay Text */}
      <div className="relative w-full h-96">
        <img
          src={hotel}
          alt="View of Badrinath"
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <h1
            className="text-white text-3xl lg:text-5xl font-extrabold tracking-wider shadow-lg"
            data-aos="fade-up"
          >
            About <span className="text-[#706d6a]">Us</span>
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-12 flex justify-center">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col lg:flex-row items-center justify-center bg-gray-100 rounded-lg shadow-lg">
          {/* Text Section */}
          <div
            className="lg:w-2/5 text-center lg:text-left mb-8 lg:mb-0 p-6"
            data-aos="fade-right"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Everything Right Where You Need It
            </h1>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              "Welcome to Hotel Mangalam Badrinath, your spiritual home in the sacred town of Badrinath. Nestled in the heart of the Himalayas, our hotel offers a divine experience for travelers seeking comfort, tranquility, and spiritual growth. With 40 well-appointed rooms, including Temple View rooms and Premium rooms, we ensure a comfortable stay for all our guests."
            </p>
            {isExpanded && (
              <>
                <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed mb-4">
                  <li>Parking facility for convenient access</li>
                  <li>Temple View rooms offering breathtaking views of the Badrinath Temple</li>
                  <li>Just 300 meters walking distance from the temple</li>
                  <li>Electric blankets for cozy warmth during chilly nights</li>
                  <li>Lift facilities for easy access to all floors</li>
                </ul>
                <p className="text-gray-700 text-base leading-relaxed">
                  At Hotel Mangalam Badrinath, we prioritize our guests' comfort and spiritual journey. Our friendly staff, led by Travel to Nirvana, are dedicated to providing exceptional service and ensuring a memorable stay.
                </p>
              </>
            )}
            <button
              onClick={toggleExpansion}
              className="text-black mt-4 focus:outline-none"
            >
              {isExpanded ? "See Less" : "See More"}
            </button>
          </div>

          {/* Image Section */}
          <div
            className="lg:w-2/5 flex justify-center lg:justify-end p-6"
            data-aos="fade-left"
          >
            <img
              src={ttn}
              alt="Hotel Mangalam Logo"
              className="w-3/4 max-w-[400px] rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Hotels Section with Slider */}
      <div className="slider-container mb-16 px-4">
        <h2
          className="text-center text-4xl font-extrabold text-gray-800 mb-8"
          data-aos="fade-up"
        >
          Our Hotels
        </h2>
        <Slider {...settings} className="relative">
          <div className="px-2">
            <img
              src={hotel1}
              alt="Hotel Aashiyana"
              className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-right"
            />
          </div>
          <div className="px-2">
            <img
              src={hotel4}
              alt="Hotel Dhanesh"
              className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-up"
            />
          </div>
          <div className="px-2">
            <img
              src={hotel5}
              alt="Hotel BEHLAshram"
              className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-left"
            />
          </div>
          <div className="px-2">
            <img
              src={hotel6}
              alt="Hotel BadriVille Resort"
              className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-left"
            />
          </div>
          <div className="px-2">
            <img
              src={hotel8}
              alt="Hotel Neelkanth"
              className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-left"
            />
          </div>
          <div className="px-2">
            <img
              src={hotel7}
              alt="Hotel Divine"
              className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-left"
            />
          </div>
        </Slider>
      </div>

      {/* Call to Action Section */}
      <div
        className="relative py-16 px-8 bg-black rounded-2xl shadow-2xl text-white text-center mb-16"
        data-aos="zoom-in"
      >
        <h2 className="text-4xl font-bold mb-6">Exclusive Offer</h2>
        <p className="text-xl mb-8">
          Book now and save 20% on your next stay. Enjoy a luxurious retreat at
          Mangalam Hotel and experience the finest in hospitality.
        </p>
        <button
          className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
          onClick={() =>
            window.open('https://traveltonirvana.com/hotels/hotel-mangalam-badrinath/?adults&children&room&children_ages&check-in-out-date', '_blank', 'noopener,noreferrer')
          }
        >
          Book Now
        </button>
        <div
          className="absolute inset-0 bg-cover bg-center rounded-2xl opacity-10"
          style={{ backgroundImage: `url(${hotel})` }}
        ></div>
      </div>
    </div>
  );
};

export default AboutPage;
