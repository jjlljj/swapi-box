import React from 'react';
import propTypes from 'prop-types';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>   
      <button><NavLink to="/people">People</NavLink></button>
      <button><NavLink to="/planets">Planets</NavLink></button>
      <button><NavLink to="/vehicles">Vehicles</NavLink></button>
    </div>
  );
};

export default Nav;
