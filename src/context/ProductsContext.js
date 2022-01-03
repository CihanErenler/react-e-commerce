import { useEffect, useReducer } from "react";
import axios from "axios";
import React, { useContext } from "react";
import { products_url as url } from "../common/constants";
import reducer from "../reducers/productsReducer";
import {
  PRODUCTS_LOADING,
  PRODUCTS_LOADED,
  PRODUCTS_ERROR,
  SINGLE_PRODUCT_LOADING,
  SINGLE_PRODUCT_LOADED,
  SINGLE_PRODUCT_ERROR,
} from "../common/reducerTypes";

const ProductContext = React.createContext();

const initialState = {
  productsLoading: false,
  productsError: false,
  products: [],
  singleProductLoading: true,
  singleProductLoaded: false,
  singleProductError: false,
  singleProduct: {},
  featuredProducts: [],
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: PRODUCTS_LOADING });
    try {
      const response = await axios.get(url);
      dispatch({ type: PRODUCTS_LOADED, payload: response });
    } catch (error) {
      console.log(error);
      dispatch({ type: PRODUCTS_ERROR });
    }
  };

  const fetchProducts = () => {
    getProducts(url);
  };

  const getSingleProduct = async (url) => {
    console.log(url);
    dispatch({ type: SINGLE_PRODUCT_LOADING });
    try {
      const response = await axios.get(url);
      dispatch({ type: SINGLE_PRODUCT_LOADED, payload: response });
    } catch (error) {
      dispatch({ type: SINGLE_PRODUCT_ERROR });
      console.log("şimdi siktim işte");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
