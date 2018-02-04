import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <h1><Link to='/'>STAR WARS</Link></h1>
      <div className="favorites-nav-btn">
        <NavLink 
          to="/favorites"
          activeClassName="active">
          Favorites
        </NavLink>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
