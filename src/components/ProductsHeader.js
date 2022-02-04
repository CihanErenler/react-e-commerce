import React from "react";
import { BsFillGridFill, BsListUl } from "react-icons/bs";
import { useFilterContext } from "../context/FilterContext";

const ProductsHeader = () => {
  const { handleLayout, gridView, allProducts, sort, updateSort } =
    useFilterContext();
  return (
    <section className="md:flex md:items-center">
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
      <p className="md:ml-4">{allProducts.length} products found</p>
      <div className="ml-auto flex items-center">
        <p className="mr-2">Sort by: </p>
        <select name="sort" value={sort} onChange={updateSort}>
          <option value="lowest-price">price (lowest)</option>
          <option value="highest-price">price (highest)</option>
          <option value="name-a-z">name (A-Z)</option>
          <option value="name-z-a">name (Z-A)</option>
        </select>
      </div>
    </section>
  );
};

export default ProductsHeader;
