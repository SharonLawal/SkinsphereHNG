import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/img.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden flex items-center justify-center bg-gray-100">
      <img
        src={img}
        className="w-full h-full object-cover absolute top-0 left-0 z-0 animate-fade-in animate-pulse-subtle"
        alt="Background featuring skincare products or textures"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-white p-4 text-center z-10">
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
    </div>
  );
};

export default Hero;