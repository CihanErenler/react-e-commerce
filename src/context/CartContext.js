import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/cartReducer";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
  CLEAR_CART,
  CALCULATE_ALL_CART,
  UPDATE_PAYMENT_CART,
  HANDLE_ORDER,
} from "../common/reducerTypes";

const CartContext = React.createContext();

const getLocalStorage = () => {
  const local = localStorage.getItem("cart");
  if (local) return JSON.parse(local);
  return [];
};

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 321,
  paymentCard: {
    name: "",
    number: "",
    month: "Month",
    year: "Year",
    securityCode: "",
  },
  ordered: false,
  processing: false,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  const toggleAmount = (type, id) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, type } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const updatePayment = (e) => {
    const { name, value } = e.target;

    dispatch({ type: UPDATE_PAYMENT_CART, payload: { name, value } });
  };

  const handleOrder = (obj) => {
    const { actionType, value } = obj;
    dispatch({ type: HANDLE_ORDER, payload: { actionType, value } });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    dispatch({ type: CALCULATE_ALL_CART });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        toggleAmount,
        clearCart,
        updatePayment,
        handleOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
