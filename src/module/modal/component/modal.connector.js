import { connect } from 'react-redux';
import { loadPokemonInfo, resetPokemonInfo } from '../../home/pokemons.actions';
import { closeModal } from '../modal.actions';
import Modal from './modal.component';

const mapStateToProps = state => ({
  pokemon: state.pokemons.details,
  modalId: state.modal.modalId
});

const mapDispatchToProps = dispatch => ({
  loadPokemonInfo: modalId => dispatch(loadPokemonInfo(modalId)),
  closeModal: () => dispatch(closeModal()),
  resetPokemonInfo: () => dispatch(resetPokemonInfo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
