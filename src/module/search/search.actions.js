import { BASE_URL, reponseHandler } from '../../utils';

export const SEARCH_POKEMON = 'SEARCH_POKEMON';
export const SEARCH_POKEMON_NOT_FOUND = 'SEARCH_POKEMON_NOT_FOUND';
export const searchPokemon = name => dispatch =>
  fetch(`${BASE_URL}/${name}`)
    .then(response => reponseHandler(response))
    .then(result => dispatch({ type: SEARCH_POKEMON, result }))
    .catch(() =>
      dispatch({ type: SEARCH_POKEMON_NOT_FOUND, message: `${name} is unknow` })
    );

export const RESET_SEARCH = 'RESET_SEARCH';
export const resetSearch = () => ({
  type: RESET_SEARCH
});
