/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Planets from './Planets';

describe('Planets', () => {

  let renderedComponent
  let mockFetchData
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
      Climate: "temperate, tropical", 
      Population: "1000",
      Residents: "",
      Terrain: "jungle, rainforests",
      cardType: "planets",
      favorite: true,
      name: "Yavin IV"
    }
  ]

  beforeEach(()=> {
    mockFetchData = jest.fn()
    renderedComponent = shallow(<Planets cards={mockCards} fetchData={ mockFetchData } addToFav={mockAddFavorite} />)
  })

  it('should pass snapshot when passed cards', () => { 
    expect(renderedComponent).toMatchSnapshot() 
  })

  it('should pass snapshot when passed a single card', () => {
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

    renderedComponent = shallow(<Planets cards={mockCard} fetchData={ mockFetchData } addToFav={mockAddFavorite} />)

    expect(renderedComponent).toMatchSnapshot()
  })

  it('should call fetchData func passed when no cards are passed', () => {

    expect(mockFetchData).not.toHaveBeenCalled()

    renderedComponent = shallow(<Planets cards={undefined} fetchData={mockFetchData} addToFav={mockAddFavorite}/>)

    expect(mockFetchData).toHaveBeenCalled()
  })


})
