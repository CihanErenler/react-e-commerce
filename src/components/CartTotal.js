import React from "react";
import { useCartContext } from "../context/CartContext";
import { formatPrice } from "../common/helpers";

const CartTotal = () => {
  const { totalItems } = useCartContext();

  return (
    <div className="sm:w-1/3 leading-10 border border-gray-300 p-4 mt-14 sm:ml-auto text-gray-600 mb-20 md:mb-0">
      <div className="flex items-center justify-between">
        <p>Subtotal:</p>
        <p>{formatPrice(totalItems)}</p>
      </div>
      <div className="flex items-center justify-between">
        <p>Shipping fee:</p>
        <p>fee</p>
      </div>
      <hr />
      <div className="flex items-center justify-between font-bold">
        <p>Order total:</p>
        <p>{formatPrice(totalItems)}</p>
      </div>
    </div>
  );
};

export default CartTotal;
