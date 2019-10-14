import searchReducer from '../search.reducer';
import {
  SEARCH_POKEMON,
  RESET_SEARCH,
  SEARCH_POKEMON_NOT_FOUND
} from '../search.actions';

const initialState = {
  result: {},
  message: ''
};

describe('Search reducer', () => {
  beforeEach(() => jest.spyOn(Math, 'random').mockReturnValue(0));

  it('should return the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(initialState);
  });

  it('SEARCH_POKEMON', () => {
    const action = {
      type: SEARCH_POKEMON,
      name: 'bulbasaur',
      result: {
        name: 'bulbasaur',
        id: 1,
        quantity: 0,
        price: 5,
        types: [{ type: { name: 'poison' } }]
      }
    };

    expect(searchReducer(undefined, action)).toEqual({
      ...initialState,
      result: {
        name: 'bulbasaur',
        id: 1,
        price: 5,
        quantity: 0,
        types: ['poison']
      }
    });
  });

  it('SEARCH_POKEMON_NOT_FOUND', () => {
    const action = {
      type: SEARCH_POKEMON_NOT_FOUND,
      name: 'bul',
      message: 'bul is not found'
    };

    expect(searchReducer(undefined, action)).toEqual({
      ...initialState,
      message: 'bul is not found'
    });
  });

  it('RESET_SEARCH', () => {
    const action = { type: RESET_SEARCH };

    expect(searchReducer(undefined, action)).toEqual({ ...initialState });
  });
});
