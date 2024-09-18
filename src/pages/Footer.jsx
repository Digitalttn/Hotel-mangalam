import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Experience exceptional hospitality at Mangalam Hotel in Badrinath. Explore our elegant rooms, dining, and more."
        />
        <meta
          name="keywords"
          content="hotel, Mangalam Hotel, Badrinath, Uttarakhand, accommodation, travel"
        />
        <meta name="author" content="Mangalam Hotel" />
        <meta property="og:title" content="Mangalam Hotel" />
        <meta
          property="og:description"
          content="Discover Mangalam Hotel, offering luxurious stays in Badrinath with modern amenities and exceptional service."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <footer className="bg-[#847a70] text-white py-6 px-4 md:px-8" aria-labelledby="footer-heading">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* About Hotel Section */}
          <div>
            <h1 className="text-lg font-bold text-white mb-2">Welcome to Hotel Mangalam</h1>
            <p className="text-white">
              At Mangalam Hotel, located in the serene town of Badrinath, Chamoli, Uttarakhand,
              {showMore && (
                <span>
                  {" "}guests experience exceptional hospitality and modern amenities. Enjoy our luxurious facilities, including a multi-cuisine restaurant, spa, and stunning views of the surrounding Himalayas.
                </span>
              )}
            </p>
            <button onClick={handleToggle} className="text-white font-bold mt-2">
              {showMore ? 'See Less' : 'See More'}
            </button>
          </div>

          {/* Explore Section */}
          <div>
            <h2 id="footer-explore" className="text-lg font-bold text-white mb-2">Explore Our Hotel</h2>
            <ul className="text-white space-y-1">
              <li className="hover:text-white transition-colors duration-200">- Restaurant</li>
              <li>
                <Link to='/room' className="hover:text-white transition-colors duration-200">
                  - Rooms & Suites
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-200">- Events</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 id="footer-contact" className="text-lg font-bold text-white mb-2">Contact Us</h2>
            <ul className="text-white space-y-1">
              <li>
                <Link to='/about' className="hover:text-white transition-colors duration-200">
                  - About Us
                </Link>
              </li>
              <li>
                <Link to='/contact' className="hover:text-white transition-colors duration-200">
                  - Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h2 id="footer-address" className="text-lg font-bold text-white mb-2">Address</h2>
            <p className="text-white mb-2">Near Badrish Lake, Badrinath Temple Rd, Badrinath, Uttarakhand 246422</p>
            <div>
              <h3 className="text-white mb-1">Email</h3>
              <a
                href="mailto:salesinfo@traveltonirvana.com"
                className="text-blue-900 hover:text-white transition-colors duration-200"
              >
                salesinfo@traveltonirvana.com
              </a>
            </div>
            <div className="mt-2">
              <h3 className="text-white mb-1">Phone Number</h3>
              <a
                href="tel:+919258126088"
                className="text-blue-900 hover:text-white transition-colors duration-200"
              >
                +91 92581 26088,
              </a>
              <a
                href="tel:+919389301916"
                className="text-blue-900 hover:text-white transition-colors duration-200"
              >
                +91 9389301916
              </a>
            </div>
            {/* Social Media Links */}
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.facebook.com/traveltonirvana/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-700 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@Traveltonirvanaharidwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-700 hover:text-white transition-colors duration-200"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-5 text-center border-t border-gray-300 pt-4">
          <p className="text-gray-200 text-sm">
            &copy; {new Date().getFullYear()} Mangalam Hotel. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
