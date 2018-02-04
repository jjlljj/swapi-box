import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="site-header">
        <h1><Link to='/'>STAR WARS</Link></h1>
        <div className="favorites-nav-btn">
          <NavLink 
            to="/favorites"
            activeClassName="active">
            Favorites
          </NavLink>
        </div>
      </header>    
      <Nav />
    </div>
  );
};

export default Header;
