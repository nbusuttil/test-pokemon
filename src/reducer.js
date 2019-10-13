import { combineReducers } from 'redux';

import search from './module/search/search.reducer';
import pokemons from './module/home/pokemons.reducer';
import shop from './module/shop/shop.reducer';
import modal from './module/modal/modal.reducer';

export default combineReducers({
  search: search,
  pokemons: pokemons,
  shop: shop,
  modal: modal
});
