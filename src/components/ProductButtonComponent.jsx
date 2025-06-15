// src/components/ProductButtonComponent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductButtonComponent = ({ buttonName, isActive, onClick, animationDelay }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    onClick(category); // Update parent's active state
    // Normalize category name for URL: "Face Oil" -> "FaceOil"
    const pathCategory = category.replace(/\s+/g, '');
    if (category === 'All') {
      navigate('/products'); // Navigate to a dedicated products page
    } else {
      navigate(`/products/${pathCategory}`); // e.g., /products/Cleanser, /products/FaceOil
    }
  };

  return (
    <button
      className={`py-3 px-6 rounded-full text-base font-semibold transition-all duration-300 ease-in-out whitespace-nowrap
        ${isActive ? 'bg-blue-500 text-white shadow-md' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:border-blue-400'}
        animate-pop-in
      `}
      style={{ animationDelay: `${animationDelay}s` }}
      onClick={() => handleCategoryClick(buttonName)}
    >
      {buttonName}
    </button>
  );
};

export default ProductButtonComponent;