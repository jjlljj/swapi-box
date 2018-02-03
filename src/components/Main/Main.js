import React from 'react';
import propTypes from 'prop-types';
import './Main.css';
import { Switch, Route } from 'react-router-dom'
import Welcome from '../Welcome/Welcome'
import Favorites from '../Favorites/Favorites';
import Planets from '../Planets/Planets';
import People from '../People/People';
import Vehicles from '../Vehicles/Vehicles';

const Main = ({ getPeople, getVehicles, getPlanets, people }) => {
  return (
    <div> 
      <Switch>
        
        <Route path='/people' activeClassName="active"
          render={() => (
            <People 
              fetchData={getPlanets} 
              cards={people} />
          )}
        />

        <Route path='/planets' 
          render={() => (
            <Planets 
              fetchData={getPlanets} 
              cards={people} />
          )}
        />

        <Route path='/vehicles' 
          render={() => (
            <Vehicles 
              fetchData={getVehicles} 
              cards={people} /> 
          )}
        />
        
    </Switch>
    </div>
  );
};

export default Main;
