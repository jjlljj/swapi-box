import React from 'react';
import propTypes from 'prop-types';
import './Main.css';
import { Switch, Route } from 'react-router-dom'
import CardContainer from '../CardContainer/CardContainer' 

const Main = () => {
  return (
    <div> 
      <Switch>
        
        <Route path='/people' component={CardContainer}/>
        <Route path='/planets' component={CardContainer}/>
        <Route path='/vehicles' component={CardContainer}/>
    </Switch>
    </div>
  );
};

export default Main;
