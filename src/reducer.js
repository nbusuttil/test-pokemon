import { combineReducers } from 'redux';

import pokemons from './module/home/pokemons.reducer';
import modal from './module/modal/modal.reducer';

export default combineReducers({
  pokemons: pokemons,
  modal: modal
});
