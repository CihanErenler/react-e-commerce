import React from "react";
import { BsCheckLg } from "react-icons/bs";

const Colors = ({ colors, currentColor, setCurrentColor }) => {
  return (
    <div className="flex gap-2 items-center my-2">
      <div className="text-gray-500 text-light text-md font-bold">Colors: </div>
      <div className="flex gap-2 items-center">
        {colors.map((color, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: color }}
              className={
                color === currentColor
                  ? `w-6 h-6 rounded-full flex items-center justify-center text-white opacity-1`
                  : `w-6 h-6 rounded-full flex items-center justify-center text-white opacity-50`
              }
              onClick={() => setCurrentColor(color)}
            >
              {color === currentColor ? <BsCheckLg className="text-sm" /> : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
