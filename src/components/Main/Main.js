import React from 'react';
import propTypes from 'prop-types';
import './Main.css';
import { Switch, Route } from 'react-router-dom'
import CardContainer from '../CardContainer/CardContainer' 

const Main = () => {
  return (
    <div> 
      <Switch>
        
        <Route path='/people' 
          render={() => (
            <CardContainer name={'people'} />
          )}
        />

        <Route path='/planets' 
          render={() => (
            <CardContainer name={'planets'} />
          )}
        />

        <Route path='/vehicles' 
          render={() => (
            <CardContainer name={'vehicles'} /> 
          )}
        />
        
    </Switch>
    </div>
  );
};

export default Main;
