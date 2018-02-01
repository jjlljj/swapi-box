/* eslint-disable */

import { fetchApi, getScroll, randomNum, getPeople, getPeopleData, getWorldData, getSpeciesData, getPlanets, getPlanetData, getResidents, getVehicles, getVehicleData } from './dataHelper.js'

describe('fetchApi', () => {

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ results: 'Returned results' })
    }))

  it('calls fetch with the correct params', () => {
   const url = 'https://swapi.co/api/films/1'
   const expectParams = ['https://swapi.co/api/films/1']

    fetchApi(url)
    expect(window.fetch).toHaveBeenCalledWith(...expectParams)
  })

})

describe('randomNum', () => {
  it('should take a number and return a random beteen 0 and that number', () => {
    const random = randomNum(7)
    const numArray = [ 1, 2, 3, 4, 5, 6, 7 ]
    expect(numArray.includes(random)).toEqual(true)

  })
})


describe('getScroll', () => {

  let mockMovieData

  beforeAll(() => {
    mockMovieData = {
      "title": "A New Hope", 
      "episode_id": 4, 
      "opening_crawl": "It is a period of civil war...", 
    }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve( mockMovieData )
      })
    )
  })

  it('should call the fetch in fetchApi', () => {
    getScroll()

    expect(window.fetch()).toHaveBeenCalled
  })

  it('should return the expected formatted movie data', async () => {
    const movieResults = await getScroll()
    const expected = {
      title: "A New Hope",
      episode: 'Episode IV',
      text: "It is a period of civil war..."
    }
    
    expect(movieResults).toEqual(expected)
  })

})

describe('getSpeciesData', () => {

  let url
  let mockSpeciesData

  beforeAll(() => {
    url = 'https://swapi.co/api/species/1/'
    mockSpeciesData = {"name": "Human", 
        "classification": "mammal"}

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(
          mockSpeciesData
        )
      })
    )
  })

  it('should call the fetch in fetchApi with the correct params', async () => {
    getSpeciesData(url)
    
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should return the expected species name', async () => { 
    const speciesResult = await getSpeciesData(url)
    
    expect(speciesResult).toEqual('Human')
  })
})

describe('getWorldData', () => {

  let url
  let mockWorldData

  beforeAll(() => {
    url = 'https://swapi.co/api/planets/1/'
    mockWorldData = {
      "name": "Tatooine", 
      "rotation_period": "23", 
      "orbital_period": "304", 
      "diameter": "10465", 
      "climate": "arid", 
      "gravity": "1 standard", 
      "terrain": "desert", 
      "surface_water": "1", 
      "population": "200000", 
    }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve( mockWorldData )
      })
    )
  })

  it('should call the fetchApi function with the correct param', () => {
    getWorldData(url)
    
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should return the expected homeworld data', async () => { 
    const worldResult = await getWorldData(url)
    const expected = { world: "Tatooine", population: "200000"}
    
    expect(worldResult).toEqual(expected)
  })

})

describe('getPeopleData', () => {

  let url
  let mockPeopleData = {}

  beforeAll(() => {
    url = 'https://swapi.co/api/people/1/'

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve( mockPeopleData )
      })
    )
  })

  it('should not pass', () => {
    expect(false).toEqual(true)
  })

})

describe.skip('getPeople', () => {

  let url
  let mockPeople

  beforeAll(() => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve( mockPeople )
      })
    )
  })

  it('should not pass', () => {
    expect(false).toEqual(true)
  })

})


//  fetchAPi

// getScroll
//   randomNum

// getPeople
//   getPeopleData
//   getWorldData
//   getSpeciesData   V

// getPlanets
//   getPlanetData
//   getResidents


// getVehicles
//   getVehiclesData