import React, { Component } from 'react';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header'
import { getScroll, getPeople, getPlanets, getVehicles } from '../../dataHelper.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingScroll: {},
      people: [],
      planets: [],
      vehicles: []
    };
  }

  async componentDidMount() {
    //const openingScroll = await getScroll()
    //const people = await getPeople()
    const planets = await getPlanets()
    const vehicles = await getVehicles()
    this.setState({ planets, vehicles})

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
