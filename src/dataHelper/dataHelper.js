
const fetchApi = async url => {
  const initialFetch = await fetch(url)
  return initialFetch.json()
}

// Get movie text opening page
export const getScroll = async () => {
  const num = randomNum(7)
  const url = `https://swapi.co/api/films/${num}`
  const { title, episode_id, opening_crawl } = await fetchApi(url)
  const episode = toNumerals[episode_id - 1]

  return { title, episode, text: opening_crawl }
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
export const getPeople = async ( page=1 ) => {
  const url = `https://swapi.co/api/people/?page=${page}`
  const arrayOfPeople = await fetchApi(url)
  const allPeople = await getPeopleData(arrayOfPeople.results)

  return allPeople
}

const getPeopleData = peopleArray => {
  const unresolved = peopleArray.map(async ({ name, species, homeworld }) => {
    let charSpecies = await getSpecies(species)
    let { world, population } = await getWorld(homeworld)

    return { name, Homeword: world, Species: charSpecies, Population: population }
  })
    
  return Promise.all(unresolved)
}

const getWorld = async url => {
  const { name, population } = await fetchApi(url)

  return { world: name, population }
}

const getSpecies = async url => {
  const { name } = await fetchApi(url)

  return name
}

// Get Planets
export const getPlanets = async ( page=1 ) => {
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
export const getVehicles = async () => {
  const url = 'https://swapi.co/api/vehicles/'
  const arrayOfVehicles = await fetchApi(url)
  const allVehicles = await getVehicleData(arrayOfVehicles.results)

  return allVehicles
}

const getVehicleData = vehiclesArray => {
  const unresolved = vehiclesArray.map(async ({ name, model, vehicle_class, passengers }) => {
    return { name, Model: model, "Vehicle Class": vehicle_class, Passengers: passengers }  
  })

  return Promise.all(unresolved)
}