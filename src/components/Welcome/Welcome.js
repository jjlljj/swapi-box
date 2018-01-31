import React from 'react';
import propTypes from 'prop-types';
import './Welcome.css';

const Welcome = ({ episode, title, text}) => {

  return (
    <section className="welcome-crawl"> 
      <div className="crawl-wrap">
        <div className="title-wrap">
          <h4>{episode}</h4>
          <h2>{title}</h2>
        </div>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default Welcome;
