import React, { Component } from 'react';
import { func, arrayOf, object } from 'prop-types';
import './People.css';
import Card from '../Card/Card';

class People extends Component {
   
  async componentDidMount() {
    if (!this.props.cards) this.props.fetchData();
  }

  renderCards() {
    const { addToFav, cards } = this.props;
    return cards.map(card => {
      return (<Card card={card} addToFav={ addToFav } key={ card.name }/>);
    });
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
}

People.propTypes = {
  addToFav: func,
  fetchData: func,
  cards: arrayOf(object)
};

export default People;