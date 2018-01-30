import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
   
    }
  }

  render() {
    return (
      <div className="App">
        <CardContainer />
      </div>
    );
  }
}

export default App;
