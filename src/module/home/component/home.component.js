import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../../../component/card/card.component';
import MoreIcon from '../../../assets/icon/more.svg';
import Modal from '../../modal/component/modal.connector';
import './home.scss';

class Home extends Component {
  componentDidMount() {
    this.props.loadPokemons();
  }

  paginationOfPokemon = () => {
    const { loadPokemonsWithPagination, lastOffset } = this.props;
    loadPokemonsWithPagination(lastOffset);
  };

  handleChange = event => this.props.filteredPokemon(event.target.value);

  render() {
    const {
      pokemons,
      openModal,
      addItem,
      filteredValue,
      filteredBy,
      modal
    } = this.props;

    return (
      <div className="home">
        <div className="home__filter">
          <p className="home__filter-label">Choose order</p>
          <select
            value={filteredBy}
            onChange={this.handleChange}
            className="home__filter-select"
          >
            {_.map(filteredValue, select => (
              <option key={select.value} value={select.value}>
                {select.name}
              </option>
            ))}
          </select>
        </div>
        {_.map(pokemons, pokemon => (
          <Card
            openModal={openModal}
            pokemon={pokemon}
            key={pokemon.id}
            action={addItem}
            titleAction="Add to cart"
          />
        ))}
        <div className="home__action">
          <button onClick={() => this.paginationOfPokemon()}>
            <img src={MoreIcon} alt="more" />
          </button>
        </div>
        {modal ? <Modal /> : null}
      </div>
    );
  }
}

Home.propTypes = {
  loadPokemons: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  loadPokemonsWithPagination: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  pokemons: PropTypes.array.isRequired,
  filteredBy: PropTypes.string,
  modal: PropTypes.bool
};

export default Home;
