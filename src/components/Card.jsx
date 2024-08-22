//Card Loading, and click events with spinner.

import React, { useState } from 'react';
import Spinner from './Spinner'; // Create a simple spinner component

const Card = ({ card, index, moveCard, onClick }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => setLoading(false);

  return (
    <div
      ref={drag}
      style={{
        position: 'relative',
        width: '200px',
        margin: '10px',
        display: 'inline-block',
        cursor: 'move',
      }}
      onClick={() => onClick(card)}
    >
      {loading && <Spinner />}
      <img
        src={card.thumbnail}
        alt={card.title}
        onLoad={handleImageLoad}
        style={{ width: '100%', display: loading ? 'none' : 'block' }}
      />
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        background: 'rgba(0,0,0,0.5)',
        color: 'white',
        textAlign: 'center'
      }}>
        {card.title}
      </div>
    </div>
  );
};

