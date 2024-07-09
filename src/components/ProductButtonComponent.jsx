import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductButtonComponent = ({ buttonName, isActive, onClick, activeButton }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    onClick(category);
    if (category === 'All') {
      navigate('/');
    } else {
      navigate(`/products/${category}`);
    }
  };

  return (
    <button
      className={`bg-primary-500 border border-blue-400 py-3 px-6 rounded-3xl text-neutral-900 ${buttonName===activeButton ? 'bg-blue-400' : 'bg-white'}`}
      onClick={() => handleCategoryClick(buttonName)} // Pass buttonName to handleCategoryClick
    >
      {buttonName}
    </button>
  );
};

export default ProductButtonComponent;
