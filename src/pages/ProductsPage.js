import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Filter from "../components/Filter";
import ListLayout from "../components/ListLayout";
import GridLayout from "../components/GridLayout";
import ProductsHeader from "../components/ProductsHeader";
import { useFilterContext } from "../context/FilterContext";

const ProductsPage = () => {
  const { allProducts, gridView } = useFilterContext();

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container">
        <BreadCrumb title="Products" />
      </div>
      <div className="bg-white flex-1">
        <div className="container">
          <div className="grid grid-cols-5">
            <Filter />
            <div className="col-span-4">
              <ProductsHeader />
              {gridView ? (
                <GridLayout products={allProducts} />
              ) : (
                <ListLayout products={allProducts} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
