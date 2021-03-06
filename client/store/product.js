import axios from 'axios';

const ALL_PRODUCTS = 'ALL_PRODUCTS';

const getProducts = (products) => {
  return {
    type: ALL_PRODUCTS,
    products,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/products');
      dispatch(getProducts(data));
    } catch (err) {}
  };
};

// o: if you are only track one thing then why group it by key
const initialState = {
  allProducts: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return { ...state, allProducts: action.products };
    default:
      return state;
  }
}
