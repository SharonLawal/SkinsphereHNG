import React, { useState } from 'react';
import ProductButtonComponent from './ProductButtonComponent';

const ProductButton = () => {
  const [activeButton, setActiveButton] = useState('All');

  const handleCategoryClick = (category) => {
    setActiveButton(category);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-8 font-medium px-4 animate-fade-in">
      {['All', 'Cleanser', 'Serum', 'Moisturizer', 'Face Oil'].map((name, index) => (
        <ProductButtonComponent
          key={name}
          buttonName={name}
          isActive={activeButton === name}
          onClick={handleCategoryClick}
          animationDelay={index * 0.08}
        />
      ))}
    </div>
  );
};

export default ProductButton;