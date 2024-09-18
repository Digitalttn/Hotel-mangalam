import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

const Whatspp = () => {
    const phoneNumber = '9258126088';
  return (
    <a
    href={`https://wa.me/${phoneNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
  >
    <FaWhatsapp size={24} />
    <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-black text-xs py-1 px-2 rounded-lg shadow-lg">
          Chat with us!
        </span>
    <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></div>
  </a>
  )
}

export default Whatspp