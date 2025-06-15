import React from 'react';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../constants/ProductData';

const Serum = () => {
  const serumProducts = getProductsByCategory('Serum');
  return (
    <div className="flex flex-wrap justify-center gap-6 w-full px-4 md:px-8 lg:px-12 py-8">
      {serumProducts.map((product, index) => (
        <ProductCard key={product.id} product={product} animationDelay={index * 0.05} />
      ))}
    </div>
  );
};

export default Serum;