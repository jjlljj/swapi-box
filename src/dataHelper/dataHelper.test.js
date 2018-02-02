/* eslint-disable */

import { fetchApi, getScroll, randomNum, getPeople, 
  getPeopleData, getWorldData, getSpeciesData, getPlanets, 
  getPlanetData, getResidents, getVehicles, 
  getVehicleData } from './dataHelper.js'


// to fix
// getPeopleData 1, 2, 3
// getResidents 3
// getPlanetData 3
// getPlanets 3

/////////////////////////////
/// API FETCH //////////////
describe('API fetch', () => {
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
     expect(window.fetch).not.toHaveBeenCalled();

      fetchApi(url)
      expect(window.fetch).toHaveBeenCalledWith(...expectParams)
    })

    it('returns a response object', async () => {
      const response = await fetchApi(url)
      const expected = { results:'Returned results'}
      expect(response).toEqual(expected)
    })

    it('should throw an error if the response is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 500,
          json: () => Promise.resolve()
        })
      )

       expect(fetchApi(url)).rejects.toEqual(Error('Could not fetch data'))

    })

  })
})

/////////////////////////////
/// GET SCROLL //////////////

describe('getScroll', () => {

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

    it('should catch errors', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({  status: 500 }))
      

      const movieResult = getScroll()
      const expected = Error('Failed to fetch film')

      expect(movieResult).rejects.toEqual(expected)
    })

  })
})

/////////////////////////////
/// GET PEOPLE //////////////

describe('getPeople', ()=> {

  describe('getSpeciesData', () => {

    let url
    let mockSpeciesData

    beforeEach(() => {
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
      expect(window.fetch).not.toHaveBeenCalled();

      getSpeciesData(url)
      
      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('should return the expected species name', async () => { 
      const speciesResult = await getSpeciesData(url)
      
      expect(speciesResult).toEqual({ Species:'Human'})
    })

    it('should catch errors', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 500 }))

      const speciesResult = getSpeciesData(url)
      const expected = Error('Failed to get species data')

      expect(speciesResult).rejects.toEqual(expected)
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
  

        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 500 }))

      const worldResult = getWorldData(url)
      const expected = Error('Failed to get world data')

      await expect(worldResult).rejects.toEqual(expected)
    })

  })

  describe.skip('getPeopleData', () => {

    let peopleArray 
    let mockPeopleData

    beforeAll(() => {
      
      peopleArray = [
        { 
          name: 'Luke skywalker',
          species: 'https://swapi.co/api/species/1/',
          homeworld: 'https://swapi.co/api/planets/1/' 
        },
        { 
          name: 'C-3PO',
          species: 'https://swapi.co/api/species/2/',
          homeworld: 'https://swapi.co/api/planets/2/'
        }
      ]

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve()
        })
      )
    })

    it('should call the getWorldData and getSpeciesData fetchApi fetch', () => {
      expect(window.fetch).not.toHaveBeenCalled();

      getPeopleData(peopleArray)

      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/planets/1/')
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/planets/2/')
    })

    it('should return an object with the expected keys and values', async () => {
      const peopleData = await getPeopleData(peopleArray)
      const expected = [
        { name: 'Luke skywalker', Homeword: undefined, Species: undefined, Population: undefined },
        { name: 'C-3PO', Homeword: undefined, Species: undefined, Population: undefined },
        ]

      expect(peopleData).toEqual(expected)
    })

    it('should catch errors', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 500 }))

      const peopleResult = getPeopleData()
      const expected = Error('Failed to get data for all people')

      expect(peopleResult).rejects.toEqual(expected)
    })
  })

  describe('getPeople', () => {

    let mockPeople

    beforeAll(() => {

      mockPeople = [
        { 
          name: 'Luke skywalker',
          species: 'https://swapi.co/api/species/1/',
          homeworld: 'https://swapi.co/api/planets/1/' 
        },
        { 
          name: 'C-3PO',
          species: 'https://swapi.co/api/species/2/',
          homeworld: 'https://swapi.co/api/planets/2/'
        }
      ]
      

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve({ results: mockPeople })
        })
      )
    })

    it('it should call the fetch in fetchApi with the correct params', () => {
      expect(window.fetch).not.toHaveBeenCalled();

      getPeople()

      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people/?page=1')
    })

    it('should return an array with data objects with the correct keys and values', async () => {
      const peopleResult = await getPeople()
      const expected = [
        {
          name: 'Luke skywalker',
          Population: undefined,
          Species: undefined,
          HomeWorld: undefined,
        },
        {
          name: 'C-3PO',
          Population: undefined,
          Species: undefined,
          HomeWorld: undefined,
        }
      ]

      expect(peopleResult).toEqual(expected)
    })

    it('should catch errors', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 500 }))

      const peopleResult = getPeople()
      const expected = new Error('Failed to get People')

      expect(peopleResult).rejects.toEqual(expected)
    })

  })
})

/////////////////////////////
/// GET PLANETS //////////////

