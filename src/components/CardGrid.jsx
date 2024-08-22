// src/components/CardGrid.jsx
import React, { useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const Card = ({ card, index, moveCard, onClick }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { index },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: '200px',
        margin: '10px',
        display: 'inline-block',
        cursor: 'move',
        background: `url(${card.thumbnail}) no-repeat center center`,
        backgroundSize: 'cover',
        height: '150px',
        color: 'white',
        textAlign: 'center',
        lineHeight: '150px',
        fontSize: '20px',
        position: 'relative'
      }}
      onClick={() => onClick(card)}
    >
      {card.title}
    </div>
  );
};

const CardGrid = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetch('/static/data.json')
      .then(response => response.json())
      .then(data => setCards(data));
  }, []);

  const moveCard = (fromIndex, toIndex) => {
    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(fromIndex, 1);
    updatedCards.splice(toIndex, 0, movedCard);
    setCards(updatedCards);
  };

  const handleCardClick = card => {
    setSelectedCard(card);
  };

  const handleOverlayClose = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      {selectedCard && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={handleOverlayClose}
        >
          <img
            src={selectedCard.thumbnail}
            alt={selectedCard.title}
            style={{ maxHeight: '80%', maxWidth: '80%' }}
          />
        </div>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            moveCard={moveCard}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
