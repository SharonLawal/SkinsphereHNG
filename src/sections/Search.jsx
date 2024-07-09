import React from 'react';
import SearchIcon from '../assets/carbon_search.png';

const Search = () => {
  return (
    <div className="flex justify-center items-center md:h-24 pt-12 relative">
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <img
          src={SearchIcon}
          alt="Search icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-8"
        />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 border-2 border-zinc-300 p-2 rounded-3xl w-full text-black placeholder-neutral-900 text-base"
        />
      </div>
    </div>
  );
};

export default Search;
