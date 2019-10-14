import { connect } from 'react-redux';
import { searchPokemon, resetSearch } from '../search.actions';
import { addItem } from '../../shop/shop.actions';
import { openModal } from '../../modal/modal.actions';
import Search from './search.component';

const mapStateToProps = state => ({
  result: state.search.result,
  message: state.search.message,
  modal: state.modal.isOpened
});

const mapDispatchToProps = dispatch => ({
  searchPokemon: name => dispatch(searchPokemon(name)),
  resetSearch: () => dispatch(resetSearch()),
  openModal: id => dispatch(openModal(id)),
  addItem: (pokemon, quantity) => dispatch(addItem(pokemon, quantity))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
