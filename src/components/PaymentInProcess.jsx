import React, { useState, useEffect } from 'react';
import inProgress from '../assets/inProgress.png';
import complete from '../assets/complete.png';

const PaymentInProcess = () => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!isComplete ? (
        <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full animate-spin">
                <img src={inProgress} alt="Payment in Process" />
            </div>
            <div className="mt-4">
            <   span className="text-xl font-semibold">Payment in Process</span>
            </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
            <div className="w-40 h-40">
                <img src={complete} alt="Payment Complete" />
            </div>
            <div className="mt-4">
                <span className="text-xl font-semibold">Payment Complete</span>
            </div>
        </div>
      )}
    </div>
  );
};

export default PaymentInProcess;
