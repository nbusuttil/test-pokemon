import React from 'react';
import { shallow } from 'enzyme';

import Modal from '../modal.component';

describe('Modal component', () => {
  let props;

  beforeEach(() => {
    props = {
      loadPokemonInfo: jest.fn(),
      resetPokemonInfo: jest.fn(),
      closeModal: jest.fn(),
      pokemon: {
        id: 1,
        price: 4,
        quantity: 0,
        name: 'fearow',
        url: 'https://pokeapi.co/api/v2/pokemon/22/'
      }
    };
  });
  const getWrapper = () => shallow(<Modal {...props} />);

  it('render without crashing', () => {
    expect(getWrapper()).toMatchSnapshot();
  });
});
