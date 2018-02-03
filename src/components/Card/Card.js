import React from 'react';
import propTypes from 'prop-types';
import './Card.css';

const Card = ({ card }) => {
  const cardKeys = Object.keys( card ).filter(item => !(item === "name" || item === "favorite"))
  const { name, favorite } = card

  const renderedContent = cardKeys.map( key => {
    return ( <li>{key}: {card[key]}</li>)
  })

  return (
    <div className="card"> 
      <h3>{name}</h3>
      <button>FAV</button>
      <ul>
        { renderedContent }
      </ul>
    </div>
  );
};

export default Card;