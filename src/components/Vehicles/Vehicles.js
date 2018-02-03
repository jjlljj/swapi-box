import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Vehicles.css';
import Card from '../Card/Card';

class Vehicles extends Component {
   
  async componentDidMount() {
    if (!this.props.cards) this.props.fetchData()
  }

  renderCards() {
    const {  cards } = this.props
    return cards.map(card => {
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

export default Vehicles;
