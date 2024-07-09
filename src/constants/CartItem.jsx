import React from 'react';
import plus from '../assets/plus.png';
import x from '../assets/x.png';

const CartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center gap-32">
        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="text-gray-600 sm:hidden md:flex">#{item.price.toLocaleString()}</p>
      </div>

      <div className="flex flex-wrap justify-between gap-32">
        <span className="mx-2 flex items-center gap-4">
          {item.quantity}
          <img src={plus} alt="Increase quantity" />
        </span>
        <span className="ml-6 font-bold">#{item.price.toLocaleString()}</span>
        <button className="ml-6 text-red-500">
          <img src={x} alt="Remove item" />
        </button>
      </div>  

    </div>
  );
};

export default CartItem;
