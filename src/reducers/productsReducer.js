import {
  PRODUCTS_LOADING,
  PRODUCTS_LOADED,
  PRODUCTS_ERROR,
  SINGLE_PRODUCT_LOADING,
  SINGLE_PRODUCT_LOADED,
  SINGLE_PRODUCT_ERROR,
} from "../common/reducerTypes";

const productReducer = (state, action) => {
  console.log("buraya girdi");
  if (action.type === PRODUCTS_LOADING) {
    return { ...state, productsLoading: true };
  }
  if (action.type === PRODUCTS_LOADED) {
    return {
      ...state,
      productsLoading: false,
      products: action.payload.data,
      featuredProducts: action.payload.data.slice(0, 6),
      productsError: false,
    };
  }
  if (action.type === PRODUCTS_ERROR) {
    return { ...state, productsLoading: false, productsError: true };
  }

  if (action.type === SINGLE_PRODUCT_LOADING) {
    return { ...state, singleProductLoading: true, singleProductError: false };
  }

  if (action.type === SINGLE_PRODUCT_LOADED) {
    return {
      ...state,
      singleProductLoading: false,
      singleProductLoaded: true,
      singleProduct: action.payload.data,
    };
  }

  if (action.type === SINGLE_PRODUCT_ERROR) {
    console.log("sikerler sizsadasdf");
    return { ...state, singleProductError: true, singleProductLoading: false };
  }

  return new Error("There is no matching type");
};

export default productReducer;
