// MOVIES
// fetch ( https://swapi.co/api/films/ )
// --> array of Movies --> pick one
// --> opening crawl: movie. opening_crawl

const fetchApi = async(url) => {
  const initialFetch = await fetch(url)
  return initialFetch.json()
}

const randomNum = (number) => {
  return Math.floor(Math.random() * number + 1) 
}

export const getScroll = async() => {
  const num = randomNum(7)
  const url = `https://swapi.co/api/films/${num}`
  const { title, episode_id, opening_crawl } = await fetchApi(url)

  return { title, episode: episode_id, text: opening_crawl }
}


// PEOPLE 
// Fetch ( https://swapi.co/api/people/ )
//  --> name: result.name
//  --> species: fetch (result.species) => speciesResult.name
//  --> homeworld : fetch ( result.homeworld ) => worldResult
//  --> homeworld: worldResult.name
//  --> homeworld population: worldResult.population
// FAV BUTTON


// PLANETS
// Fetch ( https://swapi.co/api/planets/ )
// --> name: result.name
// --> terrain: result.terrain
// --> population: result.climate
// --> climate: result.climate
// --> residents: []... fetch each resident ==> residentResult.name
// FAV BUTTON


// VEHICLES
// Fetch ( https://swapi.co/api/vehicles/ )
// --> name: results.name
// --> model: results.model
// --> class: result.vehicle_class
// --> number of passengers: result.passengers