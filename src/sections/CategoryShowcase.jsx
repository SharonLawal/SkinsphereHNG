import React from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '../constants/ProductData';

const CategoryShowcase = () => {
  const uniqueCategories = [...new Set(allProducts.map(product => product.category))];

  return (
    <section className="container mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 animate-slide-down">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {uniqueCategories.map((category, index) => (
          <Link
            key={category}
            to={`/products/${category.replace(/\s+/g, '')}`}
            className="group block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden animate-pop-in"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="relative w-full h-48 sm:h-64 overflow-hidden">
              <img
                src={allProducts.find(p => p.category === category)?.image}
                alt={category}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                {category}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;