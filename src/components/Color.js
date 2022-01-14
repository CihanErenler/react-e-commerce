import React from "react";
import { BsCheckLg } from "react-icons/bs";

const Color = ({ color, currentColor, setCurrentColor, name }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={
        color === currentColor
          ? `w-5 h-5 rounded-full flex items-center justify-center text-white opacity-1`
          : `w-5 h-5 rounded-full flex items-center justify-center text-white opacity-50`
      }
      onClick={setCurrentColor}
      data-color={color}
      name={name}
    >
      {color === currentColor ? <BsCheckLg className="text-sm" /> : ""}
    </button>
  );
};

export default Color;
