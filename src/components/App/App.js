import React, { Component } from 'react';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header'
import { getScroll, getPeople, getPlanets, getVehicles } from '../../dataHelper/dataHelper.js'
import Welcome from '../Welcome/Welcome'
import Card from '../Card/Card'

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingText: {},
      people: null,
      planets: null,
      vehicles: null
    };
  }

  async componentDidMount() {
    //const openingText = await getScroll()

    let { people, planets, vehicles } = this.lastFromSto()

    people = people || await getPeople()
    planets = planets || await getPlanets()
    vehicles = vehicles || await getVehicles()
    
    // this.dataToSto({ people, planets, vehicles })
    this.setState({ people, planets, vehicles })

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
        { this.state.planets &&
        <Card card={this.state.planets[0]} />
        }
        <Main />
      </div>
    );
  }
}
        //<Welcome {...this.state.openingText}/>

export default App;
