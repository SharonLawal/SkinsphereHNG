import React from 'react';
import img2 from '../assets/img2.png';
import img from '../assets/img.png';

const Hero = () => {
  return (
    <div className="relative h-auto lg:h-96 w-full flex-wrap justify-center items-center">
      <img 
        src={img} 
        className="w-full h-80 lg:h-full object-cover absolute top-0 left-0 z-0"
        alt="Background"
      />
      
      <div className="absolute left-0 lg:left-32 lg:pt-0 pt-96 text-center mt-36 lg:text-left z-10">
        <h1 className="font-bold text-4xl lg:pl-0 pl-4">Skin Sphere</h1>
        <p className="font-medium lg:pl-0 pl-4">Shop All Products</p>
      </div>

      <img
        src={img2}
        alt="Foreground"
        className="w-auto h-80 lg:h-full object-cover absolute right-24 top-0 z-20"
      />
    </div>
  );
};

export default Hero;
