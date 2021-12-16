import axios from 'axios';

//ACTION TYPES

const ADD_GUEST_CART = 'ADD_GUEST_CART';
const VIEW_CART = 'VIEW_CART';

//ACTION CREATORS
const viewCart = (cart) => ({ type: VIEW_CART, cart });

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
    const emptyCart = [];
    const guestCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    const storedItems = guestCart.filter(
      (guestCart) => guestCart.id === product.id
    );

    //check items then store Items
    if (!storedItems.length) {
      const addProduct = { ...addedProducts };

      guestCart.push(addProduct);

      localStorage.setItem('cart', JSON.stringify(storedItems));
      dispatch(addItemsToCart(storedItems));
    }
  } catch (err) {
    console.log(err);
  }
};

const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    // case ADD_CART:
    //   return { ...state, loading: true };
    case VIEW_CART:
      // Orlando: why is this adding new products, when you have a cart key
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
