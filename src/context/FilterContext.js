import React, { useState, useReducer, useContext, useEffect } from "react";
import reducer from "../reducers/filterReducre";
import { useProductContext } from "../context/ProductsContext";
import {
  PRODUCTS_FETCHED,
  MAKE_GRID_LAYOUT,
  MAKE_LIST_LAYOUT,
} from "../common/reducerTypes";

const FilterContext = React.createContext();

const initialState = { allProducts: [], filteredProducts: [], gridView: true };

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const products = useProductContext();

  useEffect(() => {
    dispatch({ type: PRODUCTS_FETCHED, payload: [...products.products] });
  }, [products]);

  const handleLayout = (type) => {
    if (type === "list") dispatch({ type: MAKE_LIST_LAYOUT });
    else dispatch({ type: MAKE_GRID_LAYOUT });
  };

  return (
    <FilterContext.Provider value={{ ...state, handleLayout }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
