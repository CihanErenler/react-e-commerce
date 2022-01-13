import {
  PRODUCTS_FETCHED,
  MAKE_GRID_LAYOUT,
  MAKE_LIST_LAYOUT,
} from "../common/reducerTypes";

const filterReducer = (state, action) => {
  if (action.type === PRODUCTS_FETCHED) {
    return { ...state, allProducts: [...action.payload] };
  }

  if (action.type === MAKE_GRID_LAYOUT) {
    return { ...state, gridView: true };
  }

  if (action.type === MAKE_LIST_LAYOUT) {
    return { ...state, gridView: false };
  }

  return state;
};

export default filterReducer;
