import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../component/card/card.component';

import './shopInfo.scss';

class ShopInfo extends Component {
  componentDidMount() {
    this.props.loadCart();
  }

  renderedCart = () => {
    const {
      shop,
      cartSubtotal,
      removeItem,
      addQuantity,
      removeQuantity,
      openModal
    } = this.props;
    if (isEmpty(shop)) {
      return <p className="shopInfo__empty">Your Shopping Cart is empty.</p>;
    }

    return (
      <div className="shopInfo__container">
        {map(shop, cart => (
          <div key={cart.id} className="shopInfo__container-card">
            <Card
              pokemon={cart}
              openModal={openModal}
              modifier
              isShop
              action={removeItem}
              titleAction="Remove"
              addQuantity={addQuantity}
              titleAdd="+"
              removeQuantity={removeQuantity}
              titleRemove="-"
            />
          </div>
        ))}
        <div className="shopInfo__container-actions">
          <p>Cart Subtotal: {cartSubtotal}€</p>
          <button>Buy</button>
        </div>
      </div>
    );
  };

  render() {
    return <div className="shopInfo">{this.renderedCart()}</div>;
  }
}

ShopInfo.propTypes = {
  loadCart: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  addQuantity: PropTypes.func.isRequired,
  removeQuantity: PropTypes.func.isRequired,
  shop: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  cartSubtotal: PropTypes.number
};

export default ShopInfo;
