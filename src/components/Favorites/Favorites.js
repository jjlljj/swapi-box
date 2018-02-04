import React from 'react';
import { arrayOf, func, object } from 'prop-types';
import './Favorites.css';
import Card from '../Card/Card';

const Favorites = ({ cards, addToFav }) => {

  const renderedCards = cards.map(card => {
    return (<Card card={card} addToFav={addToFav} key={card.name}/>);
  });

  const noFavorites = ( <h3 className="no-fav">No Favorites Found</h3> );

  const rendered = cards.length ? renderedCards : noFavorites;

  return (
    <div className="card-container"> 
      {
        rendered
      }
    </div>
  );
};

Favorites.propTypes = {
  addToFav: func,
  cards: arrayOf(object)
};

export default Favorites;
