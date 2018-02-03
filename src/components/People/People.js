import React, { Component } from 'react';
import propTypes from 'prop-types';
import './People.css';
import Card from '../Card/Card';

class CardContainer extends Component {
  constructor(props) {
    super()
    this.state ={ 
      cards: []
    }
  }
   
  async componentDidMount() {
    let cards = this.props.cards
    this.setState({ cards })
  }

  renderCards() {
    return this.state.cards.map(card => {
            return (<Card card={card} />)
          })
  }

  render() {
    

    return (
      <div> 
        { 
          this.state.cards &&
          this.renderCards()
        }
      </div>
    );
  }
};

export default CardContainer;
