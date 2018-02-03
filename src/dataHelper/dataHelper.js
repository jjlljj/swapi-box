
const fetchApi = async url => {
  try {
    const response = await fetch(url)

    if (response.status <= 200) {
      return await response.json()
    } else {
      throw new Error('Bad status code')
    }
  } catch(err) {
     throw new Error('Could not fetch data')
  }
}

// Get movie text opening page
const getScroll = async () => {
  try {
    const num = randomNum(7)
    const url = `https://swapi.co/api/films/${num}`
    const { title, episode_id, opening_crawl } = await fetchApi(url)
    const episode = toNumerals[episode_id - 1]

    return { title, episode, text: opening_crawl }
  } catch(er) {
    throw Error('Failed to fetch film')
  }
}

const randomNum = max => {
  return Math.floor(Math.random() * max + 1) 
}

const toNumerals = [
  'Episode I',
  'Episode II',
  'Episode III',
  'Episode IV',
  'Episode V',
  'Episode VI',
  'Episode VII'
]


// Get People
const getPeople = async ( page=1 ) => {
  try { const url = `https://swapi.co/api/people/?page=${page}`
    const arrayOfPeople = await fetchApi(url)
    return await getPeopleData(arrayOfPeople.results) 
  } catch(er) {
    throw new Error('Failed to get People')
  }
}

const getPeopleData = peopleArray => {
  try {
    const unresolved = peopleArray.map(async ({ name, species, homeworld }) => {
      
      let { world, population } = await getWorldData(homeworld)
      let { Species } = await getSpeciesData(species)
      const cardType = 'people'

      return { name, cardType, Homeword: world, Species, Population: population }
    })
      
    return Promise.all(unresolved)
  } catch(er) {
    throw new Error('Failed to get data for all people')
  }
}

const getWorldData = async url => {
  try {
    const { name, population } = await fetchApi(url)
    
    return { world: name, population }
  } catch(er) {
    throw new Error('Failed to get world data')
  }
}

const getSpeciesData = async url => {
  try { 
    const { name } = await fetchApi(url)
   
    return { Species: name }
  } catch(er) {
    throw new Error('Failed to get species data')
  }
}

// Get Planets
const getPlanets = async ( page=1 ) => {
  try {
    const url = `https://swapi.co/api/planets/?page=${page}`
    const arrayOfPlanets = await fetchApi(url)
    const allPlanets = await getPlanetData(arrayOfPlanets.results)
    return allPlanets
  } catch(er) {
    throw new Error('Failed to get planets')    
  }
}

const getPlanetData = planetArray => {
  try {
    const unresolved = planetArray.map(async ({ name, terrain, climate, population, residents }) => {
      let allResidents = await getResidents(residents)
      const Residents = allResidents.join(", ")
      const cardType = 'planets'

      return { name, cardType, Terrain: terrain, Climate: climate, Population: population, Residents}
    })

    return Promise.all(unresolved)
  } catch(er) {
    throw new Error('Failed to get planet data')
  }
}

const getResidents = residentsArray => {
  try {
    const unresolved = residentsArray.map(async residentUrl => {
      let { name } = await fetchApi(residentUrl)

      return name 
    })

    return Promise.all(unresolved)
  }
  catch(er) {
    throw new Error('Failed to get planet residents')
  }
}

// Get Vehicles
const getVehicles = async () => {
  try {
    const url = 'https://swapi.co/api/vehicles/'
    const arrayOfVehicles = await fetchApi(url)
    return getVehicleData(arrayOfVehicles.results)
  } catch(er) {
    throw new Error('Failed to get vehicles')
  }
}

const getVehicleData = vehiclesArray => {
  return vehiclesArray.map(({ name, model, vehicle_class, passengers }) => {
    const cardType = 'vehicles'
    return { name, cardType, Model: model, "Vehicle Class": vehicle_class, Passengers: passengers }  
  })
}

export { fetchApi, getScroll, randomNum, getPeople, getPeopleData, getWorldData, getSpeciesData, getPlanets, getPlanetData, getResidents, getVehicles, getVehicleData }