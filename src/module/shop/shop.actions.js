export const LOAD_CART = 'LOAD_CART';
export const loadCart = () => ({
  type: LOAD_CART
});

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (pokemon, quantity = 1, bullet = 1) => ({
  type: ADD_ITEM,
  pokemon,
  quantity,
  bullet
});

export const ADD_QUANTITY = 'ADD_QUANTITY';
export const addQuantity = (pokemon, quantity = 1) => ({
  type: ADD_QUANTITY,
  pokemon,
  quantity
});

export const REMOVE_QUANTITY = 'REMOVE_QUANTITY';
export const removeQuantity = (pokemon, quantity = -1) => ({
  type: REMOVE_QUANTITY,
  pokemon,
  quantity
});

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeItem = (pokemon, bullet = 1) => ({
  type: REMOVE_ITEM,
  pokemon,
  bullet
});
