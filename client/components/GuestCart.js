import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { me } from '../store';
import { fetchCart } from '../store/cart';
import cart from './cart';

class GuestCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  async componentDidMount() {
    this.setState({
      cart: localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [],
    });
  }

  render() {
    const { cart } = this.state;

    return (
      <div>
        <h3>
          {cart.map((item) => {
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
  addedProducts: state.addedProducts,
  cart: state.cart,
  auth: state.auth,
});

const mapDispatch = (dispatch) => ({
  addToCart: (addedProducts) => dispatch(addedProducts),
  fetchCart: (userId) => dispatch(fetchCart(userId)),
  me: () => dispatch(me),
});

export default connect(mapState, mapDispatch)(GuestCart);
