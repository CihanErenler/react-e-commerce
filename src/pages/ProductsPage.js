import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Filter from "../components/Filter";
import ListLayout from "../components/ListLayout";
import GridLayout from "../components/GridLayout";
import ProductsHeader from "../components/ProductsHeader";
import { useFilterContext } from "../context/FilterContext";

const ProductsPage = () => {
  const { gridView, filteredProducts } = useFilterContext();

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container">
        <BreadCrumb title="Products" />
      </div>
      <div className="bg-white flex-1 pt-4">
        <div className="container">
          <div className="md:grid md:grid-cols-5">
            <div className="md:col-span-1 md:sticky md:top-0">
              <Filter />
            </div>

            <div className="md:col-span-4">
              <ProductsHeader />
              {filteredProducts.length > 0 ? (
                <div>
                  {gridView ? (
                    <GridLayout products={filteredProducts} />
                  ) : (
                    <ListLayout products={filteredProducts} />
                  )}
                </div>
              ) : (
                <div className="w-full h-full flex justify-center pt-10">
                  <h2 className="text-2xl text-slate-500 font-bold">
                    No item to show
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
