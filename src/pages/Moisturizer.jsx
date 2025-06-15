// src/components/Moisturizer.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../constants/ProductData';

const Moisturizer = () => {
  const moisturizerProducts = getProductsByCategory('Moisturizer');
  return (
    <div className="flex flex-wrap justify-center gap-6 w-full px-4 md:px-8 lg:px-12 py-8">
      {moisturizerProducts.map((product, index) => (
        <ProductCard key={product.id} product={product} animationDelay={index * 0.05} />
      ))}
    </div>
  );
};

export default Moisturizer;