import React, { useState } from "react";
import Colors from "./Colors";
import ProductButtons from "./ProductButtons";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
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
      <Link
        className="btn-dark w-64"
        to="/cart"
        onClick={() => addToCart(id, currentColor, amount, product)}
      >
        Add to cart
      </Link>
    </section>
  );
};

export default AddToCart;
