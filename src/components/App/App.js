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
      people: null,
      planets: null,
      vehicles: null
    };
  }

  async componentDidMount() {
    const openingScroll = await getScroll()
    let { people, planets, vehicles } = this.lastFromSto()

    people = people || await getPeople()
    planets = planets || await getPlanets()
    vehicles = vehicles || await getVehicles()
    
    this.setState({ openingScroll, people, planets, vehicles }, ()=> {
      console.log(this.state)
    } )

  }

  dataToSto({ people, planets, vehicles }) {
    const toSet = JSON.stringify({ people, planets, vehicles })
    localStorage.setItem('swapiData', toSet)
  }

  lastFromSto() {
    const swapiData = localStorage.getItem('swapiData')
    const { people, planets, vehicles } = JSON.parse(swapiData) || this.state 

    return { people, planets, vehicles }
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
