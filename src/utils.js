export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
export const BASE_URL_PICTURE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
export const LIMIT = 40;

export const reponseHandler = response => {
  if (response.status !== 200) {
    throw Error(response.statusText);
  } else {
    return response.json();
  }
};
