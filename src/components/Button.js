import React from "react";

const Button = ({ text, action }) => {
  return (
    <button
      className="bg-orange-300 hover:bg-orange-400 py-3 px-12 rounded-md text-yellow-900 uppercase font-light transtion duration-300 ease-in-out"
      onClick={() => action}
    >
      {text}
    </button>
  );
};

export default Button;
