
const fetchApi = async url => {
  const response = await fetch(url)

  if (response.status <= 200) {
    return await response.json()
  } else {
    throw (new Error('Could not fetch data'))
  }
}

// Get movie text opening page
const getScroll = async () => {
  try {
    const num = 9 || randomNum(7)
    const url = `https://swapi.co/api/films/${num}`
    const { title, episode_id, opening_crawl } = await fetchApi(url)
    const episode = toNumerals[episode_id - 1]

    return { title, episode, text: opening_crawl }
  } 
  catch(er) {
    const error = new Error('Failed to fetch film')
    return error
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
  } 
  catch(er) {
    const error = new Error('Failed to get People')
  }
}

const getPeopleData = peopleArray => {
  try {
    const unresolved = peopleArray.map(async ({ name, species, homeworld }) => {
      
      let { world, population } = await getWorldData(homeworld)
      let { Species } = await getSpeciesData(species)

      return { name, Homeword: world, Species, Population: population }
    })
      
    return Promise.all(unresolved)
  }
  catch(er) {
    const error = new Error('Failed to get data for all people')
    return error
  }
}

const getWorldData = async url => {
  try {
    const { name, population } = await fetchApi(url)
    
    return { world: name, population }
  } 
  catch(er) {
    const error = new Error('Failed to get world data')
    
    return error
  }
}

const getSpeciesData = async url => {
  try { 
    const { name } = await fetchApi(url)
   
    return { Species: name }
  }
  catch(er) {
    const error = new Error('Failed to get species data')

    return error
  }

}

// Get Planets
const getPlanets = async ( page=1 ) => {
  try {
    const url = `https://swapi.co/api/planets/?page=${page}`
    const arrayOfPlanets = await fetchApi(url)
    const allPlanets = await getPlanetData(arrayOfPlanets.results)
    return allPlanets
 }
  catch(er) {
    const error = new Error('Failed to get planets')
    return error
  }
}

const getPlanetData = planetArray => {
  try {
    const unresolved = planetArray.map(async ({ name, terrain, climate, population, residents }) => {
      let allResidents = await getResidents(residents)
      const Residents = allResidents.join(", ")

      return { name, Terrain: terrain, Climate: climate, Population: population, Residents }
    })

    return Promise.all(unresolved)
  }
  catch(er) {
    const error = new Error('Failed to get planet data')
    return error
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
    const error = new Error('Failed to get planet residents')
    return error
  }
}

// Get Vehicles
const getVehicles = async () => {
  try {
    const url = 'https://swapi.co/api/vehicles/'
    const arrayOfVehicles = await fetchApi(url)
    return getVehicleData(arrayOfVehicles.results)
  } 
  catch(er) {
    const error = new Error('Failed to get vehicles')
    return error
  }
}

const getVehicleData = vehiclesArray => {
  return vehiclesArray.map(({ name, model, vehicle_class, passengers }) => {
    return { name, Model: model, "Vehicle Class": vehicle_class, Passengers: passengers }  
  })
}

export { fetchApi, getScroll, randomNum, getPeople, getPeopleData, getWorldData, getSpeciesData, getPlanets, getPlanetData, getResidents, getVehicles, getVehicleData }