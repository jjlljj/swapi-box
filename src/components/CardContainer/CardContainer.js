import React from 'react';
import propTypes from 'prop-types';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({name}) => {
  console.log(name)
  return (
    <div> 
      {name}
      <Card />
    </div>
  );
};

export default CardContainer;
