// src/sections/Hero.jsx
import React from "react";
import img2 from "../assets/img2.png";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/img.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <img
        src={img}
        className="w-full h-full object-cover absolute top-0 left-0 z-0 animate-fade-in animate-pulse-subtle"
        alt="Background featuring skincare products or textures"
        loading="lazy" // Add lazy loading for performance
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-white p-4 text-center z-10">
        {/* Removed: md:items-start, md:text-left, md:pl-16, lg:pl-32 */}
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-2 animate-slide-in-left">
          Skin Sphere
        </h1>
        <p className="font-medium text-lg sm:text-xl lg:text-2xl animate-slide-in-left animation-delay-300">
          Discover Your Glow
        </p>
        <Link
          to="/products"
          className="mt-8 px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 ease-in-out animate-scale-up animation-delay-500"
        >
          Shop All Products
        </Link>
      </div>

      {/* Foreground Image - repositioned for better layout and responsiveness */}
      {/* This image now appears only on larger screens to avoid clutter on mobile */}
      {/* <img
        src={img2}
        alt="Featured skincare product"
        className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-[70%] md:h-[80%] lg:h-[90%] object-contain z-20 animate-slide-in-right animation-delay-700"
        loading="lazy" // Add lazy loading
      /> */}
    </div>
  );
};

export default Hero;
