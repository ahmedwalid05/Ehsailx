import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="dual-ring-container">
      <div className="lds-dual-ring" />
    </div>
  );
};

export default LoadingSpinner;
