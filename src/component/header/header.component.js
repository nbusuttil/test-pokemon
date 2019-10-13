import React from 'react';
import Link from 'react-router-dom/Link';

import Logo from '../../assets/icon/pokeball.svg';

import './header.scss';

const Header = () => (
  <div className="header">
    <Link className="header__link" to="/">
      <img className="header__link-icon" src={Logo} alt="pokeDingo" />
      <h1 className="header__link-title">PokeDingo</h1>
    </Link>
    <ul className="header__menu">
      <li className="header__menu-item">
        <Link to="/search">Search</Link>
      </li>
    </ul>
  </div>
);


export default Header;
