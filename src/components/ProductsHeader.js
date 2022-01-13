import React from "react";
import { BsFillGridFill, BsListUl } from "react-icons/bs";
import { useFilterContext } from "../context/FilterContext";

const ProductsHeader = () => {
  const { handleLayout, gridView } = useFilterContext();
  return (
    <section>
      <div className="mt-2 mb-1">
        <button
          className={
            gridView
              ? `text-xl mr-2 border-2 border-gray-800 rounded`
              : `text-xl mr-2`
          }
          onClick={() => handleLayout("grid")}
        >
          <BsFillGridFill />
        </button>
        <button
          className={
            !gridView
              ? `text-xl mr-2 border-2 border-gray-800 rounded`
              : `text-xl mr-2`
          }
          onClick={() => handleLayout("list")}
        >
          <BsListUl />
        </button>
      </div>
    </section>
  );
};

export default ProductsHeader;
