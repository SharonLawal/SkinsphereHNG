// src/components/Nav.jsx (Update this file with search input)
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react'; // Import Search icon
import SkinsphereLogo from '../assets/Skinsphere.png';
import { navLinks } from '../constants/index';
import { useProductContext } from '../constants/ProductContext'; // Import useProductContext

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, searchQuery, setSearchQuery } = useProductContext(); // Get cart and search state
  const navigate = useNavigate();

  const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Optionally navigate to a search results page immediately
    if (e.target.value && window.location.pathname !== '/search') {
      navigate('/search');
    } else if (!e.target.value && window.location.pathname === '/search') {
        navigate('/'); // Go back to home if search is cleared on search page
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (searchQuery) {
      navigate('/search'); // Navigate to search results page
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md animate-slide-down">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={SkinsphereLogo} alt="Skinsphere Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Bar (Desktop & Mobile) */}
        <form onSubmit={handleSearchSubmit} className="relative flex items-center max-w-sm flex-grow mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 text-sm"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Search className="absolute left-3 text-gray-400 w-5 h-5" />
        </form>

        {/* Cart Icon & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative text-gray-700 hover:text-blue-500 transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {totalItemsInCart > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItemsInCart}
              </span>
            )}
          </Link>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-700 hover:text-blue-500">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100 animate-drawer-open-left' : '-translate-y-full opacity-0 animate-drawer-close-left'
      }`}>
        <ul className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-blue-500 font-medium text-lg block py-2"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;