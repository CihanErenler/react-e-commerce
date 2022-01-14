import React from "react";
import Color from "./Color";

const Colors = ({ colors, currentColor, setCurrentColor }) => {
  return (
    <div className="flex gap-2 items-center my-2">
      <div className="text-gray-500 text-light text-md font-bold">Colors: </div>
      <div className="flex gap-2 items-center">
        {colors.map((color, index) => {
          return (
            <Color
              key={index}
              index={index}
              color={color}
              currentColor={currentColor}
              setCurrentColor={() => setCurrentColor(color)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
