import React from 'react';
import CartItem from '../constants/CartItem.jsx';
import { useNavigate } from 'react-router-dom';
import img3 from '../assets/img3.png';

const Cart = () => {
  const items = [
    { id: 2, name: 'La Rosay Sunscreen set', price: 52000, quantity: 1, image: img3 },
    { id: 3, name: 'La Rosay Sunscreen set', price: 52000, quantity: 1, image: img3 },
    { id: 1, name: 'La Rosay Sunscreen set', price: 52000, quantity: 1, image: img3 },
  ];

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex">
        <h1 className="text-3xl font-bold mb-6">Shopping cart</h1>
        <h2 className="text-xl text-right ml-auto">3 items</h2>
      </div>

      <div className="flex gap-32 ml-80 text-neutral-500 text-lg md:flex hidden">
        <p>Product details</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>

      <div className="border-t border-b py-4 ml-10 mr-14 md:gap-28">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <a href="/" className="text-blue-500">&larr; Continue Shopping</a>
        <div className="text-right gap-44 flex">
          <h3 className="text-xl font-bold">Total</h3>
          <p className="text-2xl font-bold">₦156,000</p>
        </div>
      </div>
        <div className="flex mt-4 sm:justify-center items-center content-center">
        <button 
        className="bg-slate-400 w-44 h-16 text-white p-2 rounded-full block mt-4 md:ml-auto"
        onClick={handleCheckout}
      >
        Checkout
      </button>
        </div>
    </div>
  );
};

export default Cart;