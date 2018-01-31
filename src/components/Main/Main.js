import React from 'react';
import propTypes from 'prop-types';
import './Main.css';
import { Switch, Route } from 'react-router-dom'
import CardContainer from '../CardContainer/CardContainer' 

const Main = ({ getPeople, getVehicles, getPlanets}) => {
  return (
    <div> 
      <Switch>
        
        <Route path='/people' 
          render={() => (
            <CardContainer fetchData={getPeople} />
          )}
        />

        <Route path='/planets' 
          render={() => (
            <CardContainer name= {'planets'}fetchData={getPlanets} />
          )}
        />

        <Route path='/vehicles' 
          render={() => (
            <CardContainer fetchData={getVehicles} /> 
          )}
        />
        
    </Switch>
    </div>
  );
};

export default Main;
