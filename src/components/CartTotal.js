import React from "react";
import { useCartContext } from "../context/CartContext";
import { useUSerContext } from "../context/UserContext";
import { formatPrice } from "../common/helpers";
import Button from "./Button";

const CartTotal = () => {
  const { totalItems, shippingFee } = useCartContext();
  const { myUser, loginWithRedirect } = useUSerContext();

  return (
    <div className="sm:w-1/3 leading-10 border border-gray-300 p-4 mt-14 sm:ml-auto text-gray-600 mb-20 md:mb-0">
      <div className="flex items-center justify-between">
        <p>Subtotal:</p>
        <p>{formatPrice(totalItems)}</p>
      </div>
      <div className="flex items-center justify-between">
        <p>Shipping fee:</p>
        <p>{formatPrice(shippingFee)}</p>
      </div>
      <hr />
      <div className="flex items-center justify-between font-bold">
        <p>Order total:</p>
        <p>{formatPrice(totalItems + shippingFee)}</p>
      </div>
      <div className="flex items-center justify-center">
        {myUser ? (
          <Button to="/checkout" type="link" text="checkout" />
        ) : (
          <Button text="login" action={loginWithRedirect} />
        )}
      </div>
    </div>
  );
};

export default CartTotal;
