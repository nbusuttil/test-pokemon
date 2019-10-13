import React from 'react';
import { shallow } from 'enzyme';

import ShopInfo from '../shopInfo.component';

describe('ShopInfo component', () => {
  let props;

  beforeEach(() => {
    props = {
      loadCart: jest.fn(),
      openModal: jest.fn(),
      removeItem: jest.fn(),
      addQuantity: jest.fn(),
      removeQuantity: jest.fn(),
      shop: {},
      cartSubtotal: 7
    };
  });
  const getWrapper = () => shallow(<ShopInfo {...props} />);

  it('render without crashing', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('render with item', () => {
    props.shop = {
      17: {
        id: 17,
        name: 'pidgeotto',
        price: 6,
        quantity: 1,
        url: 'https://pokeapi.co/api/v2/pokemon/17/'
      }
    };
    expect(getWrapper()).toMatchSnapshot();
  });
});
