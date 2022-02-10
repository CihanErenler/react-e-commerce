import React from "react";
import { Link } from "react-router-dom";
import { BsBag, BsPerson } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useSidebarContext } from "../context/SidebarContext";
import { useUSerContext } from "../context/UserContext";
import { useCartContext } from "../context/CartContext";

const CartButtonGroup = () => {
  const { closeSidebar } = useSidebarContext();
  const { totalAmount } = useCartContext();

  const { loginWithRedirect, myUser, logout } = useUSerContext();

  return (
    <section className="items-center font-normal text-gray-500 flex">
      <Link to="/cart" className="flex mr-3" onClick={closeSidebar}>
        {/* <span className="text-lg mr-1">Cart</span> */}
        <span className="relative mr-4">
          <div className="w-5 h-5 rounded-full text-xs text-white bg-red-400 items-center justify-center flex  absolute -left-2 -bottom-2">
            {totalAmount}
          </div>
          <BsBag className="text-2xl" />
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          to="/"
          className="flex items-center"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <RiLogoutBoxRLine className="text-3xl mr-1 " />
          <span className="text-xl">Logout</span>
        </button>
      ) : (
        <button
          type="button"
          to="/"
          className="flex items-center"
          onClick={loginWithRedirect}
        >
          <BsPerson className="text-3xl mr-1 " />
          <span className="text-xl">Login</span>
        </button>
      )}
    </section>
  );
};

export default CartButtonGroup;
