import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

import roomHero from '../assets/room5.jpeg'; 
import room2 from '../assets/family.jpg';
import room3 from '../assets/family2.jpg';
import room4 from '../assets/room4.jpeg';
import room5 from '../assets/family3.jpg';
import permium from '../assets/permium.jpeg';
import permium2 from '../assets/permium2.jpeg';
import permium3 from '../assets/permium3.jpeg';
import exetutive from '../assets/executive.jpeg';
import exetutive1 from '../assets/exetutive1.jpeg';
import exetutive2 from '../assets/exetutive2.jpeg';
import exetutive4 from '../assets/exectutive4.jpg';

import Modal from './Modal'; 

const Room = [
  {
    name: 'Executive Room',
    category: 'Executive Room',
    img: [
      exetutive4,
      exetutive,
      exetutive1,
    ],
    videoThumbnail: exetutive4,
    videoLink: 'https://youtu.be/y2ioXdQV8Fw',
    price: '7000',
  },
  {
    name: 'Family Suite Room',
    category: 'Family Suite Room',
    img: [
      room2,
      room3,
      room5,
    ],
    videoThumbnail: room5,
    videoLink: 'https://youtu.be/Y_ayiTaJCwE',
    price: '12000',
  },
  {
    name: 'Premium Room',
    category: 'Premium Room',
    img: [
      permium,
      permium2,
      permium3,
    ],
    videoThumbnail: permium,
    videoLink: 'https://youtu.be/7zy3fp78yDU',
    price: '9000',
  },
];

const RoomPagetwo = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [date, setDate] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleCheckAvailability = () => {
    console.log('Checking availability for date:', date);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleVideoClick = (videoLink) => {
    window.open(videoLink, '_blank');
  };

  const filteredRooms = Room.filter((room) =>
    selectedCategory ? room.category === selectedCategory : true
  );

  return (
    <div>
      <Helmet>
        <title>Rooms at Hotel Mangalam</title>
        <meta name="description" content="Explore our range of rooms at Hotel Mangalam, including Executive, Premium, and Family Suite Rooms. Check availability and book your stay today." />
        <meta name="keywords" content="Hotel Mangalam, rooms, Executive Room, Premium Room, Family Suite Room, accommodation, hotel rooms" />
      </Helmet>

      {/* Hero Image */}
      <div className="relative w-full h-96">
        <img src={roomHero} alt="Hero Image of Hotel Mangalam Rooms" className="w-full h-full object-cover filter brightness-50" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <h1 className="text-white text-xl lg:text-5xl font-extrabold tracking-wider shadow-lg" data-aos="fade-up">
            Accommodation <span className="text-[#706d6a]">In</span> Badrinath
          </h1>
          <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-lg px-10 py-2 rounded">
            Room Details
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Right Side: Check Availability and Room Types */}
        <div className="w-full h-[50%] md:w-1/3 p-4 bg-white border border-gray-200 rounded-lg shadow-lg" data-aos="fade-right">
          {/* Room Type Section */}
          <div>
            <h2 className='text-black font-bold text-2xl mb-5'>Hotel Mangalam Rooms</h2>
            <hr className='bg-black'/>
            <h1 className="text-2xl font-semibold mb-4">Room Type</h1>
            <ul>
              {['Executive Room', 'Premium Room', 'Family Suite Room'].map((category) => (
                <li key={category} className="my-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                      className="mr-2"
                    />
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          {/* Rules */}
          <div>
            <hr className='bg-black'/>
            <h1 className="text-2xl font-semibold text-black">Rules & Regulations</h1>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>No smoking inside the room</li>
              <li>Check-in: After 02:00pm</li>
              <li>Checkout: Before 11:00am</li>
              <li>No Pets</li>
              <li>Identification document is a must for hotel registration.</li>
            </ul>
          </div>
        </div>

        {/* Left Side: Filtered Room Images */}
        <div className="w-full md:w-2/3 p-4 bg-white border border-gray-200 rounded-lg shadow-lg" data-aos="fade-left">
          {filteredRooms.map((room, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{room.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.img.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${room.name} - Image ${imgIndex + 1}`}
                    className="w-full h-64 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
                    onClick={() => handleImageClick(image)}
                    data-aos="zoom-in"
                  />
                ))}
                <div
                  className="w-full h-64 cursor-pointer relative"
                  onClick={() => handleVideoClick(room.videoLink)}
                  data-aos="zoom-in"
                >
                  <img
                    src={room.videoThumbnail}
                    alt={`${room.name} - Video Thumbnail`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-4">
                      <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 3l14 9-14 9V3z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mt-4">Category: {room.category}</p>
              <p className="text-gray-600">Price: ₹{room.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Image */}
      <Modal image={selectedImage} onClose={handleCloseModal} />
    </div>
  );
};

export default RoomPagetwo;
