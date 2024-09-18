import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import AboutUs from "../component/AboutUs";
import Facilities from "../component/Facilities";
import Amenties from "../component/Amenties";
import Offers from "../component/Offers";
import Rooms from "../component/Rooms";
import Testimonials from "../component/Testimonials";
import Puch from "../component/Puch";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hotel Mangalam-Badrinath</title>
        <meta
          name="description"
          content="Discover Hotel Mangalam, a luxury retreat in Badrinath, Chamoli, Uttarakhand. Experience top-notch amenities, elegant rooms, and exceptional service at our boutique hotel."
        />
        <meta
          name="keywords"
          content="luxury hotel Badrinath, boutique hotel Uttarakhand, luxury accommodation Chamoli, Hotel Mangalam amenities"
        />
        <meta name="author" content="Hotel Mangalam" />
        <meta
          property="og:title"
          content="Hotel Mangalam - Luxury Hotel and Restaurant in Badrinath"
        />
        <meta
          property="og:description"
          content="Hotel Mangalam offers a luxurious stay in Badrinath, Chamoli. Enjoy our premium rooms, fine dining, and exceptional service in a serene environment."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/path-to-your-image.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hotel Mangalam" />
      </Helmet>

      <div className="relative w-full  overflow-hidden">
        <div className="relative w-full h-screen">
          {/* <iframe
            src="https://player.vimeo.com/video/1003916530?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: "none" }} // Optional: Removes any potential iframe border
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe> */}
          <iframe
            src="https://player.vimeo.com/video/1003919154?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1"
          width="2197" height="1236"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="hotel"
          ></iframe>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10 md:pl-20">
          <div className="text-left max-w-lg mb-20 animate-slideInUp">
            <p className="text-white text-lg md:text-xl font-semibold mb-3 animate-fadeIn">
              Luxury Hotel and Restaurant
            </p>
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight animate-fadeIn delay-300">
              Enjoy Your <span className="text-[#847a70]">Dream</span> Time With{" "}
              <span className="text-[#847a70]">Luxury</span> Experience
            </h1>
            <div className="mt-6 animate-fadeIn delay-500">
              <button className="bg-[#847a70] text-white px-6 py-3 rounded-lg text-lg md:text-xl font-bold hover:bg-gold-600 transition-colors duration-300 shadow-lg">
                Book Now
              </button>
              <div className="flex items-center mt-4 text-white text-lg md:text-xl font-semibold">
                <FaPhoneAlt className="mr-2" />
                <p>Call Us: +91 92581 26088</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutUs />
      <Facilities />
      <Puch />
      <Rooms />
      <Amenties />
      <Offers />
      <Testimonials />
    </>
  );
};

export default Home;
