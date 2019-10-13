import parseInt from 'lodash/parseInt';
import find from 'lodash/find';

import {
  ADD_ITEM,
  LOAD_CART,
  REMOVE_ITEM,
  ADD_QUANTITY,
  REMOVE_QUANTITY
} from './shop.actions';
import { buildPrice } from './shop.utils';

const initialState = {
  cart: {},
  total: 0,
  bullet: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART: {
      return { ...state, cart: state.cart };
    }

    case ADD_ITEM:
    case ADD_QUANTITY:
    case REMOVE_QUANTITY: {
      const { pokemon, quantity, bullet } = action;
      const cart = { ...state.cart };
      const item = find(cart, item => item.id === pokemon.id);
      let countItem;

      if (item) {
        item.quantity = item.quantity + quantity;
        countItem = state.bullet;
      } else {
        cart[pokemon.id] = { ...pokemon, quantity: parseInt(quantity) };
        countItem = state.bullet + bullet;
      }

      return { ...state, cart, total: buildPrice(cart), bullet: countItem };
    }

    case REMOVE_ITEM: {
      const { pokemon, bullet } = action;
      const cart = { ...state.cart };
      let countItem;

      delete cart[pokemon.id];
      countItem = state.bullet - bullet;

      return {
        ...state,
        cart,
        total: buildPrice(cart),
        bullet: countItem
      };
    }

    default:
      return state;
  }
};
