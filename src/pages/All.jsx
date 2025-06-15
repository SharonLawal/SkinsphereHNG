// src/components/All.jsx
import React from 'react';
import ProductCard from '../components/ProductCard'; // Assuming ProductCard is in the same directory

// Corrected import path for centralized product data
import { allProducts } from '../constants/ProductData'; // <--- IMPORTANT: Path corrected

const All = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 w-full px-4 md:px-8 lg:px-12 py-8">
      {allProducts.map((product, index) => (
        <ProductCard key={product.id} product={product} animationDelay={index * 0.05} />
      ))}
    </div>
  );
};

// THIS IS THE CRUCIAL CHANGE TO FIX THE "DEFAULT" EXPORT ERROR
export default All;

// If 'products' is still needed for compatibility elsewhere (e.g., in ProductProvider initialProducts),
// you can keep this line, but for App.jsx's import, the default export is what matters.
// export { allProducts as products };