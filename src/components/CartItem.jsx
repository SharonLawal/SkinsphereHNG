import React from 'react';
import { Plus, Minus, XCircle } from 'lucide-react';

const CartItem = ({ item, onRemove, onIncreaseQuantity, onDecreaseQuantity }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-4 border-b border-gray-200 last:border-b-0 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mb-4 sm:mb-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg shadow-sm"
          loading="lazy"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <p className="text-gray-600 text-sm mt-1">N{item.price.toLocaleString()}</p>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 border border-gray-300">
          <button
            onClick={() => onDecreaseQuantity(item.id)}
            className="p-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="mx-2 font-medium text-gray-800 text-base">{item.quantity}</span>
          <button
            onClick={() => onIncreaseQuantity(item.id)}
            className="p-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <span className="font-bold text-gray-900 text-lg sm:min-w-[100px] text-right">
          N{(item.price * item.quantity).toLocaleString()}
        </span>

        <button
          onClick={() => onRemove(item.id)}
          className="ml-4 text-red-500 hover:text-red-700 transition-colors duration-200"
          aria-label="Remove item from cart"
        >
          <XCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;