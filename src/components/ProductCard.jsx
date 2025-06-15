// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'; // Import shopping cart icon
import { useProductContext } from '../constants/ProductContext'; // Import context

const ProductCard = ({ product, animationDelay }) => {
  const { addToCart } = useProductContext();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigating to product description when clicking cart button
    e.stopPropagation(); // Stop event propagation to the parent Link
    addToCart(product);
    // Optionally, show a toast notification here
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="relative block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden transform hover:-translate-y-1 animate-pop-in group"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-auto">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p> {/* Display category */}
          <p className="text-xl font-bold text-blue-600 mb-4">₦{product.price.toLocaleString()}</p>
        </div>

        {/* Cart Button - positioned at bottom right */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;