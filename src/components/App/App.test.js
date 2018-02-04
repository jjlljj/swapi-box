/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

import dataHelper, { mockDataHelper } from '../../dataHelper/dataHelper';
jest.mock('../../dataHelper/dataHelper');

describe('App', () => {

  global.localStorage = {
    getItem(keyword) {
      if (!global.localStorage[keyword]) {
        return null;
      }
      return global.localStorage[keyword];
    },
    setItem(keyword, value) {
      global.localStorage[keyword] = value;
    }
  };

  describe('App state', () => {
    let renderedComponent

    beforeEach(() => {
      renderedComponent = shallow(<App />, {disableLifecycleMethods: true});
    })

    it('should match snapshot', () => {
      expect(renderedComponent).toMatchSnapshot()
    });

    it('should start with a default openingText state of an empty object', () => {
      expect(renderedComponent.state().openingText).toEqual({})
    })

    it('should start with a default people state of null', () => {
      expect(renderedComponent.state().people).toEqual(null)
    })

    it('should start with a default planets state of null', () => {
      expect(renderedComponent.state().people).toEqual(null)
    })

    it('should start with a default vehicles state of null', () => {
      expect(renderedComponent.state().vehicles).toEqual(null)
    })

    it('should start with a default favorites state of an empty array', () => {
      expect(renderedComponent.state().favorites).toEqual([])
    })

  })

  describe('onComponentDidMount', () => {
    let renderedComponent
    let mockMovieData

    beforeEach(() => {
      renderedComponent = shallow(<App />, {disableLifecycleMethods: true});

      mockMovieData = {
        "title": "A New Hope", 
        "episode_id": 4, 
        "opening_crawl": "It is a period of civil war...", 
      }

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve({ mockMovieData })
        })
      )
    })

    it('should fetch the movie data on componentDidMount', () => {
      expect(window.fetch).not.toHaveBeenCalled()
      renderedComponent = shallow(<App />);
      expect(window.fetch).toHaveBeenCalled()
    })

  })

  describe('LocalStorage', () => {

    let renderedComponent
    let mockData

    beforeAll(() => {
      renderedComponent = shallow(<App />, {disableLifecycleMethods: true});

      mockData = {
        people: 'array of people',
        planets: 'array of planets',
        vehicles: 'array of vehicles',
        favorites: 'array of favorites',
      }

      global.localStorage = {
        getItem(keyword) {
          if (!global.localStorage[keyword]) {
            return null;
          }
          return JSON.stringify(global.localStorage[keyword]);
        },
        setItem(keyword, value) {
          global.localStorage[keyword] = value;
        }
      };
    }) 
  
    it('dataToSto sends data to local storage', () => {
  
      renderedComponent.instance().dataToSto(mockData)
      const inStorage = JSON.parse(global.localStorage.getItem('swapiData'))

      expect(JSON.parse(inStorage)).toEqual(mockData)
    })

    it('lastFromSto gets data from storage', () => {
      global.localStorage.setItem('swapiData', mockData)

      const fromSto = renderedComponent.instance().lastFromSto()

      expect(fromSto).toEqual(mockData)
    })
  })

  describe('fetchPeople', () => {
    let renderedComponent

    beforeEach(() => {
      renderedComponent = shallow(<App />, {disableLifecycleMethods: true});

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve({  })
        })
      )
    })

    it('should call the fetch function with the expected param', () => {
      expect(window.fetch).not.toHaveBeenCalled()     

      renderedComponent.instance().fetchPeople()
      
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people/')
    })

    it('should set state', async () => {
      const expected = [
        {
          name: 'Luke skywalker',
          cardType: "people",
          Population: 10000,
          Species: 'human',
          Homeworld: "Tatooine",
        },
        {
          name: 'C-3PO',
          cardType: "people",
          Population: 3244,
          Species: 'droid',
          Homeworld: "somewhere",
        }
      ]

      await renderedComponent.instance().fetchPeople()
      renderedComponent.update()

      expect(renderedComponent.state().people).toEqual(expected)
    })

  })

  
});


// window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//           status: 200,
//           json: () => Promise.resolve({ results: 'Returned results' })
//     })
//   )
