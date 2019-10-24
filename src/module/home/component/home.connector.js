import { connect } from 'react-redux';
import Home from './home.component';
import {
  loadPokemons,
  loadPokemonsWithPagination,
  filteredPokemon
} from '../pokemons.actions';
import { addItem } from '../../shop/shop.actions';
import { openModal } from '../../modal/modal.actions';

const mapStateToProps = state => ({
  pokemons: state.pokemons.list,
  filteredValue: state.pokemons.filteredValue,
  filteredBy: state.pokemons.filteredBy,
  modal: state.modal.isOpened,
  nextUrl: state.pokemons.nextUrl
});

const mapDispatchToProps = dispatch => ({
  loadPokemons: () => dispatch(loadPokemons()),
  loadPokemonsWithPagination: nextUrl =>
    dispatch(loadPokemonsWithPagination(nextUrl)),
  addItem: (pokemon, quantity) => dispatch(addItem(pokemon, quantity)),
  filteredPokemon: value => dispatch(filteredPokemon(value)),
  openModal: id => dispatch(openModal(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
