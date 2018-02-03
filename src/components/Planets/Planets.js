import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Planets.css';
import Card from '../Card/Card';

class Planets extends Component {
   
  async componentDidMount() {
    if (!this.props.cards) this.props.fetchData()
  }

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
