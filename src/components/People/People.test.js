/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import People from './People';

describe('People', () => {

  let renderedComponent
  let mockFetchData
  let mockAddFavorite
  const mockCards = [
    {
      Homeword: "Tatooine",
      Population: "200000",
      Species: "Droid",
      cardType: "people",
      name: "R5-D4"
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
    mockFetchData = jest.fn()
    renderedComponent = shallow(<People cards={mockCards} fetchData={ mockFetchData } addToFav={mockAddFavorite} />)
  })

  it('should pass snapshot when passed cards', () => { 
    expect(renderedComponent).toMatchSnapshot() 
  })

  it('should pass snapshot when passed a single card', () => {
    const mockCard = [
      {
        Homeword: "Tatooine",
        Population: "200000",
        Species: "Human",
        cardType: "people",
        name: "Beru Whitesun lars"
      }
    ]

    renderedComponent = shallow(<People cards={mockCard} fetchData={ mockFetchData } addToFav={mockAddFavorite} />)

    expect(renderedComponent).toMatchSnapshot()
  })

   it('should call fetchData func passed when no cards are passed', () => {

    expect(mockFetchData).not.toHaveBeenCalled()

    renderedComponent = shallow(<People cards={undefined} fetchData={mockFetchData} addToFav={mockAddFavorite}/>)

    expect(mockFetchData).toHaveBeenCalled()
  })

})
