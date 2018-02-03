import React from 'react';
import propTypes from 'prop-types';
import './Card.css';

const Card = ({ card, addToFav }) => {
  const cardKeys = Object.keys( card ).filter(item => !(item === "name" || item === "favorite"))
  const { name, favorite } = card

  const favButton = (<button
                      onClick={() => { addToFav(card) }}>
                      &#9734;
                    </button>)

  const renderButton = addToFav ? favButton : ""

  const renderedContent = cardKeys.map( key => {
    return ( <li>{key}: {card[key]}</li>)
  })

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

export default Card;