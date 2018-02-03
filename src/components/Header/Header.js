import React from 'react';
import propTypes from 'prop-types';
import './Header.css';
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <h1><Link to='/'>STAR WARS</Link></h1>
      <Nav />
    </header>
  );
};

export default Header;
