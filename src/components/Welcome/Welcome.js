import React from 'react';
import propTypes from 'prop-types';
import './Welcome.css';

const Welcome = ({ episode, title, text}) => {

  return (
    <div className="welcome-crawl"> 
      <h4>{episode}</h4>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Welcome;
