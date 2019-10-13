import { connect } from 'react-redux';
import {
  loadCart,
  removeItem,
  addQuantity,
  removeQuantity
} from '../../shop.actions';
import ShopInfo from './shopInfo.component';
import { openModal } from '../../../modal/modal.actions';

const mapStateToProps = state => ({
  shop: state.shop.cart,
  cartSubtotal: state.shop.total
});

const mapDispatchToProps = dispatch => ({
  loadCart: () => dispatch(loadCart()),
  removeItem: pokemon => dispatch(removeItem(pokemon)),
  addQuantity: (pokemon, id) => dispatch(addQuantity(pokemon, id)),
  removeQuantity: (pokemon, id) => dispatch(removeQuantity(pokemon, id)),
  openModal: () => dispatch(openModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopInfo);
