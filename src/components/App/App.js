import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import Card from '../Card/Card';

class App extends Component {
  constructor() {
    super()
    this.state = {
   
    }
  }

  render() {
    return (
      <div className="App">
        this is app
        <CardContainer />
        <Card />
      </div>
    );
  }
}

export default App;
