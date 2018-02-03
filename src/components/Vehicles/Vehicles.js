import React, { Component } from 'react';
import { arrayOf, object, func } from 'prop-types';
import './Vehicles.css';
import Card from '../Card/Card';

class Vehicles extends Component {
   
  async componentDidMount() {
    if (await !this.props.cards) this.props.fetchData();
  }

  renderCards() {
    const {  cards } = this.props;
    return cards.map(card => {
      return (<Card card={card} key={card.name} />);
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

Vehicles.propTypes = {
  cards: arrayOf(object),
  fetchData: func
};

export default Vehicles;
