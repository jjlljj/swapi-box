import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Favorites.css';
import Card from '../Card/Card';

const Favorites = ({ cards, addToFav }) => {

  const renderedCards = cards.map(card => {
    return (<Card card={card} addToFav={addToFav}/>)
  })

  return (
    <div className="card-container"> 
      { 
        cards &&
        renderedCards
      }
    </div>
  );
};

export default Favorites;
