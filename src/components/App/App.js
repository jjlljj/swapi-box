import React, { Component } from 'react';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import { getScroll, 
  getPeople, 
  getPlanets, 
  getVehicles } from '../../dataHelper/dataHelper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingText: {},
      people: null,
      planets: null,
      vehicles: null,
      favorites: []
    };
  }

  async componentDidMount() {
    let openingText = undefined;
    try {
      openingText = await getScroll();
    } catch (er) {
      console.log(er)  //eslint-disable-line
    }

    this.setState({openingText}, () => {
      let { people, planets, vehicles, favorites } = this.lastFromSto();

      this.setState({ people, planets, vehicles, favorites });
    });
  }

  dataToSto({ people, planets, vehicles, favorites }) {
    const toSet = JSON.stringify({ people, planets, vehicles, favorites });
    localStorage.setItem('swapiData', toSet);
  }

  lastFromSto() {
    const swapiData = localStorage.getItem('swapiData');
    const { people, planets, vehicles, favorites } = JSON.parse(swapiData) 
      || this.state;

    return { people, planets, vehicles, favorites };
  }

  fetchPeople = async () => {
    const people = await getPeople();
    this.setState({ people }, () => {
      this.dataToSto(this.state);
    });
  }

  fetchPlanets = async () => {
    const planets = await getPlanets();
    this.setState({ planets }, () => {
      this.dataToSto(this.state);
    });
  }

  fetchVehicles = async () => {
    const vehicles = await getVehicles();
    this.setState({ vehicles }, () => {
      this.dataToSto(this.state);
    });
  }

  manageFavorites = (card) => {
    const { favorites } = this.state;
    const { name, cardType } = card;

    card.favorite = !card.favorite;

   // update favorited flag in original array
    const updatedOriginal = this.flagFavorite(card)

    // check favorites for duplicates
    // add or remove from favorites array
    const nonDuplicates = favorites && favorites.filter(fav => fav.name !== name);
    const newFavorites = nonDuplicates.length === favorites.length ? [card, ...nonDuplicates] : nonDuplicates;

    // set state
    this.setState({ favorites:  newFavorites, [cardType]: updatedOriginal }, () => {
      this.dataToSto(this.state);
    });
  }

  flagFavorite(card) {
    return this.state[card.cardType].map(stored => {
      if(stored.name === card.name)  { return card }
      return stored
    })
  }

  render() {
    let { openingText, people, planets, vehicles, favorites } = this.state;

    return (
      <div className="App">
        <Header favLength={favorites.length}/>
        <Main 
          fetchPeople={this.fetchPeople}
          fetchPlanets={this.fetchPlanets}
          fetchVehicles={this.fetchVehicles}
          addToFav={this.manageFavorites}
          openingText={openingText}
          people={people}
          planets={planets}
          vehicles={vehicles}
          favorites={favorites}
        />
      </div>
    );
  }
}

export default App;