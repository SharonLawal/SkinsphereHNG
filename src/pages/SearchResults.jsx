import React, { useEffect } from 'react';
import { useProductContext } from '../constants/ProductContext';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
  const { filteredProducts, searchQuery } = useProductContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchQuery]);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-64px)] animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
        {searchQuery ? `Search Results for "${searchQuery}"` : "All Products"}
      </h1>

      {filteredProducts.length === 0 && searchQuery ? (
        <p className="text-center text-xl text-gray-600">No products found for your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-slide-up-fade">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              animationDelay={index * 0.05}
            />
          ))}
        </div>
      )}

      {!searchQuery && (
        <p className="text-center text-gray-500 mt-8">Type in the search bar to find products.</p>
      )}
    </div>
  );
};

export default SearchResults;