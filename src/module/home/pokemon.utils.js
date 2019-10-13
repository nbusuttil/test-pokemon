import map from 'lodash/map';

export const getRandomPrice = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const getPokemonsWithId = (pokemons, offset) =>
  map(pokemons, pokemon => ({
    ...pokemon,
    id: offset++,
    price: getRandomPrice(5, 15),
    quantity: 0
  }));
