import React, { createContext, useContext, useState, useEffect } from 'react';
import { allProducts as initialAllProducts } from '../constants/ProductData'; // Assuming productsData.js exports allProducts

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [allProducts, setAllProducts] = useState(initialAllProducts); // Keep all products here
  const [filteredProducts, setFilteredProducts] = useState(initialAllProducts); // State for search results
  const [searchQuery, setSearchQuery] = useState(''); // State for the search input

  // --- Cart Management Functions (Keep your existing ones) ---
  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productToAdd.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + productToAdd.quantity }
            : item
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: productToAdd.quantity || 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateCartQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      ).filter(item => item.quantity > 0) // Remove if quantity drops to 0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // --- Search Filtering Logic ---
  useEffect(() => {
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const results = initialAllProducts.filter(product =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.category.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(initialAllProducts); // Show all products if search query is empty
    }
  }, [searchQuery, initialAllProducts]); // Dependency array: re-run when searchQuery or initialAllProducts changes

  return (
    <ProductContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        allProducts,       // Expose allProducts for initial display/filtering
        filteredProducts,  // Expose filtered results
        searchQuery,       // Expose search query
        setSearchQuery,    // Expose setter for search query
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};