import isEmpty from 'lodash/isEmpty';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../../component/card/card.component';
import SearchIcon from '../../../assets/icon/search.svg';
import './search.scss';

const Search = ({ searchPokemon, resetSearch, addItem, result, message }) => {
  const [name, getName] = useState('');

  const handleNameChange = event => {
    if (event.target.value.length === 0) {
      resetSearch();
    }

    getName(event.target.value);
  };

  const renderResult = result => (
    <Card
      pokemon={result}
      key={result.id}
      action={addItem}
      titleAction="Add to cart"
    />
  );

  return (
    <div className="search">
      <div className="search__container">
        <input
          className="search__container-input"
          type="text"
          placeholder="Name of pokemon"
          value={name}
          onChange={handleNameChange}
        />
        <button
          className="search__container-button"
          onClick={() => searchPokemon(name)}
        >
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>
      <p className="search__info">
        You must enter the full name of the desired pokemon
        <span>(bulbasaur, charizard...)</span>.
      </p>
      <div className="search__result">
        {!isEmpty(result) ? (
          renderResult(result)
        ) : (
          <p className="search__result-error">{message}</p>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  searchPokemon: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  pokemon: PropTypes.object,
  message: PropTypes.string
};

export default Search;
