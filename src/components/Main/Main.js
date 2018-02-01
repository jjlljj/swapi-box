import React from 'react';
import propTypes from 'prop-types';
import './Main.css';
import { Switch, Route } from 'react-router-dom'
import CardContainer from '../CardContainer/CardContainer' 

const Main = ({ getPeople, getVehicles, getPlanets, cards}) => {
  return (
    <div> 
      <Switch>
        
        <Route path='/people' activeClassName="active"
          render={() => (
            <CardContainer 
              name={'people'}
              fetchData={getPlanets} 
              cards={cards} />
          )}
        />

        <Route path='/planets' 
          render={() => (
            <CardContainer 
              name={'planets'}
              fetchData={getPlanets} 
              cards={cards} />
          )}
        />

        <Route path='/vehicles' 
          render={() => (
            <CardContainer 
              name={'vehicles'} 
              fetchData={getVehicles} 
              cards={cards} /> 
          )}
        />
        
    </Switch>
    </div>
  );
};

export default Main;
