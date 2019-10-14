import pokemonReducer from '../pokemons.reducer';
import { LOAD_POKEMONS } from '../pokemons.actions';

const initialState = {
  list: [],
  initialOffset: 1,
  lastPokemonsId: 0,
  details: {},
  filteredValue: [
    { name: 'Number', value: 'id' },
    { name: 'Name', value: 'name' },
    { name: 'Price', value: 'price' }
  ],
  filteredBy: '',
  nextUrl: ''
};

describe('Pokemon reducer', () => {
  beforeEach(() => jest.spyOn(Math, 'random').mockReturnValue(0));

  it('should return the initial state', () => {
    expect(pokemonReducer(undefined, {})).toEqual(initialState);
  });

  it('LOAD_POKEMONS', () => {
    const action = {
      type: LOAD_POKEMONS,
      pokemons: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v1/' }],
      nextUrl: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=40'
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
      ],
      nextUrl: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=40'
    });
  });
});
