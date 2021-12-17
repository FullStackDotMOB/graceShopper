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
    console.log(cart);

    return (
      <div>
        <h3>
          {cart.map((item) => {
            console.log(item);
            return (
              <div key={item.id}>
                <Link to={`products/${item.id}`}>
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                </Link>
                <Link to={`products/${item.id}`}>
                  <div>
                    <img src={item.imageUrl} />
                  </div>
                </Link>
                <div>
                  <h2>${item.price / 100}</h2>
                </div>
                <div>#{item.SKU}</div>
              </div>
            );
          })}
        </h3>
        <div>
          <Link to="/products">
            <button
              onClick={() => {
                localStorage.clear();
              }}
            >
              <label>Remove from Cart</label>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/Checkout">
            <button>Complete Your Order</button>
          </Link>
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
