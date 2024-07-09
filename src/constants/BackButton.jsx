// BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <button onClick={goBack}>
      &larr;
    </button>
  );
};

export default BackButton;
