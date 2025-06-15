// src/sections/FeaturedProducts.jsx
import React from 'react';
import ProductCard from '../components/ProductCard'; // Reuse your ProductCard
import { allProducts } from '../constants/ProductData'; // Import all products
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  // Select a few products to feature (e.g., first 4 or 8)
  const featured = allProducts.slice(0, 4); // Adjust as needed

  return (
    <section className="container mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 animate-slide-down">Our Bestsellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((product, index) => (
          <ProductCard key={product.id} product={product} animationDelay={index * 0.1} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/products"
          className="inline-block bg-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 animate-pop-in"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;