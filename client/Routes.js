import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
import { me } from './store';
import Cart from './components/cart';
import { userId } from './store/cart';

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
            <Route path={`/users/${userId}/cart`} component={Cart} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
        <div>
          <Route exact path="/products" component={AllProducts} />
        </div>
        <div>
          <Route path="/products/:productId" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
        </div>
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
