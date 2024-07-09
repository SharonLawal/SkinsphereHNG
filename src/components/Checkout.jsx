import React from 'react';
import { useNavigate } from 'react-router-dom';
import paypal from '../assets/paypal.png';
import img3 from '../assets/img3.png';

const Checkout = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/payment');
  };

  return (
    <div>
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex justify-between space-x-64">
        <div className=" p-4">
          <h2 className="text-2xl font-semibold mb-4">Customer info</h2>
          <input className="block w-full p-2 rounded-full border-2 mb-4" type="text" placeholder="First Name" />
          <input className="block w-full p-2 rounded-full border-2 mb-4" type="text" placeholder="Surname" />
          <input className="block w-full p-2 rounded-full border-2 mb-4" type="email" placeholder="Email" />
          <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
          <input className="block w-full p-2 rounded-full border-2 mb-4" type="text" placeholder="First Name" />
          <h2 className="text-2xl font-semibold mb-4">Payment</h2>
          <div className="flex items-center mb-4">
            <input type="radio" name="payment" id="debit" className="mr-2" />
            <label htmlFor="debit" className="mr-4">Debit Card</label>
            <input type="radio" name="payment" id="paypal" className="mr-2" />
            <label htmlFor="paypal" className="flex"><img src={paypal}/></label>
          </div>
          <input className="block w-full p-2 rounded-full border-2 mb-4" type="text" placeholder="Card Number" />
          <input className="block w-full p-2 rounded-full border-2 mb-4" type="text" placeholder="Card Name" />
          <input className="block w-full p-2 rounded-full border-2 mb-4" type="text" placeholder="Card Date" />
          <input className="block w-full p-2 rounded-full border-2 mb-4" type="text" placeholder="CVV" />
          <div className="flex items-center mb-4">
            <input type="radio" name="billing" id="same" className="mr-2" />
            <label htmlFor="same" className="mr-4">Same as shipping</label>
            <input type="radio" name="billing" id="different" className="mr-2" />
            <label htmlFor="different">Use a different address</label>
          </div>
        </div>
        <div className="p-4 shadow-lg h-fit border-2">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className=" p-4 mb-4 w-fit">
            <div className="flex justify-between border-2 p-4 items-center mb-4 gap-7">
              <img className="w-16 h-16" src={img3} alt="Product rounded-custom" />
              <span>La Rosay Sunscreen set</span>
              <span>#52,000</span>
              <span className="flex items-center">
                <button className="text-blue-400">-</button>
                <span className="mx-2">1</span>
                <button className="text-blue-400">+</button>
                <button className="ml-4 text-pink-800">x</button>
              </span>
            </div>
            <div className="flex justify-between border-2 p-4 items-center mb-4 gap-7">
              <img className="w-16 h-16" src={img3} alt="Product" />
              <span>La Rosay Sunscreen set</span>
              <span>#52,000</span>
              <span className="flex items-center">
                <button className="text-blue-400">-</button>
                <span className="mx-2">1</span>
                <button className="text-blue-400">+</button>
                <button className="ml-4 text-pink-800">x</button>
              </span>
            </div>
            <div className="flex justify-between border-2 p-4 items-center mb-4 gap-7">
              <img className="w-16 h-16" src={img3} alt="Product" />
              <span>La Rosay Sunscreen set</span>
              <span>#52,000</span>
              <span className="flex items-center">
                <button className="text-blue-400">-</button>
                <span className="mx-2">1</span>
                <button className="text-blue-400">+</button>
                <button className="ml-4 text-pink-800">x</button>
              </span>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <span>SubTotal</span>
            <span className="text-neutral-500">#143,000.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping (2 to 4 Business Days)</span>
            <span className="text-neutral-500">#5,000.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Tax</span>
            <span className="text-neutral-500">#600.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span className="font-bold">#148,600.00</span>
          </div>
        </div>
      </div>
      </div>
      <div className="flex m-8">
        <div className="flex-col"><button className="text-blue-500 p-2 mt-4">&larr; Continue Shopping</button></div>
          <button 
            className="bg-blue-400 text-white p-2 h-16 w-56 rounded-full ml-auto" 
            onClick={handlePayment}
          >
            Proceed to Pay
          </button>
        </div>
    </div>
  );
};

export default Checkout;
