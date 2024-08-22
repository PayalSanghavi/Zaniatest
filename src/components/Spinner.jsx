//Spinner Component

import React from 'react';

const Spinner = () => (
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '4px solid rgba(0,0,0,0.1)',
    borderRadius: '50%',
    borderTop: '4px solid #3498db',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite'
  }}>
    <style>
      {`@keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }`}
    </style>
  </div>
);

export default Spinner;
