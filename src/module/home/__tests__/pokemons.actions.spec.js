import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  LOAD_POKEMONS,
  loadPokemons,
  LOAD_POKEMONS_WITH_PAGINATION,
  loadPokemonsWithPagination
} from '../pokemons.actions';
import { LIMIT } from '../../../utils';

const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${LIMIT}`;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

describe('actions pokemon', () => {
  beforeEach(() => {
    store = mockStore({});
    fetchMock.restore();
  });

  afterEach(() => fetchMock.reset());

  it('LOAD_POKEMONS', () => {
    fetchMock.getOnce(url, {
      body: { results: [{ name: 'bulb' }, { name: 'pika' }], next: 'http://1' }
    });

    const expectedActions = [
      {
        type: LOAD_POKEMONS,
        pokemons: [{ name: 'bulb' }, { name: 'pika' }],
        nextUrl: 'http://1'
      }
    ];

    return store.dispatch(loadPokemons()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('LOAD_POKEMONS_WITH_PAGINATION', () => {
    const nextUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${LIMIT}`;

    fetchMock.getOnce(nextUrl, {
      body: {
        results: [{ name: 'sacha' }, { name: 'ondine' }],
        next: 'http://2'
      }
    });

    const expectedActions = [
      {
        type: LOAD_POKEMONS_WITH_PAGINATION,
        pokemons: [{ name: 'sacha' }, { name: 'ondine' }],
        nextUrl: 'http://2'
      }
    ];

    return store.dispatch(loadPokemonsWithPagination(nextUrl)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