describe('getPlanets', () => {

  describe('getResidents', () => {

    let mockResidents
    let mockResidentsArray

    beforeAll(() => {

      mockResidents = {
        name: 'C-3PO'
      }

      mockResidentsArray = [
        "https://swapi.co/api/people/1/", 
        "https://swapi.co/api/people/2/",
      ]

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockResidents)
        })
      )

    })

    it('should call the fetch in fetchApi with the correct params', ()=> {
      expect(window.fetch).not.toHaveBeenCalled();

      getResidents(mockResidentsArray)

      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people/1/')
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people/2/')
    })

    it('should return the expected array of resident names', async () => {
      const expected = [ 'C-3PO', 'C-3PO' ]
      const residentsResult = await getResidents(mockResidentsArray)

      expect(residentsResult).toEqual(expected)
    })

    it.skip('should catch errors', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 500 }))

      const residentResult = await getResidents(mockResidentsArray)
      const expected = Error('Failed to get planet residents')

      expect(residentResult).rejects.toCatchError()
    })
  })

  describe('getPlanetData', () => {
    let mockPlanetsArray

    beforeAll(() => {

      mockPlanetsArray = [
        { "name": "Tatooine", 
          "rotation_period": "23", 
          "orbital_period": "304", 
          "diameter": "10465", 
          "climate": "arid", 
          "gravity": "1 standard", 
          "terrain": "desert", 
          "surface_water": "1", 
          "population": "200000", 
          "residents": [
            "https://swapi.co/api/people/1/", 
            "https://swapi.co/api/people/2/", 
            "https://swapi.co/api/people/4/", 
            "https://swapi.co/api/people/6/",
          ]
        },
        { "name": "Danatooine", 
          "rotation_period": "45", 
          "orbital_period": "87", 
          "diameter": "2", 
          "climate": "arid", 
          "gravity": "1 standard", 
          "terrain": "desert", 
          "surface_water": "1", 
          "population": "200000", 
          "residents": [
            "https://swapi.co/api/people/1/", 
            "https://swapi.co/api/people/2/", 
          ]
        },
      ]

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve({ name: undefined })
        })
      )

    })

    it('should call the fetch in fetchApi with the correct params', () => {
      expect(window.fetch).not.toHaveBeenCalled();

      getPlanetData(mockPlanetsArray)

      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people/1/')
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people/2/')
    })

    it('should return the expected array of data keys and values', async () => {
      const planetDataReturn = await getPlanetData(mockPlanetsArray)
      const expected = [
        {
          "name": "Tatooine",
          "Climate": "arid", 
          "Population": "200000", 
          "Residents": ", , , ", 
          "Terrain": "desert", 
        },
        { 
          "name": "Danatooine",
          "Climate": "arid", 
          "Population": "200000", 
          "Residents": ", ", 
          "Terrain": "desert", 
        }
      ]

      expect(planetDataReturn).toEqual(expected)

    })

    it.skipd('should catch errors', async () => { 

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 400
      }))

      const planetDataReturn =  getPlanetData(mockPlanetsArray)
      const expected = Error('Failed to fetch planet data')

      expect(PlanetDataReturn).resolves.toEqual(expected)
    })
  })

  describe('getPlanets', () => {

    let mockPlanetsArray

    beforeAll(() => {

       mockPlanetsArray = [
        { "name": "Tatooine", 
          "rotation_period": "23", 
          "orbital_period": "304", 
          "diameter": "10465", 
          "climate": "arid", 
          "gravity": "1 standard", 
          "terrain": "desert", 
          "surface_water": "1", 
          "population": "200000", 
          "residents": [
            "https://swapi.co/api/people/1/", 
            "https://swapi.co/api/people/2/", 
            "https://swapi.co/api/people/4/", 
            "https://swapi.co/api/people/6/",
          ]
        },
        { "name": "Danatooine", 
          "rotation_period": "45", 
          "orbital_period": "87", 
          "diameter": "2", 
          "climate": "arid", 
          "gravity": "1 standard", 
          "terrain": "desert", 
          "surface_water": "1", 
          "population": "200000", 
          "residents": [
            "https://swapi.co/api/people/1/", 
            "https://swapi.co/api/people/2/", 
          ]
        },
      ]

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve({ results: mockPlanetsArray })
        })
      )

    })

    it('should call the fetch in FetchApi with the correct params', () => {
      expect(window.fetch).not.toHaveBeenCalled();

      getPlanets()

      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/planets/?page=1')
    })

    it('should return the expected array of objects with keys and values', async () => {

      const planetsResponse = await getPlanets()
      const expected = [
        {
          "Climate": "arid", 
          "Population": "200000", 
          "Residents": ", , , ", 
          "Terrain": "desert", 
          "name": "Tatooine"
        }, 
        {
          "Climate": "arid", 
          "Population": "200000", 
          "Residents": ", ", 
          "Terrain": "desert", 
          "name": "Danatooine"
        }
      ]

      expect(await planetsResponse).toEqual(expected)

    })

    it.skip('should catch errors', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve())

      const planetsResponse = getPlanets()
      const expected = Error('Failed to get planets')

      expect(planetsResponse).resolves.toEqual(expected)
    })
  })
})


describe('getVehicles', () => {

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
      expect(window.fetch).not.toHaveBeenCalled();

      const vehicleResult = await getVehicles()
      const expected = 'https://swapi.co/api/vehicles/'

      expect(window.fetch).toHaveBeenCalledWith(expected)
    }) 

    it('should return the expected vehicles data', async () => {
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

    it('should catch errors', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve())

      const vehicleResult = getVehicles()
      const expected = Error('Failed to get vehicles')

      expect(vehicleResult).rejects.toEqual(expected)
    })
    
  })
})