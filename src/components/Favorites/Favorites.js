import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Favorites.css';
import Card from '../Card/Card';

class Planets extends Component {

  renderCards() {
    return this.props.cards.map(card => {
            return (<Card card={card} />)
    })
  }

  render() {
    return (
      <div className="card-container"> 
        { 
          this.props.cards &&
          this.renderCards()
        }
      </div>
    );
  }
};

export default Planets;
