// src/sections/Search.jsx
import React from 'react';
// import SearchIcon from '../assets/carbon_search.png'; // Recommending replacing with an SVG icon
import { Search as SearchLucide } from 'lucide-react'; // Using lucide-react for the search icon

const Search = () => {
  return (
    <div className="flex justify-center items-center py-8 md:py-12 px-4 animate-fade-in animation-delay-900">
      <div className="relative w-full max-w-xl"> {/* Added max-w-xl for better control on large screens */}
        {/* Using Lucide icon, or you can keep your image and style it */}
        <SearchLucide className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-zinc-500" />
        {/* <img
          src={SearchIcon}
          alt="Search icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-zinc-500"
        /> */}
        <input
          type="text"
          placeholder="Search for products..."
          className="pl-10 pr-4 py-3 border-2 border-zinc-300 rounded-full w-full text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 ease-in-out shadow-sm"
          aria-label="Search products"
        />
      </div>
    </div>
  );
};

export default Search;