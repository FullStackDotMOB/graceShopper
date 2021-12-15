import axios from 'axios';

//Action Type

// //CART
// const ADD_CART = 'ADD_CART';
// const ADD_CART = (products) => {
//   return {
//     type: ADD_CART,
//     payload:products,
//   };
// };

// const CART_RESET = 'RESET_CART';

// //PRODUCTS
// const GET_PRODUCTS_REQUETS = 'GET_PRODUCT_REQUETS'
// const GET_PRODUCTS_SUCCESS = 'GET_PRODUCT_SUCCESS'
// const GET_PRODUCTS_FAIL = 'GET_PRODUCT_FAIL'

// //SINGLE PRODUCCT
// const GET_PRODUCT_DETAILS_REQUETS = 'GET_PRODUCT_REQUETS'
// const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_SUCCESS'
// const GET_PRODUCT_DETAILS_FAIL = 'GET_PRODUCT_FAIL'



//REDUCERS






//CART ACTION TYPE

const ADD_CART = 'ADD_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

//ACTION CREATORS

const ADD_CART = (products) => {
  return {
    type: ADD_CART,
    payload: products
  };
};

const REMOVE_FROM_CART = (products) => {
    return {
    type: REMOVE_FROM_CART,
    payload: products
    };
};
/**
 * THUNK CREATORS
 * export const addToCart = (id, qty) => async (dispatch,)
 * localStorage.setItem('cart', JSON.stringify(getState().guestCartReducer.cartItems))
 */

export const addToCart = (id, qty) => async (dispatch,) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    console.log('Data', data);
    localStorage.setItem('cart', JSON.stringify(dispatch(ADD_CART(data,qty))))
  } catch (err) {
    console.log(err);
  }
};
export const removeFromCart = (id) => (dispatch) => {
    dispatch(REMOVE_FROM_CART,id)
    localStorage.setItem('cart', JSON.stringify(dispatch(REMOVE_FROM_CART,id))) 
}

//CART LOCAL STORAGE 


//CART REDUCERS

const initialState = {
  cartItems = []
};

guestCartReducer ( state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const item = action.payload;
      const existItem = initialState.find((id) => id.product === item.product)

      if(existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((id) => id.product === existItem.product ? item : id)
        }

      } else {

        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
  case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((id) => id.product !== action.payload)
      }
    default:
      return state;
  }
}