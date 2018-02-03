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
      favorites: [],
    };
  }

  async componentDidMount() {
    let openingText = undefined
    try {
      openingText = await getScroll()
    } catch(er) { 
      console.log(er)
    }

    this.setState({openingText}, () => {
      let { people, planets, vehicles, favorites } = this.lastFromSto()

      this.setState({ people, planets, vehicles, favorites })
    })
  }

  dataToSto({ people, planets, vehicles, favorites }) {
    const toSet = JSON.stringify({ people, planets, vehicles, favorites })
    localStorage.setItem('swapiData', toSet)
  }

  lastFromSto() {
    const swapiData = localStorage.getItem('swapiData')
    const { people, planets, vehicles, favorites } = JSON.parse(swapiData) || this.state 

    return { people, planets, vehicles, favorites }
  }

  fetchPeople = async () => {
    const people = await getPeople()
    this.setState({ people }, () => {
      this.dataToSto(this.state)
    })
  }

  fetchPlanets = async () => {
    const planets = await getPlanets()
    this.setState({ planets }, () => {
      this.dataToSto(this.state)
    })
  }

  fetchVehicles = async () => {
    const vehicles = await getVehicles()
    this.setState({ vehicles }, () => {
      this.dataToSto(this.state)
    })
  }

  manageFavorites = (card) => {
    const { favorites } = this.state 
    const nonDuplicates = favorites ? favorites.filter(fav => fav.name !== card.name) : []

    card.favorite = !card.favorite

    const newFavorites = nonDuplicates.length === favorites.length ? [ card, ...nonDuplicates ] : nonDuplicates

    this.setState({ favorites:  newFavorites }, () => {
      this.dataToSto(this.state)
    })
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Main 
          fetchPeople={this.fetchPeople}
          fetchPlanets={this.fetchPlanets}
          fetchVehicles={this.fetchVehicles}
          addToFav={this.manageFavorites}
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles}
          favorites={this.state.favorites}
         />
      </div>
    );
  }
}

export default App;
