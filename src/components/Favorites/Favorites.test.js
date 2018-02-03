/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Favorites from './Favorites';

describe('Favorites', () => {

  let renderedComponent
  let mockAddFavorite
  const mockCards = [
    {
      Climate: "murky",
      Population: "unknown",
      Residents: "",
      Terrain: "swamp, jungles",
      cardType: "planets",
      favorite: true,
      name: "Dagobah"
    },
    {
      Homeword: "Tatooine",
      Population: "200000",
      Species: "Human",
      cardType: "people",
      name: "Beru Whitesun lars"
    }
  ]

  beforeEach(()=> {
    mockAddFavorite = jest.fn()
    renderedComponent = shallow(<Favorites cards={mockCards} addToFav={mockAddFavorite} />)
  })

  it('should match snapshot when passed cards', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should match snapshot when passed only one card', () => {
    const mockCard = [
      {
        Climate: "temperate, tropical", 
        Population: "1000",
        Residents: "",
        Terrain: "jungle, rainforests",
        cardType: "planets",
        favorite: true,
        name: "Yavin IV"
      }
    ]

    renderedComponent = shallow(<Favorites cards={mockCard} addToFav={mockAddFavorite} />)

    expect(renderedComponent).toMatchSnapshot()
  })

})
