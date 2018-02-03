import React from 'react';
import { object, func } from 'prop-types';
import './Card.css';

const Card = ({ card, addToFav }) => {
  const cardKeys = Object.keys( card ).filter(item => {
    return !(item === "name" || item === "favorite" || item === "cardType");
  });

  const { name, favorite } = card;
  const classList = favorite ? 'favorite' : '';

  const favButton = (
    <button className={classList}
      onClick={() => { addToFav(card); }}>
      &#9734;
    </button>
  );

  const renderButton = addToFav ? favButton : "";

  const renderedContent = cardKeys.map( item => {
    return ( <li key={item}>{item}: {card[item]}</li> );
  });

  return (
    <div className="card"> 
      <h3>{name}</h3>
      { renderButton }
      <ul>
        { renderedContent }
      </ul>
    </div>
  );
};

Card.propTypes = {
  card: object,
  addToFav: func
};

export default Card;