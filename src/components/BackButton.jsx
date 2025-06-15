import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={goBack}
      className="inline-flex items-center justify-center p-2 rounded-full text-zinc-700 bg-white shadow-md hover:bg-gray-100 hover:text-blue-500 transition-all duration-300 ease-in-out group animate-pop-in"
      aria-label="Go back"
    >
      <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-200" />
      <span className="sr-only">Back</span>
    </button>
  );
};

export default BackButton;