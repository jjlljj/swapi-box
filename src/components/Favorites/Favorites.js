import React from 'react';
import { arrayOf, func, object } from 'prop-types';
import './Favorites.css';
import Card from '../Card/Card';

const Favorites = ({ cards, addToFav }) => {

  const renderedCards = cards.map(card => {
    return (<Card card={card} addToFav={addToFav} key={card.name}/>);
  });

  return (
    <div className="card-container"> 
      { 
        cards &&
        renderedCards
      }
    </div>
  );
};

Favorites.propTypes = {
  addToFav: func,
  cards: arrayOf(object)
};

export default Favorites;
