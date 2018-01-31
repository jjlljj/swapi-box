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

const randomNum = number => {
  return Math.floor(Math.random() * number + 1) 
}


// Get People
export const getPeople = async ( page=1 ) => {
  const url = `https://swapi.co/api/people/?page=${page}`
  const arrayOfPeople = await fetchApi(url)
  const allPeople = await getPeopleData(arrayOfPeople.results)

  return allPeople
}

const getPeopleData = peopleArray => {
  const unresolved = peopleArray.map(async person => {
    const { name, species, homeworld } = person
    const charSpecies = await getSpecies(species)
    const { world, population } = await getWorld(homeworld)

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
  const unresolved = planetArray.map(async planet => {
    const { name, terrain, climate, population, residents } = planet
    const allResidents = await getResidents(residents)

    return { name, terrain, climate, population, allResidents }
  })
    
  return Promise.all(unresolved)
}

const getResidents = residents => {
  const unresolved = residents.map(async residentUrl => {
    const { name } = await fetchApi(residentUrl)

    return name
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