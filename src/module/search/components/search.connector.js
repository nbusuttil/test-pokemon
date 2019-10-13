import { connect } from 'react-redux';
import { searchPokemon, resetSearch } from '../search.actions';
import { addItem } from '../../shop/shop.actions';
import Search from './search.component';

const mapStateToProps = state => ({
  result: state.search.result,
  message: state.search.message
});

const mapDispatchToProps = dispatch => ({
  searchPokemon: name => dispatch(searchPokemon(name)),
  resetSearch: () => dispatch(resetSearch()),
  addItem: (pokemon, quantity) => dispatch(addItem(pokemon, quantity))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
