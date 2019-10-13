import map from 'lodash/map';
import parseInt from 'lodash/parseInt';

const sum = (accumulator, currentValue) => accumulator + parseInt(currentValue);

export const buildPrice = cart => {
  const getAllPrice = map(
    cart,
    currentCart => currentCart.price * currentCart.quantity
  );
  return getAllPrice.reduce(sum, 0);
};
