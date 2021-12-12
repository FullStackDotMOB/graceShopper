import axios from 'axios';

const CART_LOAD = 'CART_LOAD';
const VIEW_CART = 'VIEW_CART';

const cartLoad = () => ({
  type: CART_LOAD,
});

const viewCart = (cart) => ({ type: VIEW_CART, cart });

export const fetchCart = () => async (dispatch) => {
  try {
    dispatch(cartLoad());
    const { data } = await axios.get('/api/cart');
    dispatch(viewCart(data));
  } catch (err) {
    console.log(err);
    dispatch(cartLoadError(err));
  }
};

const cartReducer = (
  cart = { products: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case CART_LOAD:
      return { ...cart, loading: true };
    case VIEW_CART:
      return { ...cart, items: action.cart };
    default:
      return cart;
  }
};

export default cartReducer;
