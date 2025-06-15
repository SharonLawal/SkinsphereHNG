import React, { useState, useEffect } from 'react';
import inProgress from '../assets/inProgress.png';
import { CheckCircle } from 'lucide-react';

const PaymentInProcess = () => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 animate-fade-in">
      {!isComplete ? (
        <div className="flex flex-col items-center animate-pulse">
          <div className="w-32 h-32 sm:w-40 sm:h-40 relative">
            <img src={inProgress} alt="Payment in Process" className="w-full h-full object-contain animate-spin-slow" />
            <div className="absolute inset-0 flex items-center justify-center"></div>
          </div>
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-gray-700">Payment in Process...</p>
          <p className="text-gray-500 text-sm mt-2">Please do not close this window.</p>
        </div>
      ) : (
        <div className="flex flex-col items-center animate-scale-up">
          <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center text-green-500">
            <CheckCircle className="w-full h-full animate-pop-in" />
          </div>
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-green-600">Payment Complete!</p>
          <p className="text-gray-500 text-sm mt-2">Thank you for your purchase.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentInProcess;