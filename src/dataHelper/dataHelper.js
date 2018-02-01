
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
    console.log(er)
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
    const allPeople = await getPeopleData(arrayOfPeople.results)

    return allPeople
  } catch(er) {

    const error = new Error('Failed to fetch People')
  }
}

const getPeopleData = peopleArray => {
  const unresolved = peopleArray.map(async ({ name, species, homeworld }) => {
    let { world, population } = await getWorldData(homeworld)
    let charSpecies = await getSpeciesData(species)

    return { name, Homeword: world, Species: charSpecies, Population: population }
  })
    
  return Promise.all(unresolved)
}

const getWorldData = async url => {
  const { name, population } = await fetchApi(url)

  return { world: name, population }
}

const getSpeciesData = async url => {
  const { name } = await fetchApi(url)

  return name
}

// Get Planets
const getPlanets = async ( page=1 ) => {
  const url = `https://swapi.co/api/planets/?page=${page}`
  const arrayOfPlanets = await fetchApi(url)
  const allPlanets = await getPlanetData(arrayOfPlanets.results)

  return allPlanets
}

const getPlanetData = planetArray => {
  const unresolved = planetArray.map(async ({ name, terrain, climate, population, residents }) => {
    let allResidents = await getResidents(residents)
    const Residents = allResidents.join(", ")

    return { name, Terrain: terrain, Climate: climate, Population: population, Residents }
  })
    
  return Promise.all(unresolved)
}

const getResidents = residentsArray => {
  const unresolved = residentsArray.map(async residentUrl => {
    let { name } = await fetchApi(residentUrl)

    return name
  })

  return Promise.all(unresolved)
}

// Get Vehicles
const getVehicles = async () => {
  const url = 'https://swapi.co/api/vehicles/'
  const arrayOfVehicles = await fetchApi(url)
  return getVehicleData(arrayOfVehicles.results)
}

const getVehicleData = vehiclesArray => {
  return vehiclesArray.map(({ name, model, vehicle_class, passengers }) => {
    return { name, Model: model, "Vehicle Class": vehicle_class, Passengers: passengers }  
  })
}

export { fetchApi, getScroll, randomNum, getPeople, getPeopleData, getWorldData, getSpeciesData, getPlanets, getPlanetData, getResidents, getVehicles, getVehicleData }