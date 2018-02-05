import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import { number } from 'prop-types';
import { Link } from 'react-router-dom';
const starWarsLogo = require('./assets/star-wars-logo-red.png');

const Header = ({ favLength }) => {
  return (
    <header className="site-header">
      <Link to='/'>
        <img src={starWarsLogo} className="banner-text" alt={'Star wars'}/>
      </Link>
      <Nav favLength={ favLength }/>
    </header>    
  );
};

Header.propTypes = {
  favLength: number
};

export default Header;
