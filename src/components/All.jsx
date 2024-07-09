import React from 'react';
import { Link } from 'react-router-dom';
import cartImage from '../assets/Cart.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const products = [
  { id: 1, img: img3, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 2, img: img4, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 3, img: img3, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 4, img: img4, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 5, img: img3, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 6, img: img4, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 7, img: img3, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 8, img: img4, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 9, img: img3, name: 'La Rosay Sunscreen Set', price: '#52,000' },
];

const All = () => {
  return (
    <div className="flex flex-wrap justify-around gap-12 w-full mt-10">
      {products.map((product) => (
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

export { All, products }; // Correct export statement
