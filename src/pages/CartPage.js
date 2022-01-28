import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { useCartContext } from "../context/CartContext";
import Button from "../components/Button";
import CartContent from "../components/CartContent";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <section className="min-h-screen bg-gray-100 ">
        <div className="container">
          <BreadCrumb title="Cart" />
          <div>
            <h1 className="text-2xl text-gray-500 text-center mb-8 mt-6 font-bold">
              Your cart is empty
            </h1>
            <div className="flex justify-center">
              <Button type="link" to="/products" text="Buy something" />
            </div>
          </div>
          <div></div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col">
      <div className="container">
        <BreadCrumb title="Cart" />
      </div>
      <div className="bg-white flex-1">
        <div className="container">
          <CartContent />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
