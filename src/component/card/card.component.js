import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { BASE_URL_PICTURE } from '../../utils';
import './card.scss';

const Card = ({
  pokemon,
  openModal,
  modifier,
  action,
  titleAction,
  isShop,
  addQuantity,
  removeQuantity,
  titleAdd,
  titleRemove
}) => {
  const wrapperClass = classNames('card', { 'card--full': modifier });
  const picture = `${BASE_URL_PICTURE}/${pokemon.id}.png`;

  return (
    <div className={wrapperClass}>
      <button className="card__picture" onClick={() => openModal(pokemon.id)}>
        <img src={picture} alt={pokemon.name} />
      </button>
      <h1 className="card__title">
        <span>#{pokemon.id}</span>&nbsp;{pokemon.name}
      </h1>
      <div className="card__actions">
        {isShop ? (
          <div className="card__actions-item">
            <button onClick={() => addQuantity(pokemon)}>{titleAdd}</button>
            <button onClick={() => removeQuantity(pokemon)}>
              {titleRemove}
            </button>
          </div>
        ) : null}
        <div className="card__actions-item">
          <button onClick={() => action(pokemon)}>{titleAction}</button>
        </div>
      </div>
      <div className="card__info">
        {isShop ? (
          <p className="card__info-quantity">
            <span>Quantity:</span> {pokemon.quantity}
          </p>
        ) : null}
        <p className="card__info-price">
          <span>Prix:</span> {pokemon.price} €
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  pokemon: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  titleAction: PropTypes.string.isRequired,
  addQuantity: PropTypes.func,
  removeQuantity: PropTypes.func,
  titleAdd: PropTypes.string,
  titleRemove: PropTypes.string,
  modifier: PropTypes.bool,
  isShop: PropTypes.bool
};

export default Card;
