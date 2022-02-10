import React, { useState } from "react";
import master from "../assets/payment/master.png";
import visa from "../assets/payment/visa.png";
import paypal from "../assets/payment/paypal.png";
import PaymentLogo from "./PaymentLogo";
import { formatPrice } from "../common/helpers";
import { useCartContext } from "../context/CartContext";

const types = [
  { id: 1, logo: master },
  { id: 2, logo: visa },
  { id: 3, logo: paypal },
];

const buttonDisable = (data) => {
  const { name, number, month, year, securityCode } = data;

  return (
    name !== "" &&
    number !== "" &&
    month !== "Month" &&
    year !== "Year" &&
    securityCode !== ""
  );
};

const PaymentInput = () => {
  const [active, setActive] = useState(null);

  const {
    totalItems,
    paymentCard,
    updatePayment,
    handleOrder,
    ordered,
    processing,
  } = useCartContext();

  const handleActive = (id) => {
    setActive(id);
  };

  if (ordered) {
    return <section className=""></section>;
  }

  return (
    <section>
      <div className="flex items-center justify-between bg-white rounded-md gap-4 mb-4">
        {types.map((item) => {
          return (
            <PaymentLogo
              key={item.id}
              {...item}
              action={handleActive}
              active={active}
            />
          );
        })}
      </div>
      <div>
        <input
          className="h-[50px] w-full px-4 rounded-md border border-gray-200 mb-4"
          type="text"
          placeholder="Name on the card"
          name="name"
          value={paymentCard.name}
          onChange={updatePayment}
        />
        <input
          className="h-[50px] w-full px-4 rounded-md border border-gray-200 mb-4"
          type="text"
          placeholder="Name number"
          name="number"
          value={paymentCard.number}
          onChange={updatePayment}
          maxLength="19"
        />
        <div className="mb-4">
          <select
            className="h-[50px] border border-gray-200 rounded-md px-4 mr-4"
            name="month"
            value={paymentCard.month}
            onChange={updatePayment}
          >
            <option disabled>Month</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select
            className="h-[50px]  border border-gray-200 rounded-md px-4"
            name="year"
            value={paymentCard.year}
            onChange={updatePayment}
          >
            <option disabled>Year</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
        </div>
        <div className="relative mb-4">
          <input
            className="h-[50px] w-full px-4 rounded-md border border-gray-200"
            type="text"
            placeholder="Security code"
            value={paymentCard.securityCode}
            name="securityCode"
            onChange={updatePayment}
            maxLength="3"
          />
        </div>
      </div>
      <button
        className={
          buttonDisable(paymentCard)
            ? "bg-orange-300 hover:bg-orange-400 h-[50px] px-12 rounded-md text-yellow-900 uppercase font-normal transition duration-300 ease-in-out  text-sm w-full"
            : "bg-gray-300 px-12 rounded-md h-[50px] text-gray-900 uppercase font-normal transition duration-300 ease-in-out  text-sm w-full"
        }
        name="securityCode"
        type="button"
        onClick={() => handleOrder({ actionType: "process", value: true })}
        disabled={!buttonDisable(paymentCard)}
      >
        {processing ? (
          <span className="flex items-center justify-center">
            <span className="animate-spin inline-block h-6 w-6 rounded-full border-4 border-r-yellow-900 border-yellow-50 mr-3"></span>
            Processing...
          </span>
        ) : (
          `Pay ${formatPrice(totalItems)}`
        )}
      </button>
    </section>
  );
};

export default PaymentInput;
