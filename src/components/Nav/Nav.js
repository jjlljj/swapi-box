import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
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
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
