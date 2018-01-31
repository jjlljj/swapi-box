import React, { Component } from 'react';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header'
import { getScroll, getPeople, getPlanets } from '../../dataHelper.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingScroll: {},
      people: []
    };
  }

  async componentDidMount() {
    //const openingScroll = await getScroll()
    //const people = await getPeople(2)
    //const planets = await getPlanets()
    //this.setState({openingScroll, people})

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
