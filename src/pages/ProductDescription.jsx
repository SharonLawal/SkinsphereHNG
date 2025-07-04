import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProductContext } from '../constants/ProductContext';
import { Plus, Minus, ShoppingCart, ArrowLeft } from 'lucide-react';

const ProductDescription = () => {
  const { id } = useParams();
  const { allProducts, addToCart } = useProductContext();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      const selectedProduct = allProducts.find((p) => p.id === parseInt(id));
      setProduct(selectedProduct);
      if (!selectedProduct) {
        navigate('/products');
      }
    }
    window.scrollTo(0, 0);
  }, [id, allProducts, navigate]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity: quantity });
      navigate('/cart');
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart({ ...product, quantity: quantity });
      navigate('/checkout');
    }
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-gray-600">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-64px)] animate-fade-in">
      <div className="mb-6 animate-slide-in-left">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200 text-lg font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Products
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 mt-4 bg-white p-6 rounded-xl shadow-lg">
        <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5 animate-scale-up">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-80 sm:h-96 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        </div>

        <div className="flex-grow md:w-1/2 lg:w-3/5 text-center md:text-left animate-slide-in-right">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{product.name}</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            {product.description || 'No description available for this product.'}
          </p>
          <p className="font-bold text-3xl text-blue-600 mb-6">₦{product.price.toLocaleString()}</p>

          <div className="flex items-center justify-center md:justify-start mb-8 space-x-4">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Decrease quantity"
            >
              <Minus className="w-5 h-5" />
            </button>
            <span className="text-xl font-semibold text-gray-800 w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Increase quantity"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center bg-white border border-blue-500 text-blue-500 font-semibold py-3 px-6 rounded-full w-full sm:w-auto shadow-sm hover:bg-blue-50 transition-all duration-300 animate-pop-in"
            >
              <ShoppingCart className="w-5 h-5 mr-2" /> Add to cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-full w-full sm:w-auto shadow-md hover:bg-blue-600 transition-all duration-300 animate-pulse-subtle"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;