import React from 'react';
import { Helmet } from 'react-helmet';
import { TbArrowRightCircle, TbArrowLeftCircle } from 'react-icons/tb';
import { CgShapeRhombus } from 'react-icons/cg';
import { motion } from 'framer-motion';
import room from '../assets/reception.jpg';
import room2 from '../assets/exectutive.jpg';
import pre from '../assets/pre.jpg';
import room4 from '../assets/permium.jpeg';

const Rooms = () => {
  const roomsData = [
    { id: 1, name: "Executive Room", image: room2, description: "Elegantly designed for business and leisure." },
    { id: 2, name: "Premium Room", image: pre, description: "Experience the height of comfort and luxury." },
    { id: 3, name: "Family Suite", image: room4, description: "Spacious and ideal for families." },
    { id: 4, name: "Reception", image: room, description: "Perfect blend of comfort and style." },
  ];

  const transitionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Helmet>
      
        <meta name="description" content="Discover our range of rooms at Ghangria Inn, from elegant executive rooms to luxurious premium suites. Explore and book your stay today." />
        <meta name="keywords" content="Hotel Man, hotel rooms, executive room, premium suite, family suite, reception, luxury accommodation" />
        {/* <link rel="canonical" href="https://yourwebsite.com/rooms" /> */}
      </Helmet>

      <main className="px-4">
        {/* Header */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={transitionVariant}
          className="flex items-center justify-center mb-8"
        >
          <TbArrowLeftCircle className='text-[#706d6a] text-2xl' />
          <CgShapeRhombus className='text-[#706d6a] text-2xl mx-2' />
          <h2 className='text-lg md:text-xl font-semibold text-gray-800'>Rooms</h2>
          <CgShapeRhombus className='text-[#706d6a] text-2xl mx-2' />
          <TbArrowRightCircle className='text-[#706d6a] text-2xl' />
        </motion.header>

        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={transitionVariant}
          className="text-center mb-12"
        >
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
            Our Best <span className='text-[#706d6a]'>Rooms</span>
          </h1>
        </motion.div>

        {/* Rooms Grid */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={transitionVariant}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
        >
          {roomsData.map((room) => (
            <motion.article
              key={room.id}
              className="group h-80 w-80 [perspective:1000px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={transitionVariant}
            >
              <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img className="h-full w-full rounded-lg object-cover shadow-lg shadow-black/40" src={room.image} alt={`${room.name} at Ghangria Inn`} />
                  <p className='bg-white rounded-3xl text-black text-md font-bold px-10 py-2 absolute bottom-0 left-10 m-7 shadow-lg transition-opacity duration-300 group-hover:opacity-0'>
                    {room.name}
                  </p>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-lg bg-black/80 px-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold">{room.name}</h2>
                    <p className="text-sm">{room.description}</p>
                    <button
                      className="mt-2 rounded-md bg-gray-300 py-1 px-2 text-black text-sm hover:bg-[#afaeab] hover:text-white"
                      onClick={() => window.open('https://traveltonirvana.com/hotels/hotel-mangalam-badrinath/?adults&children&room&children_ages&check-in-out-date#tf-hotel-overview', '_blank', 'noopener noreferrer')}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.section>
      </main>
    </>
  );
};

export default Rooms;
