// Links.jsx
import React from 'react';
import skinsphere from '../assets/Skinsphere.png';
import BackButton from './BackButton'; // Import the BackButton component

const Links = () => {
  return (
    <div className="w-screen">
      <div className="flex flex-col items-center font-bold text-center gap-9 px-4 sm:px-6 lg:px-8 py-16">
        <div className="self-start ml-4">
          <BackButton /> {/* Add the BackButton */}
        </div>
        <img src={skinsphere} alt="Skin Sphere" className="mb-8" />
      </div>
    
      <div className="flex flex-col items-center font-bold text-center">
        <div className="flex flex-col sm:flex-row gap-6 items-center w-full justify-center">
          <a href="/" className="hover:text-gray-500 border-b sm:border-r sm:border-b-0 border-black border-b-2 py-2 sm:py-0 sm:px-6 w-screen sm:w-auto text-center">Store</a>
          <a href="/cart" className="hover:text-gray-500 border-b sm:border-r sm:border-b-0 border-black border-b-2 py-2 sm:py-0 sm:px-6 w-screen sm:w-auto text-center">Cart</a>
          <a href="/about" className="hover:text-gray-500 border-b sm:border-r sm:border-b-0 border-black border-b-2 py-2 sm:py-0 sm:px-6 w-screen sm:w-auto text-center">About</a>
        </div>
      </div>
    </div>
  );
};

export default Links;
