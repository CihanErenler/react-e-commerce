import React from "react";

const PaymentLogo = ({ logo, active, action, id }) => {
  return (
    <div
      className={
        id === active
          ? "h-[100px] flex-1 flex items-center border border-blue-200 rounded-lg cursor-pointer p-4 bg-sky-100"
          : "h-[100px] flex-1 flex items-center border border-gray-200 rounded-lg cursor-pointer p-4"
      }
      onClick={action.bind(this, id)}
    >
      <img className="w-full" src={logo} alt="visa-logo" />
    </div>
  );
};

export default PaymentLogo;
