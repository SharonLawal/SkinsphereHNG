import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink and useNavigate
import cartImage from '../assets/Cart.png';
import S from '../assets/S.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Lock scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Function to navigate to Links page
  const goToLinks = () => {
    navigate('/links'); // Navigate to the Links page route
    setIsOpen(false); // Close the menu after navigation
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <>
      {/* Navigation Menu */}
      <nav className="bg-white shadow-lg w-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img src={S} alt="Logo" className="h-8" />
            </div>

            {/* Desktop Menu Links */}
            <div className="hidden lg:flex lg:items-center lg:ml-10">
              <NavLink to="/" className="hover:text-gray-300" activeClassName="text-blue-500">Store</NavLink>
              <NavLink to="/about" className="ml-4 hover:text-gray-300" activeClassName="text-blue-500">About</NavLink>
              <NavLink to="/contact" className="ml-4 hover:text-gray-300" activeClassName="text-blue-500">Contact</NavLink>
            </div>

            <div className="hidden lg:block">
              <button className="bg-blue-400 w-20 h-12 py-3 px-6 rounded-2xl">
                <img src={cartImage} alt="Cart" />
              </button>
            </div>

            {/* Hamburger Menu Button - Mobile/Tab View */}
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={goToLinks} // Directly navigate to Links.jsx
                className="inline-flex p-2 text-black focus:outline-none focus:text-black"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content (Only Menu Links and Footer) */}
      <main className={`lg:flex ${isOpen ? "hidden" : "flex"}`}>
        {/* Insert your main content here */}
      </main>
    </>
  );
};

export default Nav;
