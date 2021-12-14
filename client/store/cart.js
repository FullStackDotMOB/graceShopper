import axios from 'axios';

// const CART_LOAD = 'CART_LOAD';
const VIEW_CART = 'VIEW_CART';

// const cartLoad = () => ({
//   type: CART_LOAD,
// });

const viewCart = (cart) => ({ type: VIEW_CART, cart });

export const fetchCart = (userId) => async (dispatch) => {
  try {
    // dispatch(cartLoad());
    const { data } = await axios.get(`/api/users/${userId}/cart`);
    dispatch(viewCart(data));
  } catch (err) {
    console.log(err);
    // dispatch(cartLoad(err));
  }
};

const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    // case CART_LOAD:
    //   return { ...state, loading: true };
    case VIEW_CART:
      // Orlando: why is this adding new products, when you have a cart key
      return action.cart;
    default:
      return state;
  }
}
