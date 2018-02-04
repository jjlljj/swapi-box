import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <h1 className="banner-text"><Link to='/'>SWAPI BOX</Link></h1>
      <Nav />
    </header>    
  );
};

export default Header;
