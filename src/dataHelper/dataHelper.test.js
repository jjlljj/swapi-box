/* eslint-disable */

import { fetchApi, getScroll, randomNum, getPeople, 
  getPeopleData, getWorldData, getSpeciesData, getPlanets, 
  getPlanetData, getResidents, getVehicles, 
  getVehicleData } from './dataHelper.js'

describe('fetchApi', () => {
  
  let url

  beforeAll(() => {
    url = 'https://swapi.co/api/films/1'

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ results: 'Returned results' })
      })
    )
  })

  it('calls fetch with the correct params', () => {
   const expectParams = ['https://swapi.co/api/films/1']

    fetchApi(url)
    expect(window.fetch).toHaveBeenCalledWith(...expectParams)
  })

  it('should throw an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(
          status: 500,
        )
      })
    )

    expect(fetchApi(url)).rejects.toEqual(Error('Could not fetch data'))
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
        status: 200,
        json: () => Promise.resolve( mockMovieData )
      })
    )
  })

  it('should call the fetch in fetchApi', () => {
    getScroll()

    expect(window.fetch).toHaveBeenCalled()
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

  it('should catch errors', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject()
    )

    const movieResult = await getScroll()
    const expected = Error('Failed to fetch film')

    expect(movieResult).toEqual(expected)
  })

})

describe('getSpeciesData', () => {

  let url
  let mockSpeciesData

  beforeAll(() => {
    url = 'https://swapi.co/api/species/1/'
    mockSpeciesData = { "name": "Human", 
        "classification": "mammal" }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
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

  it('should catch errors', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise. reject())

    const speciesResult = await getSpeciesData(url)
    const expected = Error('Failed to get species data')

    expect(speciesResult).toEqual(expected)
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
        status: 200,
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

  it('should catch errors', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise. reject())

    const worldResult = await getWorldData(url)
    const expected = Error('Failed to get world data')

    expect(worldResult).toEqual(expected)
  })

})



describe.skip('getPeopleData', () => {

  let url
  let mockPeopleData = {}

  beforeAll(() => {
    url = 'https://swapi.co/api/people/1/'

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
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
        status: 200,
        json: () => Promise.resolve( mockPeople )
      })
    )
  })

  it('should not pass', () => {
    expect(false).toEqual(true)
  })
})


describe('getVehicleData', () => {

  let mockVehiclesArray 

  beforeAll(() => {

    mockVehiclesArray = [
      {
        "name": "Sand Crawler", 
        "model": "Digger Crawler", 
        "passengers": "30", 
        "consumables": "2 months", 
        "vehicle_class": "wheeled", 
      },
      {
        "name": "T-16 skyhopper", 
        "model": "T-16 skyhopper", 
        "passengers": "1", 
        "consumables": "0", 
        "vehicle_class": "repulsorcraft", 
      }
    ]
  })

  it('it should return the cleaned data from the vehicles array', () => {
    const vehicleData = getVehicleData(mockVehiclesArray)
    const expected = [ 
      {
        name: "Sand Crawler",
        Model: "Digger Crawler",
        "Vehicle Class": "wheeled",
        Passengers: "30"
      },
      {
        name: "T-16 skyhopper",
        Model: "T-16 skyhopper",
        "Vehicle Class": "repulsorcraft",
        Passengers: "1"
      }
    ]

    expect(vehicleData).toEqual(expected)
  })
})

describe('getVehicles', () => {

  let mockVehiclesArray
  let mockVehiclesData

  beforeAll(()=> {
    mockVehiclesArray = [
      "url": "https://swapi.co/api/vehicles/4/",
      "url": "https://swapi.co/api/vehicles/6/",
    ]

    mockVehiclesData = {
      results: [
        {
          "name": "Sand Crawler", 
          "model": "Digger Crawler", 
          "passengers": "30", 
          "consumables": "2 months", 
          "vehicle_class": "wheeled", 
        },
        {
          "name": "T-16 skyhopper", 
          "model": "T-16 skyhopper", 
          "passengers": "1", 
          "consumables": "0", 
          "vehicle_class": "repulsorcraft", 
        }
      ]
    }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(  mockVehiclesData )
      })
    )
  })


  it('should call the fetch in fetchApi with the correct params', async () => {
    const vehicleResult = await getVehicles()
    const expected = 'https://swapi.co/api/vehicles/'

    expect(window.fetch).toHaveBeenCalledWith(expected)
  }) 

  it('should return the expected cleaned data', async () => {
    const vehicleResult = await getVehicles()
    const expected = [
      {
        name: "Sand Crawler",
        Model: "Digger Crawler",
        "Vehicle Class": "wheeled",
        Passengers: "30"
      },
      {
        name: "T-16 skyhopper",
        Model: "T-16 skyhopper",
        "Vehicle Class": "repulsorcraft",
        Passengers: "1"
      }
    ]

    expect(vehicleResult).toEqual(expected)
  })

  it('should handle errors', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise. reject())

    const vehicleResult = await getVehicles()
    const expected = Error('Failed to get vehicles')

    expect(vehicleResult).toEqual(expected)
  })
  
})

//  fetchApi          V

      
// getScroll          V
//   randomNum        V

// getPeople
//   getPeopleData    
//   getWorldData     V
//   getSpeciesData   V

// getPlanets
//   getPlanetData
//   getResidents


// getVehicles
//   getVehiclesData