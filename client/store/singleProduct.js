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

// o: why do you have storedProduct as a key and why is the value an array?
//  also, if you are only track one thing then why group it by key
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
