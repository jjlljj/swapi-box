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
      vehicles: null,
    };
  }

  async componentDidMount() {
    let openingText = undefined
    try {
      openingText = await getScroll()
    } catch(er) { 
      console.log(er)
    }

    this.setState({openingText}, async ()=> {
      let { people, planets, vehicles } = this.lastFromSto()
        
      people = people || await getPeople()
      planets = planets || await getPlanets()
      vehicles = vehicles || await getVehicles()

      this.setState({ people, planets, vehicles })
    })


    
    // this.dataToSto({ people, planets, vehicles })

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
        <Main 
          getPeople={this.getPeople}
          getPlanets={this.getPlanets}
          getVehicles={this.getVehicles}
          people={this.state.people}
         />
      </div>
    );
  }
}
        //<Welcome {...this.state.openingText}/>

export default App;
