/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Vehicles from './Vehicles';

describe('Vehicles', () => {

  let renderedComponent
  let mockFetchData
  const mockCards = [
    {
      Model: "Digger Crawler",
      Passengers: "30",
      "Vehicle Class": "wheeled",
      cardType: "vehicles",
      name: "Sand Crawler"
    },
    {
      Model: "T-16 skyhopper",  
      Passengers: "1",
      "Vehicle Class": "repulsorcraft",
      cardType: "vehicles",
      name: "T-16 skyhopper"
    }
  ]

  beforeEach(()=> {
    mockFetchData = jest.fn()
    renderedComponent = shallow(<Vehicles cards={mockCards} fetchData={ mockFetchData } />)
  })

  it('should match snapshot when passed mock cards', () => {

    expect(renderedComponent).toMatchSnapshot()
  })

  it('should match snapshot when passed only one card', () => {
   const mockCard = [
     {
        Model: "T-16 skyhopper",  
        Passengers: "1",
        "Vehicle Class": "repulsorcraft",
        cardType: "vehicles",
        name: "T-16 skyhopper"
      }
    ]

    renderedComponent = shallow(<Vehicles cards={mockCard} fetchData={mockFetchData} />)

    expect(renderedComponent).toMatchSnapshot()
  })

  it('should call fetchData func passed when no cards are passed', () => {

    expect(mockFetchData).not.toHaveBeenCalled()

    renderedComponent = shallow(<Vehicles cards={undefined} fetchData={mockFetchData}/>)

    expect(mockFetchData).toHaveBeenCalled()
  })

})
