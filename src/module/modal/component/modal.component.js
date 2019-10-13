import map from 'lodash/map';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BASE_URL_PICTURE } from '../../../utils';

import './modal.scss';

class Modal extends Component {
  componentDidMount() {
    this.props.loadPokemonInfo(this.props.modalId);
  }

  closeModal = () => {
    this.props.resetPokemonInfo();
    this.props.closeModal();
  };

  renderPokemonInfo = pokemon => {
    const { name, id, types, weight, price } = pokemon;
    if (!name) {
      return <p className="modal__container-loading">Loading...</p>;
    }

    return (
      <Fragment>
        <h1>
          {name} <span>Pokedex: #{id}</span>
        </h1>
        <img src={`${BASE_URL_PICTURE}/${id}.png`} alt={name} />
        {map(types, type => (
          <div
            className={`modal__container-content-label modal__container-content-label--${type}`}
            key={type}
          >
            <p>{type}</p>
          </div>
        ))}
        <p>Weight: {weight}</p>
        <p>Price: {price} €</p>
      </Fragment>
    );
  };

  render() {
    const { pokemon } = this.props;

    return (
      <div className="modal">
        <div className="modal__container">
          <div className="modal__container-header">
            <button onClick={() => this.closeModal()}>X</button>
          </div>
          <div className="modal__container-content">
            {this.renderPokemonInfo(pokemon)}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  loadPokemonInfo: PropTypes.func.isRequired,
  resetPokemonInfo: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  pokemon: PropTypes.object
};

export default Modal;
