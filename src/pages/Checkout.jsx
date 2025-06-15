import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProductContext } from '../constants/ProductContext';
import { ChevronLeft } from 'lucide-react';
import paypal from '../assets/paypal.png';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useProductContext();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal > 0 ? 2500 : 0;
  const taxRate = 0.07;
  const calculatedTax = subtotal * taxRate;
  const grandTotal = subtotal + shippingCost + calculatedTax;

  const handlePayment = (e) => {
    e.preventDefault();

    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    clearCart();
    navigate('/payment');
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-64px)] animate-fade-in">
      <div className="mb-6 animate-slide-in-left">
        <button
          onClick={() => navigate('/cart')}
          className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200 text-lg font-medium"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to Cart
        </button>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center animate-slide-down">
        Checkout
      </h1>

      <form onSubmit={handlePayment} className="flex flex-col lg:flex-row justify-center gap-8">
        <div className="lg:w-1/2 p-6 bg-white rounded-lg shadow-md animate-slide-in-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Customer Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input className="form-input" type="text" placeholder="First Name" required />
            <input className="form-input" type="text" placeholder="Last Name" required />
            <input className="form-input col-span-full" type="email" placeholder="Email Address" required />
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input className="form-input" type="text" placeholder="Address Line 1" required />
            <input className="form-input" type="text" placeholder="Address Line 2 (Optional)" />
            <input className="form-input" type="text" placeholder="City" required />
            <input className="form-input" type="text" placeholder="State/Province" required />
            <input className="form-input" type="text" placeholder="Zip/Postal Code" required />
            <input className="form-input" type="text" placeholder="Country" required />
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Payment Method</h2>
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <label htmlFor="debit" className="flex items-center cursor-pointer">
              <input type="radio" name="paymentMethod" id="debit" className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500" defaultChecked required />
              <span>Debit/Credit Card</span>
            </label>
            <label htmlFor="paypal" className="flex items-center cursor-pointer">
              <input type="radio" name="paymentMethod" id="paypal" className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500" required />
              <img src={paypal} alt="PayPal" className="h-6 w-auto" />
            </label>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Card Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input className="form-input col-span-full" type="text" placeholder="Card Number" maxLength="16" required />
            <input className="form-input" type="text" placeholder="Card Holder Name" required />
            <input className="form-input" type="text" placeholder="MM/YY" maxLength="5" pattern="\d{2}/\d{2}" required />
            <input className="form-input" type="text" placeholder="CVV" maxLength="3" required />
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Billing Address</h2>
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <label htmlFor="same" className="flex items-center cursor-pointer">
              <input type="radio" name="billingAddress" id="same" className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500" defaultChecked required />
              <span>Same as shipping</span>
            </label>
            <label htmlFor="different" className="flex items-center cursor-pointer">
              <input type="radio" name="billingAddress" id="different" className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500" required />
              <span>Use a different address</span>
            </label>
          </div>
        </div>

        <div className="lg:w-1/3 p-6 bg-white rounded-lg shadow-md animate-slide-in-right h-fit sticky top-24">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Order Summary</h2>
          <div className="space-y-4 mb-8">
            {cart.length === 0 ? (
              <p className="text-gray-600">No items in cart for summary.</p>
            ) : (
              cart.map((item, index) => (
                <div key={item.id} className="flex items-center justify-between gap-4 p-3 border border-gray-200 rounded-md animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <img className="w-16 h-16 object-cover rounded-md flex-shrink-0" src={item.image} alt={item.name} />
                  <div className="flex-grow text-gray-800">
                    <p className="font-medium text-base line-clamp-1">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-semibold text-gray-900 text-base flex-shrink-0">₦{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))
            )}
          </div>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping (2 to 4 Business Days)</span>
              <span className="font-semibold text-gray-900">₦{shippingCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (7%)</span>
              <span className="font-semibold text-gray-900">₦{calculatedTax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-xl pt-4 border-t border-gray-200 mt-4">
              <span>Total</span>
              <span className="text-blue-600">₦{grandTotal.toLocaleString()}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 mt-8 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold animate-pulse-subtle"
          >
            Proceed to Pay
          </button>
        </div>
      </form>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-4 border-t border-gray-200">
        <Link
          to="/"
          className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200 mb-4 sm:mb-0 animate-slide-in-left"
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Checkout;