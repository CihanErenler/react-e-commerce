import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import CheckoutCard from "../components/CheckoutCard";
import { useCartContext } from "../context/CartContext";
import Button from "../components/Button";

const CheckoutPage = () => {
  const { cart, processing, handleOrder, ordered } = useCartContext();

  useEffect(() => {
    if (processing) {
      const time = setTimeout(() => {
        handleOrder({ actionType: "order", value: true });
      }, 3000);
      return () => clearTimeout(time);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processing]);

  useEffect(() => {
    if (ordered) {
      handleOrder({ actionType: "clear", value: false });
    }
  }, []);

  if (ordered) {
    return (
      <section className="bg-gray-100 min-h-screen flex flex-col">
        <div className="container">
          <BreadCrumb title="Checkout" />
        </div>
        <div className="bg-white w-[400px] p-6 rounded-lg mx-auto mt-20">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <h1 className="text-center text-xl font-bold my-4 text-gray-500">
            Your order has been received
          </h1>
          <div className="flex justify-center">
            <Button type="link" text="Home page" to="/" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container">
        <BreadCrumb title="Checkout" />
      </div>
      {cart.length > 0 ? (
        <CheckoutCard />
      ) : (
        <div className="bg-white w-[400px] p-6 flex flex-col items-center justify-center rounded-lg mx-auto mt-20">
          <h1 className="mb-6 text-gray-500 text-xl font-bold">
            Your cart is empty
          </h1>
          <Button type="link" text="fill it" to="/products" />
        </div>
      )}
    </section>
  );
};

export default CheckoutPage;
