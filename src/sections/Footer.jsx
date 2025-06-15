import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import SkinsphereLogo from '../assets/Skinsphere.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-200 py-12 md:py-16 lg:py-20 animate-fade-in">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start lg:col-span-1 animate-slide-in-left">
            <img
              src={SkinsphereLogo}
              alt="Skinsphere Logo"
              className="w-32 mb-4 animate-pulse-subtle"
            />
            <p className="text-sm text-gray-400 mb-6 max-w-xs mx-auto md:mx-0">
              Discover your glow with Skinsphere. We are dedicated to providing high-quality skincare that truly cares for your skin.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                <Facebook className="w-7 h-7" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110">
                <Instagram className="w-7 h-7" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-300 transition-colors duration-300 transform hover:scale-110">
                <Twitter className="w-7 h-7" />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
                <Youtube className="w-7 h-7" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start lg:col-span-1 animate-slide-in-left animation-delay-200">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <a href="/about" className="py-1 text-gray-400 hover:text-white transition duration-300">About Us</a>
            <a href="/products" className="py-1 text-gray-400 hover:text-white transition duration-300">Shop All Products</a>
            <a href="/cart" className="py-1 text-gray-400 hover:text-white transition duration-300">Your Cart</a>
            <a href="/contact" className="py-1 text-gray-400 hover:text-white transition duration-300">Contact Us</a>
            <a href="/search" className="py-1 text-gray-400 hover:text-white transition duration-300">Search</a>
          </div>

          <div className="flex flex-col items-center md:items-start lg:col-span-1 animate-slide-in-right animation-delay-200">
            <h3 className="text-xl font-semibold text-white mb-4">Customer Service</h3>
            <a href="/privacy" className="py-1 text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
            <a href="/terms" className="py-1 text-gray-400 hover:text-white transition duration-300">Terms & Conditions</a>
            <a href="/shipping" className="py-1 text-gray-400 hover:text-white transition duration-300">Shipping Info</a>
            <a href="/returns" className="py-1 text-gray-400 hover:text-white transition duration-300">Returns & Exchange</a>
            <a href="/faq" className="py-1 text-gray-400 hover:text-white transition duration-300">FAQ</a>
          </div>

          <div className="flex flex-col items-center md:items-start lg:col-span-1 animate-slide-in-right">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <div className="flex items-center py-1 text-gray-400">
              <Mail className="w-5 h-5 mr-3 text-blue-400" />
              <span>info@skinsphere.com</span>
            </div>
            <div className="flex items-center py-1 text-gray-400">
              <Phone className="w-5 h-5 mr-3 text-blue-400" />
              <span>+234 801 234 5678</span>
            </div>
            <div className="flex items-start py-1 text-gray-400">
              <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400" />
              <span>123 Glow Avenue, Lagos, Nigeria</span>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Mon-Fri, 9 AM - 5 PM WAT
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500 animate-fade-in">
          <p>&copy; {currentYear} Skinsphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;