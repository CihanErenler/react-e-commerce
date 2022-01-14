import React from "react";
import { useFilterContext } from "../context/FilterContext";
import { FaTimes } from "react-icons/fa";
import { getUniqueValues } from "../common/helpers";
import Label from "./Label";
import Color from "./Color";
import { formatPrice } from "../common/helpers";

const Filter = () => {
  const {
    allProducts,
    filters: {
      value,
      company,
      category,
      colors,
      minPrice,
      maxPrice,
      price,
      shipping,
    },
    updateFilter,
    clearFilter,
    clearFilterInput,
  } = useFilterContext();

  const uniqueCompanies = getUniqueValues(allProducts, "company");
  const uniqueCategories = getUniqueValues(allProducts, "category");
  const uniqueColors = getUniqueValues(allProducts, "colors");

  console.log(uniqueColors);

  return (
    <section>
      <div className="col-span-1 sticky top-0">
        <label className="block mb-2 text-gray-600 font-bold">Filters</label>
        <form onSubmit={(e) => e.preventDefault()} className="w-full pt-2 pr-2">
          <div className="relative max-w-[200px] mb-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-100 rounded-md px-2 h-7 text-sm placeholder-text-md outline-orange-300 block mr-8 pr-8"
              value={value}
              onChange={updateFilter}
              name="value"
            />
            {value && (
              <FaTimes
                className="text-gray-400 absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
                onClick={clearFilterInput}
              />
            )}
          </div>
          <div>
            <Label>Categories</Label>
            <div>
              {uniqueCategories.map((c, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    className={
                      c === category.toLowerCase()
                        ? `text-sm capitalize cursor-pointer font-light hover:text-orange-300 leading-7 text-orange-500 block `
                        : `text-sm capitalize cursor-pointer font-light hover:text-orange-300 leading-7 text-gray-500 block`
                    }
                    onClick={updateFilter}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <Label>Companies</Label>
            <div className="max-w-[200px] mb-3">
              <select
                className="bg-gray-100 p-1 rounded-md outline-orange-300 capitalize text-sm w-full"
                name="company"
                value={company}
                onChange={updateFilter}
              >
                {uniqueCompanies.map((c, index) => {
                  return (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="mb-2">
            <Label>Colors</Label>
            <div className="flex gap-1 capitalize items-center">
              {uniqueColors.map((c, index) => {
                return (
                  <div key={index}>
                    {c === "all" ? (
                      <button
                        className="text-sm font-light text-gray-500"
                        type="button"
                        onClick={updateFilter}
                        data-color="all"
                        name="colors"
                      >
                        All
                      </button>
                    ) : (
                      <Color
                        color={c}
                        currentColor={colors}
                        setCurrentColor={updateFilter}
                        data={c}
                        name="colors"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <Label>Price</Label>
            <p>{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              max={maxPrice}
              min={minPrice}
              value={price}
              onChange={updateFilter}
            />
          </div>
          <div>
            <input
              id="freeShipping"
              className="mr-2"
              type="checkbox"
              name="shipping"
              onChange={updateFilter}
              checked={shipping}
            />
            <label className="font-light text-sm" htmlFor="freeShipping">
              Free Shipping
            </label>
          </div>
        </form>
        <button
          className="h-7 bg-slate-800 text-white rounded-md px-2 my-2 hover:bg-slate-700"
          onClick={clearFilter}
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
};

export default Filter;
