import React from "react";

const ProductButtons = ({ amount, increase, decrease }) => {
  return (
    <div>
      <section className="flex gap-3 mb-8">
        <button
          type="button"
          className="w-12 h-12 rounded-lg bg-gray-200 hover:bg-gray-300 text-xl"
          onClick={decrease}
        >
          -
        </button>
        <div className="w-16 h-12 border border-gray-200 rounded-lg flex items-center justify-center text-2xl">
          {amount}
        </div>
        <button
          type="button"
          className="w-12 h-12 rounded-lg bg-gray-200 hover:bg-gray-300 text-xl"
          onClick={increase}
        >
          +
        </button>
      </section>
    </div>
  );
};

export default ProductButtons;
