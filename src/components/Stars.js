import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Starts = ({ stars }) => {
  const temp = Array.from({ length: 5 }, (_, index) => {
    const half = index + 0.5;
    const tempIndex = index + 1;

    return stars >= tempIndex ? (
      <BsStarFill key={index} className="text-md" />
    ) : stars >= half ? (
      <BsStarHalf key={index} className="text-md" />
    ) : (
      <BsStar key={index} className="text-md" />
    );
  });

  return (
    <section>
      <div className="flex gap-1 text-yellow-500 my-1">{temp}</div>
    </section>
  );
};

export default Starts;
