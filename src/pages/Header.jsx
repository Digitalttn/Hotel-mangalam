import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle the drawer menu
  const handleToggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <Helmet>
        <title>Hotel Mangalam | Luxury Hotel in Badrinath</title>
        <meta name="description" content="Hotel Mangalam offers luxury accommodations, exquisite dining, and a serene environment in Badrinath. Book now for an unforgettable stay." />
        <meta name="keywords" content="Hotel Mangalam, luxury hotel Badrinath, accommodations, dining, Badrinath hotels, Hotel Mangalam Badrinath, luxury stay, hotel booking, Badrinath attractions, rooms, services, boutique hotel Badrinath, premium hotel Badrinath, hotel deals Badrinath, best hotels in Badrinath, top-rated hotels, serene environment, relaxing stay, Badrinath pilgrimage, Uttarakhand hotels" />
        {/* <link rel="canonical" href="https://yourwebsite.com" /> */}
      </Helmet>
      
      <header className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#847a70] shadow-lg' : 'bg-transparent'}`}>
        <nav className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <p
            
              
            
              className="ml-3 text-white text-2xl md:text-4xl font-bold transition-colors duration-300"
            ><Link to='/'> Hotel Mangalam</Link> 
              
            </p>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-6 text-black text-lg md:text-xl">
              <li className="text-white font-bold transition-colors duration-300 hover:underline"><Link to='/'>Home</Link></li>
              <li className="text-white font-bold transition-colors duration-300 hover:underline"><Link to='/about'>About Us</Link></li>
              <li className="text-white font-bold transition-colors duration-300 hover:underline"><Link to='/room'>Rooms</Link></li>
              <li className="text-white font-bold transition-colors duration-300 hover:underline"><Link to='/service'>Services</Link></li>
              <li className="text-white font-bold transition-colors duration-300 hover:underline"><Link to='/near'>Attraction</Link></li>
              <li className="text-white font-bold transition-colors duration-300 hover:underline"><Link to='/contact'>Contact Us</Link></li>
            </ul>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-white px-4 py-2 rounded-lg transition-colors duration-300 z-50" // Add z-50 to keep the button on top
              onClick={handleToggleDrawer}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="fixed top-16 left-0 w-full bg-[#847a70] shadow-lg p-4 transition-transform duration-300 ease-in-out md:hidden z-40">
            <ul className="flex flex-col space-y-6 text-white text-xl">
              <li className="hover:text-gray-600 transition-colors duration-300"><Link to='/' onClick={handleToggleDrawer}>Home</Link></li>
              <li className="hover:text-gray-600 transition-colors duration-300"><Link to='/about' onClick={handleToggleDrawer}>About Us</Link></li>
              <li className="hover:text-gray-600 transition-colors duration-300"><Link to='/room' onClick={handleToggleDrawer}>Rooms</Link></li>
              <li className="hover:text-gray-600 transition-colors duration-300"><Link to='/service' onClick={handleToggleDrawer}>Services</Link></li>
              <li className="hover:text-gray-600 transition-colors duration-300"><Link to='/near' onClick={handleToggleDrawer}>Attraction</Link></li>
              <li className="hover:text-gray-600 transition-colors duration-300"><Link to='/contact' onClick={handleToggleDrawer}>Contact Us</Link></li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
