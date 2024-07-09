import React, { useState } from 'react';
import ProductButtonComponent from './ProductButtonComponent';

const ProductButton = () => {
  const [activeButton, setActiveButton] = useState('All'); // Track the active button

  const handleCategoryClick = (category) => {
    setActiveButton(category); // Update the active button
  };

  return (
    <div className="flex justify-center gap-28 pt-8 font-medium">
      {['All', 'Cleanser', 'Serum', 'Moisturizer', 'Face-Oil'].map((name) => (
        <ProductButtonComponent
          key={name}
          buttonName={name}
          isActive={activeButton === name}
          onClick={handleCategoryClick}
          activeButton={activeButton}
        />
      ))}
    </div>
  );
};

export default ProductButton;
