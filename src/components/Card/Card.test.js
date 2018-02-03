/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {

  let mockAddFavorite
  const mockPlanetCard = {
    Climate: "murky",
    Population: "unknown",
    Residents: "",
    Terrain: "swamp, jungles",
    cardType: "planets",
    favorite: true,
    name: "Dagobah"
  }
  const mockPersonCard = {
    Homeword: "Tatooine",
    Population: "200000",
    Species: "Human",
    cardType: "people",
    name: "Beru Whitesun lars"
  }
  const mockVehicleCard = {
    Model: "T-16 skyhopper",  
    Passengers: "1",
    "Vehicle Class": "repulsorcraft",
    cardType: "vehicles",
    name: "T-16 skyhopper"
  }

  beforeEach(()=> {
    mockAddFavorite = jest.fn()
    renderedComponent = shallow(<Favorites cards={mockCards} addToFav={mockAddFavorite} />)
  })


  it('should not pass', () => {
    // const renderedComponent = shallow(<Card/>);

    expect(true).toEqual(false)
  })

})
