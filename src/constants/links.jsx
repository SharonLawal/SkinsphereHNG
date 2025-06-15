// src/components/Links.jsx
import React from 'react';
import skinsphere from '../assets/Skinsphere.png';
import BackButton from './BackButton';
import { navLinks } from './index'; // Import navLinks
import { Link } from 'react-router-dom'; // Use Link for internal navigation

const Links = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4 bg-gray-50 text-gray-800 animate-fade-in">
      {/* Back Button */}
      <div className="self-start ml-4 sm:ml-8 lg:ml-12 mb-8 animate-slide-in-left">
        <BackButton />
      </div>

      {/* Logo */}
      <img
        src={skinsphere}
        alt="Skin Sphere Logo"
        className="mb-12 w-48 sm:w-64 animate-pop-in animation-delay-200"
      />

      {/* Navigation Links */}
      <nav className="flex flex-col items-center w-full max-w-sm sm:max-w-md animate-slide-down animation-delay-400">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="w-full text-center py-4 border-b-2 border-gray-300 last:border-b-0 text-xl font-semibold hover:bg-gray-100 hover:text-blue-600 transition-all duration-300 ease-in-out animate-slide-down"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }} // Staggered animation
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Add a subtle footer or copyright if needed */}
      <div className="mt-auto pt-16 text-sm text-gray-500 animate-fade-in animation-delay-1000">
        &copy; {new Date().getFullYear()} Skinsphere. All rights reserved.
      </div>
    </div>
  );
};

export default Links;