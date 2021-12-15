import axios from 'axios';

//CART ACTION TYPE

const ADD_CART = 'ADD_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const VIEW_CART = 'VIEW_CART';

//ACTION CREATORS

const Add_Cart = (product) => ({ type: ADD_CART, product });
const View_Cart = (cart) => ({ type: VIEW_CART, cart });
const Remove_From_Cart = (product) => ({ type: REMOVE_FROM_CART, product });
/**
 * THUNK CREATORS
 * export const addToCart = (id, qty) => async (dispatch,)
 * localStorage.setItem('cart', JSON.stringify(getState().guestCartReducer.cartItems))
 */

export const addToCart = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/${userId}`);
    // console.log('Data', data);
    localStorage.setItem('cart', JSON.stringify(dispatch(Add_Cart(data))));
  } catch (err) {
    console.log(err);
  }
};
export const removeFromCart = (userId) => (dispatch) => {
  dispatch(REMOVE_FROM_CART, userId);
  localStorage.setItem(
    'cart',
    JSON.stringify(dispatch(Remove_From_Cart, userId))
  );
};

export const viewFromCart = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${userId}/cart`);
    // console.log('Data', data);
    dispatch(View_Cart(data));
  } catch (err) {
    console.log(err);
  }
};

//CART LOCAL STORAGE

//CART REDUCERS
const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_CART:
      // Orlando: why is this adding new products, when you have a cart key
      return action.cart;

    case ADD_CART:
      const item = action.payload;
      const existItem = initialState.find((id) => id.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((id) =>
            id.product === existItem.product ? item : id
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (id) => id.product !== action.payload
        ),
      };
    default:
      return state;
  }
}
