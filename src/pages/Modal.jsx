// src/components/Modal.js
import React from 'react';
import { Helmet } from 'react-helmet';

const Modal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <>
      <Helmet>
        <meta name="description" content="Full-size view of the image showcasing luxury rooms at Hotel Mangalam." />
        <meta property="og:title" content="Hotel Mangalam - Full-size Image View" />
        <meta property="og:description" content="Explore full-size images of Hotel Mangalam's luxury rooms and facilities." />
        <meta property="og:image" content={image} />
      </Helmet>
      <div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        onClick={onClose}
      >
        <div className="relative max-w-3xl max-h-full">
          <img
            src={image}
            alt="Full size view of Hotel Mangalam"
            className="w-full h-auto object-contain"
          />
          <button
            className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
