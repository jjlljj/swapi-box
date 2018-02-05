import React from 'react';
import './Nav.css';
import { number } from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = ({ favLength }) => {
  const favNum = favLength || 0;

  return (
    <nav className="nav-menu">
      <div>
        <NavLink 
          to="/people"
          activeClassName="active" >
          People
        </NavLink>
      </div>
      <div>
        <NavLink 
          to="/planets"
          activeClassName="active" >
          Planets
        </NavLink>
      </div>
      <div>
        <NavLink 
          to="/vehicles"
          activeClassName="active" >
          Vehicles
        </NavLink>
      </div>
      <div>
        <NavLink 
          to="/favorites"
          activeClassName="active">
          Favorites
          <span className='fav-num'>{favNum}</span>
        </NavLink>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  favLength: number
};

export default Nav;
