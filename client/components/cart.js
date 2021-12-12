import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCart } from '../store/cart';

class Cart extends React.Component {
  componentDidMount() {
    this.props.loadCart();
  }

  render() {
    const { cart } = this.props;
    if (!cart || cart === undefined || cart.length === 0) {
      return (
        <div>
          <h1>Your Shopping Cart is Empty!</h1>
          <h2>
            <Link to="/products">Check out the Product Store!</Link>
          </h2>
        </div>
      );
    }
  }
}

const mapState = (state) => ({
  cart: state.cart.items,
});

const mapDispatch = (dispatch) => ({
  loadCart: () => dispatch(fetchCart()),
  updateCart: (item, qty) => dispatch(updateCart(item, qty)),
  removeAll: (item) => dispatch(removeAll(item)),
  checkout: () => dispatch(checkout()),
});

export default connect(mapState, mapDispatch)(Cart);
