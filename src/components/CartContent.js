import React from "react";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import Button from "./Button";
import CartTotal from "./CartTotal";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <div>
      <div className="flex pt-10 pb-6 font-semibold text-gray-400 text-center">
        <h1 className="flex-1">Item</h1>
        <h1 className="flex-1">Price</h1>
        <h1 className="flex-1">Quantity</h1>
        <h1 className="flex-1">Subtotal</h1>
        <h1 className="w-24"></h1>
      </div>
      <hr className="border-gray-200 mb-8" />
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <div className="flex items-center justify-between">
        <Button type="link" to="/products" text="continue shopping" />
        <button className="btn-dark" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <CartTotal />
    </div>
  );
};

export default CartContent;
