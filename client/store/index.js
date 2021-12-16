import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import productsReducer from './product';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import singleProductReducer from './singleProduct';
import cartReducer from './cart';
import guestCartReducer from './cart';

const reducer = combineReducers({
  auth,
  products: productsReducer,
  product: singleProductReducer,
  cart: cartReducer,
  guest: guestCartReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
