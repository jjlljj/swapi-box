import React, { Component } from 'react';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header'
import { getScroll } from '../../dataHelper.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingScroll: {}
    };
  }

  async componentDidMount() {
    const openingScroll = await getScroll()
    this.setState({openingScroll})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <p> {this.state.openingScroll.text}</p>
      </div>
    );
  }
}

export default App;
