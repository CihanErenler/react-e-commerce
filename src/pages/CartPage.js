import React from "react";
import BreadCrumb from "../components/BreadCrumb";

const CartPage = () => {
  return (
    <section className="min-h-screen bg-gray-100 ">
      <div className="container">
        <BreadCrumb title="Cart" />
        <h1>Cart page</h1>
      </div>
    </section>
  );
};

export default CartPage;
