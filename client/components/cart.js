// Orlando: filename should be capitalized
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { me } from '../store';
import { fetchCart } from '../store/cart';

class Cart extends React.Component {
  async componentDidMount() {
    await this.props.me(); //ME thunk
    if (this.props.auth.id) {
      await this.props.fetchCart(this.props.auth.id);
      //console.log('props', this.props);
    }
  }

  render() {
    const { cart } = this.props;
    console.log('This is this.props.cart.id: ', cart.id);
    return (
      <div>
        {!cart ? (
          <h1>Your Shopping Cart is Empty!</h1>
        ) : (
          <div>
            {/* <h3>{cart.city}</h3> */}
            <div>
              {cart.map((cartItem) => (
                <div key={cartItem.orderItems.id}>
                  {' '}
                  {cartItem.orderItems.id}{' '}
                </div>
              ))}
            </div>
          </div>
        )}

        <h2>
          <Link to="/products">Check out the Product Store!</Link>
        </h2>
      </div>
    );
  }
}
const mapState = (state) => ({
  cart: state.cart,
  auth: state.auth,
});

const mapDispatch = (dispatch) => ({
  fetchCart: (userId) => dispatch(fetchCart(userId)),
  me: () => dispatch(me),
});

export default connect(mapState, mapDispatch)(Cart);
