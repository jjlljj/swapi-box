import React from 'react';
import propTypes from 'prop-types';
import './Card.css';

const Card = ({ card }) => {
  const cardKeys = Object.keys( card ).filter(item => item !== "name")
  console.log(cardKeys)

  const renderedContent = cardKeys.map( key => {
    return ( <li>{key}: {card[key]}</li>)
  })

  return (
    <div className="card"> 
      <h3>{card.name}</h3>
      <ul>
        { renderedContent }
      </ul>
    </div>
  );
};

export default Card;
