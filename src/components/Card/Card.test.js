/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {

  let mockAddFavorite
  let renderedComponent
  const mockPlanetCard = {
    Climate: "murky",
    Population: "unknown",
    Residents: "",
    Terrain: "swamp, jungles",
    cardType: "planets",
    favorite: false,
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
  })


  it('should match snapshot when rendering a planet card', () => {
    renderedComponent = shallow(<Card card={mockPlanetCard} addToFav={mockAddFavorite} />)
    
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should match snapshot when rendering a person card', () => {
    renderedComponent = shallow(<Card card={mockPersonCard} addToFav={mockAddFavorite} />)
    
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should match snapshot when rendering a vehicle card', () => {
    renderedComponent = shallow(<Card card={mockPersonCard} addToFav={mockAddFavorite} />)
    
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should match snapshot when the card is favorited', () => {
    const favoritePersonCard = {
      Homeword: "Tatooine",
      Population: "200000",
      Species: "Human",
      cardType: "people",
      favorite: true,
      name: "Beru Whitesun lars"
    }

    renderedComponent = shallow(<Card card={favoritePersonCard} addToFav={mockAddFavorite} />)
    
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should fire addToFav when it is favorited', () => {
    renderedComponent = mount(<Card card={mockPersonCard} addToFav={mockAddFavorite} />)
    
    expect(mockAddFavorite).not.toHaveBeenCalled()

    renderedComponent.props().addToFav()
    
    expect(mockAddFavorite).toHaveBeenCalled()
  })

})
