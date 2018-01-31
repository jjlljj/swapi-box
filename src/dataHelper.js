// MOVIES
// fetch ( https://swapi.co/api/films/ )
// --> array of Movies --> pick one
// --> opening crawl: movie. opening_crawl

const fetchApi = async url => {
  const initialFetch = await fetch(url)
  return initialFetch.json()
}


// Get movie text opening page
export const getScroll = async () => {
  const num = randomNum(7)
  const url = `https://swapi.co/api/films/${num}`
  const { title, episode_id, opening_crawl } = await fetchApi(url)

  return { title, episode: episode_id, text: opening_crawl }
}

const randomNum = max => {
  return Math.floor(Math.random() * max + 1) 
}


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

    return { name, charSpecies, world, population }
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

    return { name, terrain, climate, population, allResidents }
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
  console.log('boo')
  const url = 'https://swapi.co/api/vehicles/'
  const arrayOfVehicles = await fetchApi(url)
  const allVehicles = await getVehicleData(arrayOfVehicles.results)

  return allVehicles
}

const getVehicleData = vehiclesArray => {
  const unresolved = vehiclesArray.map(async ({ name, model, vehicle_class, passengers }) => {
    return { name, model, vehicle_class, passengers }  
  })

  return Promise.all(unresolved)
}



// PLANETS
// Fetch ( https://swapi.co/api/planets/ )
// --> name: result.name
// --> terrain: result.terrain
// --> population: result.population
// --> climate: result.climate
// --> residents: []... fetch each resident ==> residentResult.name
// FAV BUTTON


// PEOPLE 
// Fetch ( https://swapi.co/api/people/ )
//  --> name: result.name
//  --> species: fetch (result.species) => speciesResult.name
//  --> homeworld : fetch ( result.homeworld ) => worldResult
//  --> homeworld: worldResult.name
//  --> homeworld population: worldResult.population
// FAV BUTTON


// VEHICLES
// Fetch ( https://swapi.co/api/vehicles/ )
// --> name: results.name
// --> model: results.model
// --> class: result.vehicle_class
// --> number of passengers: result.passengers