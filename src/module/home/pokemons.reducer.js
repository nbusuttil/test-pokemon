import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import parseInt from 'lodash/parseInt';
import find from 'lodash/find';

import {
  LOAD_POKEMONS,
  LOAD_POKEMONS_WITH_PAGINATION,
  LOAD_POKEMON_INFO,
  RESET_POKEMON_INFO,
  FILTERED_POKEMON
} from './pokemons.actions';

import { getPokemonsWithId } from './pokemon.utils';

const initialState = {
  list: [],
  initialOffset: 1,
  lastOffset: 1,
  details: {},
  filteredValue: [
    { name: 'Number', value: 'id' },
    { name: 'Name', value: 'name' },
    { name: 'Price', value: 'price' }
  ],
  filteredBy: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POKEMONS: {
      const { pokemons } = action;

      return {
        ...state,
        list: getPokemonsWithId(pokemons, state.initialOffset)
      };
    }

    case LOAD_POKEMONS_WITH_PAGINATION: {
      const { pokemons, currentOffset } = action;
      const list = [
        ...state.list,
        ...getPokemonsWithId(pokemons, currentOffset)
      ];

      return {
        ...state,
        list: orderBy(list, [state.filteredBy], ['asc']),
        lastOffset: currentOffset
      };
    }

    case LOAD_POKEMON_INFO: {
      const { pokemon, modalId } = action;
      const currentPokemon = find(
        state.list,
        pokemon => pokemon.id === parseInt(modalId)
      );
      const getTypes = map(pokemon.types, type => type.type.name);

      return {
        ...state,
        details: {
          id: currentPokemon.id,
          name: currentPokemon.name,
          price: currentPokemon.price,
          weight: pokemon.weight,
          types: getTypes
        }
      };
    }

    case RESET_POKEMON_INFO: {
      return { ...state, details: initialState.details };
    }

    case FILTERED_POKEMON: {
      const { value } = action;
      return {
        ...state,
        list: orderBy(state.list, [value], ['asc']),
        filteredBy: value
      };
    }

    default:
      return state;
  }
};
