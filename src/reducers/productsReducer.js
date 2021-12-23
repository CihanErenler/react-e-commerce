import {
  PRODUCTS_LOADING,
  PRODUCTS_LOADED,
  PRODUCTS_ERROR,
} from "../common/reducerTypes";

const sidebarReaducer = (state, action) => {
  if (action.type === PRODUCTS_LOADING) {
    return { ...state, productsLoading: true };
  }
  if (action.type === PRODUCTS_LOADED) {
    return {
      ...state,
      productsLoading: false,
      products: action.payload.data,
      featuredProducts: action.payload.data.slice(0, 6),
    };
  }
  if (action.type === PRODUCTS_ERROR) {
    return { ...state, productsLoading: false, productsError: true };
  }
  return state;
};

export default sidebarReaducer;
