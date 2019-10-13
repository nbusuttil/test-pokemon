import React, { useState, Fragment } from 'react';
import classNames from 'classnames';

import './shop.scss';

import ShopIcons from '../../../assets/icon/shop.svg';
import ShopInfo from './../components/shopInfo/shopInfo.connector';

const Shop = () => {
  const [open, toggle] = useState(false);
  const toggleDropdwn = () => toggle(!open);
  const wrapperClass = classNames('shop', { 'shop--opened': open });

  return (
    <Fragment>
      <button className="shop__button" onClick={toggleDropdwn}>
        <img src={ShopIcons} alt="panier" />
      </button>
      <div className={wrapperClass}>
        <ShopInfo />
      </div>
    </Fragment>
  );
};

export default Shop;
