import { connect } from 'react-redux';
import Header from './header.component';

const mapStateToProps = state => ({
  bullet: state.shop.bullet
});

export default connect(
  mapStateToProps,
  undefined
)(Header);
