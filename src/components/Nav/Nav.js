import React from 'react';
import propTypes from 'prop-types';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>   
      <button><Link to="/people">People</Link></button>
      <button><Link to="/planets">Planets</Link></button>
      <button><Link to="/vehicles">Vehicles</Link></button>
    </div>
  );
};

export default Nav;
