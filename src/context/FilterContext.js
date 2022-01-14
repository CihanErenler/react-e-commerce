import React, { useReducer, useContext, useEffect } from "react";
import reducer from "../reducers/filterReducre";
import { useProductContext } from "../context/ProductsContext";
import {
  PRODUCTS_FETCHED,
  MAKE_GRID_LAYOUT,
  MAKE_LIST_LAYOUT,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTER,
  CLEAR_FILTER,
  CLEAR_FILTER_INPUT,
} from "../common/reducerTypes";

const FilterContext = React.createContext();

const initialState = {
  allProducts: [],
  filteredProducts: [],
  gridView: true,
  sort: "price-lowest",
  filters: {
    value: "",
    company: "all",
    category: "all",
    colors: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const products = useProductContext();

  useEffect(() => {
    dispatch({ type: PRODUCTS_FETCHED, payload: [...products.products] });
  }, [products]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS, payload: state.sort });
  }, [products, state.sort, state.filters]);

  const handleLayout = (type) => {
    if (type === "list") dispatch({ type: MAKE_LIST_LAYOUT });
    else dispatch({ type: MAKE_GRID_LAYOUT });
  };

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "category") value = e.target.textContent;
    if (name === "colors") value = e.target.getAttribute("data-color");
    if (name === "price") value = parseInt(value);
    if (name === "shipping") value = e.target.checked;

    dispatch({ type: UPDATE_FILTER, payload: { name, value } });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const clearFilterInput = () => {
    dispatch({ type: CLEAR_FILTER_INPUT });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        handleLayout,
        updateSort,
        updateFilter,
        clearFilter,
        clearFilterInput,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
