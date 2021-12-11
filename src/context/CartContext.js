import React, { useContext } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
