import React from 'react';
import { string } from 'prop-types';
import './Welcome.css';

const Welcome = ({ episode, title, text}) => {

  return (
    <section className="welcome-crawl"> 
      <div className="stars"></div>
      <div className="stars-animate"></div>
      <div className="fade"></div>
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

Welcome.propTypes = {
  episode: string,
  title: string,
  text: string
};

export default Welcome;
