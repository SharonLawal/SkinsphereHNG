import React from 'react';
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-16 px-4 text-center animate-fade-in">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-down animation-delay-200">
          Unlock Your Radiance
        </h2>
        <p className="text-lg sm:text-xl mb-8 animate-slide-up-fade animation-delay-400">
          Sign up for our newsletter and get 15% off your first order!
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 ease-in-out animate-pop-in animation-delay-600"
        >
          Sign Up Now
        </Link>
      </div>
    </section>
  );
};

export default PromoBanner;