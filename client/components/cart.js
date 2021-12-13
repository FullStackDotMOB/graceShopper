import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCart } from '../store/cart';

class Cart extends React.Component {
  componentDidMount() {
    this.props.loadCart();
  }

  render() {
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

const mapState = (state) => ({
  cart: state.cart.products,
});

const mapDispatch = (dispatch) => ({
  loadCart: () => dispatch(fetchCart()),
});

export default connect(mapState, mapDispatch)(Cart);
