import React from 'react';
import { shallow } from 'enzyme';

import Home from '../home.component';

describe('Home component', () => {
  let props;

  beforeEach(() => {
    props = {
      loadPokemons: jest.fn(),
      openModal: jest.fn(),
      loadPokemonsWithPagination: jest.fn(),
      addItem: jest.fn(),
      pokemons: [
        {
          id: 2,
          price: 7,
          quantity: 0,
          name: 'spearow',
          url: 'https://pokeapi.co/api/v2/pokemon/21/'
        },
        {
          id: 1,
          price: 4,
          quantity: 0,
          name: 'fearow',
          url: 'https://pokeapi.co/api/v2/pokemon/22/'
        }
      ],
      filteredBy: '',
      modal: false,
      nextUrl: ''
    };
  });
  const getWrapper = () => shallow(<Home {...props} />);

  it('render without crashing', () => {
    expect(getWrapper()).toMatchSnapshot();
  });
});
