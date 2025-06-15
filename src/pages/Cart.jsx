import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProductContext } from '../constants/ProductContext';
import CartItem from '../components/CartItem';
import { ChevronLeft } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity } = useProductContext();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const shippingCost = 5000;
  const taxCost = 600;
  const grandTotal = subtotal + shippingCost + taxCost;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-64px)] animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-0">Your Shopping Cart</h1>
        <h2 className="text-xl text-gray-600">
          <span className="font-semibold">{totalItems}</span> {totalItems === 1 ? 'item' : 'items'}
        </h2>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600 mb-6">Your cart is empty. Start shopping now!</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 animate-pop-in"
          >
            <ChevronLeft className="w-5 h-5 mr-2" /> Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="hidden md:flex justify-between items-center text-neutral-500 text-base font-semibold border-b pb-3 px-2">
            <p className="flex-1">Product Details</p>
            <div className="flex justify-end flex-1 gap-x-10 lg:gap-x-16 xl:gap-x-20 pr-16">
              <p>Quantity</p>
              <p>Total</p>
            </div>
          </div>

          <div className="border-t border-b border-gray-200 py-4 mb-6 animate-slide-up-fade">
            {cart.map((item, index) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onIncreaseQuantity={() => updateCartQuantity(item.id, item.quantity + 1)}
                onDecreaseQuantity={() => updateCartQuantity(item.id, item.quantity - 1)}
                animationDelay={index * 0.05}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
            <Link
              to="/"
              className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200 mb-4 sm:mb-0 animate-slide-in-left"
            >
              <ChevronLeft className="w-5 h-5 mr-1" /> Continue Shopping
            </Link>

            <div className="text-right flex flex-col items-end animate-slide-in-right">
              <div className="flex justify-between w-full sm:w-auto sm:min-w-[250px] mb-2">
                <h3 className="text-xl font-bold text-gray-800">Subtotal:</h3>
                <p className="text-xl font-semibold text-gray-900">₦{subtotal.toLocaleString()}</p>
              </div>
              <div className="flex justify-between w-full sm:w-auto sm:min-w-[250px] mb-2">
                <h3 className="text-lg text-gray-700">Shipping:</h3>
                <p className="text-lg text-gray-600">₦{shippingCost.toLocaleString()}</p>
              </div>
              <div className="flex justify-between w-full sm:w-auto sm:min-w-[250px] mb-4">
                <h3 className="text-lg text-gray-700">Tax:</h3>
                <p className="text-lg text-gray-600">₦{taxCost.toLocaleString()}</p>
              </div>
              <div className="flex justify-between w-full sm:w-auto sm:min-w-[250px] mb-4 border-t pt-4">
                <h3 className="text-2xl font-bold text-gray-800">Grand Total:</h3>
                <p className="text-3xl font-bold text-blue-600">₦{grandTotal.toLocaleString()}</p>
              </div>

              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold w-full sm:w-auto animate-pulse-subtle"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;