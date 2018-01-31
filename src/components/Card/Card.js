import React from 'react';
import propTypes from 'prop-types';
import './Card.css';

const Card = (card) => {
  const cardKeys = Object.keys( card )
  

  return (
    <div> 
      <h3>{card.name}</h3>
      <ul>
        { renderedContent }
      </ul>
    </div>
  );
};

export default Card;
