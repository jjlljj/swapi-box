/* eslint-disable */d

const getScroll = () => {
  fetch('https://swapi.co/api/films/')
  return {
    title: "A New Hope",
    episode: 'Episode IV',
    text: "It is a period of civil war..."
  }
}

const getPeople = () => {
  fetch('https://swapi.co/api/people/')
  return [
    {
      name: 'Luke skywalker',
      cardType: "people",
      Population: 10000,
      Species: 'human',
      Homeworld: "Tatooine",
    },
    {
      name: 'C-3PO',
      cardType: "people",
      Population: 3244,
      Species: 'droid',
      Homeworld: "somewhere",
    }
  ]
}

const getPlanets = () => {
  fetch('https://swapi.co/api/planets/')
  return [
    {
      Climate: "murky",
      Population: "unknown",
      Residents: "",
      Terrain: "swamp, jungles",
      cardType: "planets",
      favorite: true,
      name: "Dagobah"
    },
    {
      Climate: "temperate, tropical", 
      Population: "1000",
      Residents: "",
      Terrain: "jungle, rainforests",
      cardType: "planets",
      favorite: true,
      name: "Yavin IV"
    }
  ]

}

const getVehicles = () => {
  fetch('https://swapi.co/api/vehicles/')
  return [
    {
      Model: "Digger Crawler",
      Passengers: "30",
      "Vehicle Class": "wheeled",
      cardType: "vehicles",
      name: "Sand Crawler"
    },
    {
      Model: "T-16 skyhopper",  
      Passengers: "1",
      "Vehicle Class": "repulsorcraft",
      cardType: "vehicles",
      name: "T-16 skyhopper"
    }
  ]
}

export {
  getScroll,
  getPeople,
  getPlanets,
  getVehicles
}