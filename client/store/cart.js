import axios from 'axios';

const VIEW_CART = 'VIEW_CART';
const ADD_TO_CART = 'ADD_TO_CART';

const viewCart = (cart) => ({ type: VIEW_CART, cart });
const addToCart = (cart) => ({ type: ADD_TO_CART, cart });

export const fetchCart = (userId) => async (dispatch) => {
  try {
    // dispatch(cartLoad());
    const { data } = await axios.get(`/api/users/${userId}/cart`);
    console.log('Data', data);
    dispatch(viewCart(data));
  } catch (err) {
    console.log(err);
    // dispatch(cartLoad(err));
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
