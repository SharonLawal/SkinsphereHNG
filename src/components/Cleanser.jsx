import React from 'react';
import { Link } from 'react-router-dom';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import cartImage from '../assets/Cart.png';

const CleanserProducts = [
  { id: 11, img: img5, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 12, img: img6, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 13, img: img5, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 14, img: img6, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 15, img: img5, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 16, img: img6, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 17, img: img5, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 18, img: img6, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 19, img: img5, name: 'La Rosay Sunscreen Set', price: '#52,000' },
];

const Cleanser = () => {
  return (
    <div className="flex flex-wrap justify-around gap-12 w-full mt-10">
      {CleanserProducts.map((product) => (
        <div key={product.id} className="w-80 mb-16">
          <Link to={`/product/${product.id}`}>
            <img src={product.img} className="w-full h-72 object-cover border rounded-lg" alt={product.name} />
          </Link>
          <div className="flex justify-between items-center mt-4">
            <div className="font-semibold">
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
            <button className="bg-blue-400 w-11 h-11 flex items-center justify-center rounded-2xl">
              <img src={cartImage} alt="Cart" className="w-6 h-6" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Cleanser, CleanserProducts };
