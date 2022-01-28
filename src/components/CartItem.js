import React from "react";
import { formatPrice } from "../common/helpers";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ amount, color, id, image, name, price }) => {
  const { removeItem, toggleAmount } = useCartContext();

  return (
    <section className="mb-4 flex bg-gray-100 p-2 rounded-lg">
      <div className="flex items-center flex-1">
        <div className="h-24 w-32 overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="cart-item"
          />
        </div>
        <div className="ml-2">
          <h1 className="capitalize font-bold text-gray-600">{name}</h1>
          <div className="flex items-center ">
            <span className="font-light text-gray-400">color: </span>
            <div
              style={{ backgroundColor: color }}
              className="w-4 h-4 rounded-full ml-2"
            ></div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-orange-800 font-semibold">{formatPrice(price)}</h1>
      </div>
      <div className="text-2xl flex gap-4 flex-1 items-center justify-center">
        <button onClick={() => toggleAmount("dicrease", id)}>-</button>
        <div>{amount}</div>
        <button onClick={() => toggleAmount("increase", id)}>+</button>
      </div>
      <div className="flex-1"></div>
      <div className="w-24 flex items-center justify-center text-red-500 cursor-pointer">
        <button onClick={() => removeItem(id)}>
          <MdDelete className="text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
