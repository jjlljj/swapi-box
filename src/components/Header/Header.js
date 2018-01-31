import React from 'react';
import propTypes from 'prop-types';
import './Header.css';
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header className="site-header">
      <h1>STAR WARS</h1>
      <Nav />
    </header>
  );
};

export default Header;
