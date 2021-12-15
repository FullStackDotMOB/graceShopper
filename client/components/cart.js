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

    return (
      <div>
        {!cart.id ? (
          <h1>Your Shopping Cart is Empty!</h1>
        ) : (
          <div>
            <h3>Shipping Address (Line 1): {cart.addressLine1}</h3>
            <h3>Shipping Address (Line 2): {cart.addressLine2}</h3>
            <h3>Shipping City: {cart.city}</h3>
            <h3>Shipping State: {cart.state}</h3>
            <h3>Postal Code: {cart.zip}</h3>
            <h3>Phone (to receive text updates): {cart.phone}</h3>

            <h3>
              {cart.orderItems.map((item) => {
                return (
                  <div key={item.id}>
                    <Link to={`products/${item.product.id}`}>
                      <div>
                        <h3>{item.product.name}</h3>
                      </div>
                    </Link>
                    <Link to={`products/${item.product.id}`}>
                      <div>
                        <img src={item.product.imageUrl} />
                      </div>
                    </Link>
                    <div>
                      <h2>${item.product.price / 100}</h2>
                    </div>
                    <div>#{item.product.SKU}</div>
                  </div>
                );
              })}
            </h3>
            <div>
              {/* {cart.map((cartItem) => (
                <div key={cartItem.id}>
                  <div>{cartItemid}</div>
                </div>
              ))} */}
            </div>
          </div>
        )}
        <div>
          <button>Complete Your Order</button>
        </div>
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
