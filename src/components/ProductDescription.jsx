import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProductContext } from '../constants/ProductContext';
import plus from '../assets/plus.png';
import back from '../assets/back.png';
import { useNavigate } from 'react-router-dom';

const ProductDescription = () => {
  const { id } = useParams(); // Get the id from URL params
  const { products } = useProductContext(); // Get products from context
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    // Simulating product fetch based on id
    const selectedProduct = products.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id, products]);

  const addToCart = () => {
    // Logic for adding product to cart
    // Example: Assuming adding to cart redirects to /cart
    navigate('/Cart'); // Navigate to the cart page
  };

  if (!product) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="mb-16 flex-wrap">
      <div className="flex flex-wrap mt-8 h-fit ml-24 mr-24 flex-row">
        <img
          src={product.img}
          alt={product.name}
          className="w-auto h-96 mt-4 rounded-lg flex-shrink-0"
          style={{ float: 'left' }}
        />

        <div className="items-center justify-center md:ml-10 text-center mt-7 w-fit sm:w-1/2 mb-16 h-fit">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="pt-8">
            Each formulation is crafted with care using the finest ingredients <br /> to ensure your complexion feels radiant and rejuvenated.
          </p>
          <p className="pt-9 font-bold text-2xl">{product.price}</p>
          <p className="flex items-center justify-center pt-9">
            1 <img src={plus} className="items-center pl-3" alt="plus" />
          </p>

          <div className="pt-9 flex items-center justify-center mt-9 gap-3">
            <button className="bg-white font-blue-400 rounded-4xl border border-slate-500 w-36 h-11 rounded-full">
              Add to cart
            </button>
            <button className="bg-blue-400 text-white border border-blue-400 w-36 h-20 rounded-3xl" onClick={addToCart}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <a href="/" className="text-blue-500">&larr; Continue Shopping</a>
    </div>
  );
};

export default ProductDescription;
