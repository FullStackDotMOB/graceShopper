import axios from 'axios';

//ACTION TYPES

const ADD_TO_CART = 'ADD_TO_CART';
const ADD_GUEST_CART = 'ADD_GUEST_CART';
const VIEW_CART = 'VIEW_CART';

//ACTION CREATORS
const viewCart = (cart) => ({ type: VIEW_CART, cart });
const addToCart = (cart) => ({ type: ADD_TO_CART, cart });

export const addItemsToCart = (addedProducts) => ({
  type: ADD_GUEST_CART,
  addedProducts,
});

/**
 * THUNK CREATORS
 *
 */
export const fetchCart = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${userId}/cart`);
    console.log('/api/users/${userId}/cart Data', data);
    dispatch(viewCart(data));
  } catch (err) {
    console.log(err);
  }
};

export const addToCart = (addedProducts) => async (dispatch) => {
  try {
    const guestCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    // const addProduct = { ...addedProducts };
    console.log(addedProducts);

    guestCart.push(addedProducts);

    const setItems = localStorage.setItem('cart', JSON.stringify(guestCart));
    dispatch(addItemsToCart(setItems));
  } catch (err) {
    console.log(err);
  }
};

export const addProductToCart = (userId, productId) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/users/${userId}/cart/${productId}`);
    console.log('Add to Product Data:', data);
    dispatch(addToCart(data));
  } catch (error) {
    console.error(error);
  }
};

const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_CART:
      // Orlando: why is this adding new products, when you have a cart key
      return action.cart;
    case ADD_TO_CART:
      return action.cart;
    default:
      return state;
  }
}

export function guestCartReducer(state = { guestCart: [] }, action) {
  switch (action.type) {
    case ADD_GUEST_CART:
      return { guestCart: [...addedProducts] };
    default:
      return state;
  }
}
