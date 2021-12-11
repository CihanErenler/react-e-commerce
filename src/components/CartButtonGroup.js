import React from "react";
import { Link } from "react-router-dom";
import { BsBagFill, BsPersonFill, BsFillPersonCheckFill } from "react-icons/bs";
import { useUSerContext } from "../context/UserContext";
import { useCartContext } from "../context/CartContext";

const CartButtonGroup = () => {
  return (
    <section className="items-center font-normal text-gray-500 flex">
      <Link to="/cart" className="flex mr-3">
        {/* <span className="text-lg mr-1">Cart</span> */}
        <span className="relative mr-3">
          <div className="w-5 h-5 rounded-full text-xs text-white bg-red-400 items-center justify-center flex  absolute -right-3 -top-1">
            0
          </div>
          <BsBagFill className="text-2xl" />
        </span>
      </Link>
      <button type="button" to="/" className="flex">
        <span className="text-xl mr-1">Login</span>
        <BsPersonFill className="text-3xl mr-1 " />
      </button>
    </section>
  );
};

export default CartButtonGroup;
