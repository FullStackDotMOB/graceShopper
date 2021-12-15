import axios from 'axios';

const VIEW_CART = 'VIEW_CART';

const viewCart = (cart) => ({ type: VIEW_CART, cart });

export const fetchCart = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${userId}/cart`);
    console.log('Data', data);
    dispatch(viewCart(data));
  } catch (err) {
    console.log(err);
  }
};

const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_CART:
      return action.cart;
    default:
      return state;
  }
}
