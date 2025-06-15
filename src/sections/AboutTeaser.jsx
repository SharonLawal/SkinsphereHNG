import React from 'react';
import { Link } from 'react-router-dom';
import skinsphereFullLogo from '../assets/Skinsphere.png';

const AboutTeaser = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center animate-fade-in">
      <img
        src={skinsphereFullLogo}
        alt="Skin Sphere Full Logo"
        className="mx-auto w-48 mb-8 animate-pop-in"
        loading="lazy"
      />
      <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-slide-down animation-delay-200">
        Our Philosophy
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up-fade animation-delay-400">
        At **Skinsphere**, we believe that skincare is a journey, not a destination. We are dedicated to crafting high-quality, effective products designed to nourish your skin and reveal its natural radiance. Our commitment lies in combining science with nature to bring you formulas that truly make a difference.
      </p>
      <Link
        to="/about"
        className="inline-block bg-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 animate-pop-in animation-delay-600"
      >
        Learn More About Us
      </Link>
    </section>
  );
};

export default AboutTeaser;