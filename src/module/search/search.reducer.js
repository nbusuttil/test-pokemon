import map from 'lodash/map';
import {
  RESET_SEARCH,
  SEARCH_POKEMON,
  SEARCH_POKEMON_NOT_FOUND
} from './search.actions';
import { getRandomPrice } from '../home/pokemon.utils';

const initialState = {
  result: [],
  message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_POKEMON: {
      const { result } = action;
      const getTypes = map(result.types, type => type.type.name);
      const pokemon = {
        name: result.name,
        id: result.id,
        types: getTypes,
        price: getRandomPrice(5, 15),
        quantity: 0
      };

      return {
        ...state,
        result: pokemon,
        message: initialState.message
      };
    }

    case SEARCH_POKEMON_NOT_FOUND: {
      const { message } = action;

      return { ...state, message: message };
    }

    case RESET_SEARCH: {
      return {
        ...state,
        result: initialState.result,
        message: initialState.message
      };
    }

    default:
      return state;
  }
};
