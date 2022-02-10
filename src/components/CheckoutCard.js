import React from "react";
import PaymentInput from "./PaymentInput";

const CheckoutCard = () => {
  return (
    <div className="bg-gray-100 flex-1 pt-12 sm:w-[500px]  md:w-[700px] mx-auto">
      <div className="w-full border border-gray-100 p-8 rounded-md bg-white">
        <h2 className="text-2xl mb-8 text-gray-500  text-center">
          Card Details
        </h2>
        <PaymentInput />
      </div>
    </div>
  );
};

export default CheckoutCard;
