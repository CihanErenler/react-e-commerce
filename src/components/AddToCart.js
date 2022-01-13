import React, { useState } from "react";
import Colors from "./Colors";
import ProductButtons from "./ProductButtons";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((currentAmount) => {
      const temp = currentAmount + 1;
      if (temp > stock) return currentAmount;
      return temp;
    });
  };

  const decrease = () => {
    setAmount((currentAmount) => {
      const temp = currentAmount - 1;
      if (temp < 1) return 1;
      return temp;
    });
  };

  return (
    <section>
      <Colors
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <ProductButtons increase={increase} decrease={decrease} amount={amount} />
    </section>
  );
};

export default AddToCart;
