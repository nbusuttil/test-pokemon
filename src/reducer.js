import { combineReducers } from 'redux';

import pokemons from './module/home/pokemons.reducer';
import shop from './module/shop/shop.reducer';
import modal from './module/modal/modal.reducer';

export default combineReducers({
  pokemons: pokemons,
  shop: shop,
  modal: modal
});
