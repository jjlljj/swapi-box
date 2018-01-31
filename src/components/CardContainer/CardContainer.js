import React, { Component } from 'react';
import propTypes from 'prop-types';
import './CardContainer.css';
import Card from '../Card/Card';

class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }

  async componentDidMount() {
    const cards = await this.props.fetchData()
    this.setState(cards)
  }

  render() {
    return (
      <div> 
        <Card />
      </div>
    );
  }
};

export default CardContainer;
