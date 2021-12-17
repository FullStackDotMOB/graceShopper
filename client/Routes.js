import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
import { me } from './store';
import Cart from './components/Cart';
import { userId } from './store/cart';
import GuestCart from './components/GuestCart';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {/* : why so many switches here? */}
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route exact path="/products" component={AllProducts} />
            <Route path="/products/:productId" component={SingleProduct} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/cart" component={GuestCart} />
            <Route exact path="/products" component={AllProducts} />
            <Route path="/products/:productId" component={SingleProduct} />
          </Switch>
        )}
        <div></div>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
