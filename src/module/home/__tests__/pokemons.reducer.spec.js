import pokemonReducer from '../pokemons.reducer';
import {
  LOAD_POKEMONS,
  LOAD_POKEMONS_WITH_PAGINATION
} from '../pokemons.actions';

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

describe('Pokemon reducer', () => {
  beforeEach(() => jest.spyOn(Math, 'random').mockReturnValue(0));

  it('should return the initial state', () => {
    expect(pokemonReducer(undefined, {})).toEqual(initialState);
  });

  it('LOAD_POKEMONS', () => {
    const action = {
      type: LOAD_POKEMONS,
      pokemons: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v1/' }]
    };

    expect(pokemonReducer(undefined, action)).toEqual({
      ...initialState,
      list: [
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v1/',
          id: 1,
          quantity: 0,
          price: 5
        }
      ]
    });
  });

  it('LOAD_POKEMONS_WITH_PAGINATION', () => {
    const action = {
      type: LOAD_POKEMONS_WITH_PAGINATION,
      currentOffset: 2,
      pokemons: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v1/' }]
    };
    expect(pokemonReducer(undefined, action)).toEqual({
      ...initialState,
      list: [
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v1/',
          id: 2,
          quantity: 0,
          price: 5
        }
      ],
      lastOffset: 2
    });
  });
});
