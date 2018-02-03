import React from 'react';
import { arrayOf, func, object} from 'prop-types';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import Favorites from '../Favorites/Favorites';
import Planets from '../Planets/Planets';
import People from '../People/People';
import Vehicles from '../Vehicles/Vehicles';

const Main = ({ 
  fetchPeople, 
  fetchPlanets, 
  fetchVehicles, 
  addToFav, 
  people, 
  planets, 
  vehicles, 
  favorites, 
  openingText 
}) => {

  return (
    <div> 
      <Switch>
        
        <Route path='/people' 
          render={() => (
            <People 
              fetchData={fetchPeople} 
              addToFav={addToFav}
              cards={people} />
          )}
        />

        <Route path='/planets' activeClassName="active"
          render={() => (
            <Planets 
              fetchData={fetchPlanets} 
              addToFav={addToFav}
              cards={planets} />
          )}
        />

        <Route path='/vehicles' 
          render={() => (
            <Vehicles 
              fetchData={fetchVehicles}       
              cards={vehicles} /> 
          )}
        />

        <Route path='/favorites' 
          render={() => (
            <Favorites 
              addToFav={addToFav}
              cards={favorites} /> 
          )}
        />

        <Route path='/' 
          render={() => (
            <Welcome {...openingText} />
          )}
        />
        
      </Switch>
    </div>
  );
};

Main.propTypes = {
  fetchPeople: func, 
  fetchPlanets: func, 
  fetchVehicles: func, 
  addToFav: func, 
  people: arrayOf(object), 
  planets: arrayOf(object), 
  vehicles: arrayOf(object), 
  favorites: arrayOf(object), 
  openingText: object
};

export default Main;
