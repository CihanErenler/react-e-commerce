import React from "react";
import { useProductContext } from "../context/ProductsContext";
import Spinner from "./Spinner";
import Product from "./Product";
import Button from "./Button";

const Trending = () => {
  const { productsLoading, featuredProducts, productsError } =
    useProductContext();

  return (
    <section className="min-h-96 bg-gray-50 pb-14">
      <h1 className="title">Featured Products</h1>
      <div className="container">
        {!productsError && (
          <div>
            {productsLoading ? (
              <Spinner />
            ) : (
              <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredProducts.map((product) => {
                  return <Product key={product.id} {...product} />;
                })}
              </div>
            )}
          </div>
        )}
        <div className="flex justify-center">
          <Button text="All Products" type="link" to="/products" />
        </div>
      </div>
    </section>
  );
};

export default Trending;
