import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';

import Logo from '../../assets/icon/pokeball.svg';
import Shop from '../../module/shop/components/shop.component';

import './header.scss';

const Header = ({ bullet }) => (
  <div className="header">
    <Link className="header__link" to="/">
      <img className="header__link-icon" src={Logo} alt="pokeDingo" />
      <h1 className="header__link-title">PokeDingo</h1>
    </Link>
    <ul className="header__menu">
      <li className="header__menu-item">
        <Link to="/search">Search</Link>
      </li>
      <li className="header__menu-item header__menu-item--bullet">
        <span>{bullet}</span>
        <Shop bullet={bullet} />
      </li>
    </ul>
  </div>
);

Header.propTypes = {
  bullet: PropTypes.number.isRequired
};

export default Header;
