import axios from 'axios';

const RETRIEVE_SINGLE_PRODUCT = 'RETRIEVE_SINGLE_PRODUCT';

export const setProduct = (product) => {
  return { type: RETRIEVE_SINGLE_PRODUCT, product };
};

export const fetchProduct = (productNumber) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${productNumber}`);
      dispatch(setProduct(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = {
  storedProduct: [],
};

export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_SINGLE_PRODUCT:
      return { ...state, storedProduct: action.product };
    default:
      return state;
  }
}
