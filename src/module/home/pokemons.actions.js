import { BASE_URL, reponseHandler, LIMIT } from '../../utils';

export const LOAD_POKEMONS = 'LOAD_POKEMONS';
export const loadPokemons = () => dispatch =>
  fetch(`${BASE_URL}?offset=0&limit=${LIMIT}`)
    .then(response => reponseHandler(response))
    .then(pokemons =>
      dispatch({
        type: LOAD_POKEMONS,
        pokemons: pokemons.results,
        nextUrl: pokemons.next
      })
    )
    .catch(() => new Error('The list of pokemon is not retrieved'));

export const LOAD_POKEMONS_WITH_PAGINATION = 'LOAD_POKEMONS_WITH_PAGINATION';
export const loadPokemonsWithPagination = nextUrl => dispatch =>
  fetch(nextUrl)
    .then(response => reponseHandler(response))
    .then(pokemons =>
      dispatch({
        type: LOAD_POKEMONS_WITH_PAGINATION,
        pokemons: pokemons.results,
        nextUrl: pokemons.next
      })
    )
    .catch(() => new Error('The list of pokemon is not retrieved'));

export const LOAD_POKEMON_INFO = 'LOAD_POKEMON_INFO';
export const loadPokemonInfo = modalId => dispatch =>
  fetch(`${BASE_URL}/${modalId}`)
    .then(response => reponseHandler(response))
    .then(pokemon => dispatch({ type: LOAD_POKEMON_INFO, pokemon, modalId }))
    .catch(() => new Error('The pokemon info is not retrieved'));

export const RESET_POKEMON_INFO = 'RESET_POKEMON_INFO';
export const resetPokemonInfo = () => ({
  type: RESET_POKEMON_INFO
});

export const FILTERED_POKEMON = 'FILTERED_POKEMON';
export const filteredPokemon = value => ({
  type: FILTERED_POKEMON,
  value
});
