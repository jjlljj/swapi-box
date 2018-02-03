import React from 'react';
import propTypes from 'prop-types';
import './Main.css';
import { Switch, Route } from 'react-router-dom'
import Welcome from '../Welcome/Welcome'
import Favorites from '../Favorites/Favorites';
import Planets from '../Planets/Planets';
import People from '../People/People';
import Vehicles from '../Vehicles/Vehicles';

const Main = ({ fetchPeople, fetchPlanets, fetchVehicles, people, planets, vehicles }) => {
  return (
    <div> 
      <Switch>
        
        <Route path='/people' activeClassName="active"
          render={() => (
            <People 
              fetchData={fetchPeople} 
              cards={people} />
          )}
        />

        <Route path='/planets' 
          render={() => (
            <Planets 
              fetchData={fetchPlanets} 
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
        
    </Switch>
    </div>
  );
};

export default Main;
