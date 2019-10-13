import React from 'react';
import { shallow } from 'enzyme';

import Card from '../card.component';

describe('Card component', () => {
  let props;

  beforeEach(() => {
    props = {
      pokemon: {
        id: 2,
        price: 7,
        quantity: 0,
        name: 'spearow',
        url: 'https://pokeapi.co/api/v2/pokemon/21/'
      },
      action: jest.fn(),
      openModal: jest.fn(),
      titleAction: 'Add to cart',
      addQuantity: jest.fn(),
      removeQuantity: jest.fn(),
      titleAdd: '+',
      titleRemove: '-',
      modifier: false,
      isShop: false
    };
  });
  const getWrapper = () => shallow(<Card {...props} />);

  it('render without crashing', () => {
    expect(getWrapper()).toMatchSnapshot();
  });
});
