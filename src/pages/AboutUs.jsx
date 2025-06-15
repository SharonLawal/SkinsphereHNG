// src/pages/AboutUs.jsx
import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center animate-fade-in">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 animate-slide-down">About Skinsphere</h1>
      <p className="text-lg text-gray-700 max-w-3xl mb-8 leading-relaxed animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
        At Skinsphere, we believe in the power of healthy, radiant skin. Our mission is to provide high-quality,
        ethically sourced skincare products that cater to diverse skin needs. We are dedicated to transparency,
        innovation, and customer satisfaction, striving to help you discover your unique glow.
      </p>
      <p className="text-md text-gray-600 max-w-2xl animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
        Founded in 2023, Skinsphere has grown from a passion for natural beauty into a brand committed to
        delivering effective and gentle solutions for all. Explore our range and join our community!
      </p>
      {/* You can add more sections, team photos, values etc. */}
    </div>
  );
};

export default AboutUs;