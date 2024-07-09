import React from 'react';
import { Link } from 'react-router-dom';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';
import cartImage from '../assets/Cart.png';

const products = [
  { id: 1, img: img11, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 2, img: img12, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 3, img: img11, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 4, img: img12, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 5, img: img11, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 6, img: img12, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 7, img: img11, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 8, img: img12, name: 'La Rosay Sunscreen Set', price: '#52,000' },
  { id: 9, img: img11, name: 'La Rosay Sunscreen Set', price: '#52,000' },
];

const FaceOil = () => {
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

export default FaceOil;
